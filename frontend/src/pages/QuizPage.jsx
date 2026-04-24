import React, { useState, useEffect, useCallback } from 'react';
import { getQuestionsByCategory, getAllQuestions, shuffleArray, CATEGORIES } from '../data/questions';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export default function QuizPage({ categoryId, onFinish, onBack }) {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [explanation, setExplanation] = useState('');
  const [loadingExplanation, setLoadingExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([]);
  const [done, setDone] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [timerActive, setTimerActive] = useState(true);

  useEffect(() => {
    let qs;
    if (categoryId === 'all') {
      qs = shuffleArray(getAllQuestions()).slice(0, 50);
    } else if (Array.isArray(categoryId)) {
      const all = categoryId.flatMap(c => getQuestionsByCategory(c));
      qs = shuffleArray(all).slice(0, 50);
    } else {
      qs = shuffleArray(getQuestionsByCategory(categoryId));
    }
    setQuestions(qs);
  }, [categoryId]);

  useEffect(() => {
    if (!timerActive || done) return;
    const interval = setInterval(() => setElapsed(e => e + 1), 1000);
    return () => clearInterval(interval);
  }, [timerActive, done]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const q = questions[current];

  const fetchExplanation = useCallback(async (question, choices, answer, studentAnswer, category) => {
    setLoadingExplanation(true);
    setExplanation('');
    try {
      const res = await fetch(`${API_BASE}/explain`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question,
          choices,
          correct_answer: answer,
          student_answer: studentAnswer,
          category,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setExplanation(data.explanation);
      } else {
        setExplanation('Could not load AI explanation. Check that the backend is running.');
      }
    } catch {
      setExplanation('AI explanation unavailable. Make sure the FastAPI backend is running on port 8000.');
    }
    setLoadingExplanation(false);
  }, []);

  const handleSubmit = () => {
    if (selected === null) return;
    const isCorrect = selected === q.answer;
    if (isCorrect) setScore(s => s + 1);
    setResults(prev => [...prev, { question: q, selected, isCorrect }]);
    setSubmitted(true);
    fetchExplanation(q.question, q.choices, q.answer, selected, q.categoryName);
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setDone(true);
      setTimerActive(false);
      onFinish(score + (selected === q?.answer ? 1 : 0), questions.length);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setSubmitted(false);
      setExplanation('');
    }
  };

  if (questions.length === 0) return (
    <div className="quiz-loading">
      <div className="spinner" />
      <p>Loading questions...</p>
    </div>
  );

  if (done) {
    const finalScore = results.filter(r => r.isCorrect).length;
    const pct = Math.round((finalScore / questions.length) * 100);
    const passed = pct >= 80;
    return (
      <div className="quiz-results">
        <div className="results-card">
          <div className="results-icon">{passed ? '🏆' : '📚'}</div>
          <h2>{passed ? 'Excellent Work!' : 'Keep Practicing!'}</h2>
          <div className="results-score">
            <span className="big-score">{pct}%</span>
            <span className="score-detail">{finalScore} / {questions.length} correct</span>
          </div>
          <div className="results-meta">
            <span>⏱ Time: {formatTime(elapsed)}</span>
            <span>{passed ? '✅ Passing Score' : '❌ Below Passing (80%)'}</span>
          </div>
          <div className="results-breakdown">
            {results.map((r, i) => (
              <div key={i} className={`result-row ${r.isCorrect ? 'correct' : 'wrong'}`}>
                <span className="result-num">{i + 1}.</span>
                <span className="result-q">{r.question.question.substring(0, 60)}...</span>
                <span className="result-mark">{r.isCorrect ? '✓' : '✗'}</span>
              </div>
            ))}
          </div>
          <div className="results-actions">
            <button className="btn btn-primary" onClick={onBack}>← Back to Dashboard</button>
            <button className="btn btn-secondary" onClick={() => window.location.reload()}>🔄 Retake</button>
          </div>
        </div>
      </div>
    );
  }

  const progressPct = ((current) / questions.length) * 100;
  const choiceLetters = ['a', 'b', 'c', 'd'];

  return (
    <div className="quiz-page">
      <div className="quiz-top-bar">
        <button className="btn-back" onClick={onBack}>← Exit</button>
        <div className="quiz-info">
          <span className="quiz-cat">{q.categoryName}</span>
          <span className="quiz-counter">{current + 1} / {questions.length}</span>
          <span className="quiz-timer">{formatTime(elapsed)}</span>
        </div>
        <div className="quiz-score-display">
          <span className="score-badge">{score} ✓</span>
        </div>
      </div>

      <div className="quiz-progress">
        <div className="quiz-progress-fill" style={{ width: `${progressPct}%` }} />
      </div>

      <div className="quiz-body">
        <div className="question-card">
          <div className="question-label">Question {current + 1}</div>
          <div
            className="question-text"
            dangerouslySetInnerHTML={{ __html: q.question.replace(/\n/g, '<br/>') }}
          />

          <div className="choices-list">
            {q.choices.map((choice, idx) => {
              const letter = choiceLetters[idx];
              let cls = 'choice-btn';
              if (submitted) {
                if (letter === q.answer) cls += ' correct';
                else if (letter === selected) cls += ' wrong';
              } else if (selected === letter) {
                cls += ' selected';
              }
              return (
                <button
                  key={idx}
                  className={cls}
                  onClick={() => !submitted && setSelected(letter)}
                  disabled={submitted}
                >
                  <span className="choice-letter">{letter.toUpperCase()}</span>
                  <span className="choice-text">{choice.slice(3)}</span>
                </button>
              );
            })}
          </div>

          {!submitted ? (
            <button
              className="btn btn-submit"
              onClick={handleSubmit}
              disabled={selected === null}
            >
              Submit Answer
            </button>
          ) : (
            <div className="answer-feedback">
              <div className={`feedback-header ${selected === q.answer ? 'correct' : 'wrong'}`}>
                {selected === q.answer ? '✅ Correct!' : `❌ Wrong! Correct answer: ${q.answer.toUpperCase()}`}
              </div>

              <div className="ai-explanation">
                <div className="ai-label">🤖 AI Explanation</div>
                {loadingExplanation ? (
                  <div className="explanation-loading">
                    <div className="spinner sm" />
                    <span>Generating explanation...</span>
                  </div>
                ) : (
                  <p className="explanation-text">{explanation}</p>
                )}
              </div>

              <button className="btn btn-next" onClick={handleNext}>
                {current + 1 >= questions.length ? '📊 See Results' : 'Next Question →'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
