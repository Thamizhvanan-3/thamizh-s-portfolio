"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    label: "Languages & Frameworks",
    color: "from-brand-500 to-blue-400",
    skills: [
      { name: "Python", level: 85 },
      { name: "Django", level: 78 },
      { name: "HTML", level: 82 },
      { name: "CSS", level: 75 },
    ],
  },
  {
    label: "Data & ML",
    color: "from-accent-500 to-purple-400",
    skills: [
      { name: "Machine Learning", level: 72 },
      { name: "MySQL", level: 74 },
      { name: "Pandas / NumPy", level: 68 },
      { name: "Scikit-learn", level: 65 },
    ],
  },
  {
    label: "Tools & Platforms",
    color: "from-emerald-500 to-teal-400",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "LMS Development", level: 88 },
      { name: "Canvas LMS", level: 85 },
      { name: "D2L Brightspace", level: 83 },
    ],
  },
];

const tags = [
  "Python", "Django", "HTML", "CSS", "MySQL", "Git", "GitHub",
  "Machine Learning", "LMS", "Canvas", "REST APIs", "Agentic AI",
  "SchoolCity", "Multi-Agent Systems", "EdTech", "D2L Brightspace",
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-xs font-mono text-slate-400">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-100 dark:bg-surface-border overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 bg-white dark:bg-[#0d1117]">
      <div className="section" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <span className="font-mono text-brand-500 text-sm font-medium">02. skills</span>
          <h2 className="font-display text-4xl sm:text-5xl font-700 mt-2 text-slate-900 dark:text-white">
            Technical Stack
          </h2>
          <div className="h-1 w-16 mt-4 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
        </motion.div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-surface-card border border-slate-200 dark:border-surface-border"
            >
              <div className={`text-xs font-mono font-medium uppercase tracking-widest mb-5 bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                {cat.label}
              </div>
              {cat.skills.map((s, si) => (
                <SkillBar key={s.name} {...s} color={cat.color} delay={ci * 0.1 + si * 0.08} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tag cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-center text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-6">
            — Keywords for ATS & Recruiters —
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.35 + i * 0.03 }}
                className="px-3 py-1.5 rounded-lg text-sm font-medium border border-brand-500/25 text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/8 hover:bg-brand-100 dark:hover:bg-brand-500/15 transition-colors cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
