"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Copy, Check, ExternalLink, FileText, Terminal } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-24 border-t border-white/[0.08] scroll-mt-20 bg-[#06080c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to Opportunities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Let&apos;s build something useful.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto">
            Whether you are discussing backend systems, distributed event architectures, or full-time
            software engineering opportunities, my inbox is always open.
          </p>

          {/* Email Copy Card */}
          <div className="inline-flex items-center gap-3 p-2 rounded-xl bg-[#0d1017] border border-white/[0.12] shadow-xl mb-10 max-w-full">
            <div className="flex items-center gap-2 px-3 py-1 text-xs sm:text-sm font-mono text-white truncate">
              <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
              <span className="truncate">{profileData.email}</span>
            </div>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors shrink-0 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* External Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-white transition-colors"
            >
              <FileText className="h-3.5 w-3.5 text-emerald-400" />
              <span>Official Resume</span>
            </Link>

            <a
              href={profileData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-white transition-colors"
            >
              <GitHubIcon className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={profileData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-white transition-colors"
            >
              <LinkedInIcon className="h-3.5 w-3.5 text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={profileData.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-white transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5 text-amber-400" />
              <span>LeetCode (1877)</span>
            </a>
          </div>

          {/* Copyright line */}
          <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
            <div className="flex items-center gap-2">
              <Terminal className="h-3.5 w-3.5 text-emerald-400" />
              <span>pankaj.dev • Designed & Engineered with Next.js & TypeScript</span>
            </div>
            <div>
              <span>MNNIT Allahabad • Razorpay SDE Intern</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
