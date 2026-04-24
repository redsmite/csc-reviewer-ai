export const CATEGORIES = {
  "1": "General Information",
  "2": "Numerical Ability",
  "3": "Analytical Ability",
  "4": "Verbal Ability",
  "5": "Clerical Ability",
};

export const CATEGORY_DESCRIPTIONS = {
  "1": "Covers Philippine government structure, constitutional law, current events, geography, science, and general knowledge about the Philippines and the world.",
  "2": "Tests arithmetic operations, number series, percentages, fractions, word problems, algebra, and mathematical reasoning.",
  "3": "Evaluates logical reasoning, analogies, deductive/inductive reasoning, arrangement problems, and critical thinking.",
  "4": "Assesses English grammar, vocabulary, sentence construction, reading comprehension, and Filipino language skills.",
  "5": "Tests office procedures, filing systems, business correspondence, accounting basics, and clerical operations.",
};

export const COURSE_CONTENT = {
  "1": {
    title: "General Information",
    icon: "🇵🇭",
    sections: [
      {
        title: "The 1987 Philippine Constitution",
        content: `The 1987 Philippine Constitution is the fundamental law of the Philippines. Here are the key provisions you must know:

**The Three Branches of Government:**
• Legislative Branch — Congress (Senate + House of Representatives). Creates laws.
• Executive Branch — Led by the President. Implements laws.
• Judicial Branch — Led by the Supreme Court. Interprets laws.

**Key Constitutional Numbers:**
• Senate: 24 senators, elected at-large, 6-year terms
• House of Representatives: Members serve 3-year terms, max 3 consecutive terms
• Supreme Court: 1 Chief Justice + 14 Associate Justices
• President & Vice President: 6-year term, no reelection
• Voting age: 18 years old (Suffrage)

**Bill of Rights (Article III) Essentials:**
• No person shall be deprived of life, liberty, or property without due process of law
• No person shall be compelled to be a witness against himself (right against self-incrimination)
• No person shall be detained solely by reason of political beliefs
• Right to bail exists unless charged with offenses punishable by reclusion perpetua

**Citizenship:**
• Natural-born citizens: those who are citizens at birth without performing any act
• Citizens by election: born before Jan 17, 1973 of Filipino mothers who elect citizenship upon majority
• Naturalized citizens: foreigners who comply with naturalization law

**The Three Inherent Powers of the State:**
1. Police Power — regulate liberty/property for public welfare
2. Power of Eminent Domain — take private property for public use with just compensation
3. Power of Taxation — impose charges to raise revenue for public services

**Impeachable Officers:** President, VP, Supreme Court members, Constitutional Commission members, Ombudsman
• Grounds: culpable violation of the Constitution, treason, bribery, graft and corruption, other high crimes, betrayal of public trust
• House of Representatives initiates impeachment
• Senate tries and decides impeachment cases`
      },
      {
        title: "Government Agencies & Laws",
        content: `**Constitutional Commissions:**
• Commission on Elections (COMELEC)
• Civil Service Commission (CSC)
• Commission on Audit (COA)
Note: Commission on Human Rights is NOT a Constitutional Commission

**Key Philippine Laws:**
• R.A. 6713 — Code of Conduct and Ethical Standards for Public Officials and Employees
• Generics Act — promotes use of generic medicines to make healthcare affordable
• Cybercrime Prevention Act — addresses online crimes in the Philippines
• Responsible Parenthood and Reproductive Health Law (RH Law)

**R.A. 6713 Key Points:**
Public officials must: act promptly on letters/inquiries, process documents expeditiously, submit performance reports, NOT accept gifts that may influence their duties.

**International Organizations:**
• WHO (World Health Organization) — UN specialized agency for international public health
• APEC — Asia-Pacific Economic Cooperation (free trade across Asia-Pacific)
• ASEAN — 10 Southeast Asian nations (Philippines, Thailand, Singapore, etc. — NOT Hong Kong)
• United Nations — international organization for peace and security

**Environmental Facts:**
• Biodegradable waste: breaks down naturally (paper, food, wood)
• Non-biodegradable: does NOT break down (plastics, metals, styrofoam)
• Greenhouse Effect: thermal radiation absorbed by atmospheric gases, re-radiated in all directions
• Ozone depletion contributes to global warming

**Philippine Facts:**
• 7,107 islands in the Philippine archipelago
• About 2,000 islands are inhabited
• Mountain Province is the only Philippine province with an English name
• The Philippines is a democratic AND republican state
• Official languages: Filipino and English
• Sovereignty resides in the people (Article II, Section 1)`
      },
      {
        title: "Suffrage, Elections & Local Government",
        content: `**Suffrage:**
Definition: The right and obligation of citizens 18+ to vote without literacy, property, or other substantive requirement.

Disqualified voters:
• Those who have been a resident for less than 6 months before election
• Convicted of certain crimes
• Insane or mentally incapacitated

**Referendum vs Plebiscite:**
• Referendum — power of electorate to approve/reject legislation
• Plebiscite — electoral process to approve/reject constitutional changes or amendments
• Initiative — direct proposal of laws by the people through petition
• A Petition is the written instrument containing the proposition and required signatures

**Local Government:**
• Elective officials serve 3-year terms
• Max of 3 consecutive terms for local officials
• President exercises general supervision over all local governments
• Principle: Local Autonomy — provinces, cities, municipalities and barangays enjoy local autonomy
• Decentralization: transfer of powers from national to local governments

**Taxation Basics:**
• Income tax: paid by individuals who derive compensation income
• Deadline for filing income tax returns: April 15
• Estate tax: imposed on the right to transmit property at death
• Donor's tax: tax on gifts
• Value Added Tax (VAT): 12% of gross sales
• Taxes are enforced contributions (NOT voluntary)`
      }
    ]
  },
  "2": {
    title: "Numerical Ability",
    icon: "🔢",
    sections: [
      {
        title: "Arithmetic Fundamentals",
        content: `**PEMDAS/BODMAS Rule (Order of Operations):**
Parentheses → Exponents → Multiplication/Division → Addition/Subtraction
Example: 10÷2×5−(12÷3×4)+1 = 5×5−16+1 = 25−16+1 = 10

**Fractions — Key Operations:**
• Adding/Subtracting: Find LCD first, then operate on numerators
• Multiplying: Multiply numerators, multiply denominators
• Dividing: Multiply by the reciprocal (flip the second fraction)
• LCD of 2/5 and 4/3 = 15 (LCM of 5 and 3)

**Percentages — The Three Core Problems:**
1. What is X% of Y? → Multiply: Y × (X/100)
2. X is what % of Y? → Divide: (X/Y) × 100
3. X is Y% of what? → Divide: X ÷ (Y/100)

Example: 33⅓% = 1/3; 12½% = 1/8; 25% = 1/4; 50% = 1/2; 75% = 3/4

**Ratio and Proportion:**
• If ratio is A:B:C and total is T, then A's share = T × A/(A+B+C)
• Example: Luzon:Visayas:Mindanao = 4:3:2; if Luzon=120, total = 120×9/4 = 270

**Percentage Change:**
• Increase: (New−Old)/Old × 100
• Decrease: (Old−New)/Old × 100
• 60 to 80 = +33.33% increase
• 80 to 60 = −25% decrease`
      },
      {
        title: "Number Series & Patterns",
        content: `**Identifying Number Series Patterns:**

Common pattern types:
1. **Arithmetic (add/subtract constant):** 3, 7, 11, 15 (+4 each time)
2. **Geometric (multiply/divide constant):** 2, 6, 18, 54 (×3 each time)
3. **Squares/Cubes:** 1, 4, 9, 16, 25 (perfect squares); 1, 8, 27, 64 (perfect cubes)
4. **Alternating patterns:** Two separate interleaved sequences
5. **Difference series:** The differences form their own pattern

**Strategy for solving:**
Step 1: Find the difference between consecutive terms
Step 2: If constant → arithmetic; if multiplied → geometric
Step 3: If differences aren't constant, find the differences of differences
Step 4: Look for two interleaved sequences in complex series

**Mixed/Special Series Examples:**
• 0.5, 0.55, 0.65, 0.8, ___ (differences: 0.05, 0.10, 0.15 → next diff = 0.20 → answer: 1.0)
• 1, 3, 6, 10, 15, 21 → triangular numbers (+2, +3, +4, +5...)
• 3, 7, 15, 31, 63 → each term = 2×previous + 1

**Fraction Series:**
• Convert all to same denominator to spot patterns
• 1/6, 1/3, 1/2, 2/3 → each increases by 1/6 → next: 5/6`
      },
      {
        title: "Word Problems & Algebra",
        content: `**Age Problems:**
• Define variables: let current age = x
• Cassy's father was 38 when she was born; mother was 36 when her brother (4 years younger) was born
  → Father's age when born = 38; Mother's age at Cassy's birth = 36−4 = 32 → Difference = 38−32 = 6

**Distance-Rate-Time:**
• Formula: Distance = Rate × Time
• Always convert units to be consistent (minutes to seconds, etc.)
• John walks 2m/s for 3 min = 2×180 = 360m, then runs 4m/s for 1 min = 4×60 = 240m → Total = 600m

**Average (Mean) Problems:**
• Mean = Sum / Count
• To find missing value: (Sum of known values + x) / total count = desired mean
• Solve for x algebraically

**Mixture Problems:**
• Setup: amount₁ × concentration₁ + amount₂ × concentration₂ = total × final concentration
• 400ml of 20% alcohol + x ml of pure alcohol (100%) = (400+x) × 30%
  → 80 + x = 120 + 0.3x → 0.7x = 40 → x ≈ 57

**Key Algebraic Shortcuts:**
• Sum of consecutive numbers: middle × count
• Sum of first n even numbers: n(n+1)
• Sum of odd numbers between A and B: count up odd numbers, use average × count
• If product = 0, at least one factor = 0`
      }
    ]
  },
  "3": {
    title: "Analytical Ability",
    icon: "🧩",
    sections: [
      {
        title: "Verbal Analogies",
        content: `**How to Solve Analogies:**
The format is: A : B :: C : D (A is to B as C is to D)

Step 1: Identify the relationship between A and B
Step 2: Apply the SAME relationship to find D

**Common Relationship Types:**
• **Part to Whole:** Stanza : Poem :: Act : Opera (a stanza is part of a poem; an act is part of an opera)
• **Tool to User:** Canvas : Painter :: Marble : Sculptor
• **Cause to Effect:** Evaporate : Vapor :: Petrify : Stone
• **Antonyms:** Coward : Brave :: Philanthropist : Selfish
• **Category to Member:** Bouquet : Flowers :: Flock : Sheep
• **Function:** Antenna : Signal :: Net : Fish (net catches fish)
• **Storage:** Archive : Manuscript :: Arsenal : Weapon
• **Synonym:** Glimmer : Flicker :: Murmur : Whisper
• **Science to Pseudoscience:** Astronomy : Astrology :: Chemistry : Alchemy
• **Measurement:** Census : Population :: Inventory : Merchandise

**Practice Rule:** Always make a sentence: "A is used to/for/by/part of B, therefore C is ___."
Iron is a type of metal; granite is a type of rock.`
      },
      {
        title: "Logical Reasoning & Deduction",
        content: `**Syllogism Rules:**
A syllogism has: Major premise + Minor premise → Conclusion

Key rules:
• If ALL A are B, and X is A → X is B ✓
• If ALL A are B, and X is B → X may or may not be A ✗ (not necessarily)
• If NO A are B, and X is A → X is not B ✓
• If SOME A are B → we cannot conclude all A are B

**Common Traps:**
• "All athletes are fit. Maria is fit. Therefore Maria is an athlete." — WRONG! (Maria could be fit without being an athlete)
• "All detectives are scientific. Francis is a scientific person." — Cannot conclude Francis is a detective

**Conditional Logic:**
• "If P then Q" = P → Q
• If P is true, Q must be true
• If Q is false, P must be false (contrapositive)
• If Q is true, P may or may not be true
• Chain: If A→B and B→C, then A→C

**"Necessary vs Sufficient" Conditions:**
• Necessary: must be present but doesn't guarantee the result
• Sufficient: guarantees the result but may not be the only way
• "Good term paper is NECESSARY for passing" → passing guarantees good paper; good paper doesn't guarantee passing

**Reading Comprehension for Logic Questions:**
• Identify what is STATED vs what is IMPLIED
• Avoid conclusions that go beyond the given information
• Watch for absolute words: ALL, NONE, ALWAYS, NEVER — these make statements easier to disprove`
      },
      {
        title: "Arrangement & Sequencing Problems",
        content: `**Ordering/Ranking Problems:**
Strategy: Create a number line or ranking chart

Example: V is taller than X but shorter than Y and Z. W is shorter than Y but taller than Z.
→ Build chain: X < V < Z < W < Y → Order from shortest: X, V, Z, W, Y

**Steps to solve:**
1. List all entities
2. Create inequalities from each clue
3. Chain them together
4. Re-read to verify

**Seating/Position Problems:**
• Draw a physical line or circle
• Place elements with certainty first
• Use process of elimination for the rest

**Letter/Alphabet Problems:**
• Number the alphabet: A=1, B=2, C=3... Z=26
• "Even numbered letters crossed out" = B, D, F, H... remain: A, C, E, G...
• Count carefully from the beginning

**Schedule/Rotation Problems:**
• Map out each day/slot
• Apply constraints one at a time
• Check for violations

**Counting/Combination Problems:**
• Handshakes: n people, each shakes hands once = n(n-1)/2
• 10 people = 10×9/2 = 45 handshakes
• Useful formula: nCr = n! / (r! × (n-r)!)`
      }
    ]
  },
  "4": {
    title: "Verbal Ability",
    icon: "📝",
    sections: [
      {
        title: "Grammar & Correct Usage",
        content: `**Subject-Verb Agreement:**
• Singular subject → singular verb (He is, She goes)
• Plural subject → plural verb (They are, We go)
• Collective nouns (team, committee) → singular verb
• "Either/Neither...or/nor": verb agrees with the CLOSER subject
• Compound subjects with "and" → plural verb
• Subjects separated by "with," "along with," "as well as" → verb agrees with FIRST subject

**Tenses — Key Rules:**
• Simple Past: for completed actions (She launched the company in 1977)
• Present Perfect: for actions with present relevance (Hope has sprung anew)
• Past Perfect: for earlier of two past actions (had + past participle)
• Future: will/shall + base verb
• Keep tenses consistent within a sentence/paragraph

**Modal Verbs:**
• must — strong obligation/certainty
• should — recommendation/mild obligation
• can — ability/possibility
• may — permission/possibility
• would — conditional/polite request

**Common Prepositions:**
• Keep up WITH the trend (not "for" or "to")
• Popular WITH tourists (not "to")
• Associated WITH (not "to")
• Concerned ABOUT/FOR (not "with")
• Click ON a link (not "in")

**Tag Questions:**
• Positive statement → negative tag: "You are late, aren't you?"
• Negative statement → positive tag: "She hasn't returned it, has she?"
• "This is..." → "isn't it?"
• "They were..." → "weren't they?"
• Match the auxiliary verb used in the statement`
      },
      {
        title: "Vocabulary — Key Words",
        content: `**High-frequency CSC vocabulary words:**

| Word | Meaning |
|------|---------|
| Elan | Enthusiasm and style |
| Milieu | Environment/surroundings |
| Blithe | Cheerful indifference |
| Visage | Face |
| Hamlet | Small settlement |
| Facade | Front of a building |
| Scion | Descendant |
| Hue | Color or shade |
| Herculean | Requiring great effort; arduous |
| Frolic | Play cheerfully |
| Elicit | Evoke/draw out |
| Impeccable | Flawless |
| Palatial | Spacious and grand |
| Flamboyant | Exuberant/showy |
| Profane | Irreverent |
| Flaunt | Display ostentatiously |
| Paramount | Supreme/most important |
| Immaculate | Spotless |
| Placid | Serene/calm |
| Saunter | Walk in a slow, relaxed manner |
| Splurge | Spend extravagantly |
| Perilous | Dangerous |
| Penchant | Fondness/strong inclination |
| Bask | Wallow in/enjoy |
| Recipient | Person who receives |
| Proxy | Representative/substitute |
| Unparalleled | Exceptional; without equal |
| Vanquish | Defeat thoroughly |
| Unscathed | Without injury or harm |
| Solicitude | Care or concern |
| Explicit | Clear and detailed |
| Debilitating | Tending to weaken |
| Amass | Gather or accumulate |
| Irascible | Irritable |
| Fortnightly | Every two weeks |
| Debris | Scattered fragments |
| Drab | Drearily dull |
| Enthrall | Charm/captivate |

**Word Formation:**
• dis- (disagree, disapprove) = opposite/reversal
• un- (unhappy) = not
• -ful (hopeful, helpful) = having the quality of
• -ness (kindness) = state of being
• -ly (quickly) = adverb form`
      },
      {
        title: "Sentence Ordering & Paragraph Organization",
        content: `**How to Order Sentences into a Coherent Paragraph:**

**Step 1: Find the TOPIC SENTENCE**
• Usually the most general statement
• Introduces the main idea
• Does NOT refer to "these," "this," or "such" (those signal it's not first)

**Step 2: Find SUPPORTING SENTENCES**
• They elaborate, explain, or give examples of the topic sentence
• Transition words signal position:
  - First/Initially: beginning
  - Furthermore/Moreover/Also: continuation
  - However/But/On the other hand: contrast
  - Therefore/Thus/In conclusion: conclusion

**Step 3: Find the CONCLUDING SENTENCE**
• Summarizes or draws a final conclusion
• Often starts with "Therefore," "In conclusion," "Thus," "Hence"

**Key Transition Words:**
• Addition: furthermore, moreover, also, in addition
• Contrast: however, but, on the other hand, nevertheless
• Cause-Effect: therefore, thus, as a result, consequently
• Example: for example, for instance, to illustrate
• Sequence: first, then, next, finally, subsequently

**Common Pattern:** TOPIC → ELABORATION → EXAMPLE → CONCLUSION
Example: D→C→A→B means:
D = general topic statement
C = explanation
A = specific example  
B = conclusion

**Tip:** If a sentence starts with "This," "These," "Such," or "It" (pronoun), it likely follows the sentence that introduces what these words refer to.`
      }
    ]
  },
  "5": {
    title: "Clerical Ability",
    icon: "🗂️",
    sections: [
      {
        title: "Filing & Records Management",
        content: `**Alphabetic Filing Rules:**
1. File by surname first, then first name, then middle name/initial
2. Nothing comes before something (Mac < MacDonald)
3. Titles and designations (Dr., Atty., Sec.) are DISREGARDED in filing — file by actual name
4. Abbreviations are filed as spelled out (St. = Saint)

**Example — Alphabetical Order:**
Angeles, Maria P. → Angeles, Maricel P. → Angeles, Mario P. → Angeles, Marissa P.
(Compare letter by letter: Mari-A before Mari-C before Mari-O before Mari-SS)

**Filing Methods:**
• **Alphabetic** — names in A-Z order (most common)
• **Numeric** — by numbers (account numbers, codes)
• **Geographic** — by location (region, city, country)
• **Subject/Topic** — by subject matter
• **Chronological** — by date

**When filing names with titles (Atty., Dr., Sec.):**
• Disregard the title; file by surname
• Atty. Elen Rodriguez → file under R-O-D-R-I-G-U-E-Z
• Dr. Juan Castro → file under C-A-S-T-R-O
• Order: Castro (C) < Gazmin (G) < Luistro (L) < Rodriguez (R) < Soliman (S)

**Document Management:**
• Soft copy = digital file (saved on computer, sent via email)
• Hard copy = printed on paper
• CV (Curriculum Vitae) = detailed career history document
• Official Receipt must contain: buyer's name/address, items, quantities, amounts, signatures. Does NOT require credit card numbers.`
      },
      {
        title: "Office Procedures & Correspondence",
        content: `**Business Correspondence Addressing:**
• President of the Philippines: "His Excellency [Name], President of the Philippines"
• For correspondence TO the president: "His Excellency Rodrigo Duterte" (full form with title)
• Queen/King: "Her/His Majesty [Name]"
• Judges: "The Honorable [Name]"
• Senators/Congressmen: "The Honorable [Name]"

**Company Departments & Their Functions:**
• **Human Resources (HR)** — hiring, training, employee records, performance management
• **Cashier Section** — cash register operations, payment processing
• **Billing Section** — preparing/updating customer accounts
• **Accounts Payable/Receivable** — recording goods received and payments owed
• **Chief Executive Officer (CEO)** — highest ranking executive, top command
• **Chief Financial Officer/Treasurer** — responsible for financial matters
• **Clerical workers** — filing, billing, updating purchase orders, answering emails. NOT marketing.

**NOT a function of Accounting Department:**
• Internal and External Auditing is typically separate from regular Accounting functions
• Accounting does: Financial Statements, Bank Reconciliation, Inventory Management, Payroll

**Value Added Tax (VAT):**
• Philippines VAT = 12% of gross sales
• Applies to goods and services sold

**Computer/Office Tools:**
• Email = Microsoft Outlook (for professional email)
• Documents = Microsoft Word
• Spreadsheets = Microsoft Excel
• Presentations = Microsoft PowerPoint
• Fax Machine = telephonic transmission of scanned documents via telephone line
• USB = Universal Serial Bus (connects devices to computers)`
      }
    ]
  }
};

