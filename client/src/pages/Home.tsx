/*
  DESIGN: Dark Precision Tech
  - Hero: full-height with animated circuit background + asymmetric layout
  - Expertise: glassmorphism cards with glow
  - Werkwijze: numbered steps with connecting line
  - CTA: gradient background with glow
*/

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Brain, Clock, TrendingUp, ChevronDown } from "lucide-react";
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
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[oklch(0.72_0.15_220/0.3)] bg-[oklch(0.72_0.15_220/0.08)] mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.82_0.18_165)] animate-pulse" />
              <span className="text-xs font-medium text-[oklch(0.72_0.15_220)]">Innovatieve Automatisering</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Automatiseer{" "}
              <span className="gradient-text">Slimmer.</span>
              <br />
              Groei{" "}
              <span className="gradient-text">Sneller.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/60 leading-relaxed mb-8 max-w-xl"
            >
              Bespaar tijd, verminder fouten en laat processen vanzelf lopen. Van maatwerk software tot geavanceerde AI — wij bouwen oplossingen die écht werken.
            </motion.p>

            {/* USPs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              {[
                "Snel duidelijkheid",
                "Praktische oplossingen",
                "Transparant traject",
              ].map((usp) => (
                <div key={usp} className="flex items-center gap-2 text-sm text-white/70">
                  <CheckCircle2 className="w-4 h-4 text-[oklch(0.82_0.18_165)] flex-shrink-0" />
                  {usp}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="/contact">
                <button className="btn-primary-glow flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white">
                  Doe de intake
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/diensten">
                <button className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white/70 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300">
                  Bekijk diensten
                </button>
              </Link>
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
              <Zap className="w-3.5 h-3.5 text-[oklch(0.72_0.15_220)]" />
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
              Van automatisering tot{" "}
              <span className="gradient-text">geavanceerde AI</span>
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
                <div className="w-12 h-12 rounded-xl bg-[oklch(0.72_0.15_220/0.15)] border border-[oklch(0.72_0.15_220/0.2)] flex items-center justify-center flex-shrink-0 group-hover:bg-[oklch(0.72_0.15_220/0.25)] transition-colors">
                  <Zap className="w-6 h-6 text-[oklch(0.72_0.15_220)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                    Automatiseringen & Software
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    Stroomlijn uw processen met slimme automatiseringen en maatwerk web applicaties die tijd en kosten besparen.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Rapportage automatisering", "Web applicaties", "Procesoptimalisatie"].map((tag) => (
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
                <div className="w-12 h-12 rounded-xl bg-[oklch(0.82_0.18_165/0.15)] border border-[oklch(0.82_0.18_165/0.2)] flex items-center justify-center flex-shrink-0 group-hover:bg-[oklch(0.82_0.18_165/0.25)] transition-colors">
                  <Brain className="w-6 h-6 text-[oklch(0.82_0.18_165)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                    AI Implementatie
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    Slimme AI-toepassingen die direct resultaat opleveren. Van virtuele assistenten tot data-analyse.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Chatbots", "Virtuele assistenten", "Data-analyse"].map((tag) => (
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
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[oklch(0.72_0.15_220)] border border-[oklch(0.72_0.15_220/0.3)] hover:bg-[oklch(0.72_0.15_220/0.1)] transition-all duration-300">
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
              <Clock className="w-3.5 h-3.5 text-[oklch(0.72_0.15_220)]" />
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
              Van kennismaking tot{" "}
              <span className="gradient-text">werkende oplossing</span>
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
                className="glass-card p-8 relative overflow-hidden group hover:border-[oklch(0.72_0.15_220/0.25)] transition-all duration-300"
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
              <button className="btn-primary-glow flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-white text-base">
                Doe de intake (±2 min)
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
              <TrendingUp className="w-3.5 h-3.5 text-[oklch(0.82_0.18_165)]" />
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
              Technologie die{" "}
              <span className="gradient-text">écht werkt</span>
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

      {/* ─── CTA BANNER ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.12_0.025_230)] to-[oklch(0.09_0.015_240)]" />
        <div className="absolute inset-0 radial-glow-cyan opacity-60" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[oklch(0.72_0.15_220/0.08)] blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-[oklch(0.82_0.18_165/0.06)] blur-3xl" />

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
              Klaar voor de{" "}
              <span className="gradient-text">Toekomst?</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
              Laat ons uw bedrijfsprocessen transformeren met innovatieve technologie en slimme automatiseringen. Neem vandaag nog contact op voor een vrijblijvend gesprek.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <button className="btn-primary-glow flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base">
                  Doe de intake (±2 min)
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
