import { profileData } from "./profile";
import { experienceData } from "./experience";
import { projectsData } from "./projects";
import { skillsData } from "./skills";
import { codingData } from "./coding";
import { educationData } from "./education";
import { achievementsData } from "./achievements";

export interface TerminalCommandDef {
  command: string;
  description: string;
  usage?: string;
}

export const availableCommands: TerminalCommandDef[] = [
  { command: "help", description: "Display list of all available commands" },
  { command: "whoami", description: "Display quick identity and engineering focus" },
  { command: "about", description: "Learn about background, interests, and education" },
  { command: "experience", description: "View Razorpay SDE internship & engineering case studies" },
  { command: "projects", description: "List all engineering projects" },
  { command: "project <name>", description: "View deep details for payfast | vaultmind | travel-agency | buzz-talk | task-manager" },
  { command: "skills", description: "List technical stack by category" },
  { command: "stats", description: "Display DSA and competitive programming metrics" },
  { command: "education", description: "View academic background from MNNIT Allahabad" },
  { command: "achievements", description: "List competitive milestones and certifications" },
  { command: "contact", description: "Get direct contact email and social links" },
  { command: "resume", description: "Open / download official resume" },
  { command: "github", description: "Open Pankaj's GitHub profile" },
  { command: "linkedin", description: "Open Pankaj's LinkedIn profile" },
  { command: "leetcode", description: "Open LeetCode profile (Knight, 1877 rating)" },
  { command: "codeforces", description: "Open Codeforces profile (1239 rating)" },
  { command: "clear", description: "Clear the terminal screen" },
  { command: "sudo hire pankaj", description: "Authenticate candidate recruitment flow" },
];

export interface TerminalResponse {
  type: "text" | "formatted" | "error" | "action";
  content: string | React.ReactNode;
  actionUrl?: string;
  clear?: boolean;
}

