"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, Mail, ChevronDown } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./icons";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay },
});

const roles = ["Python Developer", "Django Engineer", "ML Enthusiast", "Agentic AI Builder"];

function useTypingEffect(
  strings: string[],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2000
) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = strings[currentIndex];

    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === current) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && displayText === "") {
      // Move to next word
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % strings.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? current.substring(0, displayText.length - 1)
            : current.substring(0, displayText.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    currentIndex,
    strings,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return displayText;
}

export default function Hero() {
  const typedRole = useTypingEffect(roles);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-[#0a0a0b]"
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-40" />

      {/* Aurora Animated Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-500/20 dark:bg-indigo-500/15 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-aurora"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-violet-500/20 dark:bg-violet-500/15 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-aurora"
          style={{ animationDelay: "-4s" }}
        />
        <div
          className="absolute bottom-[-20%] left-[20%] w-[70%] h-[70%] rounded-full bg-blue-500/15 dark:bg-blue-500/10 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-aurora"
          style={{ animationDelay: "-2s" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center mt-12">
        {/* Badge */}
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2.5 px-4 py-2 mb-10 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-sm font-semibold shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
          </span>
          Open to Python / Django / ML roles
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.1)}
          className="font-display text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-[1.05]"
        >
          <span className="text-zinc-900 dark:text-white">Thamizhvanan</span>
          <br className="sm:hidden" />
          <span className="gradient-text ml-0 sm:ml-4">G.</span>
        </motion.h1>

        {/* Typing Role */}
        <motion.div {...fadeUp(0.2)} className="flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-indigo-500/50" />
          <span className="font-mono text-lg sm:text-xl font-medium tracking-wide text-indigo-600 dark:text-indigo-400 min-w-[280px] sm:min-w-[320px]">
            {typedRole}
            <span className="inline-block w-2 h-5 ml-1 bg-indigo-500 animate-pulse align-middle" />
          </span>
          <span className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-indigo-500/50" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12 text-zinc-600 dark:text-zinc-400 font-medium"
        >
          Building scalable web applications and solving real-world problems through{" "}
          <strong className="text-zinc-900 dark:text-zinc-200">Python</strong> and{" "}
          <strong className="text-zinc-900 dark:text-zinc-200">Django</strong>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16"
        >
          <a
            href="/Thamizhvanan_G_Resume.pdf"
            download
            className="group flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-full font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/25 active:translate-y-0 bg-gradient-to-r from-indigo-500 to-violet-500 shimmer"
          >
            <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="group flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-full font-bold transition-all duration-300 border-2 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm hover:-translate-y-1 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 active:translate-y-0"
          >
            <Mail size={18} className="group-hover:scale-110 transition-transform" />
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
            className="group w-12 h-12 rounded-full flex items-center justify-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 transition-all duration-300 hover:scale-110 hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <LinkedInIcon size={20} className="group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://github.com/thamizhvanan-3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group w-12 h-12 rounded-full flex items-center justify-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 transition-all duration-300 hover:scale-110 hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <GitHubIcon size={20} className="group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors group"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase font-mono group-hover:text-indigo-500 transition-colors">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-current flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-current"
          />
        </div>
      </motion.a>
    </section>
  );
}