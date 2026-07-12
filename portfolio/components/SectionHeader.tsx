"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  inView: boolean;
}

export default function SectionHeader({ index, label, title, inView }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-20"
    >
      <div className="flex items-center gap-4 mb-5">
        <span className="font-mono text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
          {index}. {label}
        </span>
        <div className="h-px bg-gradient-to-r from-indigo-500/40 to-transparent flex-1 max-w-24" />
      </div>
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-white">
        {title}
      </h2>
    </motion.div>
  );
}
