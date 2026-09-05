# Pankaj Kumar Maurya — Interactive Engineering Portfolio

> 🌐 **Live Website:** [https://terminal-portfolio-iota-rosy.vercel.app](https://terminal-portfolio-iota-rosy.vercel.app/)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-emerald?style=for-the-badge&logo=vercel)](https://terminal-portfolio-iota-rosy.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-pankajmaurya1607-181717?style=for-the-badge&logo=github)](https://github.com/pankajmaurya1607)
[![LeetCode](https://img.shields.io/badge/LeetCode-Knight%201877-FFA116?style=for-the-badge&logo=leetcode)](https://leetcode.com/u/pankajmaurya1607/)
[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)

A production-grade, developer-first personal portfolio website built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and an **interactive developer terminal** as its signature feature.

Designed for serious software engineering recruitment: minimal, technically sophisticated, dark-first aesthetic, responsive across all devices, and featuring deep case studies with architecture flow diagrams.

---

## 🌐 Live Deployment
| Platform | Production URL | Notes |
|---|---|---|
| 🚀 **Vercel** | [https://terminal-portfolio-iota-rosy.vercel.app](https://terminal-portfolio-iota-rosy.vercel.app/) | Automated CI/CD, SSL, Edge Network |

---

## ✨ Key Features

- **Interactive Signature Terminal**:
  - Full-featured command parser supporting `help`, `whoami`, `about`, `experience`, `projects`, `project <name>`, `skills`, `education`, `achievements`, `stats`, `contact`, `resume`, `github`, `linkedin`, `leetcode`, `codeforces`, `clear`.
  - Up/Down arrow history cycling, touch-friendly quick command chips for mobile users, and hidden Easter egg (`sudo hire pankaj`).
- **Command Palette (`Ctrl+K` / `Cmd+K`)**:
  - Instant developer keyboard navigation across all sections, project case studies, resume, and external platforms.
- **Centralized Data Layer (`src/data/`)**:
  - All content (profile, experience, projects, skills, education, achievements, terminal) is strictly separated from presentation logic.
- **Razorpay SDE Internship Showcase**:
  - Centerpiece section featuring 6 deep engineering case studies:
    1. Kafka-based bulk reconciliation re-architecture (850K+ daily reconciliations, 13% IOPS reduction)
    2. Redis-based distributed idempotency across 2 production clusters for HDFC payouts
    3. Mozart V2 multi-service response aggregation unblocking UPI Montran & IDFC migration
    4. Refund traceability and initiation source in Dashboard APIs with Splitz canary rollout
    5. Settlements SLIT testing coverage expansion (0% to 80%)
    6. Runtime settlement metadata validation eliminating 5xx service panics
- **Detailed Project Case Studies**:
  - Dedicated routes:
    - `/projects/payfast` (Fintech & Distributed Systems, Go, Kafka, Double-Entry Ledger)
    - `/projects/vaultmind` (Enterprise AI & RAG Platform, FastAPI, PGVector, Celery)
    - `/projects/travel-agency` (AI Itinerary Generation, Appwrite & Gemini AI)
    - `/projects/buzz-talk` (Real-Time WebSockets, Socket.IO & MongoDB)
    - `/projects/task-manager` (Full-Stack Workflow Management)
  - Visual interactive architecture diagrams showcasing system data flows.
- **Problem Solving & Coding Metrics**:
  - 2000+ DSA problems, LeetCode Knight (Max Rating: 1877), Codeforces (1239 rating).
- **Dedicated Resume Viewer (`/resume`)**:
  - Clean, recruiter-friendly printable view with one-click PDF generation (`window.print()`).
- **Container Ready**:
  - Multi-stage `Dockerfile` and `docker-compose.yml` for single-command production deployment.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom Brand SVGs
- **Typography**: Inter (UI Text) & JetBrains Mono (Technical / Terminal Text)
- **Deployment**: Vercel, Docker, Docker Compose

---

## 🏗️ Project Architecture

```
Terminal-Portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Fonts, SEO metadata, Command Palette provider
│   │   ├── page.tsx                  # Single-page engineering story
│   │   ├── globals.css               # Dark theme tokens, custom scrollbars
│   │   ├── projects/
│   │   │   ├── page.tsx              # Projects directory hub
│   │   │   ├── payfast/page.tsx      # PayFast distributed payments case study
│   │   │   ├── vaultmind/page.tsx    # VaultMind enterprise RAG case study
│   │   │   ├── travel-agency/page.tsx# Travel Agency deep case study
│   │   │   ├── buzz-talk/page.tsx    # Buzz Talk WebSocket case study
│   │   │   └── task-manager/page.tsx # Task Manager case study
│   │   └── resume/
│   │       └── page.tsx              # Interactive resume viewer
│   ├── components/
│   │   ├── navbar/Navbar.tsx         # Sleek navigation with status & Cmd+K trigger
│   │   ├── hero/Hero.tsx             # Engineering hero with verified badges
│   │   ├── terminal/Terminal.tsx     # Signature interactive terminal window
│   │   ├── command-palette/          # Ctrl+K search modal
│   │   ├── experience/               # Razorpay case studies
│   │   ├── projects/                 # Featured project cards
│   │   ├── engineering/              # 4 Engineering pillars
│   │   ├── diagrams/                 # Interactive system architecture diagrams
│   │   │   ├── PayFastDiagram.tsx
│   │   │   ├── VaultMindDiagram.tsx
│   │   │   ├── BuzzTalkDiagram.tsx
│   │   │   └── TravelAgencyDiagram.tsx
│   │   └── ui/Icons.tsx              # Crisp brand icons (GitHub, LinkedIn)
│   └── data/
│       ├── profile.ts                # Bio, contacts, links
│       ├── experience.ts             # Razorpay 6 deliverables
│       ├── projects.ts               # Case study metadata & specifications
│       ├── skills.ts                 # Technical competencies (aligned with resume)
│       ├── coding.ts                 # DSA stats (2000+ problems, LeetCode Knight)
│       ├── education.ts              # Academic records (MNNIT Allahabad)
│       └── terminal.ts               # Command execution engine
├── Dockerfile                        # Multi-stage production container
├── docker-compose.yml                # Docker compose configuration
└── README.md
```

---

## 💻 Getting Started Locally

### 1. Prerequisites
- Node.js 18+ or 20+ installed
- npm / pnpm / yarn

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## ⌨️ Terminal Commands Reference

| Command | Action |
|---|---|
| `help` | Lists all available commands |
| `whoami` | Displays identity, role, and current status |
| `experience` | Shows Razorpay SDE internship & 6 deliverables |
| `projects` | Lists all engineering projects |
| `project <name>` | Deep dive into `payfast`, `vaultmind`, `travel-agency`, `buzz-talk` |
| `skills` | Displays categorized technical skills |
| `stats` | Displays 2000+ DSA problems, LeetCode Knight (1877), Codeforces (1239) |
| `education` | Displays MNNIT Allahabad (CGPA 8.12) and credentials |
| `achievements` | Displays LeetCode Knight, Stanford Online ML Specialization |
| `contact` | Shows direct phone, email, and social profiles |
| `resume` | Navigates directly to `/resume` viewer |
| `sudo hire pankaj` | Easter egg candidate authentication flow |
| `clear` | Clears terminal screen |

---

## 📄 License & Ownership

Designed and engineered for **Pankaj Kumar Maurya**.  
All rights reserved.
