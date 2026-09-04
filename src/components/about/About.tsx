import React from "react";
import { User, CheckCircle2, GraduationCap, MapPin, Mail, Award } from "lucide-react";
import { profileData } from "@/data/profile";
import { educationData } from "@/data/education";

export default function About() {
  const interests = [
    { title: "Backend Engineering", desc: "APIs, async pipelines, idempotency, microservices" },
    { title: "Distributed Systems", desc: "Apache Kafka event streams, consensus, horizontal scale" },
    { title: "System Design", desc: "Fault-tolerant architectures, caching, DB partitioning" },
    { title: "Data Structures & Algorithms", desc: "Computational complexity, graph algorithms, DP" },
    { title: "Full-Stack Development", desc: "React, Next.js, WebSockets, Node.js, MongoDB" },
  ];

  return (
    <section id="about" className="py-16 border-t border-white/[0.06] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-medium mb-2">
          <User className="h-3.5 w-3.5" />
          <span>ABOUT & BACKGROUND</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-8">
          Engineering Background
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Narrative */}
          <div className="lg:col-span-2 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am a Computer Science graduate from{" "}
              <span className="text-white font-semibold">
                Motilal Nehru National Institute of Technology (MNNIT) Allahabad
              </span>{" "}
              (CPI: <span className="text-emerald-400 font-mono font-medium">8.12 / 10</span>),
              interested in building scalable backend systems and thoughtful full-stack products.
            </p>
            <p>
              During my Software Development Engineer internship at{" "}
              <span className="text-white font-semibold">Razorpay</span> in Bangalore, I engineered
              critical components within core financial infrastructure, migrating synchronous bulk
              reconciliation systems to Kafka-driven asynchronous event streaming, architecting merchant
              refund workflows, and resolving production gateway anomalies.
            </p>
            <p>
              I combine practical distributed engineering experience with strong computational
              foundations, having solved{" "}
              <span className="text-white font-semibold">1800+ algorithmic problems</span> across
              LeetCode (1877 rating) and Codeforces (1239 rating).
            </p>

            {/* Core Interests List */}
            <div className="pt-4">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                Core Engineering Interests
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {interests.map((item) => (
                  <div
                    key={item.title}
                    className="p-3 rounded-lg bg-[#0e1118] border border-white/[0.06] flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-white">{item.title}</div>
                      <div className="text-[11px] text-slate-400">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Info Card */}
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-[#0d1017] border border-white/[0.08] shadow-lg">
              <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-4 flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span>Quick Facts</span>
              </h3>

              <div className="space-y-3.5 text-xs">
                <div>
                  <span className="text-slate-500 font-mono block">Degree:</span>
                  <span className="text-white font-medium">
                    B.Tech in Computer Science & Engineering
                  </span>
                </div>

                <div>
                  <span className="text-slate-500 font-mono block">Institution:</span>
                  <span className="text-white font-medium">MNNIT Allahabad</span>
                  <span className="text-slate-400 block text-[11px]">Class of 2026 (CPI: 8.12)</span>
                </div>

                <div>
                  <span className="text-slate-500 font-mono block">Secondary School:</span>
                  <span className="text-white font-medium">JNV Ayodhya</span>
                  <span className="text-slate-400 block text-[11px]">
                    Class XII: 92% • Class X: 85.6%
                  </span>
                </div>

                <div>
                  <span className="text-slate-500 font-mono block">Location:</span>
                  <span className="text-white font-medium flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-emerald-400" />
                    Bangalore / Prayagraj, India
                  </span>
                </div>

                <div>
                  <span className="text-slate-500 font-mono block">Email:</span>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-emerald-400 hover:underline flex items-center gap-1 font-mono"
                  >
                    <Mail className="h-3 w-3" />
                    {profileData.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Certifications preview */}
            <div className="p-4 rounded-xl bg-[#0d1017] border border-white/[0.08] text-xs">
              <div className="flex items-center gap-2 font-mono text-slate-400 mb-2 font-semibold">
                <Award className="h-3.5 w-3.5 text-amber-400" />
                <span>Key Recognitions</span>
              </div>
              <ul className="space-y-1.5 text-slate-300 text-[11px]">
                <li>• Machine Learning Specialization (DeepLearning.AI)</li>
                <li>• HackOn With Amazon — Season 4 Participant</li>
                <li>• FLY Leadership Program (CMI)</li>
                <li>• Softathalon — Avishkar MNNIT</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
