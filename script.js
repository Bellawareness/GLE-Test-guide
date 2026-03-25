// Study Master - Complete Application Logic

// ===================== DATA MANAGEMENT =====================

// Sample data structure (users will paste their terms)
let studyData = {
    categories: []
};

// Quotes for inspiration
const inspirationalQuotes = [
    "✨ Every master was once a beginner. You've got this! ✨",
    "🌟 Progress, not perfection. Keep going! 🌟",
    "💪 You're closer to your goals than yesterday. 💪",
    "🎯 Focus on one term at a time. You're doing great! 🎯",
    "🚀 Success is the sum of small efforts. Keep studying! 🚀",
    "🏆 Your effort today shapes your success tomorrow. 🏆",
    "📚 Learning is a superpower. Unlock it! 📚",
    "✨ Believe in yourself. Your future self will thank you. ✨",
    "🌱 Every mistake is a step forward. Keep learning! 🌱",
    "💎 You're building the best version of yourself. 💎"
];

const learnFastConfusionSets = [
    {
        group: 'Ileum / Ilium / Ileus',
        points: [
            'Ileum = small intestine segment before cecum.',
            'Ilium = upper wing of the pelvic bone.',
            'Ileus = bowel motility failure (functional obstruction).'
        ],
        memoryCue: 'IleUS = unusable gut movement; IlIUM = hip bone.'
    },
    {
        group: 'Spondylitis / Spondylosis / Spondylolisthesis',
        points: [
            'Spondylitis = inflammatory process of vertebrae/spine.',
            'Spondylosis = degenerative wear-and-tear changes.',
            'Spondylolisthesis = one vertebra slips forward over another.'
        ],
        memoryCue: '-itis inflames, -osis degenerates, -listhesis slips.'
    },
    {
        group: 'Asphyxia / Hypoxia',
        points: [
            'Asphyxia = severe oxygen deprivation from impaired breathing/gas exchange.',
            'Hypoxia = reduced oxygen at tissue level from many causes.',
            'Asphyxia can cause hypoxia; they are related but not interchangeable.'
        ],
        memoryCue: 'A-sphyxia = no effective breath, hypo-xia = low oxygen.'
    },
    {
        group: 'Petechia / Ecchymosis',
        points: [
            'Petechia = tiny pinpoint capillary hemorrhages.',
            'Ecchymosis = larger bruise from bleeding under skin.',
            'Size is the fastest differentiator on exams.'
        ],
        memoryCue: 'Petechia is petite; ecchymosis is expansive.'
    },
    {
        group: 'Cuspid / Bicuspid / Incisors',
        points: [
            'Cuspid = canine tooth with one cusp for tearing.',
            'Bicuspid = premolar with two cusps for grinding.',
            'Incisors = front chisel-shaped teeth for cutting.'
        ],
        memoryCue: 'Bi-cuspid has two cusps; incisors incise.'
    },
    {
        group: 'Tibia / Fibula',
        points: [
            'Tibia = larger medial weight-bearing shin bone.',
            'Fibula = thinner lateral stabilizing bone.',
            'Most palpable shin pain is tibial, not fibular.'
        ],
        memoryCue: 'Tibia = thick and central; fibula = fine and lateral.'
    }
];

const learnFastWordPartShortcuts = [
    { suffix: '-itis', meaning: 'inflammation', example: 'appendicitis = inflamed appendix' },
    { suffix: '-ectomy', meaning: 'surgical removal', example: 'nephrectomy = kidney removal' },
    { suffix: '-otomy', meaning: 'incision into', example: 'tracheotomy = incision into trachea' },
    { suffix: '-osis', meaning: 'abnormal/degenerative condition', example: 'spondylosis = spinal degeneration' },
    { suffix: '-pathy', meaning: 'disease/disorder', example: 'neuropathy = nerve disorder' },
    { suffix: '-emia', meaning: 'blood condition', example: 'anemia = low hemoglobin state' }
];

const learnFastDrillPrompts = [
    { question: 'Which term means vertebral slippage?', answer: 'Spondylolisthesis.' },
    { question: 'Which term means spinal inflammation?', answer: 'Spondylitis.' },
    { question: 'Which term means degenerative spinal change?', answer: 'Spondylosis.' },
    { question: 'What is the larger weight-bearing lower leg bone?', answer: 'Tibia.' },
    { question: 'What is the thin lateral lower leg bone?', answer: 'Fibula.' },
    { question: 'Tiny pinpoint hemorrhages are called?', answer: 'Petechia.' },
    { question: 'A larger superficial bruise is called?', answer: 'Ecchymosis.' },
    { question: 'Ilium refers to intestine, pelvis, or motility failure?', answer: 'Pelvis (hip bone).' },
    { question: 'Ileum refers to intestine, pelvis, or motility failure?', answer: 'Intestine (distal small bowel).' },
    { question: 'Ileus refers to intestine, pelvis, or motility failure?', answer: 'Motility failure/functional obstruction.' },
    { question: 'Asphyxia is best paired with no effective breathing or mild low oxygen?', answer: 'No effective breathing / severe oxygen deprivation.' },
    { question: 'Hypoxia means what?', answer: 'Low oxygen at tissue level.' },
    { question: 'Suffix for inflammation?', answer: '-itis.' },
    { question: 'Suffix for surgical removal?', answer: '-ectomy.' },
    { question: 'Suffix for blood condition?', answer: '-emia.' }
];


const learnFastPunctuationWatchouts = [
    "Use apostrophes for contractions (don't) and possession (teacher's); decades usually drop apostrophes (1990s).",
    "In American usage, periods and commas go inside quotation marks.",
    "After yes or no, add a comma when the sentence continues (Yes, I can.).",
    "Set off direct address with commas (Maria, check this. / Thanks, coach.).",
    "Wrap throwaway fillers with commas (Well, honestly, that answer works.).",
    "Use a comma after introductory now (Now, let's fix the draft.).",
    "Set off mid-sentence too or though with commas when parenthetical.",
    "Use a semicolon between related independent clauses.",
    "Use a semicolon before however, therefore, and similar transitions.",
    "Use a colon before a list or explanation after a complete clause.",
    "Use em dashes for interruptions and continue in lowercase unless a proper noun follows.",
    "Use hyphens for compound forms like check-in, 12-gauge, and three-fourths.",
    "Keep the Oxford comma for clarity in three-item-plus lists.",
    "Keep Q and A formatting aligned (Q: ... / A: ... consistently).",
    "Keep colloquy dialogue labels and punctuation aligned line to line.",
    "Keep number format consistent within the same sentence (all numerals or all words).",
    "Write dates numerically in the chosen style and keep that style consistent.",
    "Do not swap on to with onto, and distinguish sometime (adverb) from some time (noun phrase)."
];

