import React from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { educationData } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-20 border-t border-white/[0.06] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-medium mb-2">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Formal Computer Science engineering training at MNNIT Allahabad, with coursework in
            distributed systems, operating systems, compilers, algorithms, and networks.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={edu.institution + edu.degree}
              className="rounded-xl bg-[#0c0f17] border border-white/[0.08] hover:border-emerald-500/20 p-6 transition-all shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
                <div>
                  <span className="text-xs font-mono text-emerald-400 font-semibold block mb-1">
                    {edu.degree}
                  </span>
                  <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                  <div className="text-sm text-slate-300 mt-0.5">{edu.field}</div>
                </div>

                <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300">
                    <Calendar className="h-3 w-3 text-emerald-400" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 mt-1">
                    {edu.grade}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                <MapPin className="h-3 w-3 text-slate-500" />
                <span>{edu.location}</span>
              </div>

              {edu.details && (
                <div className="pt-3 border-t border-white/[0.06] text-xs text-slate-300 space-y-1">
                  {edu.details.map((detail, dIdx) => (
                    <p key={dIdx} className="leading-relaxed">
                      • {detail}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
