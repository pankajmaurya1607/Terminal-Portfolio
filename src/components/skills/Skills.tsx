import React from "react";
import { Wrench, Terminal, Database, Server, Layout, BookOpen } from "lucide-react";
import { skillsData } from "@/data/skills";

export default function Skills() {
  const categoryIcons: { [key: string]: React.ReactNode } = {
    "Programming Languages": <Terminal className="h-4 w-4 text-emerald-400" />,
    "Frontend Engineering": <Layout className="h-4 w-4 text-cyan-400" />,
    "Backend & Systems": <Server className="h-4 w-4 text-purple-400" />,
    "Database & Storage": <Database className="h-4 w-4 text-amber-400" />,
    "Developer Tools & Platforms": <Wrench className="h-4 w-4 text-blue-400" />,
    "Core Computer Science": <BookOpen className="h-4 w-4 text-rose-400" />,
  };

  return (
    <section id="skills" className="py-20 border-t border-white/[0.06] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-medium mb-2">
            <Wrench className="h-3.5 w-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills & Technologies
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            A comprehensive overview of languages, frameworks, databases, and foundational
            computer science disciplines I work with daily.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="rounded-xl bg-[#0c0f17] border border-white/[0.08] hover:border-emerald-500/20 p-5 transition-all shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-white/[0.06]">
                  <div className="p-1.5 rounded-md bg-white/[0.04]">
                    {categoryIcons[category.title] || (
                      <Terminal className="h-4 w-4 text-emerald-400" />
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-white font-mono tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] text-slate-200 border border-white/[0.06] hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-300 transition-colors"
                    >
                      {skill}
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