// Built-in vocabulary provided by user
const builtInTerms = [
    {
        "category": "Legal Vocabulary",
        "term": "Abeyance",
        "definition": "A lapse in succession when no person has title vested."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Abstract of Title",
        "definition": "Official record excerpts showing chain of title and facts affecting marketability."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Ad Damnum",
        "definition": "Clause stating the damages claimed in a writ or declaration."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Ad Hoc",
        "definition": "For this case only."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Adjudication",
        "definition": "The rendering of a decision, or the decision itself."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Ad Litem",
        "definition": "For the purposes of the suit; e.g., guardian ad litem."
    },
    {
        "category": "Legal Vocabulary",
        "term": "A Fortiori",
        "definition": "With greater reason."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Aliunde",
        "definition": "From another source; from outside."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Allocution",
        "definition": "Court inquiry asking why judgment should not be pronounced after conviction."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Ancillary",
        "definition": "Auxiliary; supplementary."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Asportation",
        "definition": "Carrying away; felonious removal of goods."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Attachment",
        "definition": "Procedure securing a lien against property to satisfy a potential obligation."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Bill of Particulars",
        "definition": "Statement listing specific acts charged."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Canon",
        "definition": "A system of correlated rules or standards."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Codicil",
        "definition": "Supplement to a will affecting its terms."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Contumacy",
        "definition": "Stubborn resistance to authority."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Corpus Delicti",
        "definition": "Body of the crime; the physical object upon which the crime was committed."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Declaratory Judgment",
        "definition": "Judgment declaring rights without ordering action or execution."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Demurrer",
        "definition": "Pleading admitting facts for argument but asserting no valid legal claim exists."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Directed Verdict",
        "definition": "Verdict the judge instructs the jury to return when no factual issue exists."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Direct Evidence",
        "definition": "Evidence requiring no inference, such as eyewitness testimony."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Doctrine of Equivalents",
        "definition": "Patent rule treating devices as same when they perform substantially same work, way, and result."
    },
    {
        "category": "Legal Vocabulary",
        "term": "En Banc",
        "definition": "All judges of one court sitting together."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Encumbrance",
        "definition": "Claim, lien, charge, or liability attached to real property."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Enjoin",
        "definition": "To stop an act by court order (injunction)."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Equity (Trial)",
        "definition": "System of justice for causes not governed by specific statutes."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Equity (Property/Contract)",
        "definition": "Interest in property after subtracting mortgage or contract balance due."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Ex Relatione (Ex Rel.)",
        "definition": "Proceeding brought by the state on relation/information of a private relator."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Headnote",
        "definition": "Summary material preceding a court opinion."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Inculpatory",
        "definition": "Tending to incriminate."
    },
    {
        "category": "Legal Vocabulary",
        "term": "In Personam",
        "definition": "Against a person; imposing personal liability."
    },
    {
        "category": "Legal Vocabulary",
        "term": "In Re",
        "definition": "In the matter of."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Laches",
        "definition": "Unreasonable delay in bringing suit or seeking equitable relief."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Lex Loci",
        "definition": "Law of the place where the event occurred."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Mesne",
        "definition": "Intermediate."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Movant",
        "definition": "Party requesting a court order by motion."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Nisi Prius",
        "definition": "Trial court where cases are tried, often to a jury."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Next Friend",
        "definition": "Adult acting on behalf of another, usually a minor, without formal appointment."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Nolle Prosequi",
        "definition": "Entry showing plaintiff/prosecutor will proceed no further."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Nonfeasance",
        "definition": "Failure to perform a required duty."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Novation",
        "definition": "Substitution of a new contract, debtor, or obligor for an existing one."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Nunc Pro Tunc",
        "definition": "Now for then; retroactive entry correcting the record."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Praecipe",
        "definition": "Writ commanding action or appearance to show cause."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Prospectus",
        "definition": "Document describing nature and purpose of a share or debenture issue."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Putative",
        "definition": "Commonly accepted or supposed; alleged."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Quantum Meruit",
        "definition": "Recovery for the reasonable value of services."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Quantum Valebant",
        "definition": "Recovery for the reasonable value of goods."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Quash",
        "definition": "To set aside, void, or nullify."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Quitclaim",
        "definition": "To release a claim/title without warranties."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Reductio ad Absurdum",
        "definition": "Disproving by showing absurd consequence."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Res Gestae",
        "definition": "Things done; acts/declarations admissible as part of event context."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Res Ipsa Loquitur",
        "definition": "The thing speaks for itself; negligence inferred from occurrence."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Res Judicata",
        "definition": "Matter formerly in controversy and now judicially settled."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Sua Sponte",
        "definition": "Court acting on its own motion."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Supersedeas Bond",
        "definition": "Bond to stay judgment/execution and protect opposing party."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Tenancy by Entirety",
        "definition": "Spousal joint ownership where survivor retains full ownership."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Ultra Vires",
        "definition": "Beyond legal powers or authority."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Unclean Hands",
        "definition": "Equity doctrine requiring fair conduct by party seeking equitable relief."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Usury",
        "definition": "Charging more than legal interest rate."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Uttering",
        "definition": "Putting into circulation or offering for use, e.g., a forged instrument."
    },
    {
        "category": "Legal Vocabulary",
        "term": "Viz.",
        "definition": "Namely; that is to say."
    },
    {
        "category": "Legal Certification",
        "term": "Ad Damnum",
        "definition": "The pleading clause that states damages sought; variant spelling in notes may appear as Addamnum."
    },
    {
        "category": "Legal Certification",
        "term": "Civil Trial - Order of Events",
        "definition": "Typical sequence is pleadings and pretrial motions, jury selection, opening statements, plaintiff and defense evidence with examination, closing arguments, jury instructions, deliberation, verdict, and post-trial motions."
    },
    {
        "category": "Legal Certification",
        "term": "Criminal Trial - Order of Events",
        "definition": "Typical sequence is charging and arraignment, pretrial motions, jury selection, openings, prosecution case, defense case, rebuttal, closings, jury instructions, deliberation, verdict, sentencing, and appeal-related steps."
    },
    {
        "category": "Legal Certification",
        "term": "Transcript Elements",
        "definition": "Core transcript elements include caption/case info, appearances, oath and colloquy, direct and cross examination, objections and rulings, exhibits, sidebars, and certified closing/signature blocks."
    },
    {
        "category": "Legal Certification",
        "term": "Witness Setup Elements",
        "definition": "Witness setup commonly covers identity and role foundation, oath administration, competency and qualification questions, exhibit orientation, and clear direct-examination baseline facts before substantive testimony."
    },
    {
        "category": "Legal Certification",
        "term": "Jackson-Denno Hearing",
        "definition": "A pretrial hearing to determine whether a defendant's statement was voluntary and admissible."
    },
    {
        "category": "Legal Certification",
        "term": "Objection",
        "definition": "A formal challenge to a question, answer, or evidence asking the court to rule on admissibility."
    },
    {
        "category": "Legal Certification",
        "term": "Exception",
        "definition": "A formal statement preserving disagreement with a court ruling for the record."
    },
    {
        "category": "Legal Certification",
        "term": "Direct Examination",
        "definition": "Questioning of a witness by the party that called the witness."
    },
    {
        "category": "Legal Certification",
        "term": "Cross-Examination",
        "definition": "Questioning of a witness by the opposing party to test credibility and testimony."
    },
    {
        "category": "Legal Certification",
        "term": "Redirect Examination",
        "definition": "Follow-up questioning by the calling party after cross-examination."
    },
    {
        "category": "Legal Certification",
        "term": "Recross Examination",
        "definition": "Additional questioning by opposing counsel after redirect examination."
    },
    {
        "category": "Legal Certification",
        "term": "Charge Conference",
        "definition": "A meeting where the court and counsel settle the final jury instructions."
    },
    {
        "category": "Legal Certification",
        "term": "Closing Arguments",
        "definition": "Final statements where each side summarizes evidence and argues its position to the fact-finder."
    },
    {
        "category": "Legal Certification",
        "term": "Circumstantial Evidence",
        "definition": "Evidence that requires inference to connect it to a fact in issue."
    },
    {
        "category": "Legal Certification",
        "term": "Weight of the Evidence",
        "definition": "The persuasiveness and credibility value the fact-finder assigns to admitted evidence."
    },
    {
        "category": "Legal Certification",
        "term": "Burden of Proof",
        "definition": "The obligation of a party to prove disputed facts to the required legal standard."
    },
    {
        "category": "Legal Certification",
        "term": "Beyond a Reasonable Doubt",
        "definition": "The highest criminal standard requiring near certainty before conviction."
    },
    {
        "category": "Legal Certification",
        "term": "Preponderance of the Evidence",
        "definition": "The civil standard requiring that a claim is more likely true than not."
    },
    {
        "category": "Legal Certification",
        "term": "Affirmation",
        "definition": "A solemn promise to tell the truth that may be used instead of an oath."
    },
    {
        "category": "Legal Certification",
        "term": "Motion in Limine",
        "definition": "A pretrial motion seeking to admit or exclude specific evidence before trial."
    },
    {
        "category": "Legal Certification",
        "term": "Change of Venue",
        "definition": "Transfer of a case to another court location to promote fairness or convenience."
    },
    {
        "category": "Legal Certification",
        "term": "Immunity Motion",
        "definition": "A request for a ruling on whether a person is protected from prosecution or liability."
    },
    {
        "category": "Legal Certification",
        "term": "Motion for Summary Judgment",
        "definition": "A motion asking the court to decide a claim without trial because no material facts are genuinely disputed."
    },
    {
        "category": "Legal Certification",
        "term": "Statute",
        "definition": "A law enacted by a legislative body."
    },
    {
        "category": "Legal Certification",
        "term": "Alford Plea",
        "definition": "A guilty plea in which the defendant maintains innocence while acknowledging sufficient evidence to convict."
    },
    {
        "category": "Legal Certification",
        "term": "Nolo Contendere Plea",
        "definition": "A plea of no contest in which the defendant does not admit guilt but accepts conviction."
    },
    {
        "category": "Legal Certification",
        "term": "Recidivist",
        "definition": "A person who repeatedly commits crimes after prior convictions."
    },
    {
        "category": "Legal Certification",
        "term": "Tort",
        "definition": "A civil wrong, other than breach of contract, that can result in legal liability."
    },
    {
        "category": "Legal Certification",
        "term": "Appellant",
        "definition": "The party who files an appeal seeking review of a lower court decision."
    },
    {
        "category": "Legal Certification",
        "term": "Appellee",
        "definition": "The party who responds to an appeal and seeks to uphold the lower court decision."
    },
    {
        "category": "Legal Certification",
        "term": "Condemnation Case",
        "definition": "A proceeding in which property is taken for public use with compensation issues decided by law."
    },
    {
        "category": "Legal Certification",
        "term": "Concurrent Sentences",
        "definition": "Multiple sentences served at the same time."
    },
    {
        "category": "Legal Certification",
        "term": "Consecutive Sentences",
        "definition": "Multiple sentences served one after another."
    },
    {
        "category": "Legal Certification",
        "term": "Mistrial",
        "definition": "A trial terminated without a final verdict due to serious procedural or legal error."
    },
    {
        "category": "Legal Certification",
        "term": "Pro Se",
        "definition": "Representing oneself in court without an attorney."
    },
    {
        "category": "Legal Certification",
        "term": "Guardian ad Litem",
        "definition": "A court-appointed representative who protects the interests of a minor or incapacitated person in a case."
    },
    {
        "category": "Legal Certification",
        "term": "Colloquy",
        "definition": "A formal recorded dialogue in court, often used to establish understanding and voluntariness."
    },
    {
        "category": "Legal Certification",
        "term": "Q&A",
        "definition": "Question-and-answer transcript format showing the exact examination sequence."
    },
    {
        "category": "Legal Certification",
        "term": "Scrivener's Error",
        "definition": "A clerical drafting mistake in a legal document that does not reflect intended wording."
    },
    {
        "category": "Legal Certification",
        "term": "Errata Sheet",
        "definition": "A post-deposition document listing corrections a witness makes to transcript testimony."
    },
    {
        "category": "Legal Certification",
        "term": "Subpoena Duces Tecum",
        "definition": "A subpoena ordering a person to produce specified documents or tangible evidence."
    },
    {
        "category": "Legal Certification",
        "term": "30(b)(6) Deposition",
        "definition": "A corporate deposition where an organization designates a representative to testify on listed topics."
    },
    {
        "category": "Legal Certification",
        "term": "Read and Sign",
        "definition": "A witness option to review and sign a deposition transcript after preparation."
    },
    {
        "category": "Legal Certification",
        "term": "Exhibit Log",
        "definition": "A running record that tracks exhibit numbers, descriptions, and admission status."
    },
    {
        "category": "Legal Certification",
        "term": "Marked for Identification",
        "definition": "An exhibit designation showing an item has been labeled but not yet admitted."
    },
    {
        "category": "Legal Certification",
        "term": "Admitted into Evidence",
        "definition": "A status indicating the court has accepted an exhibit or testimony as evidence."
    },
    {
        "category": "Legal Certification",
        "term": "Not Admitted",
        "definition": "A status indicating proposed evidence was excluded and not received into the record."
    },
    {
        "category": "Legal Certification",
        "term": "Oath",
        "definition": "A formal sworn promise to testify truthfully under penalty of perjury."
    },
    {
        "category": "Legal Certification",
        "term": "Transcript Compliance",
        "definition": "Meeting required formatting, certification, and filing rules for official transcript acceptance."
    },
    {
        "category": "Legal Certification",
        "term": "Annotations (digital)",
        "definition": "Digital notes or issue tags attached during transcript production and review."
    },
    {
        "category": "Legal Certification",
        "term": "Deposition Setup",
        "definition": "Preparatory steps for scheduling, notices, appearances, and recording logistics before a deposition."
    },
    {
        "category": "Legal Certification",
        "term": "Deposition Transcripts Required Components",
        "definition": "Required parts typically include caption data, appearances, oath, Q&A testimony, exhibits, certifications, and signature handling."
    },
    {
        "category": "Legal Certification",
        "term": "Certification & Ethics Rules",
        "definition": "Standards governing neutrality, confidentiality, accuracy, and professional conduct in reporting work."
    },
    {
        "category": "Legal Certification",
        "term": "Testing Reminders",
        "definition": "Key exam-focused checkpoints for timing, terminology precision, and rule-based decision making."
    },
    {
        "category": "Legal Certification",
        "term": "Common Disqualifiers",
        "definition": "Frequent certification disqualifiers include ethical breaches, procedural noncompliance, and inaccurate records."
    },
    {
        "category": "Legal Certification",
        "term": "Study Tips",
        "definition": "Focused practice, active recall, and timed drills improve legal terminology and transcript mastery."
    },
    {
        "category": "Legal Certification",
        "term": "Courtroom Etiquette",
        "definition": "Professional conduct includes punctuality, neutrality, clear communication, and respect for court protocol."
    },
    {
        "category": "Legal Certification",
        "term": "On/Off the Record",
        "definition": "This distinguishes statements included in the official transcript from those excluded by instruction."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Acetabulum",
        "definition": "Pelvic socket where the femoral head fits."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Acromioclavicular Joint",
        "definition": "Joint between the acromion and clavicle."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Allesthesia",
        "definition": "Sensation perceived at a site different from the stimulus location."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Anastomosis",
        "definition": "Connection between vessels, ducts, or tubular structures."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Arthroscopy",
        "definition": "Joint procedure using an arthroscope to view internal structures."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Asphyxia",
        "definition": "Oxygen deprivation causing breathing difficulty and possible unconsciousness."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Bariatrics",
        "definition": "Study and treatment of overweight and obesity."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Basilar",
        "definition": "Pertaining to a base or basal part."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Bicuspid",
        "definition": "Having two cusps; e.g., mitral valve or premolar tooth."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Brachial Plexus",
        "definition": "Network of nerves in the shoulder and arm region."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Bronchiectasis",
        "definition": "Dilation of bronchial tubes, often chronic."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Bruit",
        "definition": "Abnormal sound heard during auscultation, often vascular."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Cerebrospinal",
        "definition": "Pertaining to brain and spinal cord."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Cervical",
        "definition": "Pertaining to neck region or a constricted organ part, such as cervix."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Cholecystectomy",
        "definition": "Surgical removal of the gallbladder."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Chondromalacia",
        "definition": "Abnormal softening of cartilage."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Chronic",
        "definition": "Persisting over a long period."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Cirrhosis",
        "definition": "Chronic liver disease marked by scarring."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Creatinine",
        "definition": "Muscle metabolism waste found in blood and excreted in urine."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Cuspid",
        "definition": "Single-cusp tooth; canine."
    },
    {
        "category": "Medical Vocabulary",
        "term": "D and C",
        "definition": "Dilation of the cervix followed by uterine curettage."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Discogram",
        "definition": "Graphic/radiographic record of an intervertebral disc."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Dysphagia",
        "definition": "Difficulty swallowing."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Ecchymosis",
        "definition": "Hemorrhagic skin spot larger than petechia."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Edema",
        "definition": "Excess fluid in intercellular tissue spaces."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Embolus",
        "definition": "Undissolved mass in a blood vessel that can obstruct flow."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Encephalopathy",
        "definition": "Degenerative disease/process affecting the brain."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Fasciculated",
        "definition": "Clustered together in bundles."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Fasciitis",
        "definition": "Inflammation of fascia."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Fibrillation",
        "definition": "Small local involuntary muscle fiber contraction."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Fibrosis",
        "definition": "Formation of fibrous tissue."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Fibula",
        "definition": "Outer, smaller lower-leg bone."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Foramenotomy",
        "definition": "Procedure opening intervertebral foramen to relieve nerve compression."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Fundus",
        "definition": "Bottom or base of an organ, such as uterus or eye."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Gastroenteritis",
        "definition": "Acute inflammation of stomach and intestinal lining."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Glioblastoma",
        "definition": "Rapidly growing high-grade brain tumor."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Hemoglobin",
        "definition": "Iron-containing pigment in red blood cells that carries oxygen."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Hypoxia",
        "definition": "Reduced oxygen in tissues despite blood supply."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Ileum",
        "definition": "Part of the small intestine."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Ileus",
        "definition": "Bowel obstruction."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Ilium",
        "definition": "Upper section of the hip bone."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Impetigo",
        "definition": "Bacterial skin infection with weeping/crusted lesions."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Incisors",
        "definition": "Anterior cutting teeth."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Lordosis",
        "definition": "Abnormally increased spinal curvature."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Luxation",
        "definition": "Dislocation of a bone from a joint."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Meninges",
        "definition": "Three membranes covering brain and spinal cord."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Metastasis",
        "definition": "Spread of disease, often cancer, to nonadjacent sites."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Necrotic",
        "definition": "Relating to death of tissue."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Nephrology",
        "definition": "Study of kidneys and kidney disease."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Neurology",
        "definition": "Medical specialty of the nervous system."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Neuron",
        "definition": "Conducting cell; basic functional unit of nerve tissue."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Nystagmus",
        "definition": "Involuntary rapid eye movement."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Oophorectomy",
        "definition": "Surgical removal of ovary or ovaries."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Oophorocystectomy",
        "definition": "Excision of an ovarian cyst."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Ophthalmology",
        "definition": "Medical specialty of the eyes."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Orthopedics",
        "definition": "Specialty focused on skeletal system and associated structures."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Paracentesis",
        "definition": "Aspiration/removal of fluid, commonly from abdomen."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Perfusion",
        "definition": "Passage of fluid through organ vessels, often blood."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Petechia",
        "definition": "Tiny red skin spot, smaller than ecchymosis."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Pituitary",
        "definition": "Hormone-secreting gland at base of brain."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Plantar Fasciitis",
        "definition": "Inflammation of fascia on the sole of the foot."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Pulmonology",
        "definition": "Medical specialty of lungs and respiratory disease."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Raynaud's Disease",
        "definition": "Vascular disorder causing ischemia of fingers or toes."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Refraction",
        "definition": "Bending of light and process of determining eye refractive error."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Septicemia",
        "definition": "Pathogenic microorganisms in blood; blood poisoning."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Sequela",
        "definition": "Condition that follows from a prior disease."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Sphygmomanometer",
        "definition": "Instrument measuring arterial blood pressure."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Spondylitis",
        "definition": "Inflammation of one or more vertebrae."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Spondylosis",
        "definition": "Degenerative vertebral changes."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Spondylolisthesis",
        "definition": "Forward displacement of lumbar vertebra."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Stapedectomy",
        "definition": "Surgery involving the stapes in middle ear."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Sternum",
        "definition": "Breastbone connected to clavicles and first seven ribs."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Syncope",
        "definition": "Temporary loss of consciousness; fainting."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Synovial",
        "definition": "Pertaining to synovial fluid in joint cavities."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Thoracic",
        "definition": "Pertaining to chest or thorax."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Tibia",
        "definition": "Inner, larger lower-leg bone; shinbone."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Triage",
        "definition": "Sorting casualties by treatment priority."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Uvula",
        "definition": "Small fleshy projection from soft palate."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Venous",
        "definition": "Pertaining to veins."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Viscid",
        "definition": "Sticky; thick."
    },
    {
        "category": "Medical Vocabulary",
        "term": "Xiphoid",
        "definition": "Sword-shaped; as in xiphoid process of sternum."
    },
    {
        "category": "Medical Terminology",
        "term": "Acetabulum",
        "definition": "The cup-shaped socket in the pelvis that receives the femoral head."
    },
    {
        "category": "Medical Terminology",
        "term": "Acromioclavicular Joint",
        "definition": "The joint where the acromion of the scapula meets the clavicle."
    },
    {
        "category": "Medical Terminology",
        "term": "Allesthesia",
        "definition": "A sensory disorder in which a stimulus is perceived at an incorrect location."
    },
    {
        "category": "Medical Terminology",
        "term": "Anastomosis",
        "definition": "A natural or surgical connection between two tubular structures such as blood vessels."
    },
    {
        "category": "Medical Terminology",
        "term": "Arthroscopy",
        "definition": "A minimally invasive procedure that visualizes and treats joint structures using a scope."
    },
    {
        "category": "Medical Terminology",
        "term": "Asphyxia",
        "definition": "A condition of severe oxygen deprivation caused by impaired breathing."
    },
    {
        "category": "Medical Terminology",
        "term": "Bariatrics",
        "definition": "The medical specialty focused on obesity and weight-management treatment."
    },
    {
        "category": "Medical Terminology",
        "term": "Basilar",
        "definition": "Pertaining to a base or basal region of a structure."
    },
    {
        "category": "Medical Terminology",
        "term": "Bicuspid",
        "definition": "Having two cusps, such as the mitral valve or a premolar tooth."
    },
    {
        "category": "Medical Terminology",
        "term": "Brachial Plexus",
        "definition": "A network of cervical and thoracic nerves that supplies the shoulder and upper limb."
    },
    {
        "category": "Medical Terminology",
        "term": "Bronchiectasis",
        "definition": "Chronic dilation of bronchi associated with recurrent infection and inflammation."
    },
    {
        "category": "Medical Terminology",
        "term": "Bruit",
        "definition": "An abnormal vascular sound heard on auscultation due to turbulent blood flow."
    },
    {
        "category": "Medical Terminology",
        "term": "Cerebrospinal",
        "definition": "Relating to both the brain and spinal cord."
    },
    {
        "category": "Medical Terminology",
        "term": "Cervical",
        "definition": "Relating to the neck region or to the cervix depending on context."
    },
    {
        "category": "Medical Terminology",
        "term": "Cholecystectomy",
        "definition": "Surgical removal of the gallbladder."
    },
    {
        "category": "Medical Terminology",
        "term": "Chondromalacia",
        "definition": "Pathologic softening and degeneration of cartilage."
    },
    {
        "category": "Medical Terminology",
        "term": "Chronic",
        "definition": "Persisting for a long duration or recurring over time."
    },
    {
        "category": "Medical Terminology",
        "term": "Cirrhosis",
        "definition": "Progressive scarring of the liver with loss of normal function."
    },
    {
        "category": "Medical Terminology",
        "term": "Creatinine",
        "definition": "A muscle-metabolism waste product used as a marker of kidney function."
    },
    {
        "category": "Medical Terminology",
        "term": "Cuspid",
        "definition": "A single-pointed canine tooth."
    },
    {
        "category": "Medical Terminology",
        "term": "D&C (Dilation and Curettage)",
        "definition": "A procedure that dilates the cervix and removes tissue from the uterine lining."
    },
    {
        "category": "Medical Terminology",
        "term": "Discogram",
        "definition": "An imaging test in which contrast is injected into a spinal disc to evaluate pain sources."
    },
    {
        "category": "Medical Terminology",
        "term": "Dysphagia",
        "definition": "Difficulty swallowing."
    },
    {
        "category": "Medical Terminology",
        "term": "Ecchymosis",
        "definition": "A larger purplish skin discoloration from bleeding under the skin."
    },
    {
        "category": "Medical Terminology",
        "term": "Edema",
        "definition": "Swelling caused by excess fluid accumulation in tissues."
    },
    {
        "category": "Medical Terminology",
        "term": "Embolus",
        "definition": "A traveling intravascular mass that can lodge and block blood flow."
    },
    {
        "category": "Medical Terminology",
        "term": "Encephalopathy",
        "definition": "A broad term for disease or dysfunction of the brain."
    },
    {
        "category": "Medical Terminology",
        "term": "Fasciculated",
        "definition": "Arranged in bundles or showing fine involuntary muscle twitches."
    },
    {
        "category": "Medical Terminology",
        "term": "Fasciitis",
        "definition": "Inflammation of fascia, the connective tissue around muscles and organs."
    },
    {
        "category": "Medical Terminology",
        "term": "Fibrillation",
        "definition": "Rapid, uncoordinated contraction of muscle fibers, often in the heart."
    },
    {
        "category": "Medical Terminology",
        "term": "Fibrosis",
        "definition": "Formation of excess fibrous connective tissue as part of a chronic process."
    },
    {
        "category": "Medical Terminology",
        "term": "Fibula",
        "definition": "The thinner, lateral bone of the lower leg."
    },
    {
        "category": "Medical Terminology",
        "term": "Foramenotomy",
        "definition": "Surgical enlargement of a neural foramen to relieve nerve compression."
    },
    {
        "category": "Medical Terminology",
        "term": "Fundus",
        "definition": "The base or farthest internal part of a hollow organ."
    },
    {
        "category": "Medical Terminology",
        "term": "Gastroenteritis",
        "definition": "Inflammation of the stomach and intestines, usually causing vomiting and diarrhea."
    },
    {
        "category": "Medical Terminology",
        "term": "Glioblastoma",
        "definition": "An aggressive high-grade malignant tumor of the brain."
    },
    {
        "category": "Medical Terminology",
        "term": "Hemoglobin",
        "definition": "The oxygen-carrying protein in red blood cells."
    },
    {
        "category": "Medical Terminology",
        "term": "Hypoxia",
        "definition": "A state in which tissue oxygen supply is insufficient for metabolic needs."
    },
    {
        "category": "Medical Terminology",
        "term": "Ileum",
        "definition": "The distal portion of the small intestine."
    },
    {
        "category": "Medical Terminology",
        "term": "Ileus",
        "definition": "A disruption of intestinal motility causing functional bowel obstruction."
    },
    {
        "category": "Medical Terminology",
        "term": "Ilium",
        "definition": "The broad, uppermost part of the hip bone."
    },
    {
        "category": "Medical Terminology",
        "term": "Impetigo",
        "definition": "A contagious superficial bacterial skin infection with crusted lesions."
    },
    {
        "category": "Medical Terminology",
        "term": "Incisors",
        "definition": "The front teeth specialized for cutting food."
    },
    {
        "category": "Medical Terminology",
        "term": "Lordosis",
        "definition": "An exaggerated inward curvature of the lumbar spine."
    },
    {
        "category": "Medical Terminology",
        "term": "Luxation",
        "definition": "A complete dislocation of a joint."
    },
    {
        "category": "Medical Terminology",
        "term": "Meninges",
        "definition": "The three connective tissue membranes surrounding the brain and spinal cord."
    },
    {
        "category": "Medical Terminology",
        "term": "Metastasis",
        "definition": "The spread of malignant cells from a primary site to distant tissues."
    },
    {
        "category": "Medical Terminology",
        "term": "Necrotic",
        "definition": "Describing tissue that has died."
    },
    {
        "category": "Medical Terminology",
        "term": "Nephrology",
        "definition": "The medical specialty dealing with kidneys and renal disorders."
    },
    {
        "category": "Medical Terminology",
        "term": "Neurology",
        "definition": "The medical specialty focused on the nervous system."
    },
    {
        "category": "Medical Terminology",
        "term": "Neuron",
        "definition": "An electrically excitable nerve cell that transmits information."
    },
    {
        "category": "Medical Terminology",
        "term": "Nystagmus",
        "definition": "Involuntary rhythmic oscillation of the eyes."
    },
    {
        "category": "Medical Terminology",
        "term": "Oophorectomy",
        "definition": "Surgical removal of one or both ovaries."
    },
    {
        "category": "Medical Terminology",
        "term": "Oophorocystectomy",
        "definition": "Surgical excision of an ovarian cyst."
    },
    {
        "category": "Medical Terminology",
        "term": "Ophthalmology",
        "definition": "The medical specialty of eye health, disease, and surgery."
    },
    {
        "category": "Medical Terminology",
        "term": "Orthopedics",
        "definition": "The specialty concerned with bones, joints, muscles, and related structures."
    },
    {
        "category": "Medical Terminology",
        "term": "Paracentesis",
        "definition": "Needle puncture to remove fluid from a body cavity, often the peritoneal space."
    },
    {
        "category": "Medical Terminology",
        "term": "Perfusion",
        "definition": "The delivery of blood through tissue capillary beds."
    },
    {
        "category": "Medical Terminology",
        "term": "Petechia",
        "definition": "A pinpoint red or purple spot from minor capillary bleeding."
    },
    {
        "category": "Medical Terminology",
        "term": "Pituitary",
        "definition": "The endocrine gland at the brain base that regulates multiple hormones."
    },
    {
        "category": "Medical Terminology",
        "term": "Plantar Fasciitis",
        "definition": "Inflammation of the plantar fascia causing heel and arch pain."
    },
    {
        "category": "Medical Terminology",
        "term": "Pulmonology",
        "definition": "The medical specialty focused on lungs and respiratory disease."
    },
    {
        "category": "Medical Terminology",
        "term": "Raynaud's Disease",
        "definition": "A vasospastic disorder causing episodic color and temperature changes in digits."
    },
    {
        "category": "Medical Terminology",
        "term": "Refraction",
        "definition": "The bending of light and the measurement of optical focusing error in the eye."
    },
    {
        "category": "Medical Terminology",
        "term": "Septicemia",
        "definition": "A serious bloodstream infection caused by pathogenic microorganisms."
    },
    {
        "category": "Medical Terminology",
        "term": "Sequela",
        "definition": "A condition that remains as a consequence of a prior disease or injury."
    },
    {
        "category": "Medical Terminology",
        "term": "Sphygmomanometer",
        "definition": "An instrument used to measure arterial blood pressure."
    },
    {
        "category": "Medical Terminology",
        "term": "Spondylitis",
        "definition": "Inflammation of one or more vertebrae."
    },
    {
        "category": "Medical Terminology",
        "term": "Spondylosis",
        "definition": "Degenerative changes of the spine, especially intervertebral discs and vertebrae."
    },
    {
        "category": "Medical Terminology",
        "term": "Spondylolisthesis",
        "definition": "Forward displacement of one vertebra relative to the one below it."
    },
    {
        "category": "Medical Terminology",
        "term": "Stapedectomy",
        "definition": "Surgery removing or replacing the stapes to improve hearing."
    },
    {
        "category": "Medical Terminology",
        "term": "Sternum",
        "definition": "The flat breastbone in the center of the anterior chest wall."
    },
    {
        "category": "Medical Terminology",
        "term": "Syncope",
        "definition": "A transient loss of consciousness from reduced cerebral perfusion."
    },
    {
        "category": "Medical Terminology",
        "term": "Synovial",
        "definition": "Relating to synovial membrane or synovial fluid in joints."
    },
    {
        "category": "Medical Terminology",
        "term": "Thoracic",
        "definition": "Pertaining to the thorax or chest."
    },
    {
        "category": "Medical Terminology",
        "term": "Tibia",
        "definition": "The larger, medial weight-bearing bone of the lower leg."
    },
    {
        "category": "Medical Terminology",
        "term": "Triage",
        "definition": "The process of prioritizing patients based on urgency of care needs."
    },
    {
        "category": "Medical Terminology",
        "term": "Uvula",
        "definition": "The small midline projection hanging from the posterior soft palate."
    },
    {
        "category": "Medical Terminology",
        "term": "Venous",
        "definition": "Relating to veins or venous blood flow."
    },
    {
        "category": "Medical Terminology",
        "term": "Viscid",
        "definition": "Having a thick, sticky consistency."
    },
    {
        "category": "Medical Terminology",
        "term": "Xiphoid",
        "definition": "Relating to the xiphoid process, the small inferior part of the sternum."
    },
    {
        "category": "Punctuation Guidelines",
        "term": "Apostrophes",
        "definition": "Use apostrophes for possession and contractions, not for simple plurals."
    },
    {
        "category": "Punctuation Guidelines",
        "term": "Periods",
        "definition": "Use periods to end complete declarative statements and standard abbreviations as required by style."
    },
    {
        "category": "Punctuation Guidelines",
        "term": "Capitalization",
        "definition": "Capitalize proper nouns, sentence starts, and formally required titles consistently."
    },
    {
        "category": "Punctuation Guidelines",
        "term": "Numbers",
        "definition": "Apply one consistent rule for writing numbers as words or numerals based on context."
    },
    {
        "category": "Punctuation Guidelines",
        "term": "Yes/No Comma Rule",
        "definition": "Use a comma after introductory yes or no when it functions as a discourse starter."
    },
    {
        "category": "Punctuation Guidelines",
        "term": "Direct Address Comma",
        "definition": "Set off names or titles in direct address with commas."
    },
    {
        "category": "Punctuation Guidelines",
        "term": "Throwaway Words (Comma Use)",
        "definition": "Use commas around nonessential throwaway words that do not change core meaning."
    },
    {
        "category": "Punctuation Guidelines",
        "term": "Oxford Comma",
        "definition": "Use the serial comma before the final conjunction in a list for clarity."
    },
    {
        "category": "Punctuation Guidelines",
        "term": "Semicolons",
        "definition": "Use semicolons to join closely related independent clauses or separate complex list items."
    },
    {
        "category": "Punctuation Guidelines",
        "term": "Colons",
        "definition": "Use a colon to introduce an explanation, list, or quotation after a complete clause."
    },
    {
        "category": "Punctuation Guidelines",
        "term": "Dashes",
        "definition": "Use em dashes sparingly to mark interruption, emphasis, or abrupt shifts in thought."
    },
    {
        "category": "Punctuation Guidelines",
        "term": "Quotation Marks",
        "definition": "Use quotation marks for exact spoken words and place punctuation per transcript style rules."
    },
    {
        "category": "Punctuation Guidelines",
        "term": "Hyphens",
        "definition": "Use hyphens in compound modifiers when needed to prevent ambiguity."
    },
    {
        "category": "Punctuation Guidelines",
        "term": "Conjunctive Adverbs",
        "definition": "Use a semicolon before and a comma after conjunctive adverbs linking independent clauses."
    },
    {
        "category": "Punctuation Guidelines",
        "term": "Comma with Too/Though",
        "definition": "Use commas with too or though when they are parenthetical or sentence-final interrupters."
    },
    {
        "category": "Punctuation Guidelines",
        "term": "Now Comma Rule",
        "definition": "Use a comma after now when it is an introductory transition, not when integral to the clause."
    },
    {
        "category": "Punctuation Guidelines",
        "term": "Sentence Structure Rules",
        "definition": "Prefer complete, clear sentences and avoid fragments unless quoting exact speech."
    },
    {
        "category": "Punctuation Guidelines",
        "term": "Number Format Consistency",
        "definition": "Keep number formats consistent within the same transcript, table, or exhibit reference."
    },
    {
        "category": "Punctuation Guidelines",
        "term": "Dates (Numeric Format)",
        "definition": "Record dates in a single approved numeric format consistently across the record."
    },
    {
        "category": "Punctuation Guidelines",
        "term": "On to vs Onto",
        "definition": "Use on to for movement to a position and onto for movement to a surface."
    },
    {
        "category": "Punctuation Guidelines",
        "term": "Sometime vs Some Time",
        "definition": "Use sometime for an unspecified time and some time for a duration."
    },
    {
        "category": "Punctuation Guidelines",
        "term": "Mistaken or Repeated Words",
        "definition": "Preserve mistaken or repeated words faithfully unless style rules require a notation."
    },
    {
        "category": "Punctuation Guidelines",
        "term": "Q&A Formatting",
        "definition": "Format questions and answers with consistent speaker labels, spacing, and punctuation."
    },
    {
        "category": "Punctuation Guidelines",
        "term": "Colloquy Formatting",
        "definition": "Format colloquy with clear speaker identification and consistent interruption markers."
    },
    {
        "category": "Legal Certification",
        "term": "Courtroom Rules",
        "definition": "Courtroom rules govern decorum, speaking order, and procedural conduct on the record."
    },
    {
        "category": "Legal Certification",
        "term": "Transcript Formatting Rules (Georgia)",
        "definition": "Georgia transcript formatting rules define required layout, margins, and certification language."
    },
    {
        "category": "Legal Certification",
        "term": "Skills Test Transcripts",
        "definition": "Skills test transcripts follow prescribed formatting, timing, and accuracy standards for evaluation."
    },
    {
        "category": "Legal Certification",
        "term": "Deposition Rules",
        "definition": "Deposition rules govern oath administration, objections, questioning scope, and transcript handling."
    },
    {
        "category": "Legal Certification",
        "term": "Testing Rules",
        "definition": "Testing rules define eligibility, conduct, materials, timing, and scoring requirements."
    },
    {
        "category": "Legal Certification",
        "term": "Standards of Proof",
        "definition": "Standards of proof define the level of evidence required for legal findings."
    },
    {
        "category": "Legal Certification",
        "term": "Exhibit Status",
        "definition": "Exhibit status tracks whether an exhibit is marked, offered, admitted, or refused."
    },
    {
        "category": "Legal Certification",
        "term": "Court Reporter Responsibilities",
        "definition": "Court reporter responsibilities include creating an accurate record and maintaining procedural integrity."
    },
    {
        "category": "Legal Certification",
        "term": "Read and Sign (30-Day Review)",
        "definition": "Read and sign permits deponents to review and sign within the stated 30-day period."
    },
    {
        "category": "Legal Certification",
        "term": "Errata Sheet Changes",
        "definition": "Errata sheet changes document transcript corrections requested during post-deposition review."
    },
    {
        "category": "Legal Certification",
        "term": "Common Disqualifiers (Testing)",
        "definition": "Common testing disqualifiers include rule violations, misconduct, or failure to meet minimum standards."
    },
    {
        "category": "Medical Terminology",
        "term": "Abduct",
        "definition": "To move a limb or structure away from the midline of the body."
    },
    {
        "category": "Medical Terminology",
        "term": "Abscess",
        "definition": "A localized collection of pus caused by infection and inflammation."
    },
    {
        "category": "Medical Terminology",
        "term": "Acute",
        "definition": "Describes a condition with sudden onset and often short duration."
    },
    {
        "category": "Medical Terminology",
        "term": "Adduct",
        "definition": "To move a limb or structure toward the midline of the body."
    },
    {
        "category": "Medical Terminology",
        "term": "Afebrile",
        "definition": "Without fever; having a normal body temperature."
    },
    {
        "category": "Medical Terminology",
        "term": "Benign",
        "definition": "Noncancerous and not expected to invade or metastasize aggressively."
    },
    {
        "category": "Medical Terminology",
        "term": "Canines",
        "definition": "Pointed teeth used for tearing, located between incisors and premolars."
    },
    {
        "category": "Medical Terminology",
        "term": "Dorsal",
        "definition": "Relating to the back surface of the body or an anatomical structure."
    },
    {
        "category": "Medical Terminology",
        "term": "Hypotension",
        "definition": "Abnormally low blood pressure that may cause dizziness or fainting."
    },
    {
        "category": "Medical Terminology",
        "term": "Musculoskeletal",
        "definition": "Relating to muscles, bones, joints, and associated connective tissues."
    },
    {
        "category": "Medical Terminology",
        "term": "Phlebotomist",
        "definition": "A trained professional who draws blood for testing, transfusion, or donation."
    },
    {
        "category": "Medical Terminology",
        "term": "Petechiae",
        "definition": "Tiny pinpoint red or purple spots caused by small capillary bleeding."
    }
];

