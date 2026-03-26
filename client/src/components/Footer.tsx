/*
  DESIGN: Dark Precision Tech
  - Dark footer with subtle grid background
  - Cyan accent on links
  - Clean, minimal layout
*/

import { Link } from "wouter";
import { Mail, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { branding } from "@/config/branding";

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const logoSrc = resolvedTheme === "dark" ? branding.logoDark : branding.logoLight;

  return (
    <footer className="relative border-t border-white/5 bg-[oklch(0.07_0.012_240)]">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/">
              <div className="flex items-center gap-2.5 mb-4">
                <img src={logoSrc} alt="Juko Automation" className="h-8 w-auto" />
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Wij maken uw werk makkelijker door slimme automatiseringen en praktische software. Meer tijd voor wat echt belangrijk is.
            </p>
            <div className="flex flex-col gap-2 mt-6">
              <a href="mailto:info@jukoautomation.nl" className="flex items-center gap-2 text-white/50 hover:text-[oklch(0.65_0.22_25)] transition-colors text-sm">
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
        <div className="mt-12 pt-6 border-t border-white/5">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Juko Automation. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
