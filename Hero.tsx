"use client";
import { motion } from "framer-motion";
import { Download, Mail, GitBranch, Link2, ChevronDown, Sparkles } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-surface-dark"
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-60 dark:opacity-100" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-brand-500/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent-500/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-600 dark:text-brand-400 text-sm font-medium">
          <Sparkles size={14} />
          Open to Python / Django / ML roles
        </motion.div>

        {/* Name */}
        <motion.h1 {...fadeUp(0.1)} className="font-display text-5xl sm:text-6xl lg:text-7xl font-800 tracking-tight mb-4 leading-[1.05]">
          <span className="text-slate-900 dark:text-white">Thamizhvanan</span>{" "}
          <span className="gradient-text">G.</span>
        </motion.h1>

        {/* Title */}
        <motion.div {...fadeUp(0.2)} className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-brand-500" />
          <span className="font-mono text-brand-500 dark:text-brand-400 text-lg font-medium tracking-wide">
            Python Developer
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-brand-500" />
        </motion.div>

        {/* Tagline */}
        <motion.p {...fadeUp(0.3)} className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Building scalable web applications and solving real-world problems through{" "}
          <span className="text-brand-500 font-semibold">Python</span> and{" "}
          <span className="text-accent-500 font-semibold">Django</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="/resume.pdf"
            download
            className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-semibold shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-105 transition-all duration-200"
          >
            <Download size={17} className="group-hover:animate-bounce" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-brand-500/40 dark:border-brand-500/30 text-brand-600 dark:text-brand-400 font-semibold hover:bg-brand-500/10 hover:border-brand-500/60 transition-all duration-200"
          >
            <Mail size={17} />
            Get in Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div {...fadeUp(0.5)} className="flex items-center justify-center gap-4">
          <a
            href="https://linkedin.com/in/thamizhvanan-g"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-lg flex items-center justify-center border border-slate-200 dark:border-surface-border text-slate-500 dark:text-slate-400 hover:border-brand-500 hover:text-brand-500 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all duration-200"
          >
            <Link2 size={18} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-lg flex items-center justify-center border border-slate-200 dark:border-surface-border text-slate-500 dark:text-slate-400 hover:border-brand-500 hover:text-brand-500 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all duration-200"
          >
            <GitBranch size={18} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-600 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
