import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Sparkles, CheckCircle2, ShieldAlert, Cpu } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import { projectsData } from "@/data/projects";
import TravelAgencyDiagram from "@/components/diagrams/TravelAgencyDiagram";

export const metadata = {
  title: "Case Study: Travel Agency — Pankaj Maurya",
  description: "Engineering case study for AI-powered travel itinerary planning platform built with React, Appwrite, and Google Gemini.",
};

export default function TravelAgencyCaseStudy() {
  const project = projectsData.find((p) => p.slug === "travel-agency")!;

  return (
    <article className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Back button */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors mb-8"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        <span>Back to Projects</span>
      </Link>

      {/* Header */}
      <header className="mb-8 pb-8 border-b border-white/[0.08]">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 mb-4">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Case Study • {project.tag}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-3">
          {project.title}
        </h1>
        <p className="text-lg text-emerald-400/90 font-mono mb-4">{project.subtitle}</p>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-slate-200 border border-white/[0.08]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mt-6">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-mono text-white transition-colors"
          >
            <GitHubIcon className="h-4 w-4" />
            <span>View Source Code</span>
          </a>
          {project.links.liveDemo && (
            <a
              href={project.links.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs font-mono transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Live Application</span>
            </a>
          )}
        </div>
      </header>

      {/* System Architecture Diagram */}
      <section className="mb-12">
        <h2 className="text-lg font-bold text-white font-mono mb-2 flex items-center gap-2">
          <Cpu className="h-4 w-4 text-emerald-400" />
          <span>01. System Architecture</span>
        </h2>
        <p className="text-xs text-slate-400 mb-4">
          Client-serverless hybrid workflow linking interactive React components with Appwrite document
          storage and real-time Gemini LLM inference.
        </p>
        <TravelAgencyDiagram />
      </section>

      {/* Problem & Solution */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 rounded-xl bg-red-950/20 border border-red-500/20">
          <h2 className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider mb-2">
            The Problem
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.details.problem}
          </p>
        </div>

        <div className="p-6 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
          <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
            The Engineered Solution
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.details.solution}
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-12 p-6 rounded-xl bg-[#0c0f17] border border-white/[0.08]">
        <h2 className="text-lg font-bold text-white font-mono mb-4 flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          <span>02. Core Platform Capabilities</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {project.details.features.map((feat) => (
            <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-300">
              <span className="text-emerald-400 font-mono font-bold">✓</span>
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Decisions */}
      <section className="mb-12">
        <h2 className="text-lg font-bold text-white font-mono mb-4 flex items-center gap-2">
          <Cpu className="h-4 w-4 text-emerald-400" />
          <span>03. Architectural & Design Decisions</span>
        </h2>
        <div className="space-y-4">
          {project.details.engineeringDecisions.map((item) => (
            <div
              key={item.decision}
              className="p-5 rounded-xl bg-[#0c0f17] border border-white/[0.08]"
            >
              <h3 className="text-sm font-bold text-white font-mono mb-1">{item.decision}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{item.rationale}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges & Lessons Learned */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-[#0c0f17] border border-white/[0.08]">
          <h2 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <ShieldAlert className="h-3.5 w-3.5" />
            <span>Challenges Overcome</span>
          </h2>
          <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
            {project.details.challenges.map((c, i) => (
              <li key={i}>• {c}</li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-xl bg-[#0c0f17] border border-white/[0.08]">
          <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>Lessons Learned</span>
          </h2>
          <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
            {project.details.lessonsLearned.map((l, i) => (
              <li key={i}>• {l}</li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
