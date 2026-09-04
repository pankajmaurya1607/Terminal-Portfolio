import React from "react";
import Link from "next/link";
import { FolderGit2, ArrowRight, ExternalLink, Sparkles, Radio } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import { projectsData } from "@/data/projects";

export default function Projects() {
  const featured = projectsData.filter((p) => p.featured);
  const others = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 border-t border-white/[0.06] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-medium mb-2">
              <FolderGit2 className="h-3.5 w-3.5" />
              <span>ENGINEERING PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Software Projects
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              Each project demonstrates architectural decisions, API design, and system trade-offs.
              Explore the in-depth case studies for complete system diagrams.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>All Projects Directory</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {featured.map((project, idx) => (
            <div
              key={project.slug}
              className="rounded-xl bg-[#0c0f17] border border-white/[0.08] hover:border-emerald-500/30 p-7 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                    {project.slug === "buzz-talk" ? (
                      <Radio className="h-3 w-3 animate-pulse text-cyan-400" />
                    ) : (
                      <Sparkles className="h-3 w-3 text-emerald-400" />
                    )}
                    {project.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-600 font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-4">{project.subtitle}</p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Features preview */}
                <div className="space-y-1.5 mb-6 text-xs text-slate-400">
                  {project.details.features.slice(0, 3).map((feat) => (
                    <div key={feat} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>Read Architecture Case Study</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                      title="View GitHub Repository"
                    >
                      <GitHubIcon className="h-4 w-4" />
                    </a>
                    {project.links.liveDemo && (
                      <a
                        href={project.links.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-white/[0.06] transition-colors"
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

        {/* Other Projects / Task Manager */}
        {others.length > 0 && (
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-4">
              Other Engineering Work
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {others.map((proj) => (
                <div
                  key={proj.slug}
                  className="rounded-xl bg-[#0a0d14] border border-white/[0.06] hover:border-white/[0.15] p-5 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase mb-2">
                      {proj.tag}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{proj.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {proj.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {proj.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                      <Link
                        href={`/projects/${proj.slug}`}
                        className="text-xs font-mono text-emerald-400 hover:underline"
                      >
                        Case Study →
                      </Link>
                      <a
                        href={proj.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white"
                      >
                        <GitHubIcon className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
