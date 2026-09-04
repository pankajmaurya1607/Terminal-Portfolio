"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Terminal as TerminalIcon,
  ShieldCheck,
  Cpu,
  Layers,
  Code2,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Engineering status pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-white/[0.08] text-xs font-mono text-slate-300 mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-medium">Production Experience:</span>
            <span>SDE Intern @ Razorpay (Fintech Infrastructure)</span>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4">
            Pankaj Kumar Maurya
          </h1>
          <div className="text-xl sm:text-2xl font-mono font-medium text-emerald-400 mb-6">
            Software Engineer
          </div>

          {/* Core Positioning */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Specializing in <span className="text-white font-semibold">backend systems</span>,{" "}
            <span className="text-white font-semibold">distributed architectures</span>, and{" "}
            <span className="text-white font-semibold">full-stack development</span>. Experienced in
            building Kafka-driven asynchronous reconciliation pipelines, resilient payment workflows, and
            solving 1800+ algorithmic problems.
          </p>

          {/* Quick Stat Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            <div className="p-3 rounded-lg bg-[#0e1118] border border-white/[0.08] shadow-sm">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <Cpu className="h-3.5 w-3.5 text-emerald-400" />
                <span>Production</span>
              </div>
              <div className="text-sm font-bold text-white mt-1">Razorpay</div>
              <div className="text-[11px] text-slate-400">SDE Intern</div>
            </div>

            <div className="p-3 rounded-lg bg-[#0e1118] border border-white/[0.08] shadow-sm">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <Code2 className="h-3.5 w-3.5 text-cyan-400" />
                <span>DSA Solved</span>
              </div>
              <div className="text-sm font-bold text-white mt-1">1800+</div>
              <div className="text-[11px] text-slate-400">LeetCode 1877</div>
            </div>

            <div className="p-3 rounded-lg bg-[#0e1118] border border-white/[0.08] shadow-sm">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <Layers className="h-3.5 w-3.5 text-purple-400" />
                <span>Academics</span>
              </div>
              <div className="text-sm font-bold text-white mt-1">MNNIT Allahabad</div>
              <div className="text-[11px] text-slate-400">CPI 8.12 / 10</div>
            </div>

            <div className="p-3 rounded-lg bg-[#0e1118] border border-white/[0.08] shadow-sm">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-400" />
                <span>Core Stack</span>
              </div>
              <div className="text-sm font-bold text-white mt-1">C++, Node, Kafka</div>
              <div className="text-[11px] text-slate-400">React, Mongo</div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-colors shadow-lg shadow-emerald-500/20 cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-white/[0.12] hover:border-white/[0.2] text-slate-200 hover:text-white font-medium text-sm transition-all shadow-sm"
            >
              <FileText className="h-4 w-4 text-emerald-400" />
              <span>View Resume</span>
            </Link>

            <a
              href="#terminal"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] text-slate-300 font-mono text-xs transition-colors"
            >
              <TerminalIcon className="h-3.5 w-3.5 text-emerald-400" />
              <span>$ open terminal</span>
            </a>
          </div>

          {/* Social / Platform links */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <span className="text-slate-500">PROFILES:</span>
            <a
              href={profileData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <GitHubIcon className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={profileData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <LinkedInIcon className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={profileData.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span className="text-amber-400">LC</span>
              <span>LeetCode (1877)</span>
            </a>
            <a
              href={profileData.links.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span className="text-blue-400">CF</span>
              <span>Codeforces (1239)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