function seedBuiltInTerms() {
    if (!Array.isArray(studyData.categories)) {
        studyData.categories = [];
    }

    let changed = false;

    builtInTerms.forEach(item => {
        let category = studyData.categories.find(c => c.name === item.category);
        if (!category) {
            category = { name: item.category, terms: [] };
            studyData.categories.push(category);
            changed = true;
        }

        const termKey = normalizeTerm(item.term);
        const existingCount = category.terms.filter(t => normalizeTerm(t.term) === termKey).length;

        if (existingCount === 0) {
            category.terms.push({
                term: item.term,
                definition: item.definition,
                difficulty: Math.max(1, Math.min(5, Math.ceil(item.definition.length / 50)))
            });
            changed = true;
        }
    });

    if (changed) {
        saveToLocalStorage();
    }
}

// ===================== STATE MANAGEMENT =====================

let currentView = 'home-view';
let currentCardIndex = 0;
let currentCards = [];
let isCardFlipped = false;
let markedCards = new Set();
let knownTerms = new Set();
let termRepeatCounts = {};
let gameMastery = {};
let quizState = {
    active: false,
    questions: [],
    currentQuestion: 0,
    answers: [],
    scores: []
};

let gameState = {
    active: false,
    category: '',
    sourcePool: [],
    sourcePoolCount: 0,
    level: 1,
    levelSize: 10,
    levelQuestions: [],
    levelScore: 0,
    questions: [],
    currentQuestionIndex: 0,
    selectedOptionIndex: null,
    score: 0,
    streak: 0,
    correctCount: 0,
    wrongPile: [],
    mode: 'level',
    autoAdvanceTimer: null
};