export function executeCommand(rawInput: string): TerminalResponse {
  const trimmed = rawInput.trim();
  const lower = trimmed.toLowerCase();
  const args = trimmed.split(" ").filter(Boolean);
  const baseCmd = args[0]?.toLowerCase() || "";

  if (!baseCmd) {
    return { type: "text", content: "" };
  }

  // Clear
  if (baseCmd === "clear") {
    return { type: "text", content: "", clear: true };
  }

  // Help
  if (baseCmd === "help" || baseCmd === "--help" || baseCmd === "-h") {
    const list = availableCommands
      .map(
        (c) =>
          `  ${c.command.padEnd(20, " ")} ${c.description}`
      )
      .join("\n");
    return {
      type: "text",
      content: `AVAILABLE COMMANDS:\n\n${list}\n\nTip: You can click the quick-command chips above or press Up/Down arrows to cycle command history.`,
    };
  }

  // whoami
  if (baseCmd === "whoami") {
    return {
      type: "text",
      content: `${profileData.name.toUpperCase()}\n${profileData.role}\nFocus: Backend • Distributed Systems • Enterprise AI\nEducation: ${profileData.statsSummary.college} (CGPA: ${profileData.statsSummary.cpi})\nCurrent: ${profileData.statsSummary.experienceRole}\nDSA: ${profileData.statsSummary.dsaCount} Problems Solved`,
    };
  }

  // about
  if (baseCmd === "about") {
    return {
      type: "text",
      content: `ABOUT PANKAJ KUMAR MAURYA\n──────────────────────────────────────────────────\n${profileData.bio}\n\nCORE ENGINEERING FOCUS:\n  ➜ Backend Systems (FastAPI, Go, Node.js, REST, gRPC, microservices)\n  ➜ Data & Distributed Systems (Kafka, Redis, PostgreSQL, Celery, Kubernetes, Docker)\n  ➜ AI/ML & RAG (PGVector, local FastEmbed ONNX, LangChain, Gemini, Groq)\n  ➜ Frontend & Full-Stack (React 19, TypeScript, Tailwind CSS)\n  ➜ Problem Solving (2000+ algorithmic problems, LeetCode Knight 1877)\n\nEDUCATION: ${educationData[0].institution} | B.Tech CSE (2022-2026) | CGPA: 8.12/10.0`,
    };
  }

  // experience
  if (baseCmd === "experience") {
    const caseStudiesSummary = experienceData.caseStudies
      .map(
        (cs) =>
          `  • [${cs.tag}] ${cs.title}\n    Problem: ${cs.problem}\n    Solution: ${cs.solution}\n    Impact: ${cs.impact}\n    Stack: ${cs.techStack.join(" • ")}`
      )
      .join("\n\n");

    return {
      type: "text",
      content: `WORK EXPERIENCE: ${experienceData.role.toUpperCase()} @ ${experienceData.company.toUpperCase()}\nPeriod: ${experienceData.period} | Location: ${experienceData.location}\n\nOverview:\n${experienceData.overview}\n\nKEY ENGINEERING DELIVERABLES:\n${caseStudiesSummary}`,
    };
  }

  // projects or project <name>
  if (baseCmd === "project" || baseCmd === "projects") {
    if (args.length > 1 && baseCmd === "project") {
      const slugQuery = args.slice(1).join("-").toLowerCase();
      const proj = projectsData.find(
        (p) =>
          p.slug === slugQuery ||
          p.slug.includes(slugQuery) ||
          p.title.toLowerCase().includes(slugQuery)
      );

      if (proj) {
        return {
          type: "text",
          content: `PROJECT: ${proj.title.toUpperCase()}\nSubtitle: ${proj.subtitle}\n──────────────────────────────────────────────────\nStack: ${proj.techStack.join(" • ")}\n\nOVERVIEW:\n${proj.details.overview}\n\nARCHITECTURE:\n${proj.details.architectureDiagramDescription}\n\nKEY FEATURES:\n${proj.details.features.map((f) => `  ✔ ${f}`).join("\n")}\n\nLinks:\n  GitHub: ${proj.links.github}${proj.links.liveDemo ? `\n  Live Demo: ${proj.links.liveDemo}` : ""}\n  Case Study: /projects/${proj.slug}`,
        };
      } else {
        return {
          type: "error",
          content: `Project '${args.slice(1).join(" ")}' not found. Available projects:\n  - payfast\n  - vaultmind\n  - travel-agency\n  - buzz-talk\n  - task-manager\n\nUsage: project payfast`,
        };
      }
    }

    // List projects
    const list = projectsData
      .map(
        (p, idx) =>
          `  0${idx + 1} ${p.title.padEnd(16, " ")} [${p.tag}]\n     ${p.description}\n     Stack: ${p.techStack.join(" • ")}\n     Details: /projects/${p.slug}`
      )
      .join("\n\n");

    return {
      type: "text",
      content: `FEATURED PROJECTS:\n──────────────────────────────────────────────────\n\n${list}\n\nTip: Type 'project <name>' (e.g. 'project payfast' or 'project vaultmind') for an in-depth breakdown.`,
    };
  }

  // skills
  if (baseCmd === "skills") {
    const list = skillsData
      .map(
        (c) =>
          `  ${c.title.toUpperCase()}:\n    ${c.skills.join(" • ")}`
      )
      .join("\n\n");
    return {
      type: "text",
      content: `TECHNICAL SKILLS & COMPETENCIES:\n──────────────────────────────────────────────────\n\n${list}`,
    };
  }

  // stats / coding
  if (baseCmd === "stats" || baseCmd === "coding") {
    const metricsStr = codingData.metrics
      .map((m) => `  ${m.label.padEnd(28, " ")} : ${m.value} (${m.detail})`)
      .join("\n");
    const platformsStr = codingData.platforms
      .map((p) => `  ${p.name.padEnd(14, " ")}: ${p.statBadge} -> ${p.url}`)
      .join("\n");
    return {
      type: "text",
      content: `PROBLEM SOLVING & CODING METRICS:\n──────────────────────────────────────────────────\n\n${metricsStr}\n\nPLATFORMS:\n${platformsStr}`,
    };
  }

  // education
  if (baseCmd === "education") {
    const list = educationData
      .map(
        (e) =>
          `  ${e.institution}\n  ${e.degree} in ${e.field}\n  Period: ${e.period} | Grade: ${e.grade}`
      )
      .join("\n\n");
    return {
      type: "text",
      content: `ACADEMIC BACKGROUND:\n──────────────────────────────────────────────────\n\n${list}`,
    };
  }

  // achievements
  if (baseCmd === "achievements") {
    const list = achievementsData
      .map((a) => `  • [${a.badge}] ${a.title} (${a.issuer})\n    ${a.description}`)
      .join("\n");
    return {
      type: "text",
      content: `ACHIEVEMENTS & CERTIFICATIONS:\n──────────────────────────────────────────────────\n\n${list}`,
    };
  }

  // contact
  if (baseCmd === "contact") {
    return {
      type: "text",
      content: `GET IN TOUCH:\n──────────────────────────────────────────────────\nPhone    : ${profileData.phone}\nEmail    : ${profileData.email}\nGitHub   : ${profileData.links.github}\nLinkedIn : ${profileData.links.linkedin}\nLeetCode : ${profileData.links.leetcode}\n\n"Let's build something reliable and useful."`,
    };
  }

  // links
  if (baseCmd === "github") {
    return {
      type: "action",
      content: `Opening GitHub profile: ${profileData.links.github}`,
      actionUrl: profileData.links.github,
    };
  }

  if (baseCmd === "linkedin") {
    return {
      type: "action",
      content: `Opening LinkedIn profile: ${profileData.links.linkedin}`,
      actionUrl: profileData.links.linkedin,
    };
  }

  if (baseCmd === "leetcode") {
    return {
      type: "action",
      content: `Opening LeetCode profile (Knight, 1877 rating): ${profileData.links.leetcode}`,
      actionUrl: profileData.links.leetcode,
    };
  }

  if (baseCmd === "codeforces") {
    return {
      type: "action",
      content: `Opening Codeforces profile (1239 rating): ${profileData.links.codeforces}`,
      actionUrl: profileData.links.codeforces,
    };
  }

  if (baseCmd === "resume") {
    return {
      type: "action",
      content: `Navigating to Resume viewer: /resume`,
      actionUrl: "/resume",
    };
  }

  // Easter Egg: sudo hire pankaj
  if (lower === "sudo hire pankaj" || lower === "sudo hire" || lower === "hire") {
    return {
      type: "text",
      content: `[sudo] password for recruiter: ••••••••••••••••••••••••••\nAuthentication successful.\n\n==================================================\nCANDIDATE VERIFIED: PANKAJ KUMAR MAURYA\n==================================================\n✔ Backend & Distributed Systems (FastAPI, Go, Kafka, Redis, PostgreSQL)\n✔ Enterprise AI & Vector Search (PGVector, Celery, LangChain, RAG, Local ONNX)\n✔ SDE Intern @ Razorpay (Kafka Bulk Reconciliation, Distributed Idempotency)\n✔ High Algorithmic Competence (2000+ Problems Solved • LeetCode Knight 1877)\n✔ B.Tech CSE @ MNNIT Allahabad (CGPA: 8.12 / 10.0)\n\nSTATUS: OPEN TO HIGH-IMPACT SOFTWARE ENGINEERING OPPORTUNITIES\n\nNext steps:\n  📞 Phone : ${profileData.phone}\n  ✉ Email  : ${profileData.email}\n  🔗 LinkedIn: ${profileData.links.linkedin}\n  📄 Resume : /resume`,
    };
  }

  // Unix-like aliases
  if (baseCmd === "ls") {
    return {
      type: "text",
      content: "about/  experience/  projects/  skills/  education/  achievements/  stats/  resume.pdf",
    };
  }

  if (baseCmd === "pwd") {
    return {
      type: "text",
      content: "/home/pankaj/portfolio",
    };
  }

  if (baseCmd === "cat") {
    if (args.length > 1) {
      const target = args[1].toLowerCase().replace(".txt", "").replace(".pdf", "");
      if (target === "resume") {
        return executeCommand("resume");
      }
      if (["about", "experience", "projects", "skills", "education", "stats"].includes(target)) {
        return executeCommand(target);
      }
    }
    return {
      type: "text",
      content: "Usage: cat <filename> (e.g., cat resume, cat about)",
    };
  }

  return {
    type: "error",
    content: `zsh: command not found: ${trimmed}. Type 'help' to see all available commands.`,
  };
}
