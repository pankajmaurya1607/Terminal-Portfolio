export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  issuer: string;
  description: string;
  badge: string;
}

export const achievementsData: AchievementItem[] = [
  {
    id: "dsa-1800",
    title: "1800+ Algorithmic Problems Solved",
    category: "Competitive Programming",
    issuer: "LeetCode, Codeforces, GeeksforGeeks",
    description: "Consistent problem solver with Knight rating on LeetCode (1877) and Pupil on Codeforces (1239).",
    badge: "1800+ Solved",
  },
  {
    id: "ml-specialization",
    title: "Machine Learning Specialization",
    category: "Certifications & AI",
    issuer: "DeepLearning.AI / Coursera",
    description: "Rigorous certification covering supervised learning, neural networks, unsupervised learning, and recommender systems.",
    badge: "Certified",
  },
  {
    id: "fly-program",
    title: "FLY Program Graduate",
    category: "Leadership & Mindset",
    issuer: "Competitiveness Mindset Institute (CMI)",
    description: "Selected participant for intensive professional ethics, high-performance thinking, and leadership execution training.",
    badge: "Leadership",
  },
  {
    id: "hackon-amazon",
    title: "HackOn With Amazon — Season 4",
    category: "Hackathon",
    issuer: "Amazon",
    description: "Participated and built solutions under high-pressure national competitive engineering hackathon stages.",
    badge: "National Participant",
  },
  {
    id: "softathalon",
    title: "Softathalon — Avishkar",
    category: "Technical Fest",
    issuer: "MNNIT Allahabad",
    description: "Competitive software design and algorithmic programming event during MNNIT's annual technical fest Avishkar.",
    badge: "MNNIT Avishkar",
  },
];
