import React from "react";
import { Award, CheckCircle2 } from "lucide-react";
import { achievementsData } from "@/data/achievements";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 border-t border-white/[0.06] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-medium mb-2">
            <Award className="h-3.5 w-3.5" />
            <span>HONORS & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Verified Achievements
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Recognitions in national hackathons, technical fests, leadership programs, and
            specialized certifications.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-xl bg-[#0c0f17] border border-white/[0.08] hover:border-emerald-500/30 transition-all flex flex-col justify-between shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {item.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">{item.category}</span>
                </div>

                <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                <div className="text-xs font-mono text-emerald-400/80 mb-3">{item.issuer}</div>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>Verified Credential</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
