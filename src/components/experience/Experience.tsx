import React from "react";
import { Briefcase, CheckCircle2, ArrowUpRight, Cpu, Layers, GitBranch, ShieldCheck } from "lucide-react";
import { experienceData } from "@/data/experience";

export default function Experience() {
  const caseIcons = [
    <GitBranch key="1" className="h-4 w-4 text-emerald-400" />,
    <Layers key="2" className="h-4 w-4 text-cyan-400" />,
    <Cpu key="3" className="h-4 w-4 text-purple-400" />,
    <ShieldCheck key="4" className="h-4 w-4 text-blue-400" />,
  ];

  return (
    <section id="experience" className="py-20 border-t border-white/[0.06] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-medium mb-2">
              <Briefcase className="h-3.5 w-3.5" />
              <span>PRODUCTION EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Engineering at Razorpay
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              Software Development Engineer Intern in Bangalore. Engineered high-scale fintech
              services, asynchronous reconciliation engines, and payment gateway reliability.
            </p>
          </div>

          <div className="px-3.5 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300">
            {experienceData.period} • {experienceData.location}
          </div>
        </div>

        {/* 4 Deep Engineering Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceData.caseStudies.map((caseStudy, index) => (
            <div
              key={caseStudy.id}
              className="rounded-xl bg-[#0c0f17] border border-white/[0.08] hover:border-emerald-500/30 p-6 transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/40 hover:shadow-emerald-500/5"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                      {caseIcons[index % caseIcons.length]}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                        Case Study {caseStudy.number}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {caseStudy.tag}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-600 font-bold">
                    #{caseStudy.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-4">
                  {caseStudy.title}
                </h3>

                {/* Problem vs Solution breakdown */}
                <div className="space-y-3.5 text-xs">
                  <div className="p-3 rounded-lg bg-red-950/20 border border-red-500/20">
                    <span className="font-mono font-bold text-rose-400 uppercase text-[10px] block mb-1">
                      Problem Context:
                    </span>
                    <p className="text-slate-300 leading-relaxed">{caseStudy.problem}</p>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20">
                    <span className="font-mono font-bold text-emerald-400 uppercase text-[10px] block mb-1">
                      Engineering Work:
                    </span>
                    <p className="text-slate-200 leading-relaxed">{caseStudy.solution}</p>
                  </div>
                </div>
              </div>

              {/* Bottom: Tech Stack & Impact */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-300">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span className="text-[11px] text-slate-400">
                    <strong className="text-slate-200">Impact:</strong> {caseStudy.impact}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {caseStudy.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
