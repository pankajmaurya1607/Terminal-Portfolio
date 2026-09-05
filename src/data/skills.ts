export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Go", "Python", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Backend",
    skills: [
      "FastAPI",
      "Node.js",
      "Express.js",
      "REST APIs",
      "gRPC",
      "Protobuf",
      "Pydantic",
      "Microservices",
      "Testing",
    ],
  },
  {
    title: "Data & Distributed Systems",
    skills: [
      "PostgreSQL",
      "PGVector",
      "MongoDB",
      "Redis",
      "Kafka",
      "Celery",
      "Kubernetes",
      "Docker",
    ],
  },
  {
    title: "AI / ML",
    skills: [
      "RAG",
      "LangChain",
      "LLMs",
      "Vector Search",
      "Embeddings",
      "Gemini",
      "Groq",
      "Semantic Search",
    ],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Core CS",
    skills: [
      "DSA",
      "OOP",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
      "Distributed Systems",
      "System Design",
    ],
  },
];
