import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Palette, Code2, Megaphone, BarChart3, Globe, Headphones } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Design",
    description: "Logo, color palette, typography, and brand guidelines that make your business unforgettable.",
    bg: "bg-pink-500/15",
    text: "text-pink-400",
    border: "group-hover:border-pink-500/30",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Fast, responsive, and SEO-friendly websites and web applications built with modern tech.",
    bg: "bg-indigo-500/15",
    text: "text-indigo-400",
    border: "group-hover:border-indigo-500/30",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Social media campaigns, content strategy, and paid ads that drive real results.",
    bg: "bg-amber-500/15",
    text: "text-amber-400",
    border: "group-hover:border-amber-500/30",
  },
  {
    icon: BarChart3,
    title: "SEO & Analytics",
    description: "Data-driven SEO strategies and performance tracking to grow your organic reach.",
    bg: "bg-emerald-500/15",
    text: "text-emerald-400",
    border: "group-hover:border-emerald-500/30",
  },
  {
    icon: Globe,
    title: "E-Commerce",
    description: "End-to-end online store setup, from product listing to payment integration and logistics.",
    bg: "bg-violet-500/15",
    text: "text-violet-400",
    border: "group-hover:border-violet-500/30",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Ongoing maintenance, updates, and dedicated support so you are never left in the dark.",
    bg: "bg-sky-500/15",
    text: "text-sky-400",
    border: "group-hover:border-sky-500/30",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-28 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[72px_72px]" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-block bg-indigo-500/10 text-indigo-400 text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest border border-indigo-500/20"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight text-center"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-7xl text-center text-lg leading-relaxed text-slate-400 py-6"
            style={{ textAlign: 'center' }}
          >
            A full suite of digital services designed to accelerate your growth and
            strengthen your brand.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              variants={item}
              className={`group bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl p-8 transition-all duration-300 cursor-default ${svc.border}`}
            >
              <div className={`inline-flex p-3.5 rounded-2xl mb-6 ${svc.bg}`}>
                <svc.icon size={22} className={svc.text} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-200">
                {svc.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">{svc.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
