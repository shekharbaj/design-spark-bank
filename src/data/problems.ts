export type Difficulty = "Easy" | "Medium" | "Hard";
export type UserType = "B2B" | "B2C";
export type Industry =
  | "Healthcare"
  | "FinTech"
  | "Sustainability"
  | "Education"
  | "E-Commerce"
  | "Transportation"
  | "Government"
  | "Food & Agriculture"
  | "Real Estate"
  | "Social Impact";

export interface Problem {
  id: string;
  hmw: string;
  category: Industry;
  difficulty: Difficulty;
  userType: UserType;
  context: string;
  persona: string;
  constraints: string[];
}

export const problems: Problem[] = [
  {
    id: "p-001",
    hmw: "How might we reduce hospital emergency room wait times for non-critical patients?",
    category: "Healthcare",
    difficulty: "Hard",
    userType: "B2C",
    context:
      "Average ER wait times exceed 4 hours in urban hospitals, leading to patient dissatisfaction and overcrowding. Many non-critical cases could be triaged or redirected more efficiently.",
    persona: "A 35-year-old parent bringing a child with a minor injury to the ER at 9 PM.",
    constraints: [
      "Must comply with HIPAA and local healthcare regulations.",
      "Cannot require patients to download a new app before arrival.",
      "Solution must integrate with existing hospital EHR systems.",
    ],
  },
  {
    id: "p-002",
    hmw: "How might we help gig workers build a portable financial identity for accessing credit?",
    category: "FinTech",
    difficulty: "Hard",
    userType: "B2C",
    context:
      "Gig economy workers often lack traditional pay stubs and employment records, making them invisible to standard credit scoring models. Over 59 million Americans freelance, yet most are underserved by banks.",
    persona: "A 28-year-old rideshare driver who wants to apply for a small business loan.",
    constraints: [
      "Must work across multiple gig platforms (Uber, DoorDash, Fiverr).",
      "Cannot rely on users manually uploading documents.",
      "Must meet financial data privacy regulations (GLBA).",
    ],
  },
  {
    id: "p-003",
    hmw: "How might we gamify personal carbon footprint tracking to drive sustained behavior change?",
    category: "Sustainability",
    difficulty: "Medium",
    userType: "B2C",
    context:
      "Most carbon footprint calculators are used once and abandoned. Users lack ongoing motivation to change habits because feedback is abstract and delayed.",
    persona: "A 22-year-old college student who cares about climate but feels individual actions are pointless.",
    constraints: [
      "Must not require hardware sensors or IoT devices.",
      "Gamification must avoid trivializing the climate crisis.",
      "Data sources for carbon estimates must be scientifically credible.",
    ],
  },
  {
    id: "p-004",
    hmw: "How might we make K-12 remote learning more engaging for students with ADHD?",
    category: "Education",
    difficulty: "Medium",
    userType: "B2B",
    context:
      "Students with ADHD struggle disproportionately with remote learning due to distractions and lack of structure. Teachers report a 40% drop in engagement for these students during virtual sessions.",
    persona: "A 10-year-old student with ADHD attending 4th grade remotely.",
    constraints: [
      "Must work within existing video conferencing tools (Zoom, Google Meet).",
      "Cannot require parental supervision at all times.",
      "Must comply with COPPA for children's data privacy.",
    ],
  },
  {
    id: "p-005",
    hmw: "How might we reduce return rates for online fashion retailers by improving size accuracy?",
    category: "E-Commerce",
    difficulty: "Easy",
    userType: "B2B",
    context:
      "Online fashion returns average 30%, with 'wrong size' cited in 52% of cases. Returns cost retailers billions and have a significant environmental impact from reverse logistics.",
    persona: "A 40-year-old woman shopping for professional attire from a new brand online.",
    constraints: [
      "Solution should work on mobile web without AR capabilities.",
      "Must support international sizing standards.",
      "Cannot add more than 2 steps to the checkout flow.",
    ],
  },
  {
    id: "p-006",
    hmw: "How might we improve last-mile delivery efficiency in dense urban neighborhoods?",
    category: "Transportation",
    difficulty: "Hard",
    userType: "B2B",
    context:
      "Last-mile delivery accounts for 53% of total shipping costs. Drivers waste an average of 15 minutes per delivery finding parking and navigating apartment buildings.",
    persona: "A delivery driver completing 120 stops per day in downtown Chicago.",
    constraints: [
      "Must not require infrastructure changes (e.g., new lockers).",
      "Must work offline in areas with poor cellular coverage.",
      "Solution must reduce delivery time without compromising safety.",
    ],
  },
  {
    id: "p-007",
    hmw: "How might we make government benefit applications accessible to elderly citizens without internet access?",
    category: "Government",
    difficulty: "Medium",
    userType: "B2C",
    context:
      "42% of adults over 65 do not use the internet. As government services move online, millions of eligible seniors miss out on benefits they qualify for.",
    persona: "A 78-year-old retired veteran applying for supplemental nutrition assistance.",
    constraints: [
      "Must work without a smartphone or computer.",
      "Must comply with Section 508 accessibility standards.",
      "Cannot rely on family members as intermediaries.",
    ],
  },
  {
    id: "p-008",
    hmw: "How might we reduce food waste in restaurant supply chains through better demand forecasting?",
    category: "Food & Agriculture",
    difficulty: "Easy",
    userType: "B2B",
    context:
      "Restaurants waste an estimated 22-33 billion pounds of food annually in the US. Poor demand forecasting leads to over-ordering, especially for perishable ingredients.",
    persona: "A restaurant manager running a mid-size Italian restaurant with 80 covers.",
    constraints: [
      "Must integrate with common POS systems (Toast, Square).",
      "Forecast accuracy must exceed 85% within 2 weeks of deployment.",
      "Cannot require menu changes or reductions.",
    ],
  },
  {
    id: "p-009",
    hmw: "How might we help first-time homebuyers understand true ownership costs beyond the listing price?",
    category: "Real Estate",
    difficulty: "Easy",
    userType: "B2C",
    context:
      "First-time buyers are often blindsided by costs like property taxes, HOA fees, maintenance, and insurance. 44% of new homeowners report spending significantly more than expected in year one.",
    persona: "A 30-year-old couple buying their first home with a combined income of $85,000.",
    constraints: [
      "Cost estimates must be localized to the specific property/ZIP code.",
      "Must not replace or conflict with existing mortgage pre-approval tools.",
      "Data must be updated at least quarterly.",
    ],
  },
  {
    id: "p-010",
    hmw: "How might we connect isolated elderly residents in rural areas with volunteer companions?",
    category: "Social Impact",
    difficulty: "Medium",
    userType: "B2C",
    context:
      "Social isolation among the elderly is linked to a 26% increase in premature mortality. In rural areas, geographic distance and lack of transportation make in-person visits rare.",
    persona: "An 82-year-old widow living alone on a farm 30 miles from the nearest town.",
    constraints: [
      "Must work with basic phone service (landline or basic mobile).",
      "Volunteer matching must include background checks.",
      "Must respect the dignity and autonomy of elderly participants.",
    ],
  },
];

export const industries: Industry[] = [
  "Healthcare",
  "FinTech",
  "Sustainability",
  "Education",
  "E-Commerce",
  "Transportation",
  "Government",
  "Food & Agriculture",
  "Real Estate",
  "Social Impact",
];

export const difficulties: Difficulty[] = ["Easy", "Medium", "Hard"];
export const userTypes: UserType[] = ["B2B", "B2C"];
