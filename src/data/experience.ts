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
  period: "January 2026 – June 2026",
  location: "Bengaluru, India",
  overview:
    "Engineered core payment infrastructure and financial services handling mission-critical throughput, asynchronous event-driven workflows, distributed idempotency, and high-reliability settlement pipelines.",
  caseStudies: [
    {
      id: "kafka-reconciliation",
      number: "01",
      title: "Kafka-Based Bulk Reconciliation Re-Architecture",
      tag: "Distributed Systems & Event-Driven Pipelines",
      problem:
        "Synchronous HTTP processing for Scrooge bulk reconciliation created latency bottlenecks, high peak database load, and tight coupling during peak transactional hours.",
      solution:
        "Re-architected Scrooge bulk reconciliation from synchronous HTTP to a Kafka-based asynchronous workflow, enabling horizontally scalable Kubernetes workers and complete fault isolation.",
      techStack: ["Apache Kafka", "Kubernetes", "Distributed Systems", "PostgreSQL", "Go / Node.js"],
      impact:
        "Processed 850K+ reconciliations/day and reduced peak database IOPS by 13% while eliminating API timeouts during peak windows.",
    },
    {
      id: "redis-distributed-idempotency",
      number: "02",
      title: "Redis-Based Distributed Idempotency Across Clusters",
      tag: "Idempotency & Distributed State Coordination",
      problem:
        "Multi-cluster payouts risked duplicate executions during scheduled processing windows without synchronized state coordination across cluster boundaries.",
      solution:
        "Engineered Redis-based distributed idempotency across 2 production clusters, coordinating next-run timestamps to ensure exactly one run per scheduled slot.",
      techStack: ["Redis", "Distributed Locking", "Timestamp Coordination", "Payment Payouts"],
      impact:
        "Prevented duplicate HDFC payout executions across production clusters and guaranteed strict single-execution slot semantics.",
    },
    {
      id: "mozart-v2-refund-integrity",
      number: "03",
      title: "Mozart V2 Multi-Service Response Aggregation",
      tag: "Data Integrity & Payment Gateway Migration",
      problem:
        "A production data-integrity anomaly in Mozart V2 refund flows caused response overwrites during multi-service response aggregation, blocking bank integrations.",
      solution:
        "Redesigned multi-service response aggregation logic to enforce strict payload immutability, eliminating response overwrite hazards.",
      techStack: ["Mozart V2", "UPI Protocol", "Response Aggregation", "Data Integrity"],
      impact:
        "Eliminated response overwrite and unblocked UPI Montran onboarding and IDFC merchant migration.",
    },
    {
      id: "refund-traceability-audit",
      number: "04",
      title: "Refund Traceability & Dashboard Initiation Source",
      tag: "API Architecture & Controlled Rollout",
      problem:
        "Dashboard refund events lacked granular initiation origin context, complicating financial traceability and dispute audits.",
      solution:
        "Introduced initiation_source in Dashboard APIs with backward-compatible schema changes and managed canary deployment via Splitz feature flags.",
      techStack: ["REST APIs", "Backward Compatibility", "Splitz Feature Flags", "Audit Logging"],
      impact:
        "Substantially improved refund traceability and auditability across all merchant-facing dashboard refund actions.",
    },
    {
      id: "settlements-slit-coverage",
      number: "05",
      title: "Settlements SLIT Test Coverage Expansion (0% to 80%)",
      tag: "Quality Assurance & Regression Elimination",
      problem:
        "Complex financial settlement flows lacked comprehensive end-to-end integration test coverage, posing regression risks during production releases.",
      solution:
        "Constructed automated Service-Level Integration Testing (SLIT) suites simulating full settlement lifecycles and edge-case financial ledgers.",
      techStack: ["Integration Testing (SLIT)", "Automated Test Suites", "Payment Settlements", "CI/CD"],
      impact:
        "Increased Settlements SLIT coverage from 0% to 80%, providing robust regression defense for critical payout workflows.",
    },
    {
      id: "settlement-metadata-validation",
      number: "06",
      title: "Runtime Metadata Validation & Fault Hardening",
      tag: "Production Reliability & Fault Tolerance",
      problem:
        "Malformed or unexpected settlement metadata payloads occasionally triggered unhandled service panics and unrecoverable 5xx HTTP errors.",
      solution:
        "Implemented strict runtime schema validation for incoming settlement metadata, intercepting malformed payloads before execution.",
      techStack: ["Runtime Schema Validation", "Error Handling", "Pydantic / Custom Parsers", "Reliability"],
      impact:
        "Eliminated service panics and converted unrecoverable 5xx server failures into deterministic 4xx client validation errors.",
    },
  ],
};
