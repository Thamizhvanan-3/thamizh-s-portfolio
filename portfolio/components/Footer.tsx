"use client";
import { motion } from "framer-motion";
import { Code2, ArrowUp, Mail } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./icons";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-[#0a0a0b] pt-20 pb-10 border-t border-zinc-200 dark:border-zinc-800">
      {/* Animated gradient top border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Brand Col */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-md">
                <Code2 size={20} className="text-white" />
              </div>
              <span className="font-display font-black text-xl tracking-tight text-zinc-900 dark:text-white">
                Thamizhvanan <span className="gradient-text">G.</span>
              </span>
            </div>
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
              Building scalable web applications, multi-agent AI systems, and solving real-world problems through Python and modern web technologies.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: LinkedInIcon, href: "https://linkedin.com/in/thamizhvanan-g", label: "LinkedIn" },
                { icon: GitHubIcon, href: "https://github.com/thamizhvanan-3/", label: "GitHub" },
                { icon: Mail, href: "mailto:bharathtamil822@email.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 text-zinc-600 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-zinc-800 dark:hover:text-indigo-400 transition-all duration-200 hover:-translate-y-1"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 lg:col-span-4 lg:justify-self-center">
            <h4 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-4">
              {[
                { label: "About Me", href: "#about" },
                { label: "Skills & Tech", href: "#skills" },
                { label: "Experience", href: "#experience" },
                { label: "Featured Projects", href: "#projects" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Tech Stack Badge */}
          <div className="md:col-span-4 lg:col-span-4 lg:justify-self-end flex flex-col md:items-end">
            <h4 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-6">Built With</h4>
            <div className="flex flex-wrap md:justify-end gap-2 mb-8">
              {["Next.js 16", "React 19", "Tailwind CSS v4", "Framer Motion", "TypeScript"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            <motion.button
              onClick={scrollTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="mt-auto flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-sm font-bold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors border border-transparent hover:border-zinc-300 dark:hover:border-zinc-700"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={16} className="text-indigo-500" />
              Back to top
            </motion.button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-500">
            &copy; {currentYear} Thamizhvanan G. All rights reserved.
          </p>
          <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-500">
            Designed & Developed with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
