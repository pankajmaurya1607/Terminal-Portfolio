import React from "react";
import { Cpu, Server, Network, Layers, Binary } from "lucide-react";
import { engineeringPillars } from "@/data/engineering";

export default function Engineering() {
  const icons = [
    <Server key="1" className="h-5 w-5 text-emerald-400" />,
    <Network key="2" className="h-5 w-5 text-cyan-400" />,
    <Layers key="3" className="h-5 w-5 text-purple-400" />,
    <Binary key="4" className="h-5 w-5 text-amber-400" />,
  ];

  return (
    <section id="engineering" className="py-20 border-t border-white/[0.06] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-medium mb-2">
            <Cpu className="h-3.5 w-3.5" />
            <span>ENGINEERING PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            What I Like Building
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            My engineering work is rooted in resilient server architecture, asynchronous data flow,
            and computational efficiency.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {engineeringPillars.map((pillar, index) => (
            <div
              key={pillar.number}
              className="rounded-xl bg-[#0c0f17] border border-white/[0.08] hover:border-emerald-500/30 p-6 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                    {icons[index % icons.length]}
                  </div>
                  <span className="text-xl font-mono font-bold text-slate-700 group-hover:text-emerald-400/40 transition-colors">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs font-mono text-emerald-400/80 mb-3">{pillar.subtitle}</p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Core concepts */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-2 font-bold">
                    Core Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.coreConcepts.map((concept) => (
                      <span
                        key={concept}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Practical grounding */}
              <div className="pt-4 border-t border-white/[0.06] text-xs">
                <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
                  Real-World Application:
                </span>
                <p className="text-slate-300 italic text-[11px] leading-relaxed">
                  &ldquo;{pillar.practicalApplication}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
