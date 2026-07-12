"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Building2, Briefcase } from "lucide-react";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    role: "Junior Executive - Digital Assessment Developer",
    company: "Straive",
    type: "Full-time",
    period: "Sep 2025 – July 2026",
    location: "Chennai, India",
    gradient: "from-indigo-500 to-cyan-400",
    shadow: "shadow-indigo-500/20",
    points: [
      "Configured and developed 300+ digital assessments in SchoolCity by setting up assessment properties, question banks, answer keys, scoring rules, and delivery settings according to client requirements.",
      "Built and configured 10–50 question sets per assessment, implementing locked choice order, mark allocation, point multipliers, and assessment logic to ensure accurate assessment behavior.",
      "Configured scaled scores, performance scales, grading rules, admin windows, embargo settings, calculators, lockdown browser, custom instructions, and reference sheets to meet business and academic requirements.",
      "Reviewed and implemented 20+ requirement updates per sprint from Monday.com, enhancing existing assessments and supporting continuous product improvements.",
      "Performed checklist-based functional and regression testing across 300+ assessments, validating 30+ functional checkpoints before release and identifying configuration issues prior to production.",
      "Collaborated with content, QA, and cross-functional teams to resolve defects, validate assessment functionality, and ensure high-quality releases."
    ],
  },
  {
    role: "Consultant Trainee - LMS Quality Assurance (Manual Testing)",
    company: "Straive",
    type: "Contract",
    period: "Apr 2025 – Sep 2025",
    location: "Chennai, India",
    gradient: "from-indigo-500 to-cyan-400",
    shadow: "shadow-indigo-500/20",
    points: [
      "Performed end-to-end manual testing for 230+ e-learning courses migrated from D2L to Canvas LMS, ensuring content accuracy and functional parity.",
      "Executed functional, regression, smoke, sanity, UI, and content testing to validate course components, navigation, and learning workflows.",
      "Designed and executed test cases and performed exploratory testing for quizzes, assignments, multimedia content, and gradebook functionality after migration.",
      "Identified, tracked, and documented 200+ defects using Jira while maintaining test execution logs and test data in Excel for complete traceability.",
      "Collaborated with developers, migration, and QA teams by providing detailed defect reports, evidence, and verification to support timely issue resolution.",
      "Performed post-migration validation and release verification, contributing to successful deployments with minimal production issues.",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "Corizo EdTech",
    type: "Internship",
    period: "Jun 2024 – Aug 2024",
    location: "Remote",
    gradient: "from-violet-500 to-purple-400",
    shadow: "shadow-violet-500/20",
    points: [
      "Completed hands-on training in Python programming and Machine Learning fundamentals, gaining practical knowledge of supervised and unsupervised learning techniques.",
      "Built a Stock Price Prediction minor project using a Kaggle dataset to understand the end-to-end machine learning workflow, including data preprocessing, model training, and performance evaluation.",
      "Contributed to a collaborative capstone project, Customer Segmentation, by working with a geographically distributed team of learners across India.",
      "Collaborated with team members by dividing project responsibilities, coordinating progress, and integrating contributions into the final solution.",
      "Reviewed the overall project workflow to ensure consistency and maintain quality throughout the development process.",
      "Prepared project documentation and added meaningful code comments to improve code readability, maintainability, and ease of understanding for team members.",
      "Gained practical experience with Python, Pandas, NumPy, Scikit-learn, Jupyter Notebook, and collaborative software development practices.",
      "Strengthened skills in teamwork, communication, documentation, and problem-solving through real-world, team-based machine learning projects.",
    ],
  },
  {
    role: "Python Developer Intern",
    company: "Shiash Info Solutions",
    type: "Internship",
    period: "2022",
    location: "Chennai, India",
    gradient: "from-emerald-500 to-teal-400",
    shadow: "shadow-emerald-500/20",
    points: [
      "Learned Python programming fundamentals, including object-oriented programming (OOP), data structures, functions, exception handling, file handling, and modular programming through hands-on exercises.",
      "Gained a strong foundation in Django, covering the MVT architecture, URL routing, models, views, templates, forms, and database integration using SQLite.",
      "Developed small Python and Django applications to understand backend development concepts, CRUD operations, and web application workflows.",
      "Built a foundational understanding of full-stack web development by working with HTML, CSS, JavaScript, Django, and relational databases.",
      "Practiced debugging, code optimization, and writing clean, maintainable code while following industry-standard development practices.",
      "Gained exposure to collaborative software development, including version control with Git, documentation, and the software development lifecycle (SDLC).", 
      "Applied the knowledge gained during the internship to successfully design and develop my final-year academic project, while also gaining valuable insight into real-world industry practices and professional development workflows.",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="relative py-32 bg-white dark:bg-[#0a0a0b] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full section-fade pointer-events-none" />

      <div className="section relative z-10" ref={ref}>
        <SectionHeader index="03" label="experience" title="Work History" inView={inView} />

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto pl-4 md:pl-8">
          {/* Left Vertical Line */}
          <div className="absolute left-[15px] md:left-[31px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                className="relative pl-10 md:pl-16 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-5px] md:left-[11px] top-6 w-10 h-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white dark:bg-zinc-900 border-4 border-zinc-200 dark:border-zinc-800 flex items-center justify-center ring-4 ring-transparent group-hover:ring-indigo-500/20 transition-all duration-300">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${exp.gradient} shadow-lg ${exp.shadow} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  </div>
                </div>

                {/* Card */}
                <div className="card-glow flex flex-col bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm overflow-hidden relative transition-all duration-300 hover:shadow-xl dark:hover:shadow-black/40">
                  {/* Top animated border */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="font-display font-bold text-xl md:text-2xl text-zinc-900 dark:text-white leading-tight mb-2">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="flex items-center gap-1.5 font-bold text-zinc-800 dark:text-zinc-200">
                            <Building2 size={16} className="text-indigo-500" />
                            {exp.company}
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-row lg:flex-col gap-3 lg:gap-2 text-sm font-mono font-medium text-zinc-600 dark:text-zinc-400 lg:text-right shrink-0">
                        <span className="flex items-center lg:justify-end gap-1.5">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center lg:justify-end gap-1.5">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-4 relative">
                      {exp.points.map((pt, pi) => (
                        <li key={pi} className="flex items-start gap-3.5 text-[15px] text-zinc-700 dark:text-zinc-300 leading-relaxed">
                          <span className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${exp.gradient} shrink-0 shadow-sm`} />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
