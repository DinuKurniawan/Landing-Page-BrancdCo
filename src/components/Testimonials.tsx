import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechVenture",
    initials: "SJ",
    color: "from-pink-500 to-rose-500",
    rating: 5,
    text: "BrandCo completely transformed our online presence. The new website doubled our leads in just two months. Their team is professional, creative, and a pleasure to work with.",
  },
  {
    name: "Michael Chen",
    role: "Founder, NovaBuild",
    initials: "MC",
    color: "from-indigo-500 to-violet-500",
    rating: 5,
    text: "From concept to launch in 6 weeks — impressive! The design exceeded our expectations and the SEO work has been delivering organic growth ever since.",
  },
  {
    name: "Amira Patel",
    role: "Marketing Director, Lumina",
    initials: "AP",
    color: "from-amber-500 to-orange-500",
    rating: 5,
    text: "The branding package BrandCo delivered was spot-on. They truly understood our vision and translated it into a cohesive identity that resonates with our audience.",
  },
  {
    name: "David Torres",
    role: "Owner, Torres Retail",
    initials: "DT",
    color: "from-emerald-500 to-teal-500",
    rating: 5,
    text: "Our e-commerce sales increased by 40% after the redesign. The checkout experience is seamless and customers constantly compliment how easy the site is to use.",
  },
  {
    name: "Julia Meier",
    role: "COO, GreenWave",
    initials: "JM",
    color: "from-sky-500 to-cyan-500",
    rating: 5,
    text: "Excellent communication throughout the entire project. They delivered on time and on budget. We will definitely use BrandCo again for our next phase of growth.",
  },
  {
    name: "Ren Tanaka",
    role: "CTO, FlowApps",
    initials: "RT",
    color: "from-violet-500 to-purple-500",
    rating: 5,
    text: "The development team is top-tier. Clean code, great documentation, and they actually explain what they are building. A refreshing change from other agencies.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="py-28 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-block bg-indigo-50 text-indigo-700 text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight text-center"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-7xl py-6 text-center text-lg leading-relaxed text-slate-500"
            style={{ textAlign: 'center' }}
          >
            Don't just take our word for it — hear from the businesses we've helped
            grow.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              className="group bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/80 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote size={20} className="text-slate-200 group-hover:text-indigo-200 transition-colors" />
              </div>
              <p className="text-slate-600 leading-relaxed text-sm flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br ${t.color}`}
                >
                  <span className="text-white text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
