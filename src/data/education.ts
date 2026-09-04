export interface EducationEntry {
  institution: string;
  location: string;
  degree: string;
  field: string;
  period: string;
  grade: string;
  details?: string[];
}

export const educationData: EducationEntry[] = [
  {
    institution: "Motilal Nehru National Institute of Technology (MNNIT) Allahabad",
    location: "Prayagraj, Uttar Pradesh",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering",
    period: "November 2022 — June 2026",
    grade: "CPI: 8.12 / 10",
    details: [
      "Core Coursework: Data Structures, Algorithms, Operating Systems, Database Management Systems, Computer Networks, Object-Oriented Programming, System Design.",
      "Member of technical clubs and competitive programming groups.",
    ],
  },
  {
    institution: "Jawahar Navodaya Vidyalaya",
    location: "Ayodhya, Uttar Pradesh",
    degree: "Senior Secondary Education (Class XII)",
    field: "Science (PCM)",
    period: "Graduated 2021",
    grade: "Score: 92.0%",
    details: ["CBSE Board Curriculum with distinction in Mathematics and Physics."],
  },
  {
    institution: "Jawahar Navodaya Vidyalaya",
    location: "Ayodhya, Uttar Pradesh",
    degree: "Secondary Education (Class X)",
    field: "General Science & Mathematics",
    period: "Graduated 2019",
    grade: "Score: 85.6%",
    details: ["CBSE Board Curriculum."],
  },
];
