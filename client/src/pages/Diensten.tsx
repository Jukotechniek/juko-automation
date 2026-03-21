/*
  DESIGN: Dark Precision Tech
  - Diensten pagina met glassmorphism kaarten
  - Gedetailleerde beschrijving per dienst
*/

import { motion } from "framer-motion";
import { Zap, Brain, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Diensten() {
  return (
    <div className="min-h-screen bg-[oklch(0.09_0.015_240)] text-white">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[oklch(0.65_0.22_25/0.06)] blur-3xl" />
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-4">
              <span className="text-xs font-medium text-white/60">Onze Diensten</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl lg:text-6xl font-bold leading-tight mb-5" style={{ fontFamily: "'Syne', sans-serif" }}>
              Slimme oplossingen voor{" "}
              <span className="gradient-text">uw bedrijf</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/50 text-lg leading-relaxed">
              Wij ontwikkelen slimme software en automatiseringen die processen versnellen, kosten besparen en bedrijven laten groeien.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Dienst 1: Automatisering */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" as const }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[oklch(0.65_0.22_25/0.3)] bg-[oklch(0.65_0.22_25/0.08)] mb-5">
                <Zap className="w-3.5 h-3.5 text-[oklch(0.65_0.22_25)]" />
                <span className="text-xs font-medium text-[oklch(0.65_0.22_25)]">Dienst 01</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                Automatiseringen & Software
              </h2>
              <p className="text-white/50 leading-relaxed mb-6">
                Stroomlijn uw processen met slimme automatiseringen en maatwerk web applicaties die tijd en kosten besparen. Van rapportage automatisering tot complete bedrijfsapplicaties — wij bouwen wat u nodig heeft.
              </p>
              <p className="text-white/50 leading-relaxed mb-8">
                Een voorbeeld: een webapp waar projecten en uren van monteurs in beheerd worden — volledig op maat voor uw werkwijze.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Rapportage automatisering",
                  "Maatwerk web applicaties",
                  "Procesoptimalisatie",
                  "Integratie met bestaande systemen",
                  "Dashboard & monitoring",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-white/60">
                    <CheckCircle2 className="w-4 h-4 text-[oklch(0.65_0.22_25)] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <button className="btn-primary-glow flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm">
                  Meer informatie
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.65_0.22_25/0.15)] to-transparent rounded-2xl blur-xl" />
              <div className="relative glass-card overflow-hidden">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-automation-visual-5PKDExTwL5b3mWTke4noEe.webp"
                  alt="Automatisering & Software"
                  className="w-full h-72 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-[oklch(0.65_0.22_25/0.1)] border border-[oklch(0.65_0.22_25/0.2)]">
                    <div className="w-2 h-2 rounded-full bg-[oklch(0.82_0.18_165)] animate-pulse" />
                    <span className="text-sm text-white/70">Projecten & uren beheer voor monteurs — live voorbeeld</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Dienst 2: AI */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.1 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.82_0.18_165/0.15)] to-transparent rounded-2xl blur-xl" />
              <div className="relative glass-card overflow-hidden">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-ai-visual-R77pzhAFECUcxHV25eoBK6.webp"
                  alt="AI Implementatie"
                  className="w-full h-72 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-[oklch(0.82_0.18_165/0.1)] border border-[oklch(0.82_0.18_165/0.2)]">
                    <div className="w-2 h-2 rounded-full bg-[oklch(0.82_0.18_165)] animate-pulse" />
                    <span className="text-sm text-white/70">Intelligente chatbot die vragen beantwoordt & schema's doorstuurt</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" as const }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[oklch(0.82_0.18_165/0.3)] bg-[oklch(0.82_0.18_165/0.08)] mb-5">
                <Brain className="w-3.5 h-3.5 text-[oklch(0.82_0.18_165)]" />
                <span className="text-xs font-medium text-[oklch(0.82_0.18_165)]">Dienst 02</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                AI Implementatie
              </h2>
              <p className="text-white/50 leading-relaxed mb-6">
                Slimme AI-toepassingen die direct resultaat opleveren. Van virtuele assistenten tot data-analyse: verhoog efficiëntie en creëer nieuwe kansen voor uw organisatie.
              </p>
              <p className="text-white/50 leading-relaxed mb-8">
                Een voorbeeld: een intelligente chatbot die vragen van monteurs beantwoordt en elektrische schema's kan doorsturen — 24/7 beschikbaar.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Chatbots & Virtuele assistenten",
                  "Kennisbank integratie",
                  "Documentverwerking met AI",
                  "Data-analyse & inzichten",
                  "Automatische rapportages",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-white/60">
                    <CheckCircle2 className="w-4 h-4 text-[oklch(0.82_0.18_165)] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[oklch(0.82_0.18_165)] border border-[oklch(0.82_0.18_165/0.3)] hover:bg-[oklch(0.82_0.18_165/0.1)] transition-all duration-300 text-sm">
                  Meer informatie
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.12_0.025_230)] to-[oklch(0.09_0.015_240)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[oklch(0.65_0.22_25/0.08)] blur-3xl" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Klaar om{" "}
              <span className="gradient-text">tijd te besparen?</span>
            </h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Heeft u vragen over onze diensten of wilt u een vrijblijvend gesprek? Neem contact met ons op.
            </p>
            <Link href="/contact">
              <button className="btn-primary-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white">
                Neem contact op
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
