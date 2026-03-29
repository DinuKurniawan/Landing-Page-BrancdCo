import { useRef, useState, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

async function readJsonResponse(response: Response): Promise<{ error?: string; success?: boolean } | null> {
  const text = await response.text();

  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text) as { error?: string; success?: boolean };
  } catch {
    throw new Error("The server returned an invalid response. Please try again.");
  }
}

function getSubmissionErrorMessage(error: unknown): string {
  if (error instanceof TypeError) {
    return "The contact service is unavailable right now. Start the API server and try again.";
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Failed to send. Please try again.";
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await readJsonResponse(res);
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err: unknown) {
      setErrorMsg(getSubmissionErrorMessage(err));
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  }

  return (
    <section id="contact" className="py-28 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[72px_72px]" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-block bg-indigo-500/10 text-indigo-400 text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest border border-indigo-500/20"
          >
            Contact Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight text-center"
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-7xl py-6 text-center text-lg leading-relaxed text-slate-400"
            style={{ textAlign: 'center' }}
          >
            Ready to take your business to the next level? Send us a message and we'll
            get back to you within 24 hours.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 flex flex-col gap-4"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:bg-white/10 transition-colors">
              <div className="shrink-0 rounded-xl bg-indigo-500/20 p-3 text-indigo-400">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-bold text-white text-sm mb-1">Email Us</p>
                <a
                  href="mailto:hello@brandco.id"
                  className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                >
                  hello@brandco.id
                </a>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:bg-white/10 transition-colors">
              <div className="shrink-0 rounded-xl bg-indigo-500/20 p-3 text-indigo-400">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-bold text-white text-sm mb-1">Visit Us</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Jl. Sudirman No. 123,<br />Jakarta, Indonesia
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:bg-white/10 transition-colors">
              <div className="shrink-0 rounded-xl bg-indigo-500/20 p-3 text-indigo-400">
                <Clock size={20} />
              </div>
              <div>
                <p className="font-bold text-white text-sm mb-1">Office Hours</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Mon – Fri: 09:00 – 18:00 WIB<br />
                  Sat: 10:00 – 14:00 WIB
                </p>
              </div>
            </div>

            <div className="bg-linear-to-br from-indigo-600/25 to-violet-600/25 rounded-2xl border border-indigo-500/20 p-6">
              <p className="text-white font-bold mb-1 text-sm">Response Time</p>
              <p className="text-slate-300 text-2xl font-extrabold">≤ 24 hours</p>
              <p className="text-slate-400 text-xs mt-1">We respond to all inquiries promptly</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-3 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-5"
          >
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 rounded-xl px-4 py-3 text-sm font-medium"
              >
                <CheckCircle2 size={18} />
                Message sent! We will get back to you within 24 hours.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 bg-red-500/15 border border-red-500/30 text-red-400 rounded-xl px-4 py-3 text-sm font-medium"
              >
                <AlertCircle size={18} />
                {errorMsg}
              </motion.div>
            )}

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Full Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 disabled:hover:translate-y-0"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={17} className="animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send size={17} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
