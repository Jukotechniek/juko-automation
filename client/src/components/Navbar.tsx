/*
  DESIGN: Dark Precision Tech
  - Sticky navbar with blur backdrop
  - Transparent to solid transition on scroll
  - Cyan accent on active/hover links
*/

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { branding } from "@/config/branding";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/blog", label: "Blog" },
  { href: "/over-ons", label: "Over Ons" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const { resolvedTheme } = useTheme();

  const logoSrc = resolvedTheme === "dark" ? branding.logoDark : branding.logoLight;

  const scrollTicking = useRef(false);

  useEffect(() => {
    const apply = () => {
      const y = window.scrollY;
      setScrolled((prev) => {
        if (prev) return y > 8;
        return y > 48;
      });
    };

    const onScroll = () => {
      if (scrollTicking.current) return;
      scrollTicking.current = true;
      requestAnimationFrame(() => {
        scrollTicking.current = false;
        apply();
      });
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-200 ease-out ${
        scrolled
          ? "bg-background/88 border-b border-border/60 shadow-[0_10px_40px_-24px_oklch(0_0_0/0.35)]"
          : "bg-background/55 border-b border-transparent shadow-none"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2.5 group">
              <img src={logoSrc} alt="Juko Automation" className="h-10 lg:h-12 w-auto" />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location === link.href
                      ? "text-[oklch(0.65_0.22_25)] bg-[oklch(0.65_0.22_25/0.1)]"
                      : "text-foreground/70 hover:text-foreground hover:bg-white/5 dark:hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact#contact-form">
              <button className="btn-primary-glow px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-300">
                Doe de intake
              </button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-white/5 dark:hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      <div
        className={`pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[oklch(0.65_0.22_25/0.65)] to-transparent transition-opacity duration-200 ${
          scrolled ? "opacity-85" : "opacity-55"
        }`}
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/60"
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      location === link.href
                        ? "text-[oklch(0.65_0.22_25)] bg-[oklch(0.65_0.22_25/0.1)]"
                        : "text-foreground/70 hover:text-foreground hover:bg-white/5 dark:hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <div className="pt-2 pb-1">
                <Link href="/contact#contact-form">
                  <button
                    className="btn-primary-glow w-full px-5 py-3 rounded-lg text-sm font-semibold text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    Doe de intake
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
