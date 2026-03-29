import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, Users, Award, Clock } from 'lucide-react';

const perks = [
  'Dedicated team of creative professionals',
  'Data-driven design and development approach',
  'Transparent communication throughout every project',
  'On-time delivery with quality guaranteed',
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center" ref={ref}>

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Main dark card */}
              <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-3xl bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 shadow-2xl shadow-indigo-900/30">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
                <div className="absolute top-8 left-8 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl" />
                <div className="absolute bottom-8 right-8 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl" />
                <div className="relative text-center px-8">
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 to-violet-500 shadow-lg shadow-indigo-500/30">
                    <span className="text-3xl">🏢</span>
                  </div>
                  <p className="text-white font-bold text-xl tracking-tight">BrandCo Studio</p>
                  <p className="text-slate-400 text-sm mt-1">Est. 2014</p>
                  <div className="mt-6 flex justify-center gap-2">
                    {['Design', 'Dev', 'Strategy'].map(tag => (
                      <span key={tag} className="text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating card: bottom-left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl shadow-black/10 px-4 py-3 flex items-center gap-3 border border-slate-100"
              >
                <div className="p-2 rounded-xl text-indigo-600 bg-indigo-50">
                  <Users size={16} />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-slate-900">200+</p>
                  <p className="text-xs text-slate-500">Happy Clients</p>
                </div>
              </motion.div>

              {/* Floating card: top-right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl shadow-black/10 px-4 py-3 flex items-center gap-3 border border-slate-100"
              >
                <div className="p-2 rounded-xl text-violet-600 bg-violet-50">
                  <Award size={16} />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-slate-900">15+</p>
                  <p className="text-xs text-slate-500">Awards Won</p>
                </div>
              </motion.div>

              {/* Floating card: mid-right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute bottom-20 -right-6 bg-white rounded-2xl shadow-xl shadow-black/10 px-4 py-3 flex items-center gap-3 border border-slate-100"
              >
                <div className="p-2 rounded-xl text-sky-600 bg-sky-50">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-slate-900">10+</p>
                  <p className="text-xs text-slate-500">Years Active</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="inline-block bg-indigo-50 text-indigo-700 text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
              We Are a Full-Service{' '}
              <span className="bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Creative Agency
              </span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8 text-lg">
              Since 2014, BrandCo has partnered with startups and enterprises to craft compelling brands,
              intuitive digital products, and marketing strategies that convert. Our multidisciplinary team brings
              together designers, developers, and strategists under one roof.
            </p>

            {/* Mobile stats (shown instead of floating cards) */}
            <div className="md:hidden grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: Users, value: '200+', label: 'Clients', color: 'text-indigo-600 bg-indigo-50' },
                { icon: Award, value: '15+', label: 'Awards', color: 'text-violet-600 bg-violet-50' },
                { icon: Clock, value: '10+', label: 'Years', color: 'text-sky-600 bg-sky-50' },
              ].map(s => (
                <div key={s.label} className="bg-slate-50 rounded-2xl p-4 flex flex-col items-center gap-2 border border-slate-100">
                  <div className={`p-2 rounded-xl ${s.color}`}><s.icon size={16} /></div>
                  <p className="font-extrabold text-slate-900">{s.value}</p>
                  <p className="text-xs text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>

            <ul className="space-y-4 mb-10">
              {perks.map(p => (
                <li key={p} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-indigo-500" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-indigo-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-slate-900/20 hover:shadow-indigo-500/30"
            >
              Work With Us
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