let userStats = {
    learned: 0,
    quizzes: 0,
    avgScore: 0,
    streak: 0,
    categoryStats: {}
};

// ===================== INITIALIZATION =====================

(function initializeOnScriptLoad() {
    loadFromLocalStorage();
    seedBuiltInTerms();
    initializeUI();
    changeInspiration();
    setInterval(changeInspiration, 30000); // Change quote every 30 seconds

    // Load sample categories for dropdown
    populateCategorySelects();
})();

function initializeUI() {
    // Initialize category cards
    updateCategoryCards();
    updateStats();
    updateProgress();
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('studyMasterData');
    if (saved) {
        studyData = JSON.parse(saved);
    }

    const savedStats = localStorage.getItem('studyMasterStats');
    if (savedStats) {
        userStats = JSON.parse(savedStats);
    }

    const savedKnown = localStorage.getItem('studyMasterKnownTerms');
    if (savedKnown) {
        try {
            knownTerms = new Set(JSON.parse(savedKnown));
        } catch (e) {
            knownTerms = new Set();
        }
    }

    const savedRepeats = localStorage.getItem('studyMasterTermRepeatCounts');
    if (savedRepeats) {
        try {
            termRepeatCounts = JSON.parse(savedRepeats) || {};
        } catch (e) {
            termRepeatCounts = {};
        }
    }

    const savedGameMastery = localStorage.getItem('studyMasterGameMastery');
    if (savedGameMastery) {
        try {
            gameMastery = JSON.parse(savedGameMastery) || {};
        } catch (e) {
            gameMastery = {};
        }
    }
}

