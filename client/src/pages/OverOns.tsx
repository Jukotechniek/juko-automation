/*
  DESIGN: Dark Precision Tech
  - Over Ons pagina met missie, visie, waarden
*/

import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Lightbulb, Gauge, Users, Star } from "lucide-react";
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

export default function OverOns() {
  return (
    <div className="min-h-screen bg-[oklch(0.09_0.015_240)] text-white">
      <Navbar />

      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[oklch(0.72_0.15_220/0.06)] blur-3xl" />
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-4">
              <span className="text-xs font-medium text-white/60">Over Ons</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl lg:text-6xl font-bold leading-tight mb-5" style={{ fontFamily: "'Syne', sans-serif" }}>
              Uw partner in{" "}
              <span className="gradient-text">digitale vernieuwing</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/50 text-lg leading-relaxed">
              Wij combineren expertise in automatisering, software en AI om uw organisatie klaar te maken voor de toekomst.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Missie & Visie */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
              className="glass-card p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-[oklch(0.72_0.15_220/0.15)] border border-[oklch(0.72_0.15_220/0.2)] flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[oklch(0.72_0.15_220)]" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                Onze Missie
              </h2>
              <p className="text-white/50 leading-relaxed">
                Wij maken uw werk makkelijker door slimme automatiseringen en praktische software. Waar u nu nog handmatig bezig bent, zorgen wij ervoor dat het automatisch gaat. Meer tijd voor wat echt belangrijk is in uw bedrijf.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
              className="glass-card p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-[oklch(0.82_0.18_165/0.15)] border border-[oklch(0.82_0.18_165/0.2)] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-[oklch(0.82_0.18_165)]" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                Onze Visie
              </h2>
              <p className="text-white/50 leading-relaxed">
                Ook kleinere bedrijven verdienen toegang tot slimme technologie. Wij zorgen ervoor dat automatisering en AI niet alleen voor grote bedrijven zijn, maar voor iedereen die zijn processen wil verbeteren en tijd wil besparen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Waarom Juko */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-process-bg-8BwWJB46vQ5JRSkwm96vzw.webp)` }}
        />
        <div className="absolute inset-0 bg-[oklch(0.09_0.015_240/0.90)]" />
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Waarom{" "}
              <span className="gradient-text">Juko Automation?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 max-w-2xl">
              Bij Juko Automation draait alles om samenwerking. We komen bij u op locatie of plannen een videocall om uw processen goed te begrijpen.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {[
              {
                icon: <Gauge className="w-5 h-5" />,
                title: "Snelle Implementatie",
                desc: "Van idee naar werkende oplossing in weken, niet maanden.",
                color: "oklch(0.72_0.15_220)",
              },
              {
                icon: <Users className="w-5 h-5" />,
                title: "Denken Met U Mee",
                desc: "Niet alleen uitvoeren, maar ook adviseren en optimaliseren.",
                color: "oklch(0.72_0.15_220)",
              },
              {
                icon: <Lightbulb className="w-5 h-5" />,
                title: "Praktische Oplossingen",
                desc: "De juiste balans tussen slimme techniek en eenvoud, zodat het écht werkt.",
                color: "oklch(0.82_0.18_165)",
              },
              {
                icon: <Star className="w-5 h-5" />,
                title: "Echte Resultaten",
                desc: "Tevreden klanten die tijd en geld besparen door onze oplossingen.",
                color: "oklch(0.82_0.18_165)",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                className="glass-card-hover p-6 flex items-start gap-4"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}20`, border: `1px solid ${item.color}30`, color: item.color }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1.5" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-10"
          >
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Onze{" "}
              <span className="gradient-text">Expertise</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50">
              Specialisaties waarmee wij uw bedrijf kunnen helpen.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-wrap gap-3"
          >
            {[
              "Web applicaties & Maatwerk software",
              "AI Chatbots & Virtuele assistenten",
              "Rapportage automatisering",
              "Procesoptimalisatie",
              "Systeemintegratie",
              "Data-analyse",
            ].map((item, i) => (
              <motion.div
                key={item}
                variants={fadeUp}
                custom={i}
                className="px-4 py-2.5 rounded-xl glass-card border border-white/8 text-sm text-white/60 hover:text-white hover:border-[oklch(0.72_0.15_220/0.3)] transition-all duration-300"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Waarden */}
      <section className="py-20 bg-[oklch(0.11_0.016_240)]">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Onze{" "}
              <span className="gradient-text">Waarden</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 max-w-2xl">
              Deze kernwaarden vormen de basis van alles wat we doen en begeleiden ons in elke beslissing en elk project.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {[
              { num: "01", title: "Innovatie", desc: "Wij blijven vooroplopen met de nieuwste technologieën om uw bedrijf vooruit te helpen." },
              { num: "02", title: "Efficiëntie", desc: "Onze oplossingen zijn gericht op het maximaliseren van uw bedrijfsefficiëntie." },
              { num: "03", title: "Samenwerking", desc: "Wij geloven in langdurige samenwerkingen en bouwen aan sterke relaties." },
              { num: "04", title: "Kwaliteit", desc: "Hoge kwaliteit staat centraal in alles wat wij doen, van code tot klantenservice." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                className="glass-card-hover p-6 relative overflow-hidden"
              >
                <div className="text-5xl font-black text-white/4 mb-4 select-none" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {item.num}
                </div>
                <h3 className="font-bold text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.12_0.025_230)] to-[oklch(0.09_0.015_240)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[oklch(0.72_0.15_220/0.08)] blur-3xl" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Meer uit uw{" "}
              <span className="gradient-text">bedrijf halen?</span>
            </h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Laten we kennismaken en ontdekken hoe wij uw bedrijf kunnen helpen groeien.
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
