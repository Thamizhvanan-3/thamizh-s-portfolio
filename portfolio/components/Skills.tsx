"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Wrench } from "lucide-react";
import SectionHeader from "./SectionHeader";

const categories = [
  {
    icon: Code2,
    label: "Languages & Frameworks",
    gradient: "from-indigo-500 to-cyan-400",
    bgAccent: "bg-indigo-50 dark:bg-indigo-500/10",
    textAccent: "text-indigo-700 dark:text-indigo-300",
    borderAccent: "border-indigo-200 dark:border-indigo-500/20",
    borderLeft: "border-l-indigo-500",
    skills: ["Python", "Django", "HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    icon: Database,
    label: "Data & ML",
    gradient: "from-violet-500 to-purple-400",
    bgAccent: "bg-violet-50 dark:bg-violet-500/10",
    textAccent: "text-violet-700 dark:text-violet-300",
    borderAccent: "border-violet-200 dark:border-violet-500/20",
    borderLeft: "border-l-violet-500",
    skills: ["Machine Learning", "MySQL", "Pandas", "NumPy", "Scikit-learn", "Data Analysis"],
  },
  {
    icon: Wrench,
    label: "Tools & Platforms",
    gradient: "from-emerald-500 to-teal-400",
    bgAccent: "bg-emerald-50 dark:bg-emerald-500/10",
    textAccent: "text-emerald-700 dark:text-emerald-300",
    borderAccent: "border-emerald-200 dark:border-emerald-500/20",
    borderLeft: "border-l-emerald-500",
    skills: ["Git & GitHub", "LMS Development", "Canvas LMS", "D2L Brightspace", "SchoolCity", "REST APIs", "Agentic AI"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 200, damping: 20 },
  },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative py-32 bg-zinc-50 dark:bg-[#0a0a0b] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full section-fade pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-violet-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="section relative z-10" ref={ref}>
        <SectionHeader index="02" label="skills" title="Technical Arsenal" inView={inView} />

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + ci * 0.15, ease: "easeOut" }}
              className={`card-glow flex flex-col p-8 bg-white dark:bg-zinc-900/80 backdrop-blur-sm border-l-4 ${cat.borderLeft}`}
            >
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start xl:items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-white shadow-lg shrink-0`}>
                  <cat.icon size={26} />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-xl xl:text-2xl text-zinc-900 dark:text-white leading-tight">
                  {cat.label}
                </h3>
              </div>

              <motion.div 
                className="flex flex-wrap gap-3 mt-auto"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    className={`px-4 py-2 rounded-full text-sm font-semibold border ${cat.borderAccent} ${cat.textAccent} ${cat.bgAccent} transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
