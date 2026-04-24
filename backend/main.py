from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import google.generativeai as genai
from dotenv import load_dotenv

# 1. Load the .env file
load_dotenv()

# 2. Get and clean the key
raw_key = os.getenv("GEMINI_API_KEY", "")
CLEAN_KEY = raw_key.strip().replace('"', '').replace("'", "")

if not CLEAN_KEY:
    print("❌ CRITICAL ERROR: GEMINI_API_KEY is not found in your .env file!")
else:
    print(f"✅ Key found (Starts with: {CLEAN_KEY[:4]}...)")
    # This is the ONLY configuration line you need
    genai.configure(api_key=CLEAN_KEY)

app = FastAPI(title="CSC Reviewer AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ExplainRequest(BaseModel):
    question: str
    choices: list[str]
    correct_answer: str
    student_answer: str
    category: str

class ExplainResponse(BaseModel):
    explanation: str
    is_correct: bool

@app.post("/explain", response_model=ExplainResponse)
async def explain_answer(req: ExplainRequest):
    # Standardize input to lowercase for mapping
    answer_letters = {"a": 0, "b": 1, "c": 2, "d": 3}
    correct_idx = answer_letters.get(req.correct_answer.lower(), 0)
    student_idx = answer_letters.get(req.student_answer.lower(), 0)
    
    correct_text = req.choices[correct_idx] if correct_idx < len(req.choices) else req.correct_answer
    student_text = req.choices[student_idx] if student_idx < len(req.choices) else req.student_answer
    is_correct = req.correct_answer.lower() == req.student_answer.lower()

    prompt = f"""You are a helpful Civil Service Exam reviewer tutor in the Philippines.

Category: {req.category}
Question: {req.question}
Choices: {chr(10).join(req.choices)}
Correct Answer: {req.correct_answer}) {correct_text}
Student's Answer: {req.student_answer}) {student_text}
Result: {"CORRECT ✓" if is_correct else "INCORRECT ✗"}

Provide a clear, concise explanation (2-4 sentences) of WHY the correct answer is right. If the student was wrong, briefly explain why their choice is incorrect too. Be encouraging and educational. Use plain text, no markdown."""

    try:
        model = genai.GenerativeModel('gemini-2.5-flash')
        response = model.generate_content(prompt)
        
        if not response.text:
            raise HTTPException(status_code=500, detail="AI returned empty response")
            
        return ExplainResponse(explanation=response.text, is_correct=is_correct)

    except Exception as e:
        print(f"Error calling Gemini: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health():
    return {"status": "ok"}