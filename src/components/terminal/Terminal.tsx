"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Terminal as TerminalIcon,
  CornerDownLeft,
  Trash2,
  Sparkles,
  Maximize2,
  Minimize2,
  Copy,
  Check,
} from "lucide-react";
import { executeCommand, availableCommands } from "@/data/terminal";

interface HistoryEntry {
  id: string;
  command: string;
  output: string;
  type: "text" | "formatted" | "error" | "action";
  actionUrl?: string;
  timestamp: string;
}

export default function Terminal() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      id: "init-1",
      command: "whoami",
      output:
        "PANKAJ KUMAR MAURYA\nSoftware Engineer\nFocus: Backend • Distributed Systems • Full Stack\nEducation: MNNIT Allahabad (CPI: 8.12 / 10)\nCurrent: SDE Intern @ Razorpay\nDSA: 1800+ Problems Solved",
      type: "text",
      timestamp: "init",
    },
    {
      id: "init-2",
      command: "help",
      output:
        "Type any command to explore (e.g. 'experience', 'projects', 'skills', 'stats', 'sudo hire pankaj').\nClick the quick-command chips below for instant access.",
      type: "text",
      timestamp: "init",
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>(["whoami", "help"]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll internal terminal container only, without moving the browser viewport/screen
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommandSubmit = (cmdToRun?: string) => {
    const command = (cmdToRun !== undefined ? cmdToRun : input).trim();
    if (!command) return;

    // Handle clear specially
    if (command.toLowerCase() === "clear") {
      setHistory([]);
      setInput("");
      setHistoryIndex(-1);
      return;
    }

    const response = executeCommand(command);

    if (response.clear) {
      setHistory([]);
      setInput("");
      setHistoryIndex(-1);
      return;
    }

    const newEntry: HistoryEntry = {
      id: `${Date.now()}-${Math.random()}`,
      command,
      output: typeof response.content === "string" ? response.content : "",
      type: response.type,
      actionUrl: response.actionUrl,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setHistory((prev) => [...prev, newEntry]);
    setCommandHistory((prev) => [...prev, command]);
    setHistoryIndex(-1);
    setInput("");

    // If command initiates a direct navigation or external link
    if (response.actionUrl) {
      if (response.actionUrl.startsWith("http")) {
        window.open(response.actionUrl, "_blank");
      } else {
        router.push(response.actionUrl);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommandSubmit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex =
        historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex] || "");
      }
    }
  };

  const copyTerminalText = () => {
    const fullLog = history
      .map((h) => `$ ${h.command}\n${h.output}`)
      .join("\n\n");
    navigator.clipboard.writeText(fullLog);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickChips = [
    { label: "whoami", cmd: "whoami" },
    { label: "experience", cmd: "experience" },
    { label: "projects", cmd: "projects" },
    { label: "project buzz-talk", cmd: "project buzz-talk" },
    { label: "skills", cmd: "skills" },
    { label: "stats", cmd: "stats" },
    { label: "sudo hire pankaj", cmd: "sudo hire pankaj", highlight: true },
    { label: "resume", cmd: "resume" },
    { label: "clear", cmd: "clear" },
  ];

  return (
    <section id="terminal" className="relative py-12 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-2">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-medium">
              <TerminalIcon className="h-3.5 w-3.5" />
              <span>SIGNATURE FEATURE</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
              Interactive Engineering Terminal
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
              Query my career, distributed systems case studies, projects, and coding stats directly through the command-line interface.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>bash / zsh ready</span>
          </div>
        </div>

        {/* Terminal Frame */}
        <div
          className={`rounded-xl border border-white/[0.12] bg-[#0c0e14] shadow-2xl shadow-black/80 overflow-hidden font-mono transition-all duration-300 ${
            isExpanded ? "h-[650px]" : "h-[480px]"
          } flex flex-col`}
          onClick={() => inputRef.current?.focus({ preventScroll: true })}
        >
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#080a0f] border-b border-white/[0.08] select-none">
            {/* macOS Window Controls */}
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors inline-block cursor-pointer" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors inline-block cursor-pointer" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors inline-block cursor-pointer" />
              <span className="ml-3 text-[11px] text-slate-400 hidden sm:inline">
                pankaj@portfolio: ~/engineering (zsh)
              </span>
            </div>

            {/* Utility buttons */}
            <div className="flex items-center gap-2 text-slate-400">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  copyTerminalText();
                }}
                title="Copy terminal session"
                className="p-1 rounded hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setHistory([]);
                }}
                title="Clear screen"
                className="p-1 rounded hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                title={isExpanded ? "Collapse height" : "Expand height"}
                className="p-1 rounded hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                {isExpanded ? (
                  <Minimize2 className="h-3.5 w-3.5" />
                ) : (
                  <Maximize2 className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* Quick command suggestion chips */}
          <div className="flex items-center gap-1.5 px-3 py-2 bg-[#090b10] border-b border-white/[0.04] overflow-x-auto text-[11px] no-scrollbar">
            <span className="text-slate-500 mr-1 text-[10px] uppercase font-bold shrink-0">
              Quick:
            </span>
            {quickChips.map((chip) => (
              <button
                key={chip.label}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCommandSubmit(chip.cmd);
                }}
                className={`px-2 py-0.5 rounded text-xs shrink-0 transition-all cursor-pointer ${
                  chip.highlight
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30"
                    : "bg-white/[0.04] text-slate-300 border border-white/[0.06] hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Terminal Output Stream */}
          <div
            ref={scrollContainerRef}
            className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs text-slate-300 font-mono select-text"
          >
            {history.map((item) => (
              <div key={item.id} className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-emerald-400 font-bold">$</span>
                  <span className="text-white font-medium">{item.command}</span>
                  {item.timestamp !== "init" && (
                    <span className="text-[10px] text-slate-600 ml-auto">
                      {item.timestamp}
                    </span>
                  )}
                </div>

                <div
                  className={`pl-4 py-1 whitespace-pre-wrap leading-relaxed border-l-2 ${
                    item.type === "error"
                      ? "text-rose-400 border-rose-500/40"
                      : item.type === "action"
                      ? "text-emerald-300 border-emerald-500/40"
                      : item.command.includes("sudo hire")
                      ? "text-emerald-400 border-emerald-400"
                      : "text-slate-300 border-slate-700/50"
                  }`}
                >
                  {item.output}
                </div>
              </div>
            ))}

            {/* Current Input Prompt Line */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-emerald-400 font-bold">$</span>
              <div className="relative flex-1 flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a command (e.g. 'help', 'experience', 'projects')..."
                  className="w-full bg-transparent text-white font-mono text-xs focus:outline-none placeholder-slate-600 caret-emerald-400"
                  autoCapitalize="off"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCommandSubmit();
                }}
                className="p-1 rounded text-slate-400 hover:text-emerald-400 transition-colors sm:hidden"
              >
                <CornerDownLeft className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Bottom Help Bar */}
          <div className="flex items-center justify-between px-4 py-1.5 bg-[#080a0f] border-t border-white/[0.06] text-[10px] text-slate-500 select-none">
            <span className="hidden sm:inline">
              Use <kbd className="px-1 py-0.5 rounded bg-white/[0.05] text-slate-400">↑</kbd>{" "}
              <kbd className="px-1 py-0.5 rounded bg-white/[0.05] text-slate-400">↓</kbd> for command history
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400/90 font-mono">
              <Sparkles className="h-3 w-3" /> Try typing &apos;sudo hire pankaj&apos;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
