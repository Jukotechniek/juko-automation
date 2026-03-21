/*
  DESIGN: Dark Precision Tech - Conversion Focused
  - Hero: full-height with animated circuit background + asymmetric layout
  - Strong CTAs with urgency and social proof
  - Expertise: glassmorphism cards with glow
  - Werkwijze: numbered steps with connecting line
  - CTA: gradient background with glow
*/

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Brain, Clock, TrendingUp, ChevronDown, Star, Users } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.09_0.015_240)] text-white">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-hero-bg-no3eVhmwB6AWV5oFN2jduY.webp)`,
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.09_0.015_240/0.95)] via-[oklch(0.09_0.015_240/0.80)] to-[oklch(0.09_0.015_240/0.50)]" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[oklch(0.09_0.015_240)] to-transparent" />

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            {/* Urgency Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[oklch(0.65_0.22_25/0.3)] bg-[oklch(0.65_0.22_25/0.08)] mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.22_25)] animate-pulse" />
              <span className="text-xs font-medium text-[oklch(0.65_0.22_25)]">⏱️ Intake duurt ±2 minuten</span>
            </motion.div>

            {/* Headline - Conversion Focused */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Automatiseer uw{" "}
              <span className="gradient-text">technische processen</span>
              <br />
              met slimme integraties
            </motion.h1>

            {/* Subtext - Benefit Driven */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/60 leading-relaxed mb-8 max-w-xl"
            >
              Voor engineering, manufacturing, IT en technische diensten. Wij integreren uw systemen, automatiseren workflows en implementeren AI-oplossingen die direct impact hebben op productiviteit en kwaliteit.
            </motion.p>

            {/* Social Proof USPs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              {[
                { icon: "✓", text: "Integratie met uw bestaande systemen" },
                { icon: "✓", text: "Resultaat in 2-12 weken" },
                { icon: "✓", text: "Gratis technische intake" },
              ].map((usp) => (
                <div key={usp.text} className="flex items-center gap-2 text-sm text-white/70">
                  <span className="text-[oklch(0.65_0.22_25)] font-bold">{usp.icon}</span>
                  {usp.text}
                </div>
              ))}
            </motion.div>

            {/* Strong CTAs - Primary & Secondary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="/contact">
                <button className="btn-primary-glow flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg shadow-2xl shadow-[oklch(0.65_0.22_25/0.3)] hover:shadow-[oklch(0.65_0.22_25/0.5)] transition-all duration-300 hover:scale-105">
                  Start gratis intake
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/diensten">
                <button className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border-2 border-[oklch(0.65_0.22_25/0.4)] hover:border-[oklch(0.65_0.22_25)] hover:bg-[oklch(0.65_0.22_25/0.08)] transition-all duration-300">
                  Bekijk voorbeelden
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex items-center gap-6 text-sm text-white/50"
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[oklch(0.65_0.22_25)]" />
                <span>Vertrouwd door 20+ bedrijven</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[oklch(0.65_0.22_25)]" />
                <span>4.9/5 sterren</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── STATS BAND ─── */}
      <section className="relative py-12 border-y border-white/5 bg-[oklch(0.11_0.016_240)]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "±2 min", label: "Intake duurt" },
              { value: "2–12 wk", label: "Projectduur" },
              { value: "24 uur", label: "Reactietijd" },
              { value: "100%", label: "Maatwerk" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {stat.value}
                </div>
                <div className="text-sm text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERTISE ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container relative z-10">
          <div className="mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-4"
            >
              <Zap className="w-3.5 h-3.5 text-[oklch(0.65_0.22_25)]" />
              <span className="text-xs font-medium text-white/60">Onze Expertise</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold leading-tight mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Wat wij voor u kunnen doen
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/50 text-lg max-w-2xl"
            >
              Wij helpen uw bedrijf groeien met de juiste technologische oplossingen — praktisch, bewezen en op maat gemaakt.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Automatisering */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card-hover p-8 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-[oklch(0.65_0.22_25/0.15)] border border-[oklch(0.65_0.22_25/0.2)] flex items-center justify-center flex-shrink-0 group-hover:bg-[oklch(0.65_0.22_25/0.25)] transition-colors">
                  <Zap className="w-6 h-6 text-[oklch(0.65_0.22_25)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                    Integraties & Automatisering
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    Integreer uw ERP, CAD, IoT en andere systemen. Automatiseer data flows, workflows en technische processen.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["API integraties", "Workflow automatisering", "Data synchronisatie"].map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 text-white/40 text-xs border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 overflow-hidden rounded-xl border border-white/5">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-automation-visual-5PKDExTwL5b3mWTke4noEe.webp"
                  alt="Automatisering visualisatie"
                  className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </motion.div>

            {/* Card 2: AI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card-hover p-8 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-[oklch(0.70_0.20_35/0.15)] border border-[oklch(0.70_0.20_35/0.2)] flex items-center justify-center flex-shrink-0 group-hover:bg-[oklch(0.70_0.20_35/0.25)] transition-colors">
                  <Brain className="w-6 h-6 text-[oklch(0.70_0.20_35)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                    AI & Machine Learning
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    Implementeer AI voor predictive maintenance, quality control, data analysis en intelligente automatisering.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Predictive analytics", "Computer vision", "Process optimization"].map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 text-white/40 text-xs border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 overflow-hidden rounded-xl border border-white/5">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-ai-visual-R77pzhAFECUcxHV25eoBK6.webp"
                  alt="AI visualisatie"
                  className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <Link href="/diensten">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[oklch(0.65_0.22_25)] border border-[oklch(0.65_0.22_25/0.3)] hover:bg-[oklch(0.65_0.22_25/0.1)] transition-all duration-300">
                Bekijk alle diensten
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── WERKWIJZE ─── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-process-bg-8BwWJB46vQ5JRSkwm96vzw.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[oklch(0.09_0.015_240/0.92)]" />
        <div className="container relative z-10">
          <div className="mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-4"
            >
              <Clock className="w-3.5 h-3.5 text-[oklch(0.65_0.22_25)]" />
              <span className="text-xs font-medium text-white/60">Onze Werkwijze</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold leading-tight mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Van kennismaking tot werkende oplossing
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/50 text-lg max-w-2xl"
            >
              Een persoonlijke aanpak waarbij we samen uw processen doorlopen en op maat gemaakte automatiseringsvoorstellen ontwikkelen.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                num: "01",
                title: "Kennismaking",
                desc: "We komen bij u op locatie of plannen een videocall om uw bedrijf en uitdagingen te leren kennen.",
                accentColor: "#E63946",
              },
              {
                num: "02",
                title: "Proces Analyse",
                desc: "Samen nemen we de relevante processen van uw bedrijf door en identificeren we kansen voor automatisering.",
                accentColor: "#E63946",
              },
              {
                num: "03",
                title: "Voorstel op Maat",
                desc: "We presenteren u een concreet automatiseringsvoorstel met heldere voordelen en implementatiestappen.",
                accentColor: "#F77F00",
              },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass-card p-8 relative overflow-hidden group hover:border-[oklch(0.65_0.22_25/0.25)] transition-all duration-300"
              >
                <div
                  className="text-7xl font-black leading-none mb-6 select-none"
                  style={{ fontFamily: "'Syne', sans-serif", color: "rgba(255,255,255,0.04)" }}
                >
                  {step.num}
                </div>
                <div
                  className="absolute top-6 right-6 text-sm font-bold"
                  style={{ fontFamily: "'Syne', sans-serif", color: step.accentColor }}
                >
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${step.accentColor}, transparent)` }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-col items-center gap-2"
          >
            <Link href="/contact">
              <button className="btn-primary-glow flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base shadow-2xl shadow-[oklch(0.65_0.22_25/0.3)] hover:shadow-[oklch(0.65_0.22_25/0.5)] transition-all duration-300 hover:scale-105">
                Start gratis intake (±2 min)
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <p className="text-white/30 text-sm">Geen verplichtingen. Wel een scherpe eerste inschatting.</p>
          </motion.div>
        </div>
      </section>

      {/* ─── WAAROM JUKO ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container relative z-10">
          <div className="mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-4"
            >
              <TrendingUp className="w-3.5 h-3.5 text-[oklch(0.65_0.22_25)]" />
              <span className="text-xs font-medium text-white/60">Waarom Juko?</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold leading-tight mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Technologie die écht werkt
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: "⚡",
                title: "Snelle Implementatie",
                desc: "Van idee naar werkende oplossing in weken, niet maanden.",
              },
              {
                icon: "🤝",
                title: "Denken Met U Mee",
                desc: "Niet alleen uitvoeren, maar ook adviseren en optimaliseren.",
              },
              {
                icon: "🎯",
                title: "Praktische Oplossingen",
                desc: "De juiste balans tussen slimme techniek en eenvoud.",
              },
              {
                icon: "📈",
                title: "Echte Resultaten",
                desc: "Tevreden klanten die tijd en geld besparen door onze oplossingen.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card-hover p-6"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA BANNER ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.12_0.025_230)] to-[oklch(0.09_0.015_240)]" />
        <div className="absolute inset-0 radial-glow-red opacity-60" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[oklch(0.65_0.22_25/0.08)] blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-[oklch(0.70_0.20_35/0.06)] blur-3xl" />

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
              Klaar om uw bedrijf te transformeren?
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
              Laat ons uw bedrijfsprocessen analyseren en een concreet automatiseringsplan maken. Gratis, vrijblijvend, en u hoort binnen 24 uur van ons.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <button className="btn-primary-glow flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base shadow-2xl shadow-[oklch(0.65_0.22_25/0.3)] hover:shadow-[oklch(0.65_0.22_25/0.5)] transition-all duration-300 hover:scale-105">
                  Start gratis intake
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/over-ons">
                <button className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white/70 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 text-base">
                  Meer over ons
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