function saveToLocalStorage() {
    localStorage.setItem('studyMasterData', JSON.stringify(studyData));
    localStorage.setItem('studyMasterStats', JSON.stringify(userStats));
    localStorage.setItem('studyMasterKnownTerms', JSON.stringify(Array.from(knownTerms)));
    localStorage.setItem('studyMasterTermRepeatCounts', JSON.stringify(termRepeatCounts));
    localStorage.setItem('studyMasterGameMastery', JSON.stringify(gameMastery));
}

function normalizeTerm(term) {
    return (term || '').trim().toLowerCase();
}

function isKnownTerm(term) {
    return knownTerms.has(normalizeTerm(term));
}

function getTermRepeatCount(term) {
    return termRepeatCounts[normalizeTerm(term)] || 0;
}

function recordTermSeen(term) {
    const key = normalizeTerm(term);
    termRepeatCounts[key] = (termRepeatCounts[key] || 0) + 1;
}

function getGameMasteryKey(category, term) {
    return `${normalizeTerm(category)}::${normalizeTerm(term)}`;
}

function ensureGameMasteryEntry(key) {
    if (!gameMastery[key] || typeof gameMastery[key] !== 'object') {
        gameMastery[key] = { attempts: 0, correct: 0 };
    }

    if (!Number.isFinite(gameMastery[key].attempts)) {
        gameMastery[key].attempts = 0;
    }

    if (!Number.isFinite(gameMastery[key].correct)) {
        gameMastery[key].correct = 0;
    }

    return gameMastery[key];
}

function recordGameAnswerResult(card, isCorrect) {
    if (!card) {
        return;
    }

    const key = getGameMasteryKey(card.category, card.term);
    const entry = ensureGameMasteryEntry(key);
    entry.attempts += 1;

    if (isCorrect) {
        entry.correct += 1;
    }
}

function isTermMasteredByGame(category, term) {
    const key = getGameMasteryKey(category, term);
    const entry = gameMastery[key];
    return !!entry && Number(entry.correct) >= 1;
}

// ===================== VIEW MANAGEMENT =====================

function renderPunctuationWatchouts(containerId) {
    const container = document.getElementById(containerId);

    if (!container) {
        return;
    }

    container.innerHTML = `
        <article class="learn-fast-card learn-fast-watchouts-card">
            <h4 class="learn-fast-card-title">Checklist</h4>
            <ul class="learn-fast-list learn-fast-watchouts-list">
                ${learnFastPunctuationWatchouts.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </article>
    `;
}

function renderLearnFastView() {
    const strategyContainer = document.getElementById('learn-fast-cards');
    const drillContainer = document.getElementById('learn-fast-drill');

    if (!strategyContainer || !drillContainer) {
        return;
    }

    const confusionCardsHtml = learnFastConfusionSets.map(set => `
        <article class="learn-fast-card">
            <h4 class="learn-fast-card-title">${set.group}</h4>
            <ul class="learn-fast-list">
                ${set.points.map(point => `<li>${point}</li>`).join('')}
            </ul>
            <p class="learn-fast-cue">Cue: ${set.memoryCue}</p>
        </article>
    `).join('');

    const wordPartCardHtml = `
        <article class="learn-fast-card">
            <h4 class="learn-fast-card-title">Word-Part Shortcuts</h4>
            <ul class="learn-fast-list">
                ${learnFastWordPartShortcuts.map(shortcut => `
                    <li><strong>${shortcut.suffix}</strong>: ${shortcut.meaning} (${shortcut.example})</li>
                `).join('')}
            </ul>
        </article>
    `;

    strategyContainer.innerHTML = confusionCardsHtml + wordPartCardHtml;
    drillContainer.innerHTML = learnFastDrillPrompts.map((prompt, index) => `
        <article class="learn-fast-drill-card">
            <p class="learn-fast-question">${index + 1}. ${prompt.question}</p>
            <p class="learn-fast-answer">${prompt.answer}</p>
        </article>
    `).join('');

    renderPunctuationWatchouts('learn-fast-punctuation');
}

function showView(viewId) {
    // Hide all views
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });

    // Show selected view
    document.getElementById(viewId).classList.add('active');
    currentView = viewId;

    // Special handling for certain views
    if (viewId === 'stats-view') {
        updateStats();
    }

    if (viewId === 'learn-fast-view') {
        renderLearnFastView();
    }

    if (viewId === 'punctuation-watchouts-view') {
        renderPunctuationWatchouts('punctuation-watchouts-content');
    }

    if (viewId === 'game-view') {
        prepareGameView();
    }
}

function toggleAdmin() {
    showView('admin-view');
}

// ===================== INSPIRATION SYSTEM =====================

function changeInspiration() {
    const quote = inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];
    document.getElementById('inspiration-quote').textContent = quote;
}

// ===================== CATEGORY MANAGEMENT =====================

function populateCategorySelects() {
    const categoryNames = studyData.categories.map(cat => cat.name);
    const selects = ['categoryDropdown', 'quizCategoryDropdown'];

    selects.forEach(selectId => {
        const select = document.getElementById(selectId);
        const currentValue = select.value;

        // Keep the "All Terms" option
        select.innerHTML = '<option value="">All Terms</option><option value="__known__">Known Pile</option>';

        categoryNames.forEach(name => {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            select.appendChild(option);
        });

        if (currentValue && Array.from(select.options).some(option => option.value === currentValue)) {
            select.value = currentValue;
        }
    });

    populateGameCategorySelect();
}

