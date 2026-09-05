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
    id: "leetcode-knight",
    title: "LeetCode Knight (Max Rating: 1877)",
    category: "Competitive Programming",
    issuer: "LeetCode, Codeforces, GeeksforGeeks",
    description: "Solved 2000+ algorithmic problems across LeetCode, Codeforces, and GeeksforGeeks with Knight ranking on LeetCode.",
    badge: "Knight (1877)",
  },
  {
    id: "ml-specialization",
    title: "Machine Learning Specialization",
    category: "Certifications & AI",
    issuer: "DeepLearning.AI & Stanford Online",
    description: "Completed comprehensive coursework in supervised learning, deep learning, and reinforcement learning (April 2025).",
    badge: "Stanford Online",
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
    badge: "Amazon",
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
