import React from "react";
import { Code2, Trophy, ExternalLink, Activity, Award, Flame } from "lucide-react";
import { codingData } from "@/data/coding";

export default function Coding() {
  return (
    <section id="coding" className="py-20 border-t border-white/[0.06] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-medium mb-2">
            <Code2 className="h-3.5 w-3.5" />
            <span>ALGORITHMIC RIGOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Competitive Programming & Problem Solving
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Continuous algorithmic practice solving non-trivial dynamic programming, graph, and
            data structure problems across global programming platforms.
          </p>
        </div>

        {/* Primary Metrics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {codingData.metrics.map((metric) => (
            <div
              key={metric.label}
              className={`p-5 rounded-xl border transition-all ${
                metric.highlight
                  ? "bg-[#0d121c] border-emerald-500/30 shadow-lg shadow-emerald-500/5"
                  : "bg-[#0c0f17] border-white/[0.08]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-400">{metric.label}</span>
                {metric.highlight ? (
                  <Flame className="h-4 w-4 text-emerald-400" />
                ) : (
                  <Activity className="h-4 w-4 text-slate-500" />
                )}
              </div>
              <div
                className={`text-3xl font-extrabold tracking-tight mb-2 ${
                  metric.highlight ? "text-emerald-400" : "text-white"
                }`}
              >
                {metric.value}
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">{metric.detail}</p>
            </div>
          ))}
        </div>

        {/* Platform Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {codingData.platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#0c0f17] border border-white/[0.08] hover:border-emerald-500/30 hover:bg-[#0f1420] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {platform.name}
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </div>
                <div className="inline-block px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 mb-3">
                  {platform.statBadge}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {platform.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] font-mono text-slate-500 group-hover:text-slate-300 transition-colors">
                @{platform.handle} →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
