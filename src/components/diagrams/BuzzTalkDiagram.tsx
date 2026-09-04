import React from "react";
import { Monitor, Radio, Server, Database, ArrowLeftRight, Lock } from "lucide-react";

export default function BuzzTalkDiagram() {
  return (
    <div className="p-6 rounded-xl bg-[#090c12] border border-white/[0.08] my-8 shadow-2xl">
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/[0.06]">
        <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
          System Architecture — Real-Time WebSocket Pipeline
        </span>
        <span className="text-[11px] font-mono text-slate-500">Bi-Directional Full-Duplex Flow</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        {/* Node 1: Client */}
        <div className="p-4 rounded-lg bg-[#0e121a] border border-cyan-500/30 text-center">
          <div className="flex justify-center mb-2">
            <div className="p-2 rounded-md bg-cyan-500/10 text-cyan-400">
              <Monitor className="h-5 w-5" />
            </div>
          </div>
          <div className="text-xs font-bold text-white font-mono">React Client</div>
          <div className="text-[10px] text-slate-400 mt-1">Socket.IO Client</div>
          <div className="text-[9px] font-mono text-cyan-300 mt-2 px-1.5 py-0.5 rounded bg-cyan-950/60 inline-block">
            Optimistic UI State
          </div>
        </div>

        {/* Transport 1: WebSocket Pipe */}
        <div className="flex flex-col items-center justify-center p-2 text-center">
          <div className="hidden md:flex items-center gap-1 text-cyan-400 font-mono text-[10px] mb-1">
            <ArrowLeftRight className="h-3.5 w-3.5 animate-pulse" />
            <span>ws:// protocol</span>
          </div>
          <div className="w-full h-0.5 bg-gradient-to-r from-cyan-500/40 via-cyan-400 to-cyan-500/40 relative">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-cyan-400 animate-ping" />
          </div>
          <span className="text-[9px] font-mono text-slate-500 mt-1">Sub-100ms Latency</span>
        </div>

        {/* Node 2: Server Hub */}
        <div className="p-4 rounded-lg bg-[#0e121a] border border-emerald-500/30 text-center">
          <div className="flex justify-center mb-2">
            <div className="p-2 rounded-md bg-emerald-500/10 text-emerald-400">
              <Server className="h-5 w-5" />
            </div>
          </div>
          <div className="text-xs font-bold text-white font-mono">Node.js / Express</div>
          <div className="text-[10px] text-slate-400 mt-1">Socket.IO Hub + JWT</div>
          <div className="text-[9px] font-mono text-emerald-300 mt-2 px-1.5 py-0.5 rounded bg-emerald-950/60 inline-block">
            In-Memory Socket Map
          </div>
        </div>

        {/* Node 3: Database */}
        <div className="p-4 rounded-lg bg-[#0e121a] border border-purple-500/30 text-center">
          <div className="flex justify-center mb-2">
            <div className="p-2 rounded-md bg-purple-500/10 text-purple-400">
              <Database className="h-5 w-5" />
            </div>
          </div>
          <div className="text-xs font-bold text-white font-mono">MongoDB Cluster</div>
          <div className="text-[10px] text-slate-400 mt-1">Messages & Profiles</div>
          <div className="text-[9px] font-mono text-purple-300 mt-2 px-1.5 py-0.5 rounded bg-purple-950/60 inline-block">
            Persistent Store
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/[0.04] grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] text-slate-400 font-mono">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          <span>Bi-directional WebSocket messaging</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>Heartbeat presence tracking</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
          <span>Asynchronous write-behind persistence</span>
        </div>
      </div>
    </div>
  );
}
