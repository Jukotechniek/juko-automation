/*
  DESIGN: Dark Precision Tech - About Page
  - Mission, Vision, Values focused on AI, webapps, automation
  - SEO optimized
*/

import { motion } from "framer-motion";
import {
  ArrowRight, Target, Eye, Lightbulb, Gauge, Users, Star, Brain,
  Zap, Monitor, Code2, ShieldCheck, Rocket, Heart
} from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[oklch(0.65_0.22_25/0.06)] blur-3xl" />
        <div className="container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-4">
              <span className="text-xs font-medium text-white/60">Over Ons</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl lg:text-6xl font-bold leading-tight mb-5">
              Uw partner in{" "}
              <span className="gradient-text">AI & automatisering</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/50 text-lg leading-relaxed">
              Wij combineren expertise in AI implementaties, webapp ontwikkeling en procesautomatisering om uw bedrijf slimmer en efficienter te laten werken.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Missie & Visie */}
      <section className="py-20" aria-label="Missie en visie">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-[oklch(0.65_0.22_25/0.15)] border border-[oklch(0.65_0.22_25/0.2)] flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[oklch(0.65_0.22_25)]" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Onze Missie</h2>
              <p className="text-white/50 leading-relaxed">
                Wij maken AI, webapplicaties en automatisering toegankelijk voor elk groeiend bedrijf. Door slimme technologie op maat te bouwen, helpen we organisaties tijd te besparen, fouten te elimineren en sneller te groeien.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-[oklch(0.70_0.20_35/0.15)] border border-[oklch(0.70_0.20_35/0.2)] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-[oklch(0.70_0.20_35)]" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Onze Visie</h2>
              <p className="text-white/50 leading-relaxed">
                Elk bedrijf — groot of klein — verdient toegang tot de kracht van AI en automatisering. Wij geloven dat technologie pas waardevol is als het daadwerkelijk werkt in de praktijk, niet alleen op papier.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-[oklch(0.07_0.012_240)]" aria-label="Onze expertise">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold mb-4">
              Onze{" "}
              <span className="gradient-text">Expertise</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 max-w-2xl">
              Wij zijn gespecialiseerd in drie kerngebieden die samen de digitale transformatie van uw bedrijf mogelijk maken.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Brain,
                title: "AI & Machine Learning",
                items: ["AI Chatbots & assistenten", "Predictive analytics", "Document AI & OCR", "Natural Language Processing", "Data-analyse & inzichten"],
              },
              {
                icon: Monitor,
                title: "Webapp Ontwikkeling",
                items: ["Klantenportalen op maat", "Interne dashboards", "Workflow applicaties", "Mobile-responsive apps", "API-first architectuur"],
              },
              {
                icon: Zap,
                title: "Automatisering",
                items: ["API-integraties", "n8n & Make workflows", "Data synchronisatie", "Rapportage automatisering", "E-mail & notificatie flows"],
              },
            ].map((area, i) => {
              const IconComponent = area.icon;
              return (
                <motion.div key={area.title} variants={fadeUp} custom={i} className="glass-card-hover p-8">
                  <div className="w-12 h-12 rounded-xl bg-[oklch(0.65_0.22_25/0.12)] border border-[oklch(0.65_0.22_25/0.2)] flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-[oklch(0.65_0.22_25)]" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{area.title}</h3>
                  <ul className="space-y-2.5">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/50">
                        <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.22_25)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Waarom Juko */}
      <section className="py-20" aria-label="Waarom Juko">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold mb-4">
              Waarom{" "}
              <span className="gradient-text">Juko Automation?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 max-w-2xl">
              Wij zijn niet zomaar een softwarebedrijf. Bij Juko draait alles om samenwerking, transparantie en resultaten die u kunt meten.
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
                icon: Gauge,
                title: "Snelle Oplevering",
                desc: "Van idee naar werkende software in 1-8 weken. Geen eindeloze trajecten of onverwachte vertragingen.",
              },
              {
                icon: Users,
                title: "Persoonlijke Aanpak",
                desc: "Directe communicatie zonder tussenlagen. Wij komen bij u op locatie of plannen een videocall om uw processen te begrijpen.",
              },
              {
                icon: Lightbulb,
                title: "Praktische Oplossingen",
                desc: "Geen overengineered systemen. De juiste balans tussen slimme techniek en eenvoud, zodat het echt werkt in de praktijk.",
              },
              {
                icon: Star,
                title: "Bewezen Resultaten",
                desc: "20+ tevreden klanten die aantoonbaar tijd en geld besparen door onze AI, webapps en automatiseringen.",
              },
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  custom={i}
                  className="glass-card-hover p-6 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[oklch(0.65_0.22_25/0.12)] border border-[oklch(0.65_0.22_25/0.2)] flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-[oklch(0.65_0.22_25)]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1.5">{item.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Waarden */}
      <section className="py-20 bg-[oklch(0.11_0.016_240)]" aria-label="Onze waarden">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold mb-4">
              Onze{" "}
              <span className="gradient-text">Waarden</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 max-w-2xl">
              Deze kernwaarden vormen de basis van alles wat we doen en begeleiden ons in elke beslissing.
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
              { num: "01", icon: Rocket, title: "Innovatie", desc: "Wij blijven vooroplopen met AI en moderne technologie om uw bedrijf vooruit te helpen." },
              { num: "02", icon: Gauge, title: "Efficientie", desc: "Elke oplossing is gericht op het maximaliseren van uw bedrijfsefficiëntie en ROI." },
              { num: "03", icon: Heart, title: "Samenwerking", desc: "Wij geloven in langdurige partnerschappen en bouwen aan sterke, transparante relaties." },
              { num: "04", icon: ShieldCheck, title: "Kwaliteit", desc: "Hoge kwaliteit in code, design en klantenservice. Veilig, schaalbaar en onderhoudbaar." },
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  custom={i}
                  className="glass-card-hover p-6 relative overflow-hidden"
                >
                  <div className="text-5xl font-black text-white/4 mb-4 select-none">{item.num}</div>
                  <IconComponent className="w-6 h-6 text-[oklch(0.65_0.22_25)] mb-3" aria-hidden="true" />
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden" aria-label="Contact opnemen">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.12_0.025_230)] to-[oklch(0.09_0.015_240)]" />
        <div className="absolute inset-0 radial-glow-red opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[oklch(0.65_0.22_25/0.08)] blur-3xl" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Samen uw bedrijf{" "}
              <span className="gradient-text">laten groeien?</span>
            </h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Laten we kennismaken en ontdekken hoe AI, webapps en automatisering uw bedrijf kunnen helpen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact#contact-form">
                <button className="btn-primary-glow inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg">
                  Start gratis intake
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </button>
              </Link>
              <Link href="/diensten">
                <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white/70 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-300">
                  Bekijk onze diensten
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
