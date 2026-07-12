"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./icons";
import SectionHeader from "./SectionHeader";

type FormState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email format";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors(errs => {
        const newErrs = { ...errs };
        delete newErrs[e.target.name];
        return newErrs;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setState("sending");
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500));
    setState("success");

    setTimeout(() => {
      setState("idle");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const socials = [
    { icon: Mail, label: "Email", value: "bharathtamil822@email.com", href: "mailto:bharathtamil822@email.com", color: "from-indigo-500 to-cyan-400" },
    { icon: LinkedInIcon, label: "LinkedIn", value: "linkedin.com/in/thamizhvanan-g", href: "https://linkedin.com/in/thamizhvanan-g", color: "from-violet-500 to-purple-400" },
    { icon: GitHubIcon, label: "GitHub", value: "github.com/thamizhvanan-3", href: "https://github.com/thamizhvanan-3", color: "from-zinc-700 to-zinc-900 dark:from-zinc-400 dark:to-zinc-200" },
  ];

  return (
    <section id="contact" className="relative py-32 bg-zinc-50 dark:bg-[#0a0a0b] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full section-fade pointer-events-none" />
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full max-w-3xl h-[600px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="section relative z-10" ref={ref}>
        <SectionHeader index="06" label="contact" title="Let's Connect" inView={inView} />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          {/* Left Column — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-10 font-medium">
              I'm actively exploring new opportunities as a Python Developer, Django Engineer, or related Software Engineering roles.
              Whether you have an opening or just want to discuss tech, I'd love to hear from you.
            </p>

            <div className="flex items-start gap-4 p-5 mb-10 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <p className="text-[15px] font-semibold text-zinc-800 dark:text-zinc-200">
                Based in Chennai, India.<br />
                <span className="text-zinc-600 dark:text-zinc-400 font-medium mt-1 block">Open to on-site opportunities in Chennai, as well as hybrid and remote roles.</span>
              </p>
            </div>

            <div className="space-y-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="group card-glow flex items-center gap-5 p-5 bg-white dark:bg-zinc-900/80 backdrop-blur-sm"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                    {s.label === "GitHub" ? <s.icon size={22} className="text-white dark:text-zinc-900" /> : <s.icon size={22} />}
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-1">{s.label}</div>
                    <div className="text-[15px] font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{s.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Glow behind form */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 blur-3xl rounded-[2rem] -z-10" />

            <form
              onSubmit={handleSubmit}
              className="card-glass p-6 sm:p-10 relative overflow-hidden"
            >
              <h3 className="font-display font-bold text-3xl text-zinc-900 dark:text-white mb-8">Send a message</h3>

              <div className="space-y-6">
                {/* Floating label inputs */}
                {(['name', 'email', 'subject'] as const).map((field) => (
                  <div key={field} className="relative">
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      value={form[field]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field)}
                      onBlur={() => setFocusedField(null)}
                      className={`block w-full px-5 pt-7 pb-3 rounded-xl bg-white/50 dark:bg-zinc-950/30 border text-zinc-900 dark:text-zinc-100 text-[15px] font-medium focus:outline-none transition-all duration-200 shadow-sm ${errors[field]
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-zinc-200/80 dark:border-zinc-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                        }`}
                      placeholder=" " // Required for peer-placeholder-shown trick
                    />
                    <label
                      htmlFor={field}
                      className={`absolute left-5 transition-all duration-200 pointer-events-none capitalize ${focusedField === field || form[field]
                        ? 'top-2.5 text-[11px] font-bold tracking-wide text-indigo-600 dark:text-indigo-400'
                        : 'top-5 text-[15px] text-zinc-500 dark:text-zinc-400 font-medium'
                        } ${errors[field] ? 'text-red-500 dark:text-red-400' : ''}`}
                    >
                      {field === 'name' ? 'Full Name' : field === 'email' ? 'Email Address' : 'Subject (Optional)'}
                    </label>
                    <AnimatePresence>
                      {errors[field] && (
                        <motion.span
                          initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                          className="absolute right-5 top-5 text-xs font-bold text-red-500"
                        >
                          {errors[field]}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Textarea */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className={`block w-full px-5 pt-7 pb-3 rounded-xl bg-white/50 dark:bg-zinc-950/30 border text-zinc-900 dark:text-zinc-100 text-[15px] font-medium focus:outline-none transition-all duration-200 resize-none shadow-sm ${errors.message
                      ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                      : 'border-zinc-200/80 dark:border-zinc-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                      }`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="message"
                    className={`absolute left-5 transition-all duration-200 pointer-events-none ${focusedField === 'message' || form.message
                      ? 'top-2.5 text-[11px] font-bold tracking-wide text-indigo-600 dark:text-indigo-400'
                      : 'top-5 text-[15px] text-zinc-500 dark:text-zinc-400 font-medium'
                      } ${errors.message ? 'text-red-500 dark:text-red-400' : ''}`}
                  >
                    Your Message
                  </label>
                  <AnimatePresence>
                    {errors.message && (
                      <motion.span
                        initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="absolute right-5 top-5 text-xs font-bold text-red-500"
                      >
                        {errors.message}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={state === "sending" || state === "success"}
                  className={`relative w-full h-14 rounded-xl font-bold text-[15px] overflow-hidden transition-all duration-300 ${state === "success"
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                    : state === "error"
                      ? "bg-red-500 text-white"
                      : "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:-translate-y-1 hover:shadow-xl active:translate-y-0"
                    } disabled:opacity-80 disabled:cursor-not-allowed disabled:hover:translate-y-0`}
                >
                  <AnimatePresence mode="wait">
                    {state === "idle" && (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                        className="flex items-center justify-center gap-2.5 h-full w-full"
                      >
                        <Send size={18} /> Send Message
                      </motion.div>
                    )}
                    {state === "sending" && (
                      <motion.div
                        key="sending"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="flex items-center justify-center gap-3 h-full w-full"
                      >
                        <span className="w-5 h-5 border-2 border-zinc-500 border-t-current rounded-full animate-spin" />
                        Sending...
                      </motion.div>
                    )}
                    {state === "success" && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                        className="flex items-center justify-center gap-2.5 h-full w-full"
                      >
                        <CheckCircle2 size={20} /> Message Sent Successfully!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
