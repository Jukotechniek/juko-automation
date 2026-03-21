/*
  DESIGN: Dark Precision Tech
  - Dark footer with subtle grid background
  - Cyan accent on links
  - Clean, minimal layout
*/

import { Link } from "wouter";
import { Zap, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[oklch(0.07_0.012_240)]">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[oklch(0.72_0.15_220)] to-[oklch(0.65_0.18_240)] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
                <span className="font-bold text-lg text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Juko <span className="text-[oklch(0.72_0.15_220)]">Automation</span>
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Wij maken uw werk makkelijker door slimme automatiseringen en praktische software. Meer tijd voor wat echt belangrijk is.
            </p>
            <div className="flex flex-col gap-2 mt-6">
              <a href="mailto:info@jukoautomation.nl" className="flex items-center gap-2 text-white/50 hover:text-[oklch(0.72_0.15_220)] transition-colors text-sm">
                <Mail className="w-4 h-4" />
                info@jukoautomation.nl
              </a>
            </div>
          </div>

          {/* Navigatie */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase" style={{ fontFamily: "'Syne', sans-serif" }}>
              Navigatie
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/diensten", label: "Diensten" },
                { href: "/over-ons", label: "Over Ons" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Diensten */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase" style={{ fontFamily: "'Syne', sans-serif" }}>
              Diensten
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                "Automatiseringen & Software",
                "AI Implementatie",
                "Maatwerk Web Applicaties",
                "Chatbots & Assistenten",
              ].map((item) => (
                <li key={item}>
                  <Link href="/diensten">
                    <span className="text-white/50 hover:text-white transition-colors text-sm">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Juko Automation. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.82_0.18_165)] animate-pulse" />
            <span className="text-white/30 text-xs">Beschikbaar voor nieuwe projecten</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
