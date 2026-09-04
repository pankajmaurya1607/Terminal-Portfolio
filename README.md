# Pankaj Kumar Maurya — Interactive Engineering Portfolio

A production-grade, developer-first personal portfolio website built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and an **interactive developer terminal** as its signature feature.

Designed for serious software engineering recruitment: minimal, technically sophisticated, dark-first aesthetic, responsive across all devices, and featuring deep case studies with architecture flow diagrams.

---

## 🚀 Key Features

- **Interactive Signature Terminal**:
  - Full-featured command parser supporting `help`, `whoami`, `about`, `experience`, `projects`, `project <name>`, `skills`, `education`, `achievements`, `stats`, `contact`, `resume`, `github`, `linkedin`, `leetcode`, `codeforces`, `clear`.
  - Up/Down arrow history cycling, touch-friendly quick command chips for mobile users, and hidden Easter egg (`sudo hire pankaj`).
- **Command Palette (`Ctrl+K` / `Cmd+K`)**:
  - Instant developer keyboard navigation across all sections, project case studies, resume, and external platforms.
- **Centralized Data Layer (`src/data/`)**:
  - All content (profile, experience, projects, skills, education, achievements, terminal) is strictly separated from presentation logic.
  - Adding new projects (e.g. rate limiters, parking lots, distributed consensus) takes minutes without touching UI code.
- **Razorpay SDE Internship Showcase**:
  - Centerpiece section featuring 4 deep engineering case studies:
    1. Kafka-based bulk reconciliation re-architecture (Scrooge)
    2. Merchant Dashboard refund processing workflow
    3. UPI Montran gateway Mozart request data override debugging
    4. Settlement service integration test coverage expansion
- **Detailed Project Case Studies**:
  - Dedicated routes:
    - `/projects/travel-agency` (AI Itinerary Generation, Appwrite & Gemini AI)
    - `/projects/buzz-talk` (Real-Time WebSockets, Socket.IO & MongoDB)
    - `/projects/task-manager` (Full-Stack Workflow Management)
  - Visual SVG architecture diagrams showcasing system data flows.
- **Problem Solving & Coding Metrics**:
  - 1800+ DSA problems, LeetCode (1877 rating, Knight tier), Codeforces (1239 rating).
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
- **Deployment**: Docker, Docker Compose, OCI / VPS Ready

---

## 📁 Project Architecture

```
Terminal-Portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Fonts, SEO metadata, Command Palette provider
│   │   ├── page.tsx                  # Single-page engineering story
│   │   ├── globals.css               # Dark theme tokens, custom scrollbars
│   │   ├── projects/
│   │   │   ├── page.tsx              # Projects directory hub
│   │   │   ├── travel-agency/page.tsx # Travel Agency deep case study
│   │   │   ├── buzz-talk/page.tsx     # Buzz Talk WebSocket case study
│   │   │   └── task-manager/page.tsx  # Task Manager case study
│   │   └── resume/
│   │       └── page.tsx              # Interactive resume viewer
│   ├── components/
│   │   ├── navbar/Navbar.tsx         # Sleek navigation with status & Cmd+K trigger
│   │   ├── hero/Hero.tsx             # Engineering hero with verified badges
│   │   ├── terminal/Terminal.tsx     # Signature interactive terminal window
│   │   ├── command-palette/CommandPalette.tsx # Ctrl+K search modal
│   │   ├── about/About.tsx           # Academic & engineering focus
│   │   ├── experience/Experience.tsx # Razorpay 4 case studies
│   │   ├── projects/Projects.tsx     # Featured project cards
│   │   ├── engineering/Engineering.tsx # 4 Engineering pillars
│   │   ├── skills/Skills.tsx         # Categorized skills
│   │   ├── coding/Coding.tsx         # Problem solving stats (1800+ DSA)
│   │   ├── education/Education.tsx   # MNNIT Allahabad & JNV Ayodhya
│   │   ├── achievements/Achievements.tsx # HackOn Amazon, ML Cert, Avishkar
│   │   ├── contact/Contact.tsx       # Contact CTA & clipboard email utility
│   │   ├── diagrams/
│   │   │   ├── BuzzTalkDiagram.tsx   # SVG WebSocket data flow diagram
│   │   │   └── TravelAgencyDiagram.tsx # SVG AI workflow diagram
│   │   └── ui/Icons.tsx              # Crisp brand icons (GitHub, LinkedIn)
│   ├── data/
│   │   ├── profile.ts                # Bio, contacts, links
│   │   ├── experience.ts             # Razorpay case studies
│   │   ├── projects.ts               # Case study metadata & specifications
│   │   ├── skills.ts                 # Technical competencies
│   │   ├── coding.ts                 # DSA stats & platforms
│   │   ├── education.ts              # Academic records
│   │   ├── achievements.ts           # Verified honors
│   │   └── terminal.ts               # Command execution engine
│   └── lib/
│       └── utils.ts                  # ClassName helper (cn)
├── public/
│   └── robots.txt
├── Dockerfile                        # Multi-stage production container
├── docker-compose.yml                # Docker compose configuration
└── .env.example
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

## 🐳 Docker Deployment

To build and run in a production container on an OCI VM, VPS, or cloud server:

```bash
# Build and start container in detached mode
docker compose up -d --build

# View container logs
docker compose logs -f
```

The portfolio will be available on port `3000`.

---

## ⌨️ Terminal Commands Reference

| Command | Action |
|---|---|
| `help` | Lists all available commands |
| `whoami` | Displays identity, role, and current status |
| `experience` | Shows Razorpay SDE internship & 4 case studies |
| `projects` | Lists all engineering projects |
| `project <name>` | Deep dive into `buzz-talk`, `travel-agency`, or `task-manager` |
| `skills` | Displays categorized technical skills |
| `stats` | Displays 1800+ DSA problems, LeetCode (1877), Codeforces (1239) |
| `education` | Displays MNNIT Allahabad (CPI 8.12) and school credentials |
| `achievements` | Displays Amazon HackOn, ML certification, Avishkar |
| `contact` | Shows direct email and social profiles |
| `resume` | Navigates directly to `/resume` viewer |
| `sudo hire pankaj` | Easter egg candidate authentication flow |
| `clear` | Clears terminal screen |

---

## 📄 License & Ownership

Designed and engineered for **Pankaj Kumar Maurya**.
All rights reserved.
