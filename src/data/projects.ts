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
      "Unsplash API",
      "Syncfusion",
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
        "Engineered an automated itinerary platform integrating Google's Gemini generative model with Appwrite's serverless database and auth layer, giving users structured day-by-day itineraries, visual cards, and administrative itinerary curation.",
      architectureType: "Client-Serverless Hybrid with External AI Inference",
      architectureDiagramDescription:
        "React Client (TypeScript + Tailwind) ➔ Appwrite (Auth & Database) + Google Gemini AI (Dynamic Itinerary Engine) + Unsplash API (Curated Visuals)",
      features: [
        "AI-Generated Travel Itineraries with structured daily schedules",
        "Personalized budget and preference-tailored recommendations",
        "Secure user authentication and profile management via Appwrite",
        "Real-time database storage for saved trips and shared itineraries",
        "Interactive administrative dashboard with Syncfusion charting",
        "Dynamic high-resolution location imagery powered by Unsplash API",
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
        "Client Browser (React + Socket.IO Client) ⇄ WebSocket Connection ⇄ Node.js / Express Server (Socket.IO Hub + JWT Auth) ⇄ MongoDB (Message Archive & User Registry)",
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
        "Next.js Frontend ➔ RESTful Express API ➔ MongoDB Cluster (Tasks, Categories, User Auth)",
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
