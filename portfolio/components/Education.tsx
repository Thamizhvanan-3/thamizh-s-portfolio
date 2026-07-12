"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { GraduationCap, Award, Calendar, ChevronRight, Code2, BrainCircuit, Terminal } from "lucide-react";
import SectionHeader from "./SectionHeader";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "SRM Institute of Science and Technology",
    period: "2022 – 2024",
    focus: "Software Engineering · Web Development · Database Systems · Machine Learning",
    gradient: "from-indigo-500 to-cyan-400",
    badge: "PG",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Jaya College of Arts and Science",
    period: "2019 – 2022",
    focus: "Programming Fundamentals · Database Management · Networking · Web Technologies",
    gradient: "from-violet-500 to-purple-400",
    badge: "UG",
  },
];

const certs = [
  {
    title: "Python & Django Certification",
    issuer: "FITA Academy",
    desc: "Comprehensive training covering Python fundamentals, OOP, Django framework, REST APIs, and database integration.",
    gradient: "from-indigo-500 to-cyan-400",
    icon: Code2,
  },
  {
    title: "Machine Learning Internship",
    issuer: "Corizo EdTech",
    desc: "Hands-on ML program covering supervised/unsupervised learning, model evaluation, and real-world project deployment.",
    gradient: "from-emerald-500 to-teal-400",
    icon: BrainCircuit,
  },
  {
    title: "Python Developer Internship",
    issuer: "Shiash Info Solutions",
    desc: "Practical Python development internship focused on scripting, automation, and collaborative software development.",
    gradient: "from-violet-500 to-purple-400",
    icon: Terminal,
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCert, setActiveCert] = useState<number | null>(null);

  return (
    <section id="education" className="relative py-32 bg-white dark:bg-[#0a0a0b] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full section-fade pointer-events-none" />

      <div className="section relative z-10" ref={ref}>
        <SectionHeader index="05" label="education & certs" title="Qualifications" inView={inView} />

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Education Timeline */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
                <GraduationCap size={24} className="text-zinc-700 dark:text-zinc-300" />
              </div>
              <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-white">Academic Background</h3>
            </div>
            
            <div className="relative pl-6 md:pl-0">
              {/* Connecting line */}
              <div className="absolute left-[11px] md:left-[27px] top-8 bottom-8 w-0.5 bg-zinc-200 dark:bg-zinc-800" />

              <div className="space-y-12">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
                    className="relative md:pl-16"
                  >
                    {/* Node */}
                    <div className="absolute -left-[5px] md:left-[19px] top-8 w-4 h-4 rounded-full bg-white dark:bg-zinc-900 border-4 border-zinc-300 dark:border-zinc-700 z-10" />

                    <div className="card-glow p-6 sm:p-8 bg-white dark:bg-zinc-900/80 backdrop-blur-sm group">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                        <div>
                          <h4 className="font-display font-bold text-xl text-zinc-900 dark:text-white leading-tight mb-2 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                            {edu.degree}
                          </h4>
                          <p className={`text-sm font-bold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}>
                            {edu.institution}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3.5 py-1.5 rounded-full shrink-0 border border-zinc-200 dark:border-zinc-700">
                          <Calendar size={14} />
                          {edu.period}
                        </div>
                      </div>
                      
                      <div className="bg-zinc-50 dark:bg-zinc-950/50 rounded-xl p-5 border border-zinc-100 dark:border-zinc-800/50">
                        <span className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-widest mb-3 block">Focus Areas</span>
                        <p className="text-[15px] font-medium text-zinc-700 dark:text-zinc-400 leading-relaxed">
                          {edu.focus}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
                <Award size={24} className="text-zinc-700 dark:text-zinc-300" />
              </div>
              <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-white">Certifications</h3>
            </div>
            
            <div className="grid gap-4">
              {certs.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                  onMouseEnter={() => setActiveCert(i)}
                  onMouseLeave={() => setActiveCert(null)}
                  className="card-glow flex flex-col p-5 bg-white dark:bg-zinc-900/80 cursor-default group overflow-hidden"
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center text-white shadow-md shrink-0 transition-transform duration-300 ${activeCert === i ? 'scale-110 -rotate-3' : ''}`}>
                      <cert.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display font-bold text-lg text-zinc-900 dark:text-white leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-[13px] font-semibold text-zinc-600 dark:text-zinc-400 mt-1 uppercase tracking-wide">
                        {cert.issuer}
                      </p>
                    </div>
                    <ChevronRight size={20} className={`text-zinc-300 dark:text-zinc-700 transition-all duration-300 ${activeCert === i ? 'translate-x-1 text-zinc-600 dark:text-zinc-400' : ''}`} />
                  </div>
                  
                  {/* Expandable description on hover/focus */}
                  <div 
                    className="grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ gridTemplateRows: activeCert === i ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-5 mt-5 border-t border-zinc-100 dark:border-zinc-800">
                        <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
                          {cert.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
