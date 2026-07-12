"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "SRM Institute of Science and Technology",
    period: "2021 – 2023",
    focus: "Software Engineering · Web Development · Database Systems · Machine Learning",
    color: "from-brand-500 to-blue-400",
    badge: "PG",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Jaya College of Arts and Science",
    period: "2018 – 2021",
    focus: "Programming Fundamentals · Database Management · Networking · Web Technologies",
    color: "from-accent-500 to-purple-400",
    badge: "UG",
  },
];

const certs = [
  {
    title: "Python & Django Certification",
    issuer: "FITA Academy",
    desc: "Comprehensive training covering Python fundamentals, OOP, Django framework, REST APIs, and database integration.",
    color: "from-amber-500 to-orange-400",
    icon: "🐍",
  },
  {
    title: "Machine Learning Internship",
    issuer: "Corizo EdTech",
    desc: "Hands-on ML program covering supervised/unsupervised learning, model evaluation, and real-world project deployment.",
    color: "from-emerald-500 to-teal-400",
    icon: "🤖",
  },
  {
    title: "Python Developer Internship",
    issuer: "Shiash Info Solutions",
    desc: "Practical Python development internship focused on scripting, automation, and collaborative software development.",
    color: "from-rose-500 to-pink-400",
    icon: "💻",
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-24 bg-slate-50 dark:bg-[#0d1117]">
      <div className="section" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <span className="font-mono text-brand-500 text-sm font-medium">05. education & certs</span>
          <h2 className="font-display text-4xl sm:text-5xl font-700 mt-2 text-slate-900 dark:text-white">
            Qualifications
          </h2>
          <div className="h-1 w-16 mt-4 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
        </motion.div>

        {/* Education Cards */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap size={18} className="text-brand-500" />
            <h3 className="font-display font-700 text-slate-900 dark:text-white text-xl">Academic Background</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-hover p-6 rounded-2xl bg-white dark:bg-surface-card border border-slate-200 dark:border-surface-border border-gradient"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-white font-display font-800 text-sm shadow-md shrink-0`}>
                    {edu.badge}
                  </div>
                  <div>
                    <h4 className="font-display font-700 text-slate-900 dark:text-white leading-tight">{edu.degree}</h4>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mt-0.5`}>
                      {edu.institution}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                  <Calendar size={11} />
                  {edu.period}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-surface-dark rounded-lg px-3 py-2">
                  <span className="font-medium text-slate-600 dark:text-slate-300">Focus areas: </span>
                  {edu.focus}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Award size={18} className="text-accent-500" />
            <h3 className="font-display font-700 text-slate-900 dark:text-white text-xl">Certifications & Training</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="card-hover p-5 rounded-2xl bg-white dark:bg-surface-card border border-slate-200 dark:border-surface-border"
              >
                <div className="text-3xl mb-3">{cert.icon}</div>
                <h4 className="font-display font-700 text-slate-900 dark:text-white text-sm mb-1">{cert.title}</h4>
                <p className={`text-xs font-semibold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent mb-3`}>
                  {cert.issuer}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
