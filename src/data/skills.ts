export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Go", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Backend & Systems",
    skills: [
      "Go (Microservices)",
      "FastAPI (Python)",
      "Node.js",
      "Express.js",
      "Apache Kafka",
      "Redis (Caching & Rate Limiting)",
      "Celery (Worker Queues)",
      "Socket.IO",
      "REST APIs",
      "Event-Driven Architecture",
    ],
  },
  {
    title: "Database & Vector Storage",
    skills: [
      "PostgreSQL 16",
      "PGVector (HNSW Vector Indexing)",
      "Redis 7",
      "MongoDB",
      "Double-Entry Ledgers",
      "Database Migrations (Alembic/Go-Migrate)",
    ],
  },
  {
    title: "Enterprise AI & RAG",
    skills: [
      "Retrieval-Augmented Generation (RAG)",
      "Semantic Cosine Vector Search",
      "FastEmbed (Local ONNX BGE)",
      "Google Gemini API",
      "Role-Based Access Control (RBAC)",
    ],
  },
  {
    title: "Frontend Engineering",
    skills: ["React 19", "Next.js (App Router)", "Tailwind CSS", "TypeScript", "Responsive Design"],
  },
  {
    title: "Developer Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "Docker Compose", "Nginx", "Linux/Unix", "Postman", "VS Code"],
  },
  {
    title: "Core Computer Science",
    skills: [
      "Data Structures & Algorithms",
      "System Design & Distributed Architectures",
      "Idempotency & Fault Tolerance",
      "Object-Oriented Programming (OOP)",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];
