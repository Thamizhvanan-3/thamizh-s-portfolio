"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "LMS Content Development — Junior Executive",
    company: "Straive",
    type: "Full-time",
    period: "2023 – 2024",
    location: "India",
    color: "from-brand-500 to-blue-400",
    points: [
      "Migrated course content between D2L Brightspace and Canvas LMS, ensuring data integrity and structural consistency throughout the conversion process.",
      "Developed and quality-checked digital assessments on the Renaissance SchoolCity platform for K-12 schools across the United States.",
      "Collaborated with US-based stakeholders to align assessment content with curriculum standards and delivery requirements.",
      "Maintained documentation for LMS workflows, improving team onboarding and process repeatability.",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "Corizo EdTech",
    type: "Internship",
    period: "2023",
    location: "Remote",
    color: "from-accent-500 to-purple-400",
    points: [
      "Applied supervised ML algorithms including regression models, decision trees, and random forests to real-world datasets.",
      "Built an unsupervised K-Means clustering model for data segmentation and pattern recognition tasks.",
      "Designed and deployed the Wood Analysis Platform using MLPRegressor to evaluate timber quality and species characteristics.",
    ],
  },
  {
    role: "Python Developer Intern",
    company: "Shiash Info Solutions",
    type: "Internship",
    period: "2022",
    location: "Chennai, India",
    color: "from-emerald-500 to-teal-400",
    points: [
      "Developed and debugged Python scripts for data processing and automation use cases.",
      "Gained practical exposure to software development workflows, version control with Git, and collaborative coding practices.",
      "Contributed to internal tooling and documentation improvements.",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-[#0d1117]">
      <div className="section" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <span className="font-mono text-brand-500 text-sm font-medium">03. experience</span>
          <h2 className="font-display text-4xl sm:text-5xl font-700 mt-2 text-slate-900 dark:text-white">
            Work History
          </h2>
          <div className="h-1 w-16 mt-4 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/60 via-accent-500/40 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -32 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 top-6 w-5 h-5 rounded-full bg-gradient-to-br ${exp.color} shadow-lg hidden md:flex items-center justify-center ring-4 ring-slate-50 dark:ring-[#0d1117]`}>
                  <Briefcase size={9} className="text-white" />
                </div>

                {/* Card */}
                <div className="card-hover p-6 rounded-2xl bg-white dark:bg-surface-card border border-slate-200 dark:border-surface-border">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display font-700 text-lg text-slate-900 dark:text-white leading-tight">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-sm font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                          {exp.company}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-xs bg-slate-100 dark:bg-surface-border text-slate-500 dark:text-slate-400 font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 shrink-0 text-right">
                      <span className="flex items-center gap-1.5 text-xs text-slate-400 justify-end">
                        <Calendar size={11} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-400 justify-end">
                        <MapPin size={11} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((pt, pi) => (
                      <li key={pi} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        <span className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${exp.color} shrink-0`} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
