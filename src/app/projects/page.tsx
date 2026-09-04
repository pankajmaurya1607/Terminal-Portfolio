import React from "react";
import Link from "next/link";
import { FolderGit2, ArrowRight, ExternalLink, ArrowLeft } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import { projectsData } from "@/data/projects";

export const metadata = {
  title: "Projects — Pankaj Maurya",
  description: "Software engineering case studies, system architectures, and full-stack projects.",
};

export default function ProjectsDirectoryPage() {
  return (
    <div className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors mb-8"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        <span>Return to Portfolio</span>
      </Link>

      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-medium mb-2">
          <FolderGit2 className="h-3.5 w-3.5" />
          <span>PROJECT REPOSITORY</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          Engineering Case Studies
        </h1>
        <p className="text-base text-slate-400 max-w-2xl">
          Deep dives into architecture, technical challenges, and engineering trade-offs across
          real-time systems, AI workflows, and distributed microservices.
        </p>
      </div>

      <div className="space-y-8">
        {projectsData.map((project, idx) => (
          <div
            key={project.slug}
            className="rounded-xl bg-[#0c0f17] border border-white/[0.08] hover:border-emerald-500/30 p-6 sm:p-8 transition-all shadow-xl group"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {project.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                  {project.title}
                </h2>
                <div className="text-xs font-mono text-emerald-400/80 mb-4">{project.subtitle}</div>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.details.overview}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
                  {project.details.features.slice(0, 4).map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <span className="text-emerald-400 font-mono">✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions Right */}
              <div className="flex lg:flex-col items-center lg:items-end justify-between gap-4 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/[0.06]">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs font-mono transition-colors shadow-lg shadow-emerald-500/20"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <div className="flex items-center gap-3">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white transition-colors"
                    title="View Source on GitHub"
                  >
                    <GitHubIcon className="h-4 w-4" />
                  </a>
                  {project.links.liveDemo && (
                    <a
                      href={project.links.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/[0.04] text-slate-400 hover:text-emerald-400 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
