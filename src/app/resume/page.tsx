"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Printer,
  FileText,
  Mail,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  Terminal,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";
import { experienceData } from "@/data/experience";
import { projectsData } from "@/data/projects";
import { skillsData } from "@/data/skills";
import { educationData } from "@/data/education";
import { achievementsData } from "@/data/achievements";
import { codingData } from "@/data/coding";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-28 pb-24 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Action Bar (hidden during printing) */}
      <div className="flex items-center justify-between gap-4 mb-8 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs font-mono transition-colors shadow-sm cursor-pointer"
          >
            <Printer className="h-3.5 w-3.5" />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Resume Document Canvas */}
      <div className="rounded-xl bg-[#0d1017] border border-white/[0.08] p-8 sm:p-12 shadow-2xl print:bg-white print:text-black print:p-0 print:border-0 print:shadow-none">
        {/* Header */}
        <header className="border-b border-white/[0.08] pb-6 mb-8 print:border-black/20">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white print:text-black">
                {profileData.name}
              </h1>
              <div className="text-emerald-400 font-mono text-sm mt-1 print:text-emerald-700">
                {profileData.role} • Backend • Distributed Systems • Full Stack
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-4 print:text-slate-700">
            <span className="flex items-center gap-1">
              <Mail className="h-3 w-3 text-emerald-400 print:text-emerald-700" />
              {profileData.email}
            </span>
            <span>•</span>
            <a
              href={profileData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/pankaj-maurya
            </a>
            <span>•</span>
            <a
              href={profileData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/pankajmaurya1607
            </a>
            <span>•</span>
            <a
              href={profileData.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              leetcode.com/pankajmaurya1607 (1877)
            </a>
          </div>
        </header>

        {/* Work Experience */}
        <section className="mb-8">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-4 flex items-center gap-2 print:text-emerald-800">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Professional Work Experience</span>
          </h2>

          <div className="space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="text-base font-bold text-white print:text-black">
                  {experienceData.company} —{" "}
                  <span className="text-slate-300 font-normal print:text-slate-700">
                    {experienceData.role}
                  </span>
                </div>
                <div className="text-xs font-mono text-slate-400 print:text-slate-600">
                  {experienceData.period} | {experienceData.location}
                </div>
              </div>

              <div className="mt-3 space-y-2.5 text-xs text-slate-300 print:text-slate-800 leading-relaxed">
                {experienceData.caseStudies.map((cs) => (
                  <div key={cs.id} className="pl-3 border-l border-emerald-500/30 print:border-black/30">
                    <strong className="text-white print:text-black font-semibold">
                      {cs.title}:
                    </strong>{" "}
                    {cs.solution}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-4 flex items-center gap-2 print:text-emerald-800">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>Education</span>
          </h2>

          <div className="space-y-4 text-xs">
            {educationData.map((edu) => (
              <div key={edu.institution + edu.degree} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <div className="font-bold text-white print:text-black text-sm">
                    {edu.institution}
                  </div>
                  <div className="text-slate-400 print:text-slate-700">
                    {edu.degree} in {edu.field}
                  </div>
                </div>
                <div className="font-mono text-slate-400 print:text-slate-600 text-right sm:text-right">
                  <span>{edu.period}</span>
                  <span className="block text-emerald-400 font-semibold print:text-emerald-800">
                    {edu.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-4 flex items-center gap-2 print:text-emerald-800">
            <FileText className="h-3.5 w-3.5" />
            <span>Key Engineering Projects</span>
          </h2>

          <div className="space-y-5 text-xs">
            {projectsData.map((p) => (
              <div key={p.slug}>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="text-sm font-bold text-white print:text-black">
                    {p.title} —{" "}
                    <span className="text-slate-400 font-normal font-mono text-xs">
                      {p.techStack.join(", ")}
                    </span>
                  </div>
                  <div className="font-mono text-slate-400 text-[11px] print:text-slate-600">
                    <a href={p.links.github} target="_blank" rel="noreferrer" className="hover:underline">
                      GitHub
                    </a>
                  </div>
                </div>
                <p className="text-slate-300 print:text-slate-800 mt-1 leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-1 flex flex-wrap gap-x-3 text-[11px] text-slate-400 print:text-slate-700">
                  {p.details.features.slice(0, 3).map((f) => (
                    <span key={f}>• {f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-4 flex items-center gap-2 print:text-emerald-800">
            <Terminal className="h-3.5 w-3.5" />
            <span>Technical Skills</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {skillsData.map((cat) => (
              <div key={cat.title}>
                <span className="font-mono font-bold text-white print:text-black block mb-0.5">
                  {cat.title}:
                </span>
                <span className="text-slate-400 print:text-slate-700">
                  {cat.skills.join(" • ")}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Problem Solving & Achievements */}
        <section>
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-4 flex items-center gap-2 print:text-emerald-800">
            <Award className="h-3.5 w-3.5" />
            <span>Problem Solving & Achievements</span>
          </h2>

          <div className="space-y-1.5 text-xs text-slate-300 print:text-slate-800">
            <p>
              • <strong className="text-white print:text-black">1800+ DSA Problems Solved:</strong>{" "}
              LeetCode (1877 rating, Knight tier), Codeforces (1239 rating).
            </p>
            <p>
              • <strong className="text-white print:text-black">Machine Learning Specialization:</strong>{" "}
              DeepLearning.AI certification covering supervised, unsupervised & neural algorithms.
            </p>
            <p>
              • <strong className="text-white print:text-black">HackOn With Amazon:</strong>{" "}
              Selected participant in Amazon&apos;s national competitive engineering hackathon (Season 4).
            </p>
            <p>
              • <strong className="text-white print:text-black">Leadership & Fest:</strong> Graduate of
              Competitiveness Mindset Institute FLY Program; Softathalon participant at Avishkar MNNIT.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
