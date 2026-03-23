/*
  DESIGN: Dark Precision Tech - Conversion Focused
  - Hero: full-height with animated circuit background + asymmetric layout
  - Strong CTAs with urgency and social proof
  - Expertise: glassmorphism cards with glow
  - Werkwijze: numbered steps with connecting line
  - CTA: gradient background with glow
*/

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Brain, Clock, TrendingUp, ChevronDown, Star, Users, Rocket, Handshake, Target, BarChart3, Monitor, Lock } from "lucide-react";
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
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-hero-engineering-AFi4EVQVcoyF9oVcr7Ni6E.webp)`,
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
              <span className="text-xs font-medium text-[oklch(0.65_0.22_25)] flex items-center gap-1"><Clock className="w-3.5 h-3.5" />Intake duurt ±2 minuten</span>
            </motion.div>

            {/* Headline - Conversion Focused */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight mb-8 overflow-visible after:content-[''] after:block after:h-[0.2em]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span className="block">Automatiseer uw</span>
              <span className="block gradient-text">technische processen</span>
            </motion.h1>

            {/* Subtext - Benefit Driven */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 mb-8 max-w-2xl leading-relaxed"
            >
              Voor engineering, manufacturing, IT en technische diensten. Wij integreren uw systemen, automatiseren workflows en implementeren AI-oplossingen die direct impact hebben op productiviteit en kwaliteit.
            </motion.p>

            {/* USPs - Benefit Driven */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              {[
                { icon: CheckCircle2, text: "Integratie met uw bestaande systemen" },
                { icon: Rocket, text: "Resultaat in 2-12 weken" },
                { icon: Star, text: "Gratis technische intake" },
              ].map((usp) => {
                const IconComponent = usp.icon;
                return (
                  <div key={usp.text} className="flex items-center gap-2 text-sm text-white/70">
                    <IconComponent className="w-4 h-4 text-[oklch(0.65_0.22_25)]" />
                    {usp.text}
                  </div>
                );
              })}
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-3xl font-bold text-[oklch(0.65_0.22_25)] mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>20+</div>
              <p className="text-sm text-white/50">Bedrijven vertrouwen ons</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-3xl font-bold text-[oklch(0.65_0.22_25)] mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>2-12</div>
              <p className="text-sm text-white/50">Weken tot implementatie</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-3xl font-bold text-[oklch(0.65_0.22_25)] mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>4.9/5</div>
              <p className="text-sm text-white/50">Gemiddelde beoordeling</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── EXPERTISE ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="container">
          <div className="mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-4"
            >
              <Brain className="w-3.5 h-3.5 text-[oklch(0.65_0.22_25)]" />
              <span className="text-xs font-medium text-white/60">Expertise</span>
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
              className="text-lg text-white/60 max-w-2xl"
            >
              Wij helpen uw bedrijf groeien met de juiste technologische oplossingen — praktisch, bewezen en op maat gemaakt.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Integraties & Automatisering",
                desc: "Integreer uw ERP, CAD, IoT en andere systemen. Automatiseer data flows, workflows en technische processen.",
                features: ["API integraties", "Workflow automatisering", "Data synchronisatie"],
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-automation-card-Cmgzf2u7YyobuLyoUbbaT9.webp",
              },
              {
                title: "AI & Machine Learning",
                desc: "Implementeer AI voor predictive maintenance, quality control, data analysis en intelligente automatisering.",
                features: ["Predictive analytics", "Computer vision", "Process optimization"],
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-ai-engineering-SeT63nmpEUT9TXX7vv544w.webp",
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card-hover p-8 group"
              >
                <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-white/40">
                      <CheckCircle2 className="w-4 h-4 text-[oklch(0.65_0.22_25)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 overflow-hidden rounded-xl border border-white/5">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <Link href="/diensten">
              <button className="btn-primary-glow flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base shadow-2xl shadow-[oklch(0.65_0.22_25/0.3)] hover:shadow-[oklch(0.65_0.22_25/0.5)] transition-all duration-300 hover:scale-105 mx-auto">
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
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-process-manufacturing-X9uFfZfVUcMMZNT7JjVVji.webp)`,
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
              <TrendingUp className="w-3.5 h-3.5 text-[oklch(0.65_0.22_25)]" />
              <span className="text-xs font-medium text-white/60">Werkwijze</span>
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
              className="text-lg text-white/60 max-w-2xl"
            >
              Een persoonlijke aanpak waarbij we samen uw processen doorlopen en op maat gemaakte automatiseringsvoorstellen ontwikkelen.
            </motion.p>
          </div>

          <div className="space-y-6 mb-12 relative">
            {[
              {
                num: "01",
                title: "Gratis Intake",
                desc: "U vertelt over uw bedrijf, processen en doelen. Wij luisteren en analyseren.",
                accentColor: "oklch(0.65_0.22_25)",
              },
              {
                num: "02",
                title: "Analyse & Voorstel",
                desc: "We maken een concreet plan met geschatte kosten, timeline en verwachte resultaten.",
                accentColor: "oklch(0.70_0.20_35)",
              },
              {
                num: "03",
                title: "Implementatie",
                desc: "Wij bouwen en integreren de oplossing. U krijgt regelmatig updates.",
                accentColor: "oklch(0.65_0.22_25)",
              },
              {
                num: "04",
                title: "Launch & Support",
                desc: "Go-live met training en support. Daarna blijven we beschikbaar voor optimalisaties.",
                accentColor: "oklch(0.70_0.20_35)",
              },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative glass-card-hover p-8 border-l-4"
                style={{ borderColor: step.accentColor }}
              >
                <div
                  className="absolute -left-12 top-8 w-8 h-8 rounded-full border-4 border-[oklch(0.09_0.015_240)] flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: step.accentColor, color: "oklch(0.09_0.015_240)" }}
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
                icon: Rocket,
                title: "Snelle Implementatie",
                desc: "Van idee naar werkende oplossing in weken, niet maanden.",
              },
              {
                icon: Handshake,
                title: "Denken Met U Mee",
                desc: "Niet alleen uitvoeren, maar ook adviseren en optimaliseren.",
              },
              {
                icon: Target,
                title: "Praktische Oplossingen",
                desc: "De juiste balans tussen slimme techniek en eenvoud.",
              },
              {
                icon: BarChart3,
                title: "Echte Resultaten",
                desc: "Tevreden klanten die tijd en geld besparen door onze oplossingen.",
              },
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card-hover p-6"
                >
                  <IconComponent className="w-8 h-8 mb-4 text-[oklch(0.65_0.22_25)]" />
                  <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
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
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
              Klaar om uw bedrijf te transformeren?
            </h2>
            <p className="text-lg text-white/60 mb-10">
              Laat ons uw bedrijfsprocessen analyseren en een concreet automatiseringsplan maken. Gratis, vrijblijvend, en u hoort binnen 24 uur van ons.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <button className="btn-primary-glow flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg shadow-2xl shadow-[oklch(0.65_0.22_25/0.3)] hover:shadow-[oklch(0.65_0.22_25/0.5)] transition-all duration-300 hover:scale-105">
                  Start gratis intake
                  <ArrowRight className="w-5 h-5" />
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

      {/* ─── WEBAPPS & KLANTENPORTALEN ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.12_0.025_230)] to-[oklch(0.09_0.015_240)]" />
        <div className="container relative z-10">
          <div className="mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-4"
            >
              <Monitor className="w-3.5 h-3.5 text-[oklch(0.65_0.22_25)]" />
              <span className="text-xs font-medium text-white/60">Custom Software</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold leading-tight mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Webapps & Klantenportalen op Maat
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/60 max-w-2xl"
            >
              Van interne dashboards tot klant-facing portalen — wij bouwen software die uw bedrijfsprocessen stroomlijnt en uw klanten beter bedient.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Monitor,
                title: "Interne Dashboards",
                desc: "Real-time monitoring van productie, orders en KPI's. Geoptimaliseerd voor uw specifieke workflows.",
                features: ["Live data visualisatie", "Custom metrics", "Integratie met ERP"]
              },
              {
                icon: Lock,
                title: "Klantenportalen",
                desc: "Geef uw klanten zelf toegang tot orders, facturen, tracking en documentatie. Verhoog tevredenheid.",
                features: ["Veilige authenticatie", "Klant-specifieke views", "Automatische updates"]
              },
              {
                icon: Zap,
                title: "Workflow Automatisering",
                desc: "Automatiseer repetitieve taken, approvals en notificaties. Bespaar uren per week.",
                features: ["Trigger-based actions", "Email/SMS alerts", "API integraties"]
              },
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card-hover p-8 group"
                >
                  <IconComponent className="w-10 h-10 mb-4 text-[oklch(0.65_0.22_25)] group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-white/40">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[oklch(0.65_0.22_25)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-white/50 mb-6">Wilt u weten wat wij voor uw bedrijf kunnen bouwen?</p>
            <Link href="/contact">
              <button className="btn-primary-glow flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base shadow-2xl shadow-[oklch(0.65_0.22_25/0.3)] hover:shadow-[oklch(0.65_0.22_25/0.5)] transition-all duration-300 hover:scale-105 mx-auto">
                Plan een demo
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
