import React from "react";
import { Monitor, Sparkles, Database, Image as ImageIcon, ArrowRight, ShieldCheck } from "lucide-react";

export default function TravelAgencyDiagram() {
  return (
    <div className="p-6 rounded-xl bg-[#090c12] border border-white/[0.08] my-8 shadow-2xl">
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/[0.06]">
        <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
          System Architecture — AI Inference & Serverless Backend
        </span>
        <span className="text-[11px] font-mono text-slate-500">Hybrid AI Workflow</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* React Client */}
        <div className="md:col-span-4 p-4 rounded-lg bg-[#0e121a] border border-emerald-500/30 text-center">
          <div className="flex justify-center mb-2">
            <div className="p-2 rounded-md bg-emerald-500/10 text-emerald-400">
              <Monitor className="h-5 w-5" />
            </div>
          </div>
          <div className="text-xs font-bold text-white font-mono">React Client (TS)</div>
          <div className="text-[10px] text-slate-400 mt-1">Tailwind CSS + Syncfusion</div>
          <div className="text-[9px] font-mono text-emerald-300 mt-2 px-1.5 py-0.5 rounded bg-emerald-950/60 inline-block">
            Structured JSON Parser
          </div>
        </div>

        {/* Center Divider Arrow */}
        <div className="md:col-span-1 flex justify-center text-slate-500">
          <ArrowRight className="h-5 w-5 text-emerald-400/60 hidden md:block" />
        </div>

        {/* Backend Services (Appwrite + Gemini + Unsplash) */}
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Appwrite */}
          <div className="p-3.5 rounded-lg bg-[#0e121a] border border-purple-500/30 text-center">
            <div className="flex justify-center mb-1.5">
              <Database className="h-4 w-4 text-purple-400" />
            </div>
            <div className="text-xs font-bold text-white font-mono">Appwrite</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Auth & Database</div>
            <div className="text-[9px] font-mono text-purple-300 mt-2 px-1 rounded bg-purple-950/60">
              User Itineraries
            </div>
          </div>

          {/* Gemini AI */}
          <div className="p-3.5 rounded-lg bg-[#0e121a] border border-cyan-500/30 text-center">
            <div className="flex justify-center mb-1.5">
              <Sparkles className="h-4 w-4 text-cyan-400" />
            </div>
            <div className="text-xs font-bold text-white font-mono">Google Gemini</div>
            <div className="text-[10px] text-slate-400 mt-0.5">LLM Inference</div>
            <div className="text-[9px] font-mono text-cyan-300 mt-2 px-1 rounded bg-cyan-950/60">
              Multi-Day Schedules
            </div>
          </div>

          {/* Unsplash */}
          <div className="p-3.5 rounded-lg bg-[#0e121a] border border-amber-500/30 text-center">
            <div className="flex justify-center mb-1.5">
              <ImageIcon className="h-4 w-4 text-amber-400" />
            </div>
            <div className="text-xs font-bold text-white font-mono">Unsplash API</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Dynamic Visuals</div>
            <div className="text-[9px] font-mono text-amber-300 mt-2 px-1 rounded bg-amber-950/60">
              Cached Image CDN
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/[0.04] grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] text-slate-400 font-mono">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>Strict schema output validation</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          <span>Real-time trip preference synthesis</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
          <span>Serverless security & document access control</span>
        </div>
      </div>
    </div>
  );
}
