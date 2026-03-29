import { Globe, Mail, ExternalLink, Share2 } from "lucide-react";

const socials = [
  { icon: Globe, label: "Website", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@brandco.id" },
  { icon: Share2, label: "Social", href: "#" },
  { icon: ExternalLink, label: "Portfolio", href: "#" },
];

const serviceLinks = [
  "Brand Design",
  "Web Development",
  "Digital Marketing",
  "SEO & Analytics",
  "E-Commerce",
];

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <a href="#home" className="inline-block text-2xl font-bold text-white tracking-tight mb-4">
              Brand<span className="text-indigo-400">Co</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              A full-service creative agency helping businesses build remarkable brands and digital
              experiences since 2014.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="group w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:bg-indigo-600 hover:border-indigo-500 flex items-center justify-center transition-all duration-200"
                >
                  <s.icon size={15} className="text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-white font-bold text-xs mb-5 uppercase tracking-widest">Services</p>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white font-bold text-xs mb-5 uppercase tracking-widest">Company</p>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:hello@brandco.id"
                  className="text-slate-400 hover:text-indigo-400 text-sm transition-colors"
                >
                  hello@brandco.id
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {year} BrandCo. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a key={l} href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