function updateCategoryCards() {
    const container = document.getElementById('categories-grid');
    container.innerHTML = '';

    if (studyData.categories.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--light-text); grid-column: 1/-1;">No categories yet. Add some terms to get started!</p>';
        return;
    }

    studyData.categories.forEach(category => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `
            <div class="category-icon">${getCategoryEmoji(category.name)}</div>
            <div class="category-name">${category.name}</div>
            <div class="category-count">${category.terms.length} terms</div>
        `;
        card.onclick = () => {
            loadCategory(category.name, 'study');
            showView('study-view');
        };
        container.appendChild(card);
    });
}

function getCategoryEmoji(categoryName) {
    const emojiMap = {
        'civil': '⚖️',
        'criminal': '🔨',
        'anatomy': '🫀',
        'medical': '💊',
        'legal': '📜',
        'trial': '👨‍⚖️',
        'procedure': '🔬',
        'disease': '🦠',
        'default': '📚'
    };

    for (let [key, emoji] of Object.entries(emojiMap)) {
        if (categoryName.toLowerCase().includes(key)) {
            return emoji;
        }
    }
    return emojiMap.default;
}

// ===================== FLASHCARD SYSTEM =====================

function loadCategory(categoryName, mode) {
    let cards = [];

    if (categoryName === '') {
        cards = studyData.categories.flatMap(cat =>
            cat.terms
                .filter(term => !isKnownTerm(term.term))
                .map(term => ({ ...term, category: cat.name }))
        );
    } else if (categoryName === '__known__') {
        cards = studyData.categories.flatMap(cat =>
            cat.terms
                .filter(term => isKnownTerm(term.term))
                .map(term => ({ ...term, category: cat.name }))
        );
    } else {
        const category = studyData.categories.find(cat => cat.name === categoryName);
        if (category) {
            cards = category.terms
                .filter(term => !isKnownTerm(term.term))
                .map(term => ({ ...term, category: categoryName }));

            // Fallback avoids an empty study view when all terms are known.
            if (cards.length === 0 && category.terms.length > 0) {
                cards = category.terms
                    .map(term => ({ ...term, category: categoryName }));
            }
        }
    }

    if (mode === 'study') {
        currentCards = cards;
        currentCardIndex = 0;
        isCardFlipped = false;
        markedCards.clear();
        displayCard();
        document.getElementById('total-cards').textContent = currentCards.length;
    } else if (mode === 'quiz') {
        return cards;
    }
}

function displayCard() {
    if (currentCards.length === 0) {
        document.getElementById('card-term').textContent = 'No cards available';
        document.getElementById('card-definition').textContent = 'Add some terms to get started!';
        return;
    }

    const card = currentCards[currentCardIndex];
    document.getElementById('card-term').textContent = card.term;
    document.getElementById('card-definition').textContent = card.definition;
    document.getElementById('current-card').textContent = currentCardIndex + 1;

    // Reset flip
    isCardFlipped = false;
    document.getElementById('flashcard').classList.remove('flipped');

    // Update difficulty badge
    const difficultyMap = {
        1: '⭐ Beginner',
        2: '⭐⭐ Easy',
        3: '⭐⭐⭐ Medium',
        4: '⭐⭐⭐⭐ Hard',
        5: '⭐⭐⭐⭐⭐ Expert'
    };
    document.getElementById('flex-badge').textContent = difficultyMap[card.difficulty] || 'Medium';

    // Update mark button
    const markBtn = document.getElementById('mark-btn');
    if (markedCards.has(currentCardIndex)) {
        markBtn.classList.add('marked');
        markBtn.textContent = '📌 Marked';
    } else {
        markBtn.classList.remove('marked');
        markBtn.textContent = '📌 Mark';
    }

    const knownBtn = document.getElementById('known-btn');
    if (knownBtn) {
        if (isKnownTerm(card.term)) {
            knownBtn.classList.add('marked');
            knownBtn.textContent = 'In Known Pile';
        } else {
            knownBtn.classList.remove('marked');
            knownBtn.textContent = 'I Know This';
        }
    }
}

function flipCard() {
    const card = document.getElementById('flashcard');
    card.classList.toggle('flipped');
    isCardFlipped = !isCardFlipped;
}

function nextCard() {
    if (currentCardIndex < currentCards.length - 1) {
        currentCardIndex++;
        displayCard();
    } else {
        showCelebration('You finished the stack!', 'Great job reviewing all cards! 🎉');
    }
}

function previousCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        displayCard();
    }
}

function shuffleCards() {
    currentCards = currentCards.sort(() => Math.random() - 0.5);
    currentCardIndex = 0;
    displayCard();
}

function toggleMark() {
    if (markedCards.has(currentCardIndex)) {
        markedCards.delete(currentCardIndex);
    } else {
        markedCards.add(currentCardIndex);
    }
    displayCard();
}

function toggleKnown() {
    if (currentCards.length === 0) return;

    const card = currentCards[currentCardIndex];
    const key = normalizeTerm(card.term);

    if (knownTerms.has(key)) {
        knownTerms.delete(key);
    } else {
        knownTerms.add(key);
    }

    saveToLocalStorage();

    if (knownTerms.has(key)) {
        currentCards.splice(currentCardIndex, 1);
        if (currentCardIndex >= currentCards.length) {
            currentCardIndex = Math.max(0, currentCards.length - 1);
        }
        document.getElementById('total-cards').textContent = currentCards.length;
    }

    displayCard();
    populateCategorySelects();
}

// ===================== QUIZ SYSTEM =====================

function startQuiz() {
    const categoryName = document.getElementById('quizCategoryDropdown').value;
    const numQuestions = parseInt(document.getElementById('quizQuestions').value);

    let quizCards = loadCategory(categoryName, 'quiz');

    if (quizCards.length === 0) {
        alert('No cards available for this category!');
        return;
    }

    const repeatCap = 2;
    const underCap = quizCards.filter(card => getTermRepeatCount(card.term) < repeatCap);
    const pool = underCap.length >= Math.min(numQuestions, quizCards.length) ? underCap : quizCards;

    // Shuffle and limit
    quizCards = pool.sort(() => Math.random() - 0.5).slice(0, numQuestions);

    quizState = {
        active: true,
        questions: quizCards,
        currentQuestion: 0,
        answers: [],
        scores: []
    };

    document.getElementById('quiz-setup').classList.add('hidden');
    document.getElementById('quiz-content').classList.remove('hidden');
    document.getElementById('quiz-total').textContent = quizCards.length;

    displayQuestion();
}

function displayQuestion() {
    if (quizState.currentQuestion >= quizState.questions.length) {
        finishQuiz();
        return;
    }

    const question = quizState.questions[quizState.currentQuestion];
    const questionNum = quizState.currentQuestion + 1;

    recordTermSeen(question.term);
    saveToLocalStorage();

    document.getElementById('quiz-current').textContent = questionNum;
    document.getElementById('quiz-question-text').textContent = `What does "${question.term}" mean?`;

    // Generate answer options
    const options = [question];
    const otherQuestions = quizState.questions.filter((_, i) => i !== quizState.currentQuestion);

    for (let i = 0; i < 3 && i < otherQuestions.length; i++) {
        options.push(otherQuestions[Math.floor(Math.random() * otherQuestions.length)]);
    }

    options.sort(() => Math.random() - 0.5);

    // Display options
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';

    options.forEach((opt, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option';
        optionDiv.textContent = opt.definition;
        optionDiv.onclick = () => selectOption(index, optionDiv);
        optionsContainer.appendChild(optionDiv);
    });

    // Update progress
    const progress = (questionNum / quizState.questions.length) * 100;
    document.getElementById('quiz-progress-fill').style.width = progress + '%';

    // Store options for later
    quizState.currentOptions = options;
}

let selectedOptionIndex = null;

function selectOption(index, element) {
    // Remove previous selection
    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.classList.remove('selected');
    });

    // Add selection to clicked option
    element.classList.add('selected');
    selectedOptionIndex = index;
}

function submitAnswer() {
    if (selectedOptionIndex === null) {
        alert('Please select an answer!');
        return;
    }

    const currentQuestion = quizState.questions[quizState.currentQuestion];
    const selectedOption = quizState.currentOptions[selectedOptionIndex];
    const isCorrect = selectedOption.term === currentQuestion.term;

    quizState.answers.push({
        question: currentQuestion.term,
        correct: isCorrect,
        userAnswer: selectedOption.definition,
        correctAnswer: currentQuestion.definition
    });

    quizState.scores.push(isCorrect ? 1 : 0);

    // Show feedback
    document.querySelectorAll('.quiz-option').forEach((opt, index) => {
        opt.style.pointerEvents = 'none';
        if (index === selectedOptionIndex) {
            opt.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
        if (index === quizState.currentOptions.findIndex(o => o.term === currentQuestion.term)) {
            opt.classList.add('correct');
        }
    });

    // Wait before going to next question
    setTimeout(() => {
        quizState.currentQuestion++;
        selectedOptionIndex = null;
        displayQuestion();
    }, 1500);
}

function finishQuiz() {
    document.getElementById('quiz-content').classList.add('hidden');

    const totalCorrect = quizState.scores.reduce((a, b) => a + b, 0);
    const percentage = Math.round((totalCorrect / quizState.scores.length) * 100);

    // Update stats
    userStats.quizzes++;
    userStats.avgScore = Math.round(
        (userStats.avgScore * (userStats.quizzes - 1) + percentage) / userStats.quizzes
    );
    if (percentage >= 80) userStats.streak++;
    else userStats.streak = 0;

    saveToLocalStorage();

    // Display results
    displayQuizResults(totalCorrect, quizState.scores.length, percentage);

    // Show celebration if score is good
    if (percentage >= 70) {
        setTimeout(() => {
            showCelebration(
                `Amazing Score! ${percentage}%! 🎉`,
                `You got ${totalCorrect} out of ${quizState.scores.length} correct!`
            );
        }, 500);
    }
}

function displayQuizResults(correct, total, percentage) {
    const resultsDiv = document.getElementById('quiz-results');
    let resultHTML = `
        <h2 class="results-title">Quiz Complete!</h2>
        <p class="results-score">${percentage}%</p>
        <p class="results-subtitle">${correct} out of ${total} correct</p>
        <div class="results-breakdown">
    `;

    quizState.answers.forEach((answer, index) => {
        resultHTML += `
            <div class="result-item ${answer.correct ? 'correct' : 'incorrect'}">
                <strong>Q${index + 1}: ${answer.question}</strong>
                <p>${answer.correct ? '✓ Correct!' : '✗ Incorrect'}</p>
                ${!answer.correct ? `<p style="color: var(--light-text); font-size: 0.9em;">Correct: ${answer.correctAnswer}</p>` : ''}
            </div>
        `;
    });

    resultHTML += `
        </div>
        <div class="results-actions">
            <button class="results-btn results-btn-primary" onclick="retakeQuiz()">Retake Quiz</button>
            <button class="results-btn results-btn-secondary" onclick="showView('home-view')">Back to Home</button>
        </div>
    `;

    resultsDiv.innerHTML = resultHTML;
    resultsDiv.classList.remove('hidden');
}

function retakeQuiz() {
    quizState.active = false;
    document.getElementById('quiz-results').classList.add('hidden');
    document.getElementById('quiz-setup').classList.remove('hidden');
    document.getElementById('quiz-content').classList.add('hidden');
}

// ===================== GAME MODE =====================

function populateGameCategorySelect() {
    const select = document.getElementById('gameCategoryDropdown');
    if (!select) return;

    const currentValue = select.value;
    select.innerHTML = '<option value="">All Categories</option>';

    studyData.categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.name;
        option.textContent = category.name;
        select.appendChild(option);
    });

    if (currentValue && Array.from(select.options).some(option => option.value === currentValue)) {
        select.value = currentValue;
    }
}

