"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { BrainCircuit, Globe, BookOpen, Zap } from "lucide-react";
import SectionHeader from "./SectionHeader";

const highlights = [
  {
    icon: Globe,
    title: "LMS & EdTech",
    desc: "Hands-on experience with D2L Brightspace, Canvas LMS, and Renaissance SchoolCity for K-12 digital assessments.",
    color: "from-indigo-500 to-cyan-400",
    shadow: "shadow-indigo-500/20",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    icon: BrainCircuit,
    title: "Python & Django",
    desc: "Built full-stack web apps including an e-commerce platform, trained through FITA Academy and real-world project work.",
    color: "from-violet-500 to-purple-400",
    shadow: "shadow-violet-500/20",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    icon: Zap,
    title: "Machine Learning",
    desc: "Completed ML internship applying regression, decision trees, random forests, and K-Means clustering to real datasets.",
    color: "from-amber-500 to-orange-400",
    shadow: "shadow-amber-500/20",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    icon: BookOpen,
    title: "Agentic AI",
    desc: "Passionate about multi-agent AI systems, having built a SEO Blog Generator powered by coordinated Python agents.",
    color: "from-emerald-500 to-teal-400",
    shadow: "shadow-emerald-500/20",
    className: "md:col-span-2 md:row-span-1",
  },
];

// Animated Counter Component
function AnimatedCounter({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing out function
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(from + (to - from) * easeOut));

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-32 bg-white dark:bg-[#0a0a0b] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full section-fade pointer-events-none" />
      <div className="absolute -left-1/4 top-0 w-[800px] h-[800px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="section relative z-10" ref={ref}>
        <SectionHeader index="01" label="about" title="Who I Am" inView={inView} />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">
          {/* Summary Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="relative sticky top-32"
          >
            {/* Decorative quote mark */}
            <div className="absolute -top-10 -left-6 text-8xl font-serif text-indigo-500/10 dark:text-indigo-500/20 leading-none select-none -z-10">
              "
            </div>
            
            <div className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              <p>
                I'm a motivated IT professional with an <strong className="text-zinc-900 dark:text-white font-bold">MCA from SRM University</strong> and
                hands-on experience across LMS content development, digital assessment creation, and Python-based web development.
              </p>
              <p>
                At Straive, I contributed to two domains: migrating LMS content between D2L Brightspace and Canvas, and
                building K-12 assessments on the Renaissance SchoolCity platform for US clients. These roles sharpened my
                attention to detail and ability to work within structured technical workflows.
              </p>
              <p>
                Outside of work, I build Django web apps, explore multi-agent AI workflows, and apply machine learning to
                real-world problems. I believe in continuous learning and bringing a problem-solving mindset to every role.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-6">
              {[
                { val: 1, label: "Year Experience", plus: true },
                { val: 3, label: "Projects Built", plus: true },
                { val: 5, label: "Certifications", plus: true },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="card p-4 sm:p-5 text-center group"
                >
                  <div className="font-display text-4xl font-black mb-2 bg-gradient-to-br from-indigo-500 to-violet-500 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 inline-block">
                    <AnimatedCounter to={s.val} />{s.plus ? "+" : ""}
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-semibold leading-tight">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bento Grid Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative">
            {/* Center glow behind cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-indigo-500/10 dark:bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none" />
            
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, scale: 0.95, y: 24 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                className={`card-glow p-6 sm:p-8 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm relative overflow-hidden group flex flex-col ${h.className}`}
              >
                {/* Hover gradient background reveal */}
                <div className={`absolute inset-0 bg-gradient-to-br ${h.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${h.color} flex items-center justify-center shadow-lg ${h.shadow} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 shrink-0`}>
                    <h.icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-zinc-900 dark:text-white leading-tight">
                    {h.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed relative z-10 flex-1">
                  {h.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
