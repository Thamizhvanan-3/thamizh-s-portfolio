"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Mail, Link2, GitBranch, Send, CheckCircle2, AlertCircle, MapPin } from "lucide-react";

type FormState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setState("sending");
    await new Promise(r => setTimeout(r, 1500));
    setState("success");
    setTimeout(() => setState("idle"), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputs = [
    { name: "name",    label: "Full Name",     type: "text",  placeholder: "Your full name" },
    { name: "email",   label: "Email Address", type: "email", placeholder: "you@example.com" },
    { name: "subject", label: "Subject",       type: "text",  placeholder: "What's this about?" },
  ];

  const socials = [
    { icon: Mail,     label: "Email",    value: "bharathtamil822@email.com", href: "mailto:bharathtamil822@email.com", color: "from-brand-500 to-blue-400" },
    { icon: Link2,      label: "LinkedIn", value: "linkedin.com/in/thamizhvanan-g", href: "https://linkedin.com/in/thamizhvanan-g", color: "from-accent-500 to-purple-400" },
    { icon: GitBranch,  label: "GitHub",   value: "github.com/thamizhvanan-g", href: "https://github.com/", color: "from-emerald-500 to-teal-400" },
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#0d1117]">
      <div className="section" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <span className="font-mono text-brand-500 text-sm font-medium">06. contact</span>
          <h2 className="font-display text-4xl sm:text-5xl font-700 mt-2 text-slate-900 dark:text-white">
            Let's Connect
          </h2>
          <div className="h-1 w-16 mt-4 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-8 mb-8">
              I'm actively looking for Python Developer, Django Developer, or Software Engineering roles.
              If you have an opening or just want to chat about tech, feel free to reach out.
            </p>

            <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
              <MapPin size={14} />
              <span>Based in India — open to remote & hybrid opportunities</span>
            </div>

            <div className="space-y-4">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-surface-border bg-slate-50 dark:bg-surface-card hover:border-brand-500/40 hover:shadow-md hover:shadow-brand-500/8 transition-all duration-200 group"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-md shrink-0`}>
                    <s.icon size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">{s.label}</div>
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">{s.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 rounded-2xl bg-slate-50 dark:bg-surface-card border border-slate-200 dark:border-surface-border"
          >
            <div className="space-y-5">
              {inputs.map(inp => (
                <div key={inp.name}>
                  <label htmlFor={inp.name} className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    {inp.label}
                  </label>
                  <input
                    id={inp.name}
                    name={inp.name}
                    type={inp.type}
                    value={form[inp.name as keyof typeof form]}
                    onChange={handleChange}
                    placeholder={inp.placeholder}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-border text-slate-900 dark:text-slate-200 text-sm placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 transition-all duration-200"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about the opportunity or what you'd like to discuss..."
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-border text-slate-900 dark:text-slate-200 text-sm placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 transition-all duration-200 resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={state === "sending" || state === "success"}
                className={`w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  state === "success"
                    ? "bg-emerald-500 text-white"
                    : state === "error"
                    ? "bg-red-500 text-white"
                    : "bg-gradient-to-r from-brand-500 to-accent-500 text-white hover:shadow-lg hover:shadow-brand-500/30 hover:scale-[1.02]"
                } disabled:opacity-60 disabled:cursor-not-allowed`}
              >
                {state === "idle" && <><Send size={15} /> Send Message</>}
                {state === "sending" && <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>}
                {state === "success" && <><CheckCircle2 size={15} /> Message Sent!</>}
                {state === "error" && <><AlertCircle size={15} /> Failed — Try Again</>}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
