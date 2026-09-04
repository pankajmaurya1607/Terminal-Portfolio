import React from "react";
import Link from "next/link";
import { ArrowLeft, Radio, CheckCircle2, ShieldAlert, Cpu } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import { projectsData } from "@/data/projects";
import BuzzTalkDiagram from "@/components/diagrams/BuzzTalkDiagram";

export const metadata = {
  title: "Case Study: Buzz Talk — Pankaj Maurya",
  description: "Real-time communication and presence platform engineered with Socket.IO, Express, and MongoDB.",
};

export default function BuzzTalkCaseStudy() {
  const project = projectsData.find((p) => p.slug === "buzz-talk")!;

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
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 mb-4">
          <Radio className="h-3.5 w-3.5 animate-pulse text-cyan-400" />
          <span>Case Study • {project.tag}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-3">
          {project.title}
        </h1>
        <p className="text-lg text-cyan-400/90 font-mono mb-4">{project.subtitle}</p>
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
        </div>
      </header>

      {/* System Architecture Diagram */}
      <section className="mb-12">
        <h2 className="text-lg font-bold text-white font-mono mb-2 flex items-center gap-2">
          <Cpu className="h-4 w-4 text-cyan-400" />
          <span>01. Real-Time Distributed Architecture</span>
        </h2>
        <p className="text-xs text-slate-400 mb-4">
          Persistent full-duplex WebSocket connections routed through an in-memory connection registry
          and backed by MongoDB for conversational persistence.
        </p>
        <BuzzTalkDiagram />
      </section>

      {/* Problem & Solution */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 rounded-xl bg-red-950/20 border border-red-500/20">
          <h2 className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider mb-2">
            The Latency Bottleneck
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.details.problem}
          </p>
        </div>

        <div className="p-6 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
          <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">
            The WebSocket Solution
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.details.solution}
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-12 p-6 rounded-xl bg-[#0c0f17] border border-white/[0.08]">
        <h2 className="text-lg font-bold text-white font-mono mb-4 flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-cyan-400" />
          <span>02. Technical Features</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {project.details.features.map((feat) => (
            <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-300">
              <span className="text-cyan-400 font-mono font-bold">✓</span>
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Decisions */}
      <section className="mb-12">
        <h2 className="text-lg font-bold text-white font-mono mb-4 flex items-center gap-2">
          <Cpu className="h-4 w-4 text-cyan-400" />
          <span>03. Engineering Decisions & Trade-Offs</span>
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
          <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
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