function getGamePool(categoryName) {
    const normalizedCategory = (categoryName || '').trim().toLowerCase();
    const includeAllCategories = !normalizedCategory || normalizedCategory === 'all';

    const sourceCategories = includeAllCategories
        ? studyData.categories
        : studyData.categories.filter(category => category.name.toLowerCase() === normalizedCategory);

    const dedupedByCategoryAndTerm = new Map();

    sourceCategories.forEach(category => {
        const categoryNameValue = (category.name || '').trim();
        category.terms.forEach(term => {
            const termValue = (term.term || '').trim();
            const definitionValue = (term.definition || '').trim();

            if (!termValue || !definitionValue) {
                return;
            }

            const dedupeKey = `${categoryNameValue.toLowerCase()}|${termValue.toLowerCase()}`;
            if (!dedupedByCategoryAndTerm.has(dedupeKey)) {
                dedupedByCategoryAndTerm.set(dedupeKey, {
                    ...term,
                    term: termValue,
                    definition: definitionValue,
                    category: categoryNameValue
                });
            }
        });
    });

    return Array.from(dedupedByCategoryAndTerm.values());
}

function shuffleItems(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function getCardKey(card) {
    return `${normalizeTerm(card.term)}|${normalizeTerm(card.definition)}`;
}

function addToWrongPile(card) {
    const key = getCardKey(card);
    if (!gameState.wrongPile.some(item => getCardKey(item) === key)) {
        gameState.wrongPile.push({ ...card });
    }
}

function removeFromWrongPile(card) {
    const key = getCardKey(card);
    gameState.wrongPile = gameState.wrongPile.filter(item => getCardKey(item) !== key);
}

function clearGameAutoAdvance() {
    if (gameState.autoAdvanceTimer) {
        clearTimeout(gameState.autoAdvanceTimer);
        gameState.autoAdvanceTimer = null;
    }
}

function prepareGameView() {
    populateGameCategorySelect();
    resetGameView();
}

function resetGameView() {
    clearGameAutoAdvance();
    gameState = {
        active: false,
        category: '',
        sourcePool: [],
        sourcePoolCount: 0,
        level: 1,
        levelSize: 10,
        levelQuestions: [],
        levelScore: 0,
        questions: [],
        currentQuestionIndex: 0,
        selectedOptionIndex: null,
        score: 0,
        streak: 0,
        correctCount: 0,
        wrongPile: [],
        mode: 'level',
        autoAdvanceTimer: null
    };

    document.getElementById('game-setup').classList.remove('hidden');
    document.getElementById('game-live').classList.add('hidden');
    document.getElementById('game-over').classList.add('hidden');
    document.getElementById('game-feedback').className = 'game-feedback hidden';
    document.getElementById('game-feedback').textContent = '';
    document.getElementById('game-level').textContent = '1';
    document.getElementById('game-level-score').textContent = '0';
    document.getElementById('game-level-size').textContent = '10';
    document.getElementById('game-score').textContent = '0';
    document.getElementById('game-streak').textContent = '0';
    document.getElementById('game-review-count').textContent = '0';
    const poolCountEl = document.getElementById('game-pool-count');
    if (poolCountEl) {
        poolCountEl.textContent = '0';
    }
    document.getElementById('game-current').textContent = '1';
    document.getElementById('game-total').textContent = '10';
    document.getElementById('game-progress-fill').style.width = '0%';
    document.getElementById('game-next-btn').classList.add('hidden');
    document.getElementById('game-next-btn').disabled = false;
    document.getElementById('game-next-btn').textContent = 'Continue';
    document.getElementById('game-options').innerHTML = '';
    document.getElementById('game-prompt').textContent = 'Question prompt appears here';
}

function buildGameQuestion(card, pool) {
    const type = Math.random() < 0.5 ? 'term-to-definition' : 'definition-to-term';
    const correctText = type === 'term-to-definition' ? card.definition : card.term;
    const promptText = type === 'term-to-definition'
        ? `Choose the correct definition for "${card.term}".`
        : `Choose the term that matches: "${card.definition}"`;

    const distractorPool = pool.filter(item => getCardKey(item) !== getCardKey(card));
    const options = [{ text: correctText, isCorrect: true }];
    const usedOptionText = new Set([correctText.trim().toLowerCase()]);
    const shuffledDistractors = shuffleItems(distractorPool);

    for (let i = 0; i < shuffledDistractors.length && options.length < 4; i++) {
        const distractorText = type === 'term-to-definition'
            ? shuffledDistractors[i].definition
            : shuffledDistractors[i].term;
        const normalized = distractorText.trim().toLowerCase();
        if (usedOptionText.has(normalized)) {
            continue;
        }
        usedOptionText.add(normalized);
        options.push({ text: distractorText, isCorrect: false });
    }

    if (options.length < 4) {
        return null;
    }

    return {
        key: `${getCardKey(card)}|${type}`,
        type,
        card,
        promptText,
        options: shuffleItems(options)
    };
}

function buildLevelQuestions(cards, pool) {
    const questions = [];
    cards.forEach(card => {
        const question = buildGameQuestion(card, pool);
        if (question) {
            questions.push(question);
        }
    });
    return questions;
}

function startGame() {
    const categoryName = document.getElementById('gameCategoryDropdown').value;
    const pool = getGamePool(categoryName);

    if (pool.length === 0) {
        alert('No terms available for this category.');
        return;
    }

    if (pool.length < 4) {
        alert('Game mode needs at least 4 terms to generate options.');
        return;
    }

    clearGameAutoAdvance();

    gameState = {
        active: true,
        category: categoryName,
        sourcePool: shuffleItems(pool),
        sourcePoolCount: pool.length,
        level: 1,
        levelSize: 10,
        levelQuestions: [],
        levelScore: 0,
        questions: [],
        currentQuestionIndex: 0,
        selectedOptionIndex: null,
        score: 0,
        streak: 0,
        correctCount: 0,
        wrongPile: [],
        mode: 'level',
        autoAdvanceTimer: null
    };

    document.getElementById('game-setup').classList.add('hidden');
    document.getElementById('game-live').classList.remove('hidden');
    document.getElementById('game-over').classList.add('hidden');

    startLevel(1);
}

function startLevel(levelNumber) {
    clearGameAutoAdvance();

    const startIndex = (levelNumber - 1) * gameState.levelSize;
    const levelCards = gameState.sourcePool.slice(startIndex, startIndex + gameState.levelSize);

    if (levelCards.length === 0) {
        showGameResult({
            title: 'Challenge Complete',
            message: 'All available terms have been completed across every level.',
            levelCorrect: gameState.levelSize,
            levelTotal: gameState.levelSize,
            allowRetry: false,
            allowNextLevel: false,
            allowReview: gameState.wrongPile.length > 0,
            hideLive: true
        });
        gameState.active = false;
        return;
    }

    const questionCards = [];
    for (let i = 0; i < gameState.levelSize; i++) {
        questionCards.push(levelCards[i % levelCards.length]);
    }

    const questions = buildLevelQuestions(questionCards, gameState.sourcePool);

    if (questions.length < gameState.levelSize) {
        alert('Some terms could not be used because there were not enough unique options. Add more terms and try again.');
        resetGameView();
        return;
    }

    gameState.active = true;
    gameState.mode = 'level';
    gameState.level = levelNumber;
    gameState.levelQuestions = questionCards;
    gameState.levelScore = 0;
    gameState.questions = questions;
    gameState.currentQuestionIndex = 0;
    gameState.selectedOptionIndex = null;

    document.getElementById('game-live').classList.remove('hidden');
    document.getElementById('game-over').classList.add('hidden');

    renderGameQuestion();
}

function retryCurrentLevel() {
    if (!gameState.sourcePool.length) {
        return;
    }
    startLevel(gameState.level);
}

function startNextLevel() {
    if (!gameState.sourcePool.length) {
        return;
    }
    startLevel(gameState.level + 1);
}

function reviewWrongPile() {
    if (gameState.wrongPile.length === 0) {
        showGameResult({
            title: 'Review Pile Empty',
            message: 'There are no missed terms to review right now.',
            levelCorrect: gameState.levelScore,
            levelTotal: gameState.levelQuestions.length || gameState.levelSize,
            allowRetry: true,
            allowNextLevel: false,
            allowReview: false,
            hideLive: true
        });
        return;
    }

    clearGameAutoAdvance();

    gameState.active = true;
    gameState.mode = 'review';
    gameState.levelScore = 0;
    gameState.levelQuestions = [...gameState.wrongPile];
    gameState.questions = buildLevelQuestions(shuffleItems(gameState.wrongPile), gameState.sourcePool);
    gameState.currentQuestionIndex = 0;
    gameState.selectedOptionIndex = null;

    document.getElementById('game-live').classList.remove('hidden');
    document.getElementById('game-over').classList.add('hidden');

    renderGameQuestion();
}

function renderGameQuestion() {
    const question = gameState.questions[gameState.currentQuestionIndex];
    if (!question) {
        completeCurrentGameMode();
        return;
    }

    gameState.selectedOptionIndex = null;

    document.getElementById('game-prompt').textContent = question.promptText;
    document.getElementById('game-feedback').className = 'game-feedback hidden';
    document.getElementById('game-feedback').textContent = '';

    const nextButton = document.getElementById('game-next-btn');
    nextButton.classList.add('hidden');
    nextButton.disabled = false;
    nextButton.textContent = 'Continue';

    const optionsContainer = document.getElementById('game-options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'game-option';
        button.textContent = option.text;
        button.onclick = () => selectGameOption(index);
        optionsContainer.appendChild(button);
    });

    renderGameStatus();
}

function renderGameStatus() {
    const total = gameState.questions.length || gameState.levelSize;
    const currentDisplay = Math.min(gameState.currentQuestionIndex + 1, total);
    const progress = total === 0 ? 0 : Math.round((currentDisplay / total) * 100);

    document.getElementById('game-level').textContent = gameState.mode === 'review' ? 'Review' : gameState.level;
    document.getElementById('game-level-score').textContent = gameState.levelScore;
    document.getElementById('game-level-size').textContent = total;
    document.getElementById('game-score').textContent = gameState.score;
    document.getElementById('game-streak').textContent = gameState.streak;
    document.getElementById('game-review-count').textContent = gameState.wrongPile.length;
    const poolCountEl = document.getElementById('game-pool-count');
    if (poolCountEl) {
        poolCountEl.textContent = gameState.sourcePoolCount || gameState.sourcePool.length;
    }
    document.getElementById('game-current').textContent = currentDisplay;
    document.getElementById('game-total').textContent = total;
    document.getElementById('game-progress-fill').style.width = `${progress}%`;
}

function selectGameOption(index) {
    if (!gameState.active || gameState.selectedOptionIndex !== null) {
        return;
    }

    gameState.selectedOptionIndex = index;
    evaluateGameAnswer(index);
}