export const RAW_QUESTIONS = [
  ['1','What are the 3 main branches of the Government of the Philippines?','a. Senate, Supreme Court, Congress','b. Presidential, Unicameral- Parliamentary, Bicameral-Parliamentary','c. Legislative, Executive, Judicial','d. The Legislature, The Senate, The Supreme Court','c'],
  ['1','The Supreme Court shall be composed of a Chief Justice and how many Associates Justices?','a. 12','b. 13','c. 14','d. 15','c'],
  ['1','The Commander-in-Chief of all armed forces of the Philippines this 2017 is _____.','a. Air Force Commanding General Jeffrey Delgado','b. Rodrigo Duterte','c. Chief Justice Maria Lourdes Sereno','d. AFP Chief Lieutenant Gen. Emmanuel Bautista','b'],
  ['1','The executive power shall be vested in the _____.','a. President of the Philippines','b. House of Representatives','c. The Supreme Court','d. The Congress','a'],
  ['1','The legislative power shall be vested in the_____ which shall consist of a Senate and a House of Representatives.','a. Congress of the Philippines','b. House of Ombudsman','c. The Supreme Court','d. Bureau of Internal Revenue','a'],
  ['1','The Senate shall be composed of how many senators elected at large by voters of the Philippines?','a. 21','b. 22','c. 23','d. 24','d'],
  ['1','How long shall the term of office of the senators be commenced?','a. 3 years','b. 4 years','c. 5 years','d. 6 years','d'],
  ['1','The term of office of the President and Vice-president of the Philippines shall be up to how many years?','a. 3 years','b. 4 years','c. 5 years','d. 6 years','d'],
  ['1','The members of the House of Representatives shall be elected for a term of _____.','a. 3 years','b. 4 years','c. 5 years','d. 6 years','a'],
  ['1','The following shall be exempted from taxation except:','a. Lands and buildings','b. Churches and convents','c. Charitable institutions','d. Non-profit cemeteries','a'],
  ['1','The Congress, by a vote of _____ of both Houses in joint session assembled, voting separately, shall have the sole power to declare a state of war.','a. Two-thirds','b. One-half','c. Three quarters','d. Minority','a'],
  ['1','It states that "no person shall be deprived of life, liberty, or property without due process of law, nor any person be denied the equal protection of the laws."','a. Article VI','b. Bill of Rights','c. Republic Act','d. Court Order','b'],
  ['1','The three inherent powers of the state are the following except one:','a. Police Power','b. Power of Eminent Domain','c. Power of Taxation','d. Power to Impeach','d'],
  ['1','It is the power of the State to promote public welfare by restraining the use of both liberty and property of all people.','a. Police Power','b. Power of Eminent Domain','c. Power if Taxation','d. Power to Impeach','a'],
  ['1','It is the power of the State to take properties for the purpose of public use upon payment of just compensation.','a. Police Power','b. Power of Eminent Domain','c. Power if Taxation','d. Power to Impeach','b'],
  ['1','It is the power of the State to impose charge or burden to persons and properties for the purpose of raising revenues.','a. Police Power','b. Power of Eminent Domain','c. Power of Taxation','d. Power to Impeach','c'],
  ['1','The following are members of the Constitutional Commission except:','a. Commission on Civil Rights','b. Commission on Elections','c. Civil Service Commission','d. Commission on Audit','a'],
  ['1','Who shall have the exclusive power to initiate all cases of impeachment?','a. House of Blue Ribbon Committee','b. House of Representatives','c. House of the Senate','d. Speaker of the House','b'],
  ['1','R.A. 6713 is known as the:','a. Preamble','b. Code of Ethics','c. Code of Government Officials','d. Code of Conduct and Ethical Standards for Public Officials and Employees','d'],
  ['1','It is the right and obligation of all citizens 18 years of age and qualified by law to vote.','a. Suffrage','b. Election','c. Voting power','d. Civil Right','a'],
  ['1','It is the electoral process by which an initiative on the Constitution is either approved or rejected by the people.','a. Referendum','b. Plebiscite','c. Petition','d. Initiative','b'],
  ['1','It is the power of the electorate to approve or reject a legislation through an election called for the purpose.','a. Referendum','b. Plebiscite','c. Petition','d. Initiative','a'],
  ['1','It is a specialized agency of the United Nations that concerns international public health.','a. Department of Health','b. World Health Organization','c. International Health Organization','d. All of the above','b'],
  ['1','APEC stands for:','a. Asia Pacific Economic Corporation','b. Asia Pacific Economic Cooperation','c. Asia Pacific Economic Council','d. Asia Pacific Economic Countries','b'],
  ['1','Which of the following countries is not a member of ASEAN?','a. Hong Kong','b. Philippines','c. Singapore','d. Thailand','a'],
  ['1','The Philippine archipelago is consist of how many islands?','a. 7,107','b. 1,777','c. 1,258','d. 1,701','a'],
  ['1','How many of these islands are inhabited?','a. about 500','b. about 2,000','c. about 700','d. about 1,500','b'],
  ['1','Which of the following is a renewable source of energy?','a. Geothermal energy','b. Solar energy','c. Wind energy','d. All of the above','d'],
  ['1','USB stands for?','a. Unit Serial Box','b. Unit Serial Bolt','c. Universal Serial Bin','d. Universal Serial Bus','d'],
  ['1','What form of government does the Philippines adopt?','a. Republican','b. Democratic','c. Neither a nor b','d. Both a and b','d'],
  ['1','What are the official languages of the Philippines?','a. Tagalog and English','b. Filipino and English','c. English and Spanish','d. Filipino and regional languages','b'],
  ['1','When is the deadline for filing income tax returns for every taxable year?','a. April 15','b. April 30','c. March 15','d. March 30','a'],
  ['1','Which of the following statement is true about taxes?','a. It is a voluntary payment.','b. It is payable both in cash and in kind.','c. It is an enforced contribution.','d. It is based on one\'s desire to pay.','c'],
  ['1','What tax is imposed on one\'s right to transmit property at death?','a. Excise tax','b. Withholding tax','c. Donor\'s tax','d. Estate tax','d'],
  ['1','What is recognized by the State as the foundation of the nation?','a. barangay','b. community','c. family','d. municipality','c'],
  ['1','The official motto used in 30th Southeast Asian Games is what?','a. We Care As One','b. We Play As One','c. We Win As One','d. We Will As One','c'],
  ['1','Mountain Province is notable because it is:','a. The only Philippine province with an English Name','b. The smallest province in the Philippines','c. Located in Mindanao','d. Named after a Spanish explorer','a'],
  ['1','Who among the following may issue a warrant of arrest or a search warrant?','a. A senator','b. A judge','c. A congressman','d. The President','b'],
  ['1','A foreigner may acquire Filipino citizenship through','a. Naturalization','b. Extradition','c. Rebirth','d. Visa application','a'],
  ['1','What is regarded by the State as a "primary social economic force?"','a. education','b. trade','c. labor','d. commerce','c'],
  ['1','What shall be included by all educational institutions as part of the curricula?','a. The study of the life of Rizal','b. The study of Philippine History','c. The study of the Filipino language','d. The study of the Constitution','d'],
  ['1','Who exercises general supervision over all local governments?','a. Executive Secretary','b. President of the Philippines','c. Speaker of the House','d. League of Governors','b'],
  ['1','The power of the President to disapprove bills passed by Congress is called _____.','a. Emergency power','b. Police power','c. Legislative power','d. Veto power','d'],
  ['1','Due process of the law means that the accused is _____.','a. Entitled to legal counsel','b. Placed in solitary confinement','c. Represented in all stages of the trial','d. Presumed innocent until proven guilty','d'],
  ['1','Which body has the sole power to hear and decide all cases of impeachment?','a. Senate','b. Sandiganbayan','c. Ombudsman','d. Supreme Court','a'],
  ['1','What does the red color of the Philippine flag represent?','a. The Filipino\'s capacity for self-determination','b. The Filipino\'s resistance to foreign aggression','c. Declaration of war','d. Filipino valor','d'],
  ['1','Sovereignty resides in _____ in a democratic and republican state like the Philippines.','a. Malacañang','b. The ruling party','c. The Congress of the Philippines','d. The people or citizenry','d'],
  ['2','(2×1÷2), (4÷1×2), (6×1÷2), ___','a. 8','b. 16','c. 4','d. 32','b'],
  ['2','Simplify: 33 1/3 % of 48 + 12 ½ % of 96 – 44 4/9 % of 27','a. 12','b. 16','c. 24','d. 48','b'],
  ['2','12 is 125% of what number?','a. 9.6','b. 8','c. 9','d. 10','a'],
  ['2','What percent of 16 is 40?','a. 2.5%','b. 2500%','c. 1/4','d. 250%','d'],
  ['2','What is the ratio of ¼ to 3/5?','a. 1 : 3','b. 3 : 20','c. 5 : 12','d. 3 : 4','c'],
  ['2','A race car travelled for 2 ½ hours with an average speed of 132 5/8 km per hour. Find the total distance it covered.','a. 264 5/16 km','b. 331 9/16 km','c. 330 5/16 km','d. 135 1/8km','b'],
  ['2','A one fourth percent of a number is 25. What is the number?','a. 100','b. 1,000','c. 10,000','d. 100,000','c'],
  ['2','The mean median and mode of 5 numbers are equal. The numbers are 29, 18, 24, 25. What is the 5th number?','a. 24','b. 28','c. 29','d. 25','a'],
  ['2','90 increased by what percent of itself gives 180?','a. 50%','b. 90%','c. 150%','d. 100%','d'],
  ['2','If 500 or 25% of graduating class are girls, how many are graduating?','a. 2,000','b. 3,000','c. 5,000','d. 10,000','a'],
  ['2','In a group of 8,000 applicants, 1600 failed to take the first part of the test. What percent took the first part?','a. 20%','b. 30%','c. 40%','d. 80%','d'],
  ['2','If twice the value of a certain number is increased by 8 the result is 40. What is the number?','a. 8','b. 16','c. 24','d. 32','b'],
  ['2','Number Series: 5, 6, 9, 15, _____, 40','a. 21','b. 27','c. 25','d. 33','c'],
  ['2','Number Series: 3, 12, 27, 48, 75, 108, ______','a. 183','b. 192','c. 162','d. 147','d'],
  ['2','Number Series: 0.5, 0.55, 0.65, 0.8, ______','a. 0.82','b. 0.9','c. 0.95','d. 1','d'],
  ['2','Number Series: 1/6, 1/3, 1/2, 2/3, _____?','a. 2/6','b. 2/7','c. 3/5','d. 5/6','d'],
  ['2','Number Series: 1, 3, 6, 10, 15, 21, 28, _____','a. 32','b. 33','c. 34','d. 36','d'],
  ['2','Number Series: 1, 27, 125, 343, 729, _____','a. 1034','b. 1331','c. 1131','d. 956','b'],
  ['2','1/2 ÷ 1/4 =','a. Less than 1','b. More than 1','c. Equal to 1','d. Undefined','b'],
  ['2','83 : 25 :: 92 : _____?','a. 44','b. 49','c. 40','d. 63','b'],
  ['2','PEMDAS: 10÷2×5−(12÷3×4)+1 = _____?','a. 10','b. 1','c. −1','d. 23','a'],
  ['2','John walks 2 meters/second for 3 minutes, then runs 4 meters/second for 1 minute. What is the total distance?','a. 10 m','b. 60 m','c. 105 m','d. 600 m','d'],
  ['2','Radicals: √0.000025','a. 0.5','b. 0.05','c. 0.005','d. 0.00005','c'],
  ['2','A chemist has 400ml of 20% alcohol and wants to turn it into 30% alcohol. How much pure alcohol is needed?','a. 30','b. 40','c. 50','d. 57','d'],
  ['2','What is the percentage decrease from 80 to 60?','a. 33.33%','b. 25%','c. 20%','d. 75%','b'],
  ['2','What is the percentage increase from 60 to 80?','a. 33.33%','b. 25%','c. 20%','d. 75%','a'],
  ['2','Participants from Luzon, Visayas, and Mindanao are in ratio 4:3:2. If there are 120 from Luzon, how many in all?','a. 270','b. 150','c. 240','d. 420','a'],
  ['2','What is the sum of all prime numbers between 1 and 15?','a. 30','b. 34','c. 39','d. 41','d'],
  ['2','If the average of four numbers is 8 and the average of eight other numbers is 6, what is the average of the twelve numbers?','a. 5','b. 5 5/7','c. 6 2/3','d. 7 1/4','c'],
  ['2','What is the sum of the first 10 even numbers?','a. 100','b. 106','c. 110','d. 115','c'],
  ['2','If the sum of 5 consecutive numbers is 95, what is the third number?','a. 13','b. 16','c. 19','d. 25','c'],
  ['2','If 4y + 7 = 19, then (y/5) – 6 = ______','a. 4 4/5','b. 5','c. -5 2/5','d. -6','c'],
  ['2','What is m + n if 3m – n = 17 and m = 5?','a. 3','b. 4','c. 6','d. 7','a'],
  ['2','15 is what percent of 80?','a. 53.40','b. 18.75','c. 15.00','d. 5.33','b'],
  ['2','What number is halfway between 53 and 85?','a. 67','b. 68','c. 69','d. 70','c'],
  ['3','Iron: metal :: granite: ___','a. marble','b. rock','c. sand','d. solid','b'],
  ['3','Coward: brave :: philanthropist: ___','a. selfish','b. kind','c. pessimist','d. optimist','a'],
  ['3','Logic: reasoning :: ethics: ___','a. character','b. behavior','c. subject','d. traits','b'],
  ['3','Antenna: signal :: net: ___','a. web','b. catch','c. gross','d. fish','d'],
  ['3','Stanza: poem :: act: ___','a. movie','b. opera','c. song','d. lyric','b'],
  ['3','Astrology: Astronomy :: Alchemy: ___','a. Chemistry','b. Biology','c. Physics','d. Science','a'],
  ['3','Census: population :: inventory: ___','a. accounting','b. merchandise','c. cost','d. list','b'],
  ['3','Glimmer: Flicker :: murmur: ___','a. whisper','b. shout','c. rumor','d. speak','a'],
  ['3','Bouquet: flowers :: flock: ___','a. dogs','b. sheep','c. ship','d. cats','b'],
  ['3','Canvas: painter :: marble: ___','a. sculptor','b. rock','c. statue','d. form','a'],
  ['3','Hammer: anvil :: pestle: ___','a. ground','b. grinder','c. mortar','d. knife','c'],
  ['3','Archive: manuscript :: arsenal: ___','a. soldier','b. weapon','c. castle','d. king','b'],
  ['3','Subscribing to Cable TV is luxury. All luxuries are needless expenditures. Therefore:','a. Having a cellular phone is not a needless expenditure.','b. Subscribing to Cable TV is not a needless expenditure.','c. Subscribing to Cable TV is a needless expenditure.','d. Dining in a five-star hotel is not a luxury.','c'],
  ['3','If you pay your taxes, then more roads are built. If more roads are built, then all farmers will be self-reliant. Therefore:','a. Roads are built for the farmers.','b. If you pay your taxes, then more farmers will be self-reliant.','c. If Mang Nardo is a farmer, then he is self-reliant.','d. If more farmers are self-reliant, then you pay your taxes.','b'],
  ['3','All fruit-bearing plants are flowering plants. All flowering plants attract insects. Therefore:','a. Some fruit-bearing plants do not attract insects.','b. All flowering plants are fruit-bearing.','c. Some flowering plants are fruit-bearing.','d. All fruit-bearing plants attract insects.','d'],
  ['3','All detectives are scientific persons. Christian is not a creative person. All inventors are creative persons. Therefore:','a. Francis is not a detective.','b. Francis is a detective.','c. Christian is not an inventor.','d. Christian is an inventor.','c'],
  ['3','Some computer programmers are nearsighted. All nearsighted people are inefficient workers. Lourdes is a computer programmer. Therefore:','a. Veronica is nearsighted.','b. Lourdes is an inefficient worker.','c. Some computer programmers are inefficient workers.','d. All computer programmers are inefficient workers.','c'],
  ['3','Food rich in fat are rich in cholesterol. Some types of cholesterol are bad for the heart. Chicken skin is rich in fat. Therefore:','a. Food rich in cholesterols are rich in fat.','b. Food rich in fat are bad for the heart.','c. Chicken skin is not bad for the heart.','d. Chicken skin is bad for the heart.','d'],
  ['3','There are fewer juvenile delinquents in communities where youth participate in socio-civic clubs. Barangay X has a number of youth clubs. Therefore:','a. Barangay X has fewer juvenile delinquents than other barangays.','b. Parents in Barangay X exert great effort to prevent juvenile delinquency.','c. Municipal officials encourage youth clubs.','d. Community workers give training in organizing youth clubs.','a'],
  ['3','V is taller than X but shorter than Y and Z. W is shorter than Y but taller than Z. What is the correct order from shortest to tallest?','a. YZVWX','b. WYZXV','c. XZVWY','d. XVZWY','d'],
  ['3','Annie is older than Beth. Debbie is younger than Beth. Carla\'s age is between Debbie and Beth. Annie is younger than Elsa. Who is the youngest?','a. Beth','b. Annie','c. Elsa','d. Debbie','d'],
  ['3','There are ten students in a room. In how many ways can they shake hands each other once?','a. 100','b. 9','c. 10','d. 45','d'],
  ['3','In an election, A garnered 1/3 of the votes. B received more votes than C. Ranking from first to last:','a. ABC','b. BAC','c. BCA','d. ACB','b'],
  ['3','Three dogs bark at 11pm. A barks every 4 min, B every 2 min, C every 5 min. At 11:30pm, which dogs were barking?','a. A, B and C','b. A and B','c. A and C','d. B and C','d'],
  ['4','I think the answer to the Philippines\' economic woes ______ really entrepreneurship.','a. are','b. was','c. is','d. were','c'],
  ['4','It was in 1977 when Rosa and her sisters ______ their paper crafts company.','a. launches','b. launch','c. launched','d. have launched','c'],
  ['4','The effects of global warming ____ irregular weather patterns.','a. including','b. includes','c. include','d. included','c'],
  ['4','Keeping up ____ the fashion trend is costly.','a. for','b. to','c. with','d. in','c'],
  ['4','Click ____ the item displays to check the clothes in stock.','a. on','b. in','c. to','d. for','a'],
  ['4','You remember this nursery rhyme, ___ you?','a. Aren\'t you','b. Doesn\'t','c. Weren\'t','d. Don\'t','d'],
  ['4','She doesn\'t believe in destiny, _____ she?','a. doesn\'t','b. does','c. isn\'t','d. wasn\'t','b'],
  ['4','This is a computer-generated get well soon card, ___ it?','a. doesn\'t','b. aren\'t','c. isn\'t','d. is','c'],
  ['4','We do appreciate your concern ___ the children in the orphanage.','a. to','b. for','c. with','d. of','b'],
  ['4','A child\'s nursery is associated ____ the element wood.','a. to','b. with','c. in','d. on','b'],
  ['4','Your timecard says you punched in at nine thirty five so you are late, ___ you?','a. don\'t','b. isn\'t','c. haven\'t','d. aren\'t','d'],
  ['4','She hasn\'t returned the books she borrowed from the library, ___ she?','a. has','b. is','c. does','d. hasn\'t','a'],
  ['4','The main protagonist acted out the part with great "elan".','a. Enthusiasm and style','b. Great pride','c. Memorize dialogs','d. Supervised movements','a'],
  ['4','A breath of fresh air and a change of "milieu" is what you need to regain your health.','a. Diet','b. Exercise','c. Environment','d. Medicine','c'],
  ['4','He dismissed the comment with "blithe" disregard.','a. Cheerful indifference','b. Heavy heart','c. Misgiving','d. Deep regret','a'],
  ['4','A dash of baby powder and a red lipstick enhanced the beauty of her "visage".','a. Lips','b. Face','c. Personality','d. Projection','b'],
  ['4','His long journey ended up in a "hamlet" at the foot of a great mountain.','a. Small settlement','b. Remote barrio','c. Waterless community','d. Prosperous village','a'],
  ['4','The beautiful "facade" of the building elicited admiration.','a. Front','b. Lobby','c. Decoration','d. Paintings','a'],
  ['4','Being the "scion" of a wealthy patriarch, the family enjoys a good life.','a. Relative','b. Descendants','c. Family','d. Servant','b'],
  ['4','Installing the big, heavy logo is a "herculean" task.','a. Problematic','b. Easy','c. Arduous','d. Lucrative','a'],
  ['4','The children "frolic" at the white sand beach.','a. Sunbathe','b. Play cheerfully','c. Take pictures','d. Crawl','b'],
  ['4','Her "impeccable" manners draw admiration.','a. Demure','b. Charming','c. Exciting','d. Flawless','d'],
  ['4','His "flamboyant" personality attracts the girls.','a. Exotic','b. Hot','c. Magnetic','d. Exuberant','d'],
  ['4','She "flaunts" her new dress to attract attention.','a. Display ostentatiously','b. Wears with style','c. Unbuttons openly','d. Pulls upward','a'],
  ['4','The new project was given "paramount" importance.','a. Supreme','b. Attentive','c. Desired','d. Needed','a'],
  ['4','After his writing job, he usually "saunters" at the forest park.','a. Plays with his tablet','b. Outlines his next writing job','c. Takes a nap','d. Walks in a slow, relaxed manner','d'],
  ['4','After receiving his pension, he "splurged" a large amount on clothes.','a. Deposited immediately','b. Gave generously','c. Spent extravagantly','d. Invested on','c'],
  ['4','The zigzag road is "perilous" to small vehicles.','a. Dangerous','b. Suitable','c. Good','d. Attractive','a'],
  ['4','Her "penchant" for stylish clothes earned her a role in a musical.','a. Interest','b. Hunger','c. Appetite','d. Fondness','d'],
  ['5','Which department of an office is responsible for hiring new personnel?','a. Office of the President','b. Accounting Department','c. Logistic and Supply','d. Human Resource Department','d'],
  ['5','Which computer program should you use to email a company?','a. Word','b. Excel','c. Outlook','d. Powerpoint','c'],
  ['5','This is a telephonic transmission of scanned documents to a telephone number connected to a printer.','a. Photocopying Machine','b. Fax Machine','c. Typewriter','d. Inkjet Printer','b'],
  ['5','What is the correct filing arrangement?\n1. Angeles, Mario P.\n2. Angeles, Maricel P.\n3. Angeles, Marissa P.\n4. Angeles, Maria P.','a. 4,2,1,3','b. 4,1,2,3','c. 4,3,2,1','d. 4,1,3,2','a'],
  ['5','All of the following items are found in the Official Receipt form EXCEPT:','a. Name and address of the buyer','b. Signature of the recipient','c. Quantity of the items paid','d. Credit Card Number of the customer','d'],
  ['5','The method of indexing and filing where names are in alphabetized order.','a. Numeric','b. Metric','c. Geographic','d. Alphabetic','d'],
  ['5','How do you address a correspondence for the President of the Philippines?','a. His Excellency Rodrigo Duterte','b. His Excellency President Rodrigo Duterte','c. President Rodrigo Duterte','d. President Digong','b'],
  ['5','How do you address the Queen of England when you talk about her?','a. Her Highness the Queen','b. Her Majesty Queen Elizabeth II','c. Queen Elizabeth II her Highness','d. Queen Elizabeth II her Majesty','b'],
  ['5','Your boss asked you to send a soft copy of your résumé. An example of a soft copy is:','a. A print out copy usually in a paper','b. Original copy written in a paper','c. A copy saved in a computer and sent through email','d. A copy from a Xerox machine','c'],
  ['5','When a company asked you to submit your latest CV, what does CV stand for?','a. Curriculum Vitum','b. Curriculum Virtue','c. Curriculum Vitae','d. Curriculum Vital','c'],
  ['5','He is the highest ranking executive manager in a corporation.','a. Chief Financial Executive','b. Chief Executive Officer','c. Executive Admin. Officer','d. Chief Executive Assistant','b'],
  ['5','Which of the following is NOT a responsibility of a clerical worker?','a. Marketing and promotion for customers','b. Filing and updating purchase orders','c. Updating and billing buyer\'s account','d. Answering business emails','a'],
  ['5','Arrange in alphabetical order:\n1. Lt. Col. Mark David\n2. Atty. Elen Rodriguez\n3. Captain Max Aquino\n4. Dr. Juan Castro','a. 3412','b. 3421','c. 2431','d. 2341','d'],
  ['5','How much is the present Value-Added-Tax in the Philippines?','a. 12% of gross profit','b. 12% of cost of goods sold','c. 12% of gross sales','d. 12% of net income','c'],
];

export function getQuestionsByCategory(categoryId) {
  return RAW_QUESTIONS
    .filter(q => q[0] === categoryId)
    .map((q, idx) => ({
      id: `${categoryId}-${idx}`,
      category: categoryId,
      categoryName: CATEGORIES[categoryId],
      question: q[1],
      choices: [q[2], q[3], q[4], q[5]],
      answer: q[6],
    }));
}

export function getAllQuestions() {
  return RAW_QUESTIONS.map((q, idx) => ({
    id: `q-${idx}`,
    category: q[0],
    categoryName: CATEGORIES[q[0]],
    question: q[1],
    choices: [q[2], q[3], q[4], q[5]],
    answer: q[6],
  }));
}

export function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
