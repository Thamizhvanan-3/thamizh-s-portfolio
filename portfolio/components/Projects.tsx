"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GitBranch, ExternalLink, ShoppingBag, TreePine, Bot } from "lucide-react";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    icon: ShoppingBag,
    title: "VibeWear",
    subtitle: "E-Commerce Platform",
    desc: "A full-stack Django e-commerce platform with secure authentication, dynamic product listings, pagination, and user account management. Built with mobile-first responsive design.",
    tech: ["Python", "Django", "MySQL", "HTML", "CSS", "Bootstrap"],
    gradient: "from-indigo-500 to-cyan-400",
    shadow: "shadow-indigo-500/20",
    features: ["Secure login/signup with session management", "Product catalog with server-side pagination", "User account dashboard", "Responsive mobile-first layout"],
    github: "https://github.com/",
    live: null,
    featured: true,
  },
  {
    icon: TreePine,
    title: "Wood Analysis Platform",
    subtitle: "Machine Learning App",
    desc: "An ML-powered platform that classifies wood species, evaluates timber quality, and assesses environmental impact — producing detailed analytical reports from user-provided samples.",
    tech: ["Python", "Scikit-learn", "MLPRegressor", "Pandas", "NumPy"],
    gradient: "from-emerald-500 to-teal-400",
    shadow: "shadow-emerald-500/20",
    features: ["Wood species classification", "Timber quality assessment via neural net", "Environmental impact evaluation", "Automated PDF report generation"],
    github: "https://github.com/",
    live: null,
    featured: false,
  },
  {
    icon: Bot,
    title: "SEO Blog Generator",
    subtitle: "Multi-Agent AI System",
    desc: "A multi-agent Python pipeline that automates blog creation from topic to publish-ready post. Coordinated agents handle research, content generation, SEO optimization, and editorial review.",
    tech: ["Python", "Agentic AI", "Multi-Agent", "SEO", "LLM APIs"],
    gradient: "from-violet-500 to-purple-400",
    shadow: "shadow-violet-500/20",
    features: ["Research agent for topic gathering", "Content generation agent", "SEO optimization agent", "Automated review and editing workflow"],
    github: "https://github.com/",
    live: null,
    featured: false,
  },
];

function TiltCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-full perspective-1000 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="relative py-32 bg-zinc-50 dark:bg-[#0a0a0b] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full section-fade pointer-events-none" />
      <div className="absolute -right-1/4 top-1/4 w-[800px] h-[800px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="section relative z-10" ref={ref}>
        <SectionHeader index="04" label="projects" title="Featured Work" inView={inView} />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              className={proj.featured ? "lg:col-span-2" : "lg:col-span-1"}
            >
              <TiltCard>
                <div className="group flex flex-col h-full rounded-2xl bg-white dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800/80 overflow-hidden shadow-sm transition-all duration-500 hover:shadow-2xl dark:hover:shadow-black/60 hover:border-zinc-300 dark:hover:border-zinc-700">
                  
                  {/* Animated top gradient bar */}
                  <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${proj.gradient} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out`} />
                  </div>

                  <div className="flex flex-col flex-1 p-8 md:p-10">
                    {/* Header: Icon + Links */}
                    <div className="flex items-start justify-between mb-10" style={{ transform: "translateZ(30px)" }}>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${proj.gradient} flex items-center justify-center text-white shadow-lg ${proj.shadow} transition-transform duration-300 group-hover:scale-105`}>
                        <proj.icon size={30} />
                      </div>
                      
                      {/* Links */}
                      <div className="flex items-center gap-3">
                        <a 
                          href={proj.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          aria-label={`View ${proj.title} source code on GitHub`}
                          className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700/80 text-sm font-bold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-200 hover:-translate-y-0.5"
                        >
                          <GitBranch size={16} />
                          <span className="hidden sm:inline">Source</span>
                        </a>
                        {proj.live && (
                          <a 
                            href={proj.live} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label={`View ${proj.title} live demo`}
                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700/80 text-sm font-bold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-200 hover:-translate-y-0.5"
                          >
                            <ExternalLink size={16} />
                            <span className="hidden sm:inline">Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>

                    <div className={proj.featured ? "grid md:grid-cols-[1.2fr_1fr] gap-10" : "flex flex-col flex-1"}>
                      <div style={{ transform: "translateZ(40px)" }}>
                        <h3 className="font-display font-black text-3xl text-zinc-900 dark:text-white tracking-tight mb-2">
                          {proj.title}
                        </h3>
                        <p className={`text-base font-bold bg-gradient-to-r ${proj.gradient} bg-clip-text text-transparent mb-5 inline-block`}>
                          {proj.subtitle}
                        </p>
                        <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed text-[15px]">
                          {proj.desc}
                        </p>
                      </div>

                      <div className="flex flex-col justify-between flex-1 mt-8 md:mt-0" style={{ transform: "translateZ(20px)" }}>
                        <ul className="space-y-3 mb-10">
                          {proj.features.map((f, fi) => (
                            <li key={fi} className="flex items-start gap-3.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
                              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${proj.gradient} shrink-0`} />
                              {f}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-6 border-t border-zinc-100 dark:border-zinc-800/50 mt-auto">
                          {proj.tech.map(t => (
                            <span 
                              key={t} 
                              className="px-3 py-1.5 rounded-md text-xs font-mono font-bold bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 dark:group-hover:bg-indigo-500/10 dark:group-hover:text-indigo-400 transition-colors duration-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
