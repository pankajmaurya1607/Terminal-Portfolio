export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  tag: string;
  problem: string;
  solution: string;
  techStack: string[];
  impact: string;
}

export interface ExperienceData {
  company: string;
  role: string;
  period: string;
  location: string;
  overview: string;
  caseStudies: CaseStudy[];
}

export const experienceData: ExperienceData = {
  company: "Razorpay",
  role: "Software Development Engineer Intern",
  period: "January 2026 — June 2026",
  location: "Bangalore, India",
  overview:
    "Engineered core payment infrastructure and financial services. Worked across asynchronous reconciliation engines, merchant refund processing, payment gateway debugging, and automated settlement testing.",
  caseStudies: [
    {
      id: "kafka-reconciliation",
      number: "01",
      title: "Kafka-Based Bulk Reconciliation Re-Architecture",
      tag: "Distributed Systems & Event-Driven Pipelines",
      problem:
        "Synchronous API-based processing for Scrooge bulk reconciliation faced high latency and bottlenecked throughput during peak transactional loads.",
      solution:
        "Designed and implemented the Scrooge bulk reconciliation re-architecture, transitioning processing pipelines from synchronous HTTP endpoints toward Kafka-driven asynchronous event streaming for resilient horizontal scalability.",
      techStack: ["Apache Kafka", "Distributed Systems", "Event-Driven Architecture", "Scalability", "Backend Microservices"],
      impact: "Decoupled batch ingestion from processing workers, eliminating API timeouts during peak bulk transaction windows.",
    },
    {
      id: "merchant-refund-flow",
      number: "02",
      title: "Merchant Refund Workflow",
      tag: "Payment Lifecycle & Dashboard Services",
      problem:
        "Merchants required a robust, idempotent workflow to initiate and track multi-status refunds directly through the Merchant Dashboard without manual intervention.",
      solution:
        "Implemented backend services and state validation logic supporting merchant-initiated refund processing via the Merchant Dashboard with strict transaction boundaries and audit trails.",
      techStack: ["Node.js / Go", "REST APIs", "Payment Lifecycles", "Idempotency", "Database Transactions"],
      impact: "Streamlined merchant refund turnaround time and prevented duplicate refund triggers.",
    },
    {
      id: "upi-montran-gateway",
      number: "03",
      title: "UPI Montran Gateway Request Overrides",
      tag: "Gateway Integration & Reliability",
      problem:
        "Intermittent transaction failures in the UPI Montran gateway caused by Mozart request data override anomalies during high-concurrency payment routing.",
      solution:
        "Investigated and resolved Mozart request data override behavior affecting the UPI Montran gateway, ensuring strict payload immutability and payload schema integrity across transit hops.",
      techStack: ["UPI Protocol", "Payment Gateways", "Distributed Debugging", "Payload Validation"],
      impact: "Restored deterministic gateway request routing and eliminated edge-case transaction drops.",
    },
    {
      id: "settlement-service",
      number: "04",
      title: "Settlement Service Integration Testing",
      tag: "Financial Reliability & Testing",
      problem:
        "Complex multi-account fund movement rules in the settlement service risked regression errors during continuous deployment cycles.",
      solution:
        "Significantly expanded and modernized integration-test coverage for the settlement service, creating deterministic mock harnesses for upstream clearing entities and edge-case financial ledger states.",
      techStack: ["Integration Testing", "Test Automation", "Financial Ledgers", "CI/CD Reliability"],
      impact: "Reduced regression risks and ensured absolute consistency for critical merchant payout schedules.",
    },
  ],
};
