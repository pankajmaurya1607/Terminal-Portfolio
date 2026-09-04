"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, Command, Menu, X, FileText, ExternalLink } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  const navLinks = [
    { label: "Terminal", href: "#terminal" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Engineering", href: "#engineering" },
    { label: "Skills", href: "#skills" },
    { label: "Coding", href: "#coding" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090c]/90 backdrop-blur-md border-b border-white/[0.06] shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-mono text-sm tracking-tight text-white hover:text-emerald-400 transition-colors"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:border-emerald-400/40 group-hover:bg-emerald-500/20 transition-all">
            <Terminal className="h-4 w-4" />
          </span>
          <span className="font-semibold text-slate-100 group-hover:text-white">pankaj.dev</span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-mono font-normal bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for Roles
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-medium text-slate-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 rounded-md hover:text-white hover:bg-white/[0.04] transition-all"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/resume"
            className="flex items-center gap-1 px-3 py-1.5 rounded-md text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 transition-all"
          >
            <FileText className="h-3.5 w-3.5" />
            Resume
          </Link>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Command Palette trigger */}
          <button
            onClick={openPalette}
            aria-label="Open Command Palette"
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800/90 border border-white/[0.08] hover:border-white/[0.18] text-xs text-slate-400 hover:text-slate-200 transition-all cursor-pointer shadow-sm"
          >
            <Command className="h-3.5 w-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/[0.06] border border-white/[0.08] text-slate-400">
              Ctrl+K
            </kbd>
          </button>

          {/* Social Icons */}
          <a
            href={profileData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.04] transition-colors"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={profileData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.04] transition-colors"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.04]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0c0e14]/95 backdrop-blur-xl px-4 py-4 space-y-2 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-slate-300 hover:bg-white/[0.06] hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/resume"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded-md text-emerald-400 hover:bg-emerald-500/10 font-mono text-xs"
          >
            <FileText className="h-4 w-4" />
            View Resume (/resume)
          </Link>
          <div className="pt-2 border-t border-white/[0.08] flex gap-3 text-xs text-slate-400">
            <a
              href={profileData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white"
            >
              <GitHubIcon className="h-3.5 w-3.5" /> GitHub
            </a>
            <a
              href={profileData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white"
            >
              <LinkedInIcon className="h-3.5 w-3.5" /> LinkedIn
            </a>
            <a
              href={profileData.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white"
            >
              <ExternalLink className="h-3.5 w-3.5" /> LeetCode
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
