export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend Engineering",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    title: "Backend & Systems",
    skills: ["Node.js", "Express.js", "Apache Kafka", "Socket.IO", "REST APIs", "Microservices"],
  },
  {
    title: "Database & Storage",
    skills: ["MongoDB", "Appwrite", "Mongoose", "Data Modeling"],
  },
  {
    title: "Developer Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Linux/Unix", "Docker"],
  },
  {
    title: "Core Computer Science",
    skills: [
      "Data Structures & Algorithms",
      "System Design",
      "Distributed Systems",
      "Object-Oriented Programming (OOP)",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];
