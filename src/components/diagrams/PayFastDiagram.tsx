import React from "react";
import { CreditCard, Server, Database, Radio, ArrowRight, ShieldCheck, Activity } from "lucide-react";

export default function PayFastDiagram() {
  return (
    <div className="p-6 rounded-xl bg-[#090c12] border border-white/[0.08] my-8 shadow-2xl">
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/[0.06]">
        <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
          System Architecture — Event-Driven Payment Pipeline
        </span>
        <span className="text-[11px] font-mono text-slate-500">Asynchronous Microservices Flow</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Ingress: Client + Gateway */}
        <div className="md:col-span-4 space-y-3">
          <div className="p-3.5 rounded-lg bg-[#0e121a] border border-blue-500/30 text-center">
            <div className="flex justify-center mb-1.5">
              <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-400">
                <CreditCard className="h-4 w-4" />
              </div>
            </div>
            <div className="text-xs font-bold text-white font-mono">React Checkout UI</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Card Tokenization + Idempotency-Key</div>
            <div className="text-[9px] font-mono text-blue-300 mt-2 px-1.5 py-0.5 rounded bg-blue-950/60 inline-block">
              Zero Raw PAN Exposure
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-[#0e121a] border border-emerald-500/30 text-center">
            <div className="flex justify-center mb-1.5">
              <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-400">
                <Server className="h-4 w-4" />
              </div>
            </div>
            <div className="text-xs font-bold text-white font-mono">API Gateway (Go)</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Idempotency Lock + Auth</div>
            <div className="text-[9px] font-mono text-emerald-300 mt-2 px-1.5 py-0.5 rounded bg-emerald-950/60 inline-block">
              Sub-10ms Checkout Ingress
            </div>
          </div>
        </div>

        {/* Center: Kafka Event Bus */}
        <div className="md:col-span-3 flex flex-col items-center justify-center p-3 rounded-lg bg-[#0b0e14] border border-red-500/30 text-center">
          <div className="p-2 rounded-md bg-red-500/10 text-red-400 mb-2">
            <Radio className="h-5 w-5 animate-pulse" />
          </div>
          <div className="text-xs font-bold text-white font-mono">Apache Kafka</div>
          <div className="text-[10px] text-slate-400 mt-0.5">Topic: payment-events</div>
          <div className="w-full h-0.5 bg-gradient-to-r from-red-500/40 via-red-400 to-red-500/40 my-2 relative">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-red-400 animate-ping" />
          </div>
          <span className="text-[9px] font-mono text-slate-500">Decoupled Asynchronous Streaming</span>
        </div>

        {/* Right: Consumers */}
        <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* Fraud Service */}
          <div className="p-3 rounded-lg bg-[#0e121a] border border-amber-500/30 text-center">
            <div className="flex justify-center mb-1">
              <Activity className="h-4 w-4 text-amber-400" />
            </div>
            <div className="text-xs font-bold text-white font-mono">Fraud Service</div>
            <div className="text-[9px] text-slate-400">Redis Velocity Checks</div>
            <div className="text-[9px] font-mono text-amber-300 mt-1 px-1 rounded bg-amber-950/60 inline-block">
              Sliding Window
            </div>
          </div>

          {/* Ledger Service */}
          <div className="p-3 rounded-lg bg-[#0e121a] border border-indigo-500/30 text-center">
            <div className="flex justify-center mb-1">
              <Database className="h-4 w-4 text-indigo-400" />
            </div>
            <div className="text-xs font-bold text-white font-mono">Ledger Service</div>
            <div className="text-[9px] text-slate-400">PostgreSQL Double-Entry</div>
            <div className="text-[9px] font-mono text-indigo-300 mt-1 px-1 rounded bg-indigo-950/60 inline-block">
              Σ Debits - Credits = 0
            </div>
          </div>

          {/* Vault Service */}
          <div className="p-3 rounded-lg bg-[#0e121a] border border-teal-500/30 text-center">
            <div className="flex justify-center mb-1">
              <ShieldCheck className="h-4 w-4 text-teal-400" />
            </div>
            <div className="text-xs font-bold text-white font-mono">Card Vault</div>
            <div className="text-[9px] text-slate-400">PCI-DSS Isolated CDE</div>
            <div className="text-[9px] font-mono text-teal-300 mt-1 px-1 rounded bg-teal-950/60 inline-block">
              AES-GCM Encryption
            </div>
          </div>

          {/* Webhook Service */}
          <div className="p-3 rounded-lg bg-[#0e121a] border border-cyan-500/30 text-center">
            <div className="flex justify-center mb-1">
              <ArrowRight className="h-4 w-4 text-cyan-400" />
            </div>
            <div className="text-xs font-bold text-white font-mono">Webhooks</div>
            <div className="text-[9px] text-slate-400">Merchant Callbacks</div>
            <div className="text-[9px] font-mono text-cyan-300 mt-1 px-1 rounded bg-cyan-950/60 inline-block">
              Exponential Backoff
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
