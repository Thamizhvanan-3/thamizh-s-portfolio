"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Code2 } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Education",  href: "#education" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);
      
      // Smart navbar behavior
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // hide on scroll down
      } else {
        setIsVisible(true); // show on scroll up
      }
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  // Track active section for nav highlight
  useEffect(() => {
    const sections = links.map(l => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -120, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div 
          className={`pointer-events-auto flex items-center justify-between transition-all duration-300 w-full max-w-5xl rounded-full px-4 h-16 ${
            scrolled
              ? "bg-white/70 dark:bg-zinc-900/60 backdrop-blur-2xl shadow-lg shadow-black/5 dark:shadow-black/20 border border-zinc-200/50 dark:border-zinc-800/50"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group shrink-0" aria-label="Home">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-md group-hover:shadow-indigo-500/25 transition-shadow duration-300">
              <span className="font-display font-bold text-white text-sm tracking-tight">TG</span>
            </div>
            <span className="font-mono text-sm tracking-tight hidden sm:flex items-baseline gap-0.5 font-medium text-zinc-900 dark:text-white">
              thamizhvanan<span className="text-indigo-500 dark:text-indigo-400">.dev</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 mx-4" aria-label="Main navigation">
            {links.map((l) => {
              const isActive = activeSection === l.href.replace("#", "");
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-indigo-50 dark:bg-indigo-500/10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={toggle}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200 transition-all duration-200"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-bold bg-gradient-to-r from-indigo-500 to-violet-500 shimmer transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              Hire Me
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors z-50 relative"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={open ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  {open ? <X size={20} /> : <Menu size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl flex flex-col justify-center items-center px-4"
          >
            <nav className="flex flex-col items-center gap-6 w-full" aria-label="Mobile navigation">
              {links.map((l, i) => {
                const isActive = activeSection === l.href.replace("#", "");
                return (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className={`text-2xl font-display font-bold transition-colors duration-200 ${
                      isActive
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-zinc-800 dark:text-zinc-300"
                    }`}
                  >
                    {l.label}
                  </motion.a>
                );
              })}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: links.length * 0.05 }}
                className="mt-4 px-8 py-4 rounded-full text-lg font-bold text-center bg-gradient-to-r from-indigo-500 to-violet-500 text-white w-full max-w-[200px] shadow-lg shadow-indigo-500/25"
              >
                Hire Me
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}