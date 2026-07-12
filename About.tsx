"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Globe, BookOpen, Zap } from "lucide-react";

const highlights = [
  {
    icon: Globe,
    title: "LMS & EdTech",
    desc: "Hands-on experience with D2L Brightspace, Canvas LMS, and Renaissance SchoolCity for K-12 digital assessments.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Brain,
    title: "Python & Django",
    desc: "Built full-stack web apps including an e-commerce platform, trained through FITA Academy and real-world project work.",
    color: "from-violet-500 to-purple-400",
  },
  {
    icon: Zap,
    title: "Machine Learning",
    desc: "Completed ML internship applying regression, decision trees, random forests, and K-Means clustering to real datasets.",
    color: "from-amber-500 to-orange-400",
  },
  {
    icon: BookOpen,
    title: "Agentic AI",
    desc: "Passionate about multi-agent AI systems, having built a SEO Blog Generator powered by coordinated Python agents.",
    color: "from-emerald-500 to-teal-400",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-[#0d1117]">
      <div className="section" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <span className="font-mono text-brand-500 text-sm font-medium">01. about</span>
          <h2 className="font-display text-4xl sm:text-5xl font-700 mt-2 text-slate-900 dark:text-white">
            Who I Am
          </h2>
          <div className="h-1 w-16 mt-4 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-slate-600 dark:text-slate-300 leading-8 text-lg mb-6">
              I'm a motivated IT professional with an <strong className="text-slate-900 dark:text-white">MCA from SRM University</strong> and
              hands-on experience across LMS content development, digital assessment creation, and Python-based web development.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-8 mb-6">
              At Straive, I contributed to two domains: migrating LMS content between D2L Brightspace and Canvas, and
              building K-12 assessments on the Renaissance SchoolCity platform for US clients. These roles sharpened my
              attention to detail and ability to work within structured technical workflows.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-8">
              Outside of work, I build Django web apps, explore multi-agent AI workflows, and apply machine learning to
              real-world problems. I believe in continuous learning and bringing a problem-solving mindset to every role.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { val: "1+", label: "Year Experience" },
                { val: "3+", label: "Projects Built" },
                { val: "5+", label: "Certifications" },
              ].map(s => (
                <div key={s.label} className="text-center p-4 rounded-xl bg-white dark:bg-surface-card border border-slate-200 dark:border-surface-border">
                  <div className="font-display text-3xl font-800 gradient-text">{s.val}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Highlights grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="card-hover p-5 rounded-2xl bg-white dark:bg-surface-card border border-slate-200 dark:border-surface-border"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${h.color} flex items-center justify-center mb-4 shadow-md`}>
                  <h.icon size={18} className="text-white" />
                </div>
                <h3 className="font-display font-700 text-slate-900 dark:text-white mb-2">{h.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
