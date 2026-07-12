"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GitBranch, ExternalLink, ShoppingBag, TreePine, Bot } from "lucide-react";

const projects = [
  {
    icon: ShoppingBag,
    title: "VibeWear",
    subtitle: "E-Commerce Platform",
    desc: "A full-stack Django e-commerce platform with secure authentication, dynamic product listings, pagination, and user account management. Built with mobile-first responsive design.",
    tech: ["Python", "Django", "MySQL", "HTML", "CSS", "Bootstrap"],
    color: "from-brand-500 to-blue-400",
    features: ["Secure login/signup with session management", "Product catalog with server-side pagination", "User account dashboard", "Responsive mobile-first layout"],
    github: "https://github.com/",
    live: null,
  },
  {
    icon: TreePine,
    title: "Wood Analysis Platform",
    subtitle: "Machine Learning App",
    desc: "An ML-powered platform that classifies wood species, evaluates timber quality, and assesses environmental impact — producing detailed analytical reports from user-provided samples.",
    tech: ["Python", "Scikit-learn", "MLPRegressor", "Pandas", "NumPy"],
    color: "from-emerald-500 to-teal-400",
    features: ["Wood species classification", "Timber quality assessment via neural net", "Environmental impact evaluation", "Automated PDF report generation"],
    github: "https://github.com/",
    live: null,
  },
  {
    icon: Bot,
    title: "SEO Blog Generator",
    subtitle: "Multi-Agent AI System",
    desc: "A multi-agent Python pipeline that automates blog creation from topic to publish-ready post. Coordinated agents handle research, content generation, SEO optimization, and editorial review.",
    tech: ["Python", "Agentic AI", "Multi-Agent", "SEO", "LLM APIs"],
    color: "from-accent-500 to-pink-400",
    features: ["Research agent for topic gathering", "Content generation agent", "SEO optimization agent", "Automated review and editing workflow"],
    github: "https://github.com/",
    live: null,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#0d1117]">
      <div className="section" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <span className="font-mono text-brand-500 text-sm font-medium">04. projects</span>
          <h2 className="font-display text-4xl sm:text-5xl font-700 mt-2 text-slate-900 dark:text-white">
            What I've Built
          </h2>
          <div className="h-1 w-16 mt-4 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <motion.article
              key={proj.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group card-hover flex flex-col rounded-2xl bg-slate-50 dark:bg-surface-card border border-slate-200 dark:border-surface-border overflow-hidden"
            >
              {/* Header band */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${proj.color}`} />

              <div className="flex flex-col flex-1 p-6">
                {/* Icon + links */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${proj.color} flex items-center justify-center shadow-md`}>
                    <proj.icon size={22} className="text-white" />
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                      className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 dark:border-surface-border text-slate-400 hover:text-brand-500 hover:border-brand-500/40 transition-all">
                      <GitBranch size={14} />
                    </a>
                    {proj.live && (
                      <a href={proj.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo"
                        className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 dark:border-surface-border text-slate-400 hover:text-brand-500 hover:border-brand-500/40 transition-all">
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-display font-700 text-lg text-slate-900 dark:text-white">{proj.title}</h3>
                <span className={`text-xs font-semibold bg-gradient-to-r ${proj.color} bg-clip-text text-transparent mb-3`}>
                  {proj.subtitle}
                </span>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5">{proj.desc}</p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5 flex-1">
                  {proj.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className={`mt-1.5 w-1 h-1 rounded-full bg-gradient-to-br ${proj.color} shrink-0`} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-surface-border">
                  {proj.tech.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-md text-xs font-mono bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-border text-slate-500 dark:text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