function evaluateGameAnswer(selectedIndex) {
    const question = gameState.questions[gameState.currentQuestionIndex];
    if (!question) {
        return;
    }

    const selectedOption = question.options[selectedIndex];
    const isCorrect = selectedOption.isCorrect;

    recordGameAnswerResult(question.card, isCorrect);
    saveToLocalStorage();
    updateProgress();

    if (isCorrect) {
        gameState.score += 10;
        gameState.streak += 1;
        gameState.correctCount += 1;
        gameState.levelScore += 1;
        if (gameState.mode === 'review') {
            removeFromWrongPile(question.card);
        }
    } else {
        gameState.streak = 0;
        addToWrongPile(question.card);
    }

    const buttons = document.querySelectorAll('#game-options .game-option');
    const correctIndex = question.options.findIndex(option => option.isCorrect);

    buttons.forEach((button, index) => {
        button.disabled = true;
        button.classList.add('locked', 'disabled-state');

        if (index === correctIndex) {
            button.classList.add('correct');
        }
        if (index === selectedIndex && !isCorrect) {
            button.classList.add('incorrect');
        }
    });

    const feedback = document.getElementById('game-feedback');
    const correctText = question.options[correctIndex].text;

    if (isCorrect) {
        feedback.className = 'game-feedback game-feedback-correct';
        feedback.textContent = 'Correct! Great choice.';
    } else {
        feedback.className = 'game-feedback game-feedback-incorrect';
        feedback.textContent = `Incorrect. Correct answer: ${correctText}`;
    }

    renderGameStatus();

    const isLastQuestion = gameState.currentQuestionIndex >= gameState.questions.length - 1;
    if (!isLastQuestion) {
        clearGameAutoAdvance();
        gameState.autoAdvanceTimer = setTimeout(() => {
            gameState.autoAdvanceTimer = null;
            nextGameQuestion();
        }, 900);
        return;
    }

    const nextButton = document.getElementById('game-next-btn');
    nextButton.textContent = gameState.mode === 'review' ? 'Finish Review' : 'See Level Results';
    nextButton.classList.remove('hidden');
}

function nextGameQuestion() {
    if (!gameState.active) {
        return;
    }

    clearGameAutoAdvance();
    gameState.currentQuestionIndex += 1;

    if (gameState.currentQuestionIndex >= gameState.questions.length) {
        completeCurrentGameMode();
        return;
    }

    renderGameQuestion();
}

function completeCurrentGameMode() {
    if (gameState.mode === 'review') {
        if (gameState.wrongPile.length > 0) {
            reviewWrongPile();
            return;
        }

        gameState.active = false;
        showGameResult({
            title: 'Review Complete',
            message: 'You cleared the review pile.',
            levelCorrect: gameState.levelScore,
            levelTotal: gameState.questions.length,
            allowRetry: true,
            allowNextLevel: false,
            allowReview: false,
            hideLive: true
        });
        return;
    }

    const levelTotal = gameState.levelQuestions.length;
    const passedLevel = levelTotal > 0 && gameState.levelScore === levelTotal;
    const hasNextLevel = gameState.sourcePool.length > gameState.level * gameState.levelSize;

    gameState.active = false;

    showGameResult({
        title: passedLevel ? 'Level Passed' : 'Level Failed',
        message: passedLevel
            ? 'Perfect score. You unlocked the next level.'
            : 'You need 10/10 to pass this level.',
        levelCorrect: gameState.levelScore,
        levelTotal,
        allowRetry: true,
        allowNextLevel: passedLevel && hasNextLevel,
        allowReview: gameState.wrongPile.length > 0,
        hideLive: true
    });
}

function showGameResult({ title, message, levelCorrect, levelTotal, allowRetry, allowNextLevel, allowReview, hideLive }) {
    const accuracy = levelTotal === 0 ? 0 : Math.round((levelCorrect / levelTotal) * 100);

    if (hideLive) {
        document.getElementById('game-live').classList.add('hidden');
    }

    document.getElementById('game-over').classList.remove('hidden');
    document.getElementById('game-result-title').textContent = title;
    document.getElementById('game-result-message').textContent = message;
    document.getElementById('game-final-score').textContent = gameState.score;
    document.getElementById('game-final-correct').textContent = levelCorrect;
    document.getElementById('game-final-total').textContent = levelTotal;
    document.getElementById('game-final-accuracy').textContent = accuracy;
    document.getElementById('game-final-review-count').textContent = gameState.wrongPile.length;

    document.getElementById('game-retry-level-btn').classList.toggle('hidden', !allowRetry);
    document.getElementById('game-next-level-btn').classList.toggle('hidden', !allowNextLevel);
    document.getElementById('game-review-pile-btn').classList.toggle('hidden', !allowReview);
}


// ===================== STATS SYSTEM =====================

function updateStats() {
    document.getElementById('stat-learned').textContent = getLearned();
    document.getElementById('stat-quizzes').textContent = userStats.quizzes;
    document.getElementById('stat-average').textContent = userStats.avgScore + '%';
    document.getElementById('stat-streak').textContent = userStats.streak;

    // Category breakdown
    const breakdownDiv = document.getElementById('category-breakdown');
    if (studyData.categories.length === 0) {
        breakdownDiv.innerHTML = '<p style="color: var(--light-text);">No categories yet</p>';
        return;
    }

    breakdownDiv.innerHTML = '';
    studyData.categories.forEach(cat => {
        const count = cat.terms.length;
        const breakdownItem = document.createElement('div');
        breakdownItem.className = 'breakdown-item';
        breakdownItem.innerHTML = `
            <span class="breakdown-name">${cat.name}</span>
            <span class="breakdown-stats">${count} terms</span>
        `;
        breakdownDiv.appendChild(breakdownItem);
    });
}

function getLearned() {
    return studyData.categories.reduce((sum, cat) => sum + cat.terms.length, 0);
}

function updateProgress() {
    const totalTermsAcrossAllCategories = getLearned();

    if (totalTermsAcrossAllCategories === 0) {
        document.getElementById('progress-text').textContent = '0%';
        document.getElementById('progress-fill').style.width = '0%';
        return;
    }

    let masteredTerms = 0;
    studyData.categories.forEach(category => {
        category.terms.forEach(term => {
            if (isTermMasteredByGame(category.name, term.term)) {
                masteredTerms += 1;
            }
        });
    });

    const percentage = Math.round((masteredTerms / totalTermsAcrossAllCategories) * 100);

    document.getElementById('progress-text').textContent = percentage + '%';
    document.getElementById('progress-fill').style.width = percentage + '%';
}

// ===================== DATA IMPORT =====================

function importTerms() {
    const textarea = document.getElementById('terms-textarea');
    const content = textarea.value.trim();

    if (!content) {
        showStatus('Please paste your terms!', 'error');
        return;
    }

    try {
        const isIgnorableLine = line => {
            const trimmed = line.trim();
            return !trimmed || /^(?:[•\-○]+)$/.test(trimmed) || /^state certification page\b/i.test(trimmed);
        };

        const isCategoryHeader = line => {
            const trimmed = line.trim();
            return trimmed.endsWith(':') && trimmed.length > 1;
        };

        const isLikelyNextTerm = line => {
            const trimmed = line.trim();
            if (!trimmed || /[.!?;:,]$/.test(trimmed) || /^[•\-○]/.test(trimmed)) {
                return false;
            }

            const words = trimmed.split(/\s+/).filter(Boolean);
            if (words.length === 0 || words.length > 6) {
                return false;
            }

            return words.every(word => /^[A-Z][A-Za-z0-9'()/-]*$/.test(word));
        };

        const lines = content
            .split('\\n')
            .map(line => line.trim())
            .filter(line => !isIgnorableLine(line));

        const importedCategories = {};
        const importedTermKeysByCategory = {};
        let currentCategory = 'Uncategorized';

        const ensureImportedCategory = categoryName => {
            if (!importedCategories[categoryName]) {
                importedCategories[categoryName] = [];
                importedTermKeysByCategory[categoryName] = new Set();
            }
        };

        for (let i = 0; i < lines.length;) {
            const line = lines[i];

            if (isCategoryHeader(line)) {
                currentCategory = line.slice(0, -1).trim() || 'Uncategorized';
                ensureImportedCategory(currentCategory);
                i++;
                continue;
            }

            ensureImportedCategory(currentCategory);
            const term = line;
            const normalizedTerm = normalizeTerm(term);

            let j = i + 1;
            const definitionLines = [];

            while (j < lines.length) {
                const candidate = lines[j];

                if (isCategoryHeader(candidate) || isLikelyNextTerm(candidate)) {
                    break;
                }

                definitionLines.push(candidate);
                j++;
            }

            const definition = definitionLines.join(' ').trim();
            const categorySeenTerms = importedTermKeysByCategory[currentCategory];

            if (definition && !categorySeenTerms.has(normalizedTerm)) {
                importedCategories[currentCategory].push({
                    term,
                    definition,
                    difficulty: Math.ceil(definition.length / 50)
                });
                categorySeenTerms.add(normalizedTerm);
            }

            i = j > i + 1 ? j : i + 1;
        }

        if (!Array.isArray(studyData.categories)) {
            studyData.categories = [];
        }

        Object.keys(importedCategories).forEach(categoryName => {
            let existingCategory = studyData.categories.find(c => c.name === categoryName);

            if (!existingCategory) {
                existingCategory = { name: categoryName, terms: [] };
                studyData.categories.push(existingCategory);
            }

            if (!Array.isArray(existingCategory.terms)) {
                existingCategory.terms = [];
            }

            const existingTermKeys = new Set(existingCategory.terms.map(t => normalizeTerm(t.term)));
            importedCategories[categoryName].forEach(importedTerm => {
                const importedTermKey = normalizeTerm(importedTerm.term);
                if (!existingTermKeys.has(importedTermKey)) {
                    existingCategory.terms.push(importedTerm);
                    existingTermKeys.add(importedTermKey);
                }
            });
        });

        seedBuiltInTerms();
        saveToLocalStorage();
        populateCategorySelects();
        updateCategoryCards();
        updateStats();
        updateProgress();

        showStatus(`✓ Successfully imported ${getLearned()} unique terms across ${Object.keys(importedCategories).length} categories!`, 'success');
        textarea.value = '';

        setTimeout(() => {
            showView('home-view');
        }, 2000);
    } catch (error) {
        showStatus('Error parsing terms. Please check the format.', 'error');
        console.error(error);
    }
}

function showStatus(message, type) {
    const statusDiv = document.getElementById('import-status');
    statusDiv.textContent = message;
    statusDiv.className = type;
    statusDiv.style.display = 'block';
}

// ===================== CELEBRATION SYSTEM =====================

function showCelebration(title, message, score = null) {
    const modal = document.getElementById('celebration-modal');
    document.getElementById('celebration-title').textContent = title;
    document.getElementById('celebration-message').textContent = message;

    if (score !== null) {
        document.getElementById('celebration-score').textContent = `Score: ${score}%`;
    } else {
        document.getElementById('celebration-score').textContent = '';
    }

    modal.classList.remove('hidden');
    createConfetti();
}

function closeCelebration() {
    document.getElementById('celebration-modal').classList.add('hidden');
}

function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.innerHTML = '';

    const colors = ['#9E41B4', '#E5769B', '#2e8b57', '#6dd5a8', '#f4a261'];

    for (let i = 0; i < 30; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.delay = Math.random() * 0.3 + 's';
        confettiContainer.appendChild(piece);
    }
}

// Close celebration when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('celebration-modal');
    if (event.target === modal) {
        closeCelebration();
    }
});

// ===================== UTILITIES =====================

// Initialize on load
updateProgress();
