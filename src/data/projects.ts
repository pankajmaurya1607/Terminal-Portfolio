export interface ProjectData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  featured: boolean;
  tag: string;
  techStack: string[];
  links: {
    github: string;
    liveDemo?: string;
  };
  details: {
    overview: string;
    problem: string;
    solution: string;
    architectureType: string;
    architectureDiagramDescription: string;
    features: string[];
    engineeringDecisions: {
      decision: string;
      rationale: string;
    }[];
    challenges: string[];
    lessonsLearned: string[];
  };
}

export const projectsData: ProjectData[] = [
  {
    slug: "payfast",
    title: "PayFast",
    subtitle: "Enterprise Payment Processor built with Event-Driven Microservices",
    description:
      "A production-grade, distributed payment processing engine built with Go, Apache Kafka, PostgreSQL, and Redis. Implements card vault tokenization, distributed idempotency keys, real-time sliding-window velocity fraud detection, and immutable double-entry accounting ledgers.",
    featured: true,
    tag: "Fintech & Distributed Systems",
    techStack: [
      "Go",
      "Apache Kafka",
      "PostgreSQL 16",
      "Redis 7",
      "Docker",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
    ],
    links: {
      github: "https://github.com/pankajmaurya1607/PayFast",
      liveDemo: "https://payfast-payment-app.duckdns.org",
    },
    details: {
      overview:
        "PayFast is an enterprise payment processing pipeline engineered to handle financial transactions with mathematical accuracy, high fault tolerance, and zero double billing. It decouples high-throughput checkout ingress from asynchronous post-transaction workloads via Apache Kafka, providing audit-compliant double-entry accounting and an administrative merchant dashboard.",
      problem:
        "Standard CRUD architectures fail in payment systems: network timeouts cause duplicate customer charges, unencrypted PANs violate PCI-DSS regulations, race conditions corrupt account balances, and synchronous fraud checks degrade checkout latency.",
      solution:
        "Engineered an event-driven microservices architecture using Go and Apache Kafka. Integrated distributed idempotency keys at the API Gateway, an isolated PCI-DSS Card Vault for AES-GCM tokenization, a Redis sliding-window fraud velocity engine, and an append-only double-entry bookkeeping ledger in PostgreSQL.",
      architectureType: "Event-Driven Asynchronous Microservices Architecture",
      architectureDiagramDescription:
        "React Checkout / Merchant UI → API Gateway (Sync Idempotency + Auth) → Apache Kafka Event Bus → [Fraud Service (Redis) + Ledger Service (Postgres Double-Entry) + Vault Service (AES-GCM) + Webhook Dispatcher]",
      features: [
        "Distributed Idempotency Engine preventing duplicate transactions across parallel retries",
        "PCI-DSS inspired Card Vault with AES-GCM tokenization (raw PAN never touches gateway)",
        "Double-Entry Accounting Ledger maintaining mathematical debit/credit balance invariants",
        "Redis sliding-window velocity checks detecting automated card-testing fraud patterns",
        "Asynchronous event streaming over Apache Kafka for decoupled ledger and webhook execution",
        "Automated merchant settlement batching and recurring subscription billing engine",
        "React 19 Merchant Admin Dashboard with live telemetry, order filters, and refund management",
      ],
      engineeringDecisions: [
        {
          decision: "Double-Entry Bookkeeping Invariant (Sum of Debits - Credits = 0)",
          rationale:
            "Replaced single-column balance updates with append-only ledger journals. Every transaction records matching debit and credit entries, guaranteeing mathematically auditable fund tracking and zero balance corruption.",
        },
        {
          decision: "Database-Level Idempotency Keys with Unique Constraints",
          rationale:
            "Bound client-generated Idempotency-Keys to PostgreSQL unique constraints (merchant_id, idempotency_key), immediately halting duplicate parallel requests and returning cached receipts for retries.",
        },
        {
          decision: "Apache Kafka for Decoupled Post-Checkout Ingress",
          rationale:
            "Isolated checkout response latency from downstream accounting and webhook dispatches, allowing the gateway to acknowledge transactions in milliseconds while consumers process heavy side-effects asynchronously.",
        },
        {
          decision: "Isolated AES-GCM Card Vault Subnet",
          rationale:
            "Restricted raw card handling to a single standalone microservice, issuing opaque UUID tokens (tok_xxxx) to ensure merchant databases and gateways never store unencrypted PANs.",
        },
      ],
      challenges: [
        "Handling network timeouts during distributed bank authorization without leaving transactions in dangling states.",
        "Ensuring exactly-once semantics across Kafka consumer groups during high-volume consumer rebalances.",
      ],
      lessonsLearned: [
        "Financial systems must prioritize strong consistency over eventual consistency for core money movements.",
        "Append-only event models simplify retrospective auditability and dispute reconciliation.",
      ],
    },
  },
  {
    slug: "vaultmind",
    title: "VaultMind",
    subtitle: "Enterprise Knowledge Assistant & RAG Platform with Granular RBAC",
    description:
      "A production-grade, enterprise Retrieval-Augmented Generation (RAG) platform that securely indexes organizational documents, isolates department data with strict SQL-level Role-Based Access Control (RBAC), performs real-time semantic vector search with PostgreSQL + PGVector, and orchestrates asynchronous ingestion pipelines with Celery and Redis.",
    featured: true,
    tag: "Enterprise AI & RAG Platform",
    techStack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "PGVector",
      "Redis",
      "Celery",
      "LangChain",
      "Gemini",
      "Groq",
      "Docker",
      "React",
      "TypeScript",
    ],
    links: {
      github: "https://github.com/pankajmaurya1607/VaultMind",
      liveDemo: "https://vaultmind-ai.duckdns.org",
    },
    details: {
      overview:
        "VaultMind solves enterprise data privacy in generative AI. It allows multi-department organizations to query unstructured knowledge bases without confidential data leaking across corporate silos, backed by local ONNX vector embeddings and sub-100ms HNSW vector retrieval.",
      problem:
        "Standard RAG chatbots lack department boundary awareness, allowing cross-silo data leaks via prompt manipulation. Furthermore, synchronous file parsing freezes HTTP servers, and commercial embedding APIs expose sensitive corporate documents to external clouds.",
      solution:
        "Built an enterprise knowledge RAG platform using FastAPI, PostgreSQL + PGVector, and Celery. Enforces department-level data isolation at the SQL query layer, processes 50+ pages/minute asynchronously via Celery + Redis, and implements multi-provider LLM failover across Gemini, Groq, and local models.",
      architectureType: "Layered Micro-Platform with Asynchronous Worker Ingestion",
      architectureDiagramDescription:
        "Client (React SPA) → Nginx Reverse Proxy (:80) → FastAPI (JWT Auth + RBAC Enforcer) → PostgreSQL + PGVector (HNSW Cosine Search) + Redis / Celery Workers (Async File Parsing & FastEmbed ONNX)",
      features: [
        "Sub-100ms vector-search latency for secure document retrieval and AI-powered chat",
        "Asynchronous ingestion pipeline processing 50+ pages/min across PDF, DOCX, CSV, XLSX, Markdown, and TXT",
        "Multi-provider LLM failover across Gemini, Groq, and local models for offline operation",
        "Enforced RBAC and department data isolation with 0 RBAC leakage across 210+ automated tests",
        "Zero-friction Guest Quick-Try sandbox with automatic 10-minute TTL cleanup",
        "Multi-turn AI chat with grounded inline document citations and confidence scoring",
        "Prometheus real-time telemetry tracking vector search latency, token consumption, and worker health",
      ],
      engineeringDecisions: [
        {
          decision: "SQL-Layered Department Scoping over LLM System Prompts",
          rationale:
            "Enforced department scoping in the PostgreSQL WHERE clause during vector similarity search (WHERE d.department_id IN (:user_depts)), verified with 0 RBAC leakage across 210+ automated tests.",
        },
        {
          decision: "PostgreSQL + PGVector Unified Storage over Dedicated Vector DBs",
          rationale:
            "Stored vectors, user authentication, and audit logs within a single ACID relational database, avoiding dual-store synchronization overhead and enabling single-query vector-relational joins.",
        },
        {
          decision: "Multi-Provider Failover (Gemini, Groq, Local Models)",
          rationale:
            "Architected automatic failover between cloud LLMs (Gemini, Groq) and local models, enabling offline operations without paid API dependencies.",
        },
        {
          decision: "Asynchronous Celery Worker Pool for File Extraction",
          rationale:
            "Offloaded multi-format parsing (PDF, DOCX, CSV, XLSX, MD, TXT), recursive chunking, and tensor generation, achieving sustained processing rates of 50+ pages/minute.",
        },
      ],
      challenges: [
        "Optimizing HNSW index parameters (m and ef_search) to achieve sub-100ms vector search latency with high recall.",
        "Preventing memory bloat during concurrent multi-page document extractions across Celery worker pools.",
      ],
      lessonsLearned: [
        "Security in AI systems must be enforced at the data retrieval boundary rather than relying on model prompt compliance.",
        "Decoupling embedding generation into background queues prevents CPU throttling on web worker processes.",
      ],
    },
  },
  {
    slug: "travel-agency",
    title: "Travel Agency",
    subtitle: "AI-Powered Travel Planning & Itinerary Generation Platform",
    description:
      "A modern travel engineering platform that leverages Google Gemini AI and Appwrite to dynamically generate personalized multi-day travel itineraries with real-time curated imagery and an administrative control suite.",
    featured: true,
    tag: "AI & Full-Stack Platform",
    techStack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Appwrite",
      "Google Gemini API",
      "Syncfusion",
      "Unsplash API",
    ],
    links: {
      github: "https://github.com/pankajmaurya1607",
      liveDemo: "https://travel-agency-demo.vercel.app",
    },
    details: {
      overview:
        "Travel Agency solves the friction of multi-source travel planning by synthesizing destination research, personalized schedule generation, lodging recommendations, and interactive visual itineraries into a single unified platform.",
      problem:
        "Traditional travel research requires toggling dozens of tabs across flight engines, travel blogs, maps, and review platforms, resulting in fragmented notes, inefficient schedules, and decision fatigue.",
      solution:
        "Developed an AI-powered travel platform for personalized itinerary generation, improving trip planning through preference-based recommendations, Appwrite secure authentication, and administrative itinerary curation.",
      architectureType: "Client-Serverless Hybrid with External AI Inference",
      architectureDiagramDescription:
        "React Client (TypeScript + Tailwind) → Appwrite (Auth & Database) + Google Gemini AI (Dynamic Itinerary Engine) + Syncfusion + Unsplash API (Curated Visuals)",
      features: [
        "AI-Powered travel platform for personalized itinerary generation via preference-based recommendations",
        "Secure authentication and persistent data management via Appwrite administrative dashboard",
        "Integrated Gemini, Unsplash, and Syncfusion APIs for dynamic itineraries and travel visualizations",
        "Structured day-by-day itineraries with interactive schedule cards",
        "High-resolution location imagery powered by Unsplash API",
        "Fully responsive interface optimized for mobile travelers",
      ],
      engineeringDecisions: [
        {
          decision: "Structured JSON Prompting for Gemini AI",
          rationale:
            "Enforced strict JSON schema output from Gemini LLM calls, ensuring the frontend parser never breaks from unstructured text blobs.",
        },
        {
          decision: "Appwrite for Backend as a Service",
          rationale:
            "Reduced backend boilerplate by leveraging Appwrite's built-in OAuth, document database collections, and fine-grained access rules.",
        },
        {
          decision: "Client-Side Caching for Unsplash Image Queries",
          rationale:
            "Prevented redundant external API rate limit consumption by caching destination imagery keys locally.",
        },
      ],
      challenges: [
        "Handling LLM latency and streaming UI state to maintain smooth perceived performance.",
        "Parsing complex recursive itinerary JSON schemas reliably across arbitrary destination inputs.",
      ],
      lessonsLearned: [
        "Prompt engineering requires defensive parsing and fallback mock structures in production client apps.",
        "Serverless database indexing is essential for snappy user trip queries.",
      ],
    },
  },
  {
    slug: "buzz-talk",
    title: "Buzz Talk",
    subtitle: "Real-Time Distributed Chat & Presence Communication Platform",
    description:
      "A high-concurrency real-time communication platform engineered with Socket.IO, Express, and MongoDB, featuring instant bi-directional messaging, heartbeat presence detection, and user discovery.",
    featured: true,
    tag: "Real-Time Systems & WebSockets",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
    ],
    links: {
      github: "https://github.com/pankajmaurya1607",
    },
    details: {
      overview:
        "Buzz Talk is a dedicated real-time messaging application designed to handle low-latency peer messaging with persistent conversational history, user authentication, and live socket connection tracking.",
      problem:
        "HTTP polling architectures introduce intolerable latency, excess server overhead, and inconsistent synchronization for messaging applications.",
      solution:
        "Implemented full-duplex WebSocket communication using Socket.IO layered on an Express.js backend, maintaining active connection registries, broadcast message delivery, and persistent MongoDB chat storage.",
      architectureType: "Full-Duplex WebSocket Client-Server Architecture",
      architectureDiagramDescription:
        "Client Browser (React + Socket.IO Client) ↔ WebSocket Connection ↔ Node.js / Express Server (Socket.IO Hub + JWT Auth) ↔ MongoDB (Message Archive & User Registry)",
      features: [
        "Sub-100ms real-time text messaging via persistent WebSockets",
        "Secure user authentication with salted hashing and JWT tokens",
        "Active online/offline presence status tracking",
        "Fast instant username search across the user directory",
        "Personalized user profiles and account customization",
        "Fluid responsive chat UI with auto-scrolling message streams",
      ],
      engineeringDecisions: [
        {
          decision: "In-Memory Socket Mapping with MongoDB Persistence",
          rationale:
            "Mapped active socket IDs to user IDs in memory for instant O(1) routing while asynchronously writing message payloads to MongoDB.",
        },
        {
          decision: "Optimistic UI Message Dispatch",
          rationale:
            "Rendered outgoing messages instantly in the client thread before socket acknowledgement, resulting in zero perceived input latency.",
        },
        {
          decision: "JWT Verification on WebSocket Handshake",
          rationale:
            "Authenticated connection requests directly during the initial WebSocket handshake to reject unauthorized sockets before allocation.",
        },
      ],
      challenges: [
        "Preventing race conditions when users reconnect across flaky mobile network transitions.",
        "Managing socket disconnect cleanups to avoid ghost 'online' statuses.",
      ],
      lessonsLearned: [
        "Separating transient transport events (presence, typing) from persistent storage events (messages) optimizes database throughput.",
        "Proper cleanup of event listeners in React prevents memory leaks.",
      ],
    },
  },
  {
    slug: "task-manager",
    title: "Task Manager",
    subtitle: "Full-Stack Collaborative Task & Workflow Management Application",
    description:
      "A task management application built with Next.js, Express, and MongoDB, supporting granular task lifecycles, OAuth integration, category filtering, and status progression metrics.",
    featured: false,
    tag: "Full-Stack Web App",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Material UI",
    ],
    links: {
      github: "https://github.com/pankajmaurya1607",
    },
    details: {
      overview:
        "Task Manager empowers developers and teams to organize complex sprint items, categorize priorities, and monitor completion progress across customizable project boards.",
      problem:
        "Simple to-do lists lack categorization, authentication isolation, and progress visibility needed for structured workflow management.",
      solution:
        "Engineered a secure full-stack application featuring OAuth / email authentication, MongoDB document relationships, task status tracking, and categorized filtering.",
      architectureType: "Next.js Frontend with RESTful Micro-Backend",
      architectureDiagramDescription:
        "Next.js Frontend → RESTful Express API → MongoDB Cluster (Tasks, Categories, User Auth)",
      features: [
        "Full task CRUD operations (Create, Read, Update, Delete)",
        "Configurable task categories and priority levels",
        "Dynamic task progress tracking and completion analytics",
        "Dual authentication: Google OAuth and secure email/password",
        "User profile management and avatar personalization",
        "Responsive cross-device layout with accessible forms",
      ],
      engineeringDecisions: [
        {
          decision: "Next.js App Router for Client Rendering",
          rationale:
            "Provided optimized client bundle sizes and fast client-side transitions.",
        },
        {
          decision: "Normalized MongoDB Schemas for Tasks and Categories",
          rationale:
            "Enabled clean querying, indexing on user IDs, and safe cascading operations.",
        },
      ],
      challenges: [
        "Synchronizing OAuth session tokens seamlessly between Next.js and the Express backend.",
      ],
      lessonsLearned: [
        "Consistent API response wrapper conventions simplify client-side error handling.",
      ],
    },
  },
];
