"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Terminal,
  Briefcase,
  FolderGit2,
  Cpu,
  Layers,
  Award,
  GraduationCap,
  Mail,
  FileText,
  Code2,
  X,
  ArrowRight,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";

interface PaletteItem {
  id: string;
  title: string;
  category: "Navigation" | "Projects" | "Actions" | "External";
  description: string;
  icon: React.ReactNode;
  action: () => void;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Navigation and action options
  const items: PaletteItem[] = [
    {
      id: "terminal",
      title: "Interactive Terminal",
      category: "Navigation",
      description: "Jump to developer terminal prompt ($ help)",
      icon: <Terminal className="h-4 w-4 text-emerald-400" />,
      action: () => {
        router.push("/#terminal");
        setIsOpen(false);
      },
    },
    {
      id: "experience",
      title: "Razorpay Experience & Case Studies",
      category: "Navigation",
      description: "Kafka reconciliation, Merchant refund, UPI gateway",
      icon: <Briefcase className="h-4 w-4 text-blue-400" />,
      action: () => {
        router.push("/#experience");
        setIsOpen(false);
      },
    },
    {
      id: "projects-section",
      title: "Engineering Projects",
      category: "Navigation",
      description: "Travel Agency, Buzz Talk, Task Manager",
      icon: <FolderGit2 className="h-4 w-4 text-purple-400" />,
      action: () => {
        router.push("/#projects");
        setIsOpen(false);
      },
    },
    {
      id: "proj-travel-agency",
      title: "Case Study: Travel Agency",
      category: "Projects",
      description: "AI-powered travel planning (React, Appwrite, Gemini AI)",
      icon: <Layers className="h-4 w-4 text-emerald-400" />,
      action: () => {
        router.push("/projects/travel-agency");
        setIsOpen(false);
      },
    },
    {
      id: "proj-buzz-talk",
      title: "Case Study: Buzz Talk",
      category: "Projects",
      description: "Real-time chat & presence (Socket.IO, Express, MongoDB)",
      icon: <Layers className="h-4 w-4 text-cyan-400" />,
      action: () => {
        router.push("/projects/buzz-talk");
        setIsOpen(false);
      },
    },
    {
      id: "proj-task-manager",
      title: "Case Study: Task Manager",
      category: "Projects",
      description: "Full-stack sprint & task workflow (Next.js, MongoDB)",
      icon: <Layers className="h-4 w-4 text-amber-400" />,
      action: () => {
        router.push("/projects/task-manager");
        setIsOpen(false);
      },
    },
    {
      id: "engineering",
      title: "Engineering Focus Pillars",
      category: "Navigation",
      description: "Backend, Distributed Systems, Full-Stack, Problem Solving",
      icon: <Cpu className="h-4 w-4 text-emerald-400" />,
      action: () => {
        router.push("/#engineering");
        setIsOpen(false);
      },
    },
    {
      id: "skills",
      title: "Skills & Technical Stack",
      category: "Navigation",
      description: "Go, Python, C++, Node, Kafka, PostgreSQL, React",
      icon: <Layers className="h-4 w-4 text-indigo-400" />,
      action: () => {
        router.push("/#skills");
        setIsOpen(false);
      },
    },
    {
      id: "coding",
      title: "DSA & Problem Solving Stats",
      category: "Navigation",
      description: "1800+ solved, LeetCode (1877), Codeforces (1239)",
      icon: <Code2 className="h-4 w-4 text-emerald-400" />,
      action: () => {
        router.push("/#coding");
        setIsOpen(false);
      },
    },
    {
      id: "education",
      title: "Academic Background",
      category: "Navigation",
      description: "MNNIT Allahabad CSE (CPI 8.12) & JNV Ayodhya",
      icon: <GraduationCap className="h-4 w-4 text-amber-400" />,
      action: () => {
        router.push("/#education");
        setIsOpen(false);
      },
    },
    {
      id: "achievements",
      title: "Milestones & Achievements",
      category: "Navigation",
      description: "HackOn Amazon, ML Specialization, Avishkar",
      icon: <Award className="h-4 w-4 text-yellow-400" />,
      action: () => {
        router.push("/#achievements");
        setIsOpen(false);
      },
    },
    {
      id: "resume-page",
      title: "View / Download Resume",
      category: "Actions",
      description: "Navigate to official verified resume viewer",
      icon: <FileText className="h-4 w-4 text-emerald-400" />,
      action: () => {
        router.push("/resume");
        setIsOpen(false);
      },
    },
    {
      id: "contact",
      title: "Contact Pankaj",
      category: "Actions",
      description: "Send an email or message",
      icon: <Mail className="h-4 w-4 text-rose-400" />,
      action: () => {
        router.push("/#contact");
        setIsOpen(false);
      },
    },
    {
      id: "ext-github",
      title: "GitHub Profile",
      category: "External",
      description: "View repositories and code contributions",
      icon: <GitHubIcon className="h-4 w-4 text-slate-300" />,
      action: () => {
        window.open(profileData.links.github, "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "ext-linkedin",
      title: "LinkedIn Profile",
      category: "External",
      description: "Connect professionally on LinkedIn",
      icon: <LinkedInIcon className="h-4 w-4 text-blue-400" />,
      action: () => {
        window.open(profileData.links.linkedin, "_blank");
        setIsOpen(false);
      },
    },
  ];

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  // Toggle listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => {
      setIsOpen(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + (filteredItems.length || 1)) % (filteredItems.length || 1));
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      filteredItems[selectedIndex].action();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-xl rounded-xl bg-[#0d1017] border border-white/[0.12] shadow-2xl shadow-black/80 overflow-hidden text-slate-200"
        onKeyDown={handleKeyDown}
      >
        {/* Search header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.08] bg-[#090b10]">
          <Search className="h-4 w-4 text-emerald-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or jump to section (e.g. razorpay, projects, resume)..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none font-sans"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/[0.06]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results list */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-white/[0.03]">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-500 font-mono">
              No matching commands found for &quot;{query}&quot;
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => item.action()}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-emerald-500/10 text-white border border-emerald-500/20"
                      : "text-slate-300 hover:bg-white/[0.04] border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-1.5 rounded-md ${
                        isSelected ? "bg-emerald-500/20" : "bg-white/[0.04]"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-medium text-white flex items-center gap-2">
                        <span>{item.title}</span>
                        <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/[0.05] text-slate-400">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`h-3.5 w-3.5 shrink-0 transition-opacity ${
                      isSelected ? "opacity-100 text-emerald-400" : "opacity-0"
                    }`}
                  />
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-white/[0.06] bg-[#090b10] text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] text-slate-400 text-[10px]">↑↓</kbd> navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] text-slate-400 text-[10px]">↵</kbd> select
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] text-slate-400 text-[10px]">esc</kbd> close
            </span>
          </div>
          <span className="text-emerald-400/80 font-medium">pankaj.dev</span>
        </div>
      </div>
    </div>
  );
}

