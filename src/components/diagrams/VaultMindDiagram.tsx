import React from "react";
import { Monitor, Server, Database, Sparkles, Cpu, Layers, ShieldCheck } from "lucide-react";

export default function VaultMindDiagram() {
  return (
    <div className="p-6 rounded-xl bg-[#090c12] border border-white/[0.08] my-8 shadow-2xl">
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/[0.06]">
        <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">
          System Architecture — Enterprise RAG & RBAC Pipeline
        </span>
        <span className="text-[11px] font-mono text-slate-500">Asynchronous Ingestion & Vector Retrieval</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Layer 1: Client & Gateway */}
        <div className="md:col-span-4 space-y-3">
          <div className="p-3.5 rounded-lg bg-[#0e121a] border border-blue-500/30 text-center">
            <div className="flex justify-center mb-1.5">
              <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-400">
                <Monitor className="h-4 w-4" />
              </div>
            </div>
            <div className="text-xs font-bold text-white font-mono">React 19 SPA + Nginx</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Guest Sandbox & Admin Portal</div>
            <div className="text-[9px] font-mono text-blue-300 mt-2 px-1.5 py-0.5 rounded bg-blue-950/60 inline-block">
              10-min TTL Quick Try
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-[#0e121a] border border-purple-500/30 text-center">
            <div className="flex justify-center mb-1.5">
              <div className="p-1.5 rounded-md bg-purple-500/10 text-purple-400">
                <Server className="h-4 w-4" />
              </div>
            </div>
            <div className="text-xs font-bold text-white font-mono">FastAPI Gateway</div>
            <div className="text-[10px] text-slate-400 mt-0.5">JWT Auth & RBAC Middleware</div>
            <div className="text-[9px] font-mono text-purple-300 mt-2 px-1.5 py-0.5 rounded bg-purple-950/60 inline-block">
              SQL Department Isolation
            </div>
          </div>
        </div>

        {/* Layer 2: Async Queue & Celery Worker */}
        <div className="md:col-span-4 flex flex-col justify-center space-y-3 p-3 rounded-lg bg-[#0b0e14] border border-amber-500/30 text-center">
          <div className="flex justify-center mb-1">
            <Layers className="h-5 w-5 text-amber-400" />
          </div>
          <div className="text-xs font-bold text-white font-mono">Celery Worker Pool</div>
          <div className="text-[10px] text-slate-400 mt-0.5">Redis Queue (document_processing)</div>
          <div className="text-[9px] font-mono text-amber-300 mt-1 px-1.5 py-0.5 rounded bg-amber-950/60 inline-block">
            PyPDF / DOCX Recursive Chunker
          </div>
          <div className="text-[9px] font-mono text-cyan-300 px-1.5 py-0.5 rounded bg-cyan-950/60 inline-block">
            FastEmbed (Local ONNX BGE)
          </div>
        </div>

        {/* Layer 3: Vector Store & LLM Inference */}
        <div className="md:col-span-4 space-y-3">
          <div className="p-3.5 rounded-lg bg-[#0e121a] border border-emerald-500/30 text-center">
            <div className="flex justify-center mb-1.5">
              <Database className="h-4 w-4 text-emerald-400" />
            </div>
            <div className="text-xs font-bold text-white font-mono">PostgreSQL 16 + PGVector</div>
            <div className="text-[10px] text-slate-400 mt-0.5">384-dim HNSW Cosine Index</div>
            <div className="text-[9px] font-mono text-emerald-300 mt-2 px-1.5 py-0.5 rounded bg-emerald-950/60 inline-block">
              WHERE dept_id IN (:user_depts)
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-[#0e121a] border border-pink-500/30 text-center">
            <div className="flex justify-center mb-1.5">
              <Sparkles className="h-4 w-4 text-pink-400" />
            </div>
            <div className="text-xs font-bold text-white font-mono">Gemini 3.1 Flash Lite</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Context Synthesis & Citations</div>
            <div className="text-[9px] font-mono text-pink-300 mt-2 px-1.5 py-0.5 rounded bg-pink-950/60 inline-block">
              Confidence Scoring
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
