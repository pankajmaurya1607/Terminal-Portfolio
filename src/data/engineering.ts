export interface EngineeringPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  coreConcepts: string[];
  practicalApplication: string;
}

export const engineeringPillars: EngineeringPillar[] = [
  {
    number: "01",
    title: "Backend Systems",
    subtitle: "APIs, Asynchronous Processing, Reliable Services",
    description:
      "Architecting deterministic server-side systems with resilient failure handling, clean interface contracts, transactional integrity, and low-latency API response cycles.",
    coreConcepts: [
      "RESTful API Design",
      "Asynchronous Background Jobs",
      "Database Modeling & Indexing",
      "Idempotency & State Machines",
      "Authentication & Security",
    ],
    practicalApplication:
      "Implemented merchant refund flows and settlement service test harnesses during SDE internship at Razorpay.",
  },
  {
    number: "02",
    title: "Distributed Systems",
    subtitle: "Kafka, Event-Driven Architecture, Scalability",
    description:
      "Designing loosely coupled, horizontally scalable services that exchange high-throughput event streams without bottlenecking synchronous client threads.",
    coreConcepts: [
      "Message Queues (Apache Kafka)",
      "Producer/Consumer Patterns",
      "Event-Driven Architecture",
      "Data Consistency & Partitioning",
      "Decoupled Microservices",
    ],
    practicalApplication:
      "Engineered the Scrooge bulk reconciliation re-architecture at Razorpay, migrating from synchronous API bottlenecks to Kafka event queues.",
  },
  {
    number: "03",
    title: "Full-Stack Development",
    subtitle: "React, Node.js, Next.js, MongoDB",
    description:
      "Building unified end-to-end applications where intuitive, high-performance client interfaces seamlessly connect with performant backend pipelines.",
    coreConcepts: [
      "Modern React / Next.js Ecosystems",
      "State Management & Optimistic UI",
      "WebSockets & Real-Time Sync",
      "Tailwind CSS & Design Systems",
      "End-to-End Type Safety",
    ],
    practicalApplication:
      "Built Buzz Talk with real-time Socket.IO synchronization and Travel Agency with Google Gemini AI integration.",
  },
  {
    number: "04",
    title: "Problem Solving",
    subtitle: "Data Structures & Algorithms",
    description:
      "Applying analytical rigor, computational complexity analysis, and disciplined algorithmic thinking to solve non-trivial engineering problems under strict constraints.",
    coreConcepts: [
      "Graphs, Trees & Dynamic Programming",
      "Time & Space Complexity Tradeoffs",
      "Systematic Edge Case Analysis",
      "Competitive Programming Speed",
      "Mathematical Reasoning",
    ],
    practicalApplication:
      "Solved 1800+ algorithmic problems across LeetCode (1877 rating) and Codeforces (1239 rating).",
  },
];
