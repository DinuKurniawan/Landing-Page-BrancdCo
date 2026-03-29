import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const stats = [
  { number: "150+", label: "Projects Done" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "10+", label: "Years Experience" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 h-150 w-150 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-150 w-150 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[72px_72px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center pt-28 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/80 text-sm font-medium px-5 py-2 rounded-full mb-10"
        >
          <Sparkles size={14} className="text-indigo-400" />
          Welcome to BrandCo
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-7"
        >
          We Build{" "}
          <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
            Digital
          </span>{" "}
          Experiences
          <span className="block mt-2">That Matter</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mx-auto mb-12 py-6 max-w-7xl text-center text-lg leading-relaxed text-slate-400 md:text-xl"
          style={{ textAlign: 'center' }}
        >
          From brand identity to full-scale digital products — we help businesses grow
          with creativity, precision, and strategy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-9 py-4 rounded-full transition-all duration-200 shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
          >
            Start a Project <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 hover:text-white font-semibold px-9 py-4 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-200"
          >
            Our Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-24 grid grid-cols-3 max-w-md mx-auto"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center px-4 ${i < stats.length - 1 ? "border-r border-white/10" : ""}`}
            >
              <p className="bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
                {stat.number}
              </p>
              <p className="text-xs text-slate-500 mt-2 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
