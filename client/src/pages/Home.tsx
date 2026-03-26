/*
  DESIGN: Dark Precision Tech - Conversion & SEO Focused
  - Hero: AI & Automatisering for growing businesses
  - 3 Core Services: AI Implementaties, Webapps & Portalen, Automatiseringen
  - Social proof, process, FAQ with schema markup
  - SEO: proper h1/h2/h3 hierarchy, structured data, internal links
*/

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, CheckCircle2, Zap, Brain, Clock, TrendingUp, ChevronDown, Star,
  Rocket, Handshake, Target, BarChart3, Monitor, Lock, Bot, FileText,
  Workflow, Globe, Database, BarChart, MessageSquare, Cpu, Layers, Code2, ShieldCheck
} from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
  {
    q: "Wat kost een AI implementatie?",
    a: "De kosten hangen af van de complexiteit. Een AI chatbot begint vanaf €4.500, terwijl complexe projecten voor voorspellende analyses meer investering vragen. Na de gratis intake ontvangt u een heldere offerte met exacte kosten.",
  },
  {
    q: "Hoe lang duurt het bouwen van een webapp of klantenportaal?",
    a: "Een eenvoudig klantenportaal is binnen 4-6 weken live. Complexere webapplicaties met meerdere integraties duren 8-12 weken. Na de intake geven we u een concrete tijdsinschatting.",
  },
  {
    q: "Kunnen jullie bestaande systemen integreren met nieuwe software?",
    a: "Ja, systeemintegratie is een van onze specialisaties. We koppelen uw ERP, CRM, boekhoudsoftware en andere tools naadloos aan nieuwe oplossingen via API-integraties.",
  },
  {
    q: "Werken jullie ook voor kleine en middelgrote bedrijven?",
    a: "Absoluut. Onze visie is juist dat ook MKB-bedrijven toegang moeten hebben tot AI en automatisering. We passen onze aanpak aan op uw schaal en budget.",
  },
  {
    q: "Bieden jullie ondersteuning na oplevering?",
    a: "Ja, bij elk project bieden we een support-periode van minimaal 30 dagen. Daarna kunt u kiezen voor doorlopende ondersteuning en optimalisatie tegen een vast maandtarief.",
  },
  {
    q: "Wat is het verschil tussen automatisering en AI?",
    a: "Automatisering voert vaste, regelgebaseerde taken uit (bijv. data overzetten, e-mails versturen). AI gaat verder en kan leren, voorspellen en beslissingen nemen op basis van data — zoals een chatbot die vragen begrijpt of een systeem dat storingen voorspelt.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`glass-card border transition-all duration-300 ${open ? "border-[oklch(0.65_0.22_25/0.25)]" : "border-white/5"}`}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="font-medium text-white/80 text-sm" itemProp="name">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4 text-white/40 flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div className="px-5 pb-5 text-sm text-white/50 leading-relaxed border-t border-white/5 pt-4" itemProp="text">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.09_0.015_240)] text-white">
      <Navbar />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Juko Automation",
            description: "AI implementaties, webapps, klantenportalen en automatiseringen voor groeiende bedrijven in Nederland.",
            url: "https://www.jukoautomation.nl",
            email: "info@jukoautomation.nl",
            areaServed: "Nederland",
            priceRange: "€€",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Diensten",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AI Implementatie",
                    description: "AI chatbots, predictive analytics, documentverwerking en AI-gestuurde automatisering voor bedrijven.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Webapps & Klantenportalen",
                    description: "Maatwerk webapplicaties, klantenportalen, interne dashboards en workflow applicaties.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Automatiseringen",
                    description: "Procesautomatisering, API-integraties, workflow optimalisatie en data synchronisatie.",
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero sectie">
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[oklch(0.09_0.015_240)]" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-[oklch(0.65_0.22_25/0.06)] blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[oklch(0.70_0.20_35/0.04)] blur-[100px]" />
          <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-[oklch(0.50_0.15_280/0.03)] blur-[80px]" />
        </div>
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-15" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[oklch(0.09_0.015_240)] to-transparent" />

        <div className="container relative z-10 pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-8"
            >
              <span className="block">AI, Webapps &</span>
              <span className="block gradient-text [overflow-wrap:anywhere] sm:[overflow-wrap:normal]">
                Automatisering
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-white/70 mt-2 font-semibold">voor groeiende bedrijven</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/60 mb-8 max-w-2xl leading-relaxed"
            >
              Van AI chatbots en klantenportalen tot volledig geautomatiseerde workflows.
              Wij bouwen de software die uw bedrijf sneller, slimmer en schaalbaarder maakt.
            </motion.p>

            {/* USPs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-x-6 gap-y-3 mb-10"
            >
              {[
                { icon: Bot, text: "AI-oplossingen op maat" },
                { icon: Globe, text: "Webapps & klantenportalen" },
                { icon: Zap, text: "Proces automatisering" },
                { icon: Rocket, text: "Live in 1-8 weken" },
              ].map((usp) => {
                const IconComponent = usp.icon;
                return (
                  <div key={usp.text} className="flex items-center gap-2 text-sm text-white/60">
                    <IconComponent className="w-4 h-4 text-[oklch(0.65_0.22_25)]" aria-hidden="true" />
                    {usp.text}
                  </div>
                );
              })}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="/contact#contact-form">
                <button className="btn-primary-glow flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg shadow-2xl shadow-[oklch(0.65_0.22_25/0.3)] hover:shadow-[oklch(0.65_0.22_25/0.5)] transition-all duration-300 hover:scale-105">
                  Start gratis intake
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </button>
              </Link>
              <Link href="/diensten">
                <button className="btn-outline-theme flex items-center gap-2 px-8 py-4 rounded-xl font-semibold">
                  Bekijk onze diensten
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex flex-wrap items-center gap-6 text-sm text-white/40"
            >
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[oklch(0.65_0.22_25)]" aria-hidden="true" />
                <span>5/5 beoordeling</span>
              </div>
            </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="hidden lg:block lg:col-span-5"
            >
              <div className="hero-visual-shell p-4 lg:p-5">
                <div className="relative rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src="/hero-automation-visual.svg"
                    alt="Visual van automatiseringsdashboard"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.09_0.015_240/0.55)] via-transparent to-transparent dark:from-[oklch(0.12_0.018_240/0.45)]" />
                </div>
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
          aria-hidden="true"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── STATS BAND ─── */}
      <section className="relative py-12 border-y border-white/5 bg-[oklch(0.11_0.016_240)]" aria-label="Statistieken">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "10+", label: "Projecten opgeleverd" },
              { value: "1-8", label: "Weken tot live" },
              { value: "5/5", label: "Gemiddelde beoordeling" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-3xl font-bold text-[oklch(0.65_0.22_25)] mb-2">{stat.value}</div>
                <p className="text-sm text-white/50">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3 CORE SERVICES ─── */}
      <section className="relative py-24 overflow-hidden" aria-label="Onze diensten">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="container relative z-10">
          <div className="mb-16 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-4"
            >
              <Layers className="w-3.5 h-3.5 text-[oklch(0.65_0.22_25)]" aria-hidden="true" />
              <span className="text-xs font-medium text-white/60">Onze Diensten</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold leading-tight mb-4"
            >
              Drie pijlers voor{" "}
              <span className="gradient-text">digitale groei</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/60"
            >
              Van intelligente AI-toepassingen tot op maat gemaakte webapplicaties en slimme automatiseringen — wij helpen uw bedrijf de volgende stap te zetten.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                badge: "Meest gevraagd",
                title: "AI Implementaties",
                desc: "Zet AI in om slimmer te werken. Van chatbots die klanten helpen tot systemen die data analyseren en voorspellingen doen.",
                features: [
                  "AI chatbots & virtuele assistenten",
                  "Voorspellende analyses & forecasting",
                  "Documentverwerking met AI",
                  "Kennisbank & FAQ automatisering",
                  "AI-gestuurde data-analyse",
                ],
                link: "/diensten#ai-implementaties",
                highlight: true,
              },
              {
                icon: Monitor,
                badge: null,
                title: "Webapps & Portalen",
                desc: "Op maat gebouwde webapplicaties en klantenportalen die uw bedrijfsprocessen stroomlijnen en klanten zelfbediening bieden.",
                features: [
                  "Klantenportalen op maat",
                  "Interne dashboards & tools",
                  "Workflow applicaties",
                  "Realtime data visualisatie",
                  "Mobile-responsive design",
                ],
                link: "/diensten#webapps-portalen",
                highlight: false,
              },
              {
                icon: Zap,
                badge: null,
                title: "Automatiseringen",
                desc: "Automatiseer repetitieve taken en verbind uw systemen. Bespaar uren per week en elimineer handmatige fouten.",
                features: [
                  "API-integraties & koppelingen",
                  "Workflow automatisering (n8n/Make)",
                  "Python-scripts & integraties",
                  "Data synchronisatie",
                  "Rapportage automatisering",
                  "E-mail & notificatie flows",
                ],
                link: "/diensten#automatiseringen",
                highlight: false,
              },
            ].map((service, i) => {
              const IconComponent = service.icon;
              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`glass-card-hover p-8 flex flex-col relative ${
                    service.highlight ? "border-[oklch(0.65_0.22_25/0.3)] ring-1 ring-[oklch(0.65_0.22_25/0.15)]" : ""
                  }`}
                >
                  {service.badge && (
                    <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-[oklch(0.65_0.22_25)] text-white text-xs font-bold">
                      {service.badge}
                    </div>
                  )}
                  <div className="w-14 h-14 rounded-2xl bg-[oklch(0.65_0.22_25/0.12)] border border-[oklch(0.65_0.22_25/0.2)] flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-[oklch(0.65_0.22_25)]" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-white/50">
                        <CheckCircle2 className="w-4 h-4 text-[oklch(0.65_0.22_25)] flex-shrink-0 mt-0.5" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.link}>
                    <button className="btn-service-cta w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm">
                      {service.title === "AI Implementaties"
                        ? "Meer over AI implementaties"
                        : `Meer over ${service.title.toLowerCase()}`}
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WERKWIJZE ─── */}
      <section className="relative py-24 overflow-hidden bg-[oklch(0.07_0.012_240)]" aria-label="Onze werkwijze">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="container relative z-10">
          <div className="mb-16 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-4"
            >
              <TrendingUp className="w-3.5 h-3.5 text-[oklch(0.65_0.22_25)]" aria-hidden="true" />
              <span className="text-xs font-medium text-white/60">Werkwijze</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold leading-tight mb-4"
            >
              Van intake tot{" "}
              <span className="gradient-text">werkende oplossing</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/60"
            >
              Een transparant proces waarin u altijd weet waar u aan toe bent. Geen verrassingen, wel concrete resultaten.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                icon: MessageSquare,
                title: "Gratis Intake",
                desc: "U vertelt over uw bedrijf en uitdagingen. Wij luisteren en stellen de juiste vragen. Duurt slechts 15-30 minuten.",
              },
              {
                num: "02",
                icon: Target,
                title: "Analyse & Voorstel",
                desc: "We maken een concreet plan met geschatte kosten, timeline en verwachte resultaten. Helder en zonder jargon.",
              },
              {
                num: "03",
                icon: Code2,
                title: "Bouw & Integratie",
                desc: "Wij bouwen uw oplossing en integreren met bestaande systemen. U krijgt wekelijks een update met demo.",
              },
              {
                num: "04",
                icon: Rocket,
                title: "Oplevering & nazorg",
                desc: "Na oplevering trainen we uw team in het gebruik. Daarna blijven we beschikbaar voor optimalisaties en ondersteuning.",
              },
            ].map((step, i) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card-hover p-6 relative group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[oklch(0.65_0.22_25/0.12)] border border-[oklch(0.65_0.22_25/0.2)] flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-[oklch(0.65_0.22_25)]" aria-hidden="true" />
                    </div>
                    <span className="text-4xl font-black text-white/5 select-none">{step.num}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>
                  {i < 3 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-5 h-5 text-[oklch(0.65_0.22_25/0.3)]" aria-hidden="true" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex flex-col items-center gap-2"
          >
            <Link href="/contact#contact-form">
              <button className="btn-primary-glow flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base shadow-2xl shadow-[oklch(0.65_0.22_25/0.3)] hover:shadow-[oklch(0.65_0.22_25/0.5)] transition-all duration-300 hover:scale-105">
                Start gratis intake (±2 min)
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </Link>
            <p className="text-white/30 text-sm">Geen verplichtingen. Reactie binnen 24 uur.</p>
          </motion.div>
        </div>
      </section>

      {/* ─── WAAROM JUKO ─── */}
      <section className="relative py-24 overflow-hidden" aria-label="Waarom Juko Automation">
        <div className="container relative z-10">
          <div className="mb-16 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-4"
            >
              <Star className="w-3.5 h-3.5 text-[oklch(0.65_0.22_25)]" aria-hidden="true" />
              <span className="text-xs font-medium text-white/60">Waarom Juko?</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold leading-tight mb-4"
            >
              Software die{" "}
              <span className="gradient-text">echt werkt</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Rocket,
                title: "Snelle Oplevering",
                desc: "Van idee naar werkende software in 1-8 weken. Geen eindeloze trajecten.",
              },
              {
                icon: Handshake,
                title: "Persoonlijke Aanpak",
                desc: "Directe communicatie, geen tussenlagen. Wij denken mee met uw business.",
              },
              {
                icon: Target,
                title: "Op Maat Gemaakt",
                desc: "Geen standaard templates. Elke oplossing is gebouwd voor uw specifieke situatie.",
              },
              {
                icon: BarChart3,
                title: "Meetbare Resultaten",
                desc: "Concrete KPI's en ROI. U ziet direct wat het oplevert aan tijd en geld.",
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
                  <IconComponent className="w-8 h-8 mb-4 text-[oklch(0.65_0.22_25)]" aria-hidden="true" />
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF / REVIEWS ─── */}
      <section className="relative py-24 overflow-hidden bg-[oklch(0.07_0.012_240)]" aria-label="Klantbeoordelingen">
        <div className="container relative z-10">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl lg:text-5xl font-bold leading-tight mb-4"
            >
              Wat klanten{" "}
              <span className="gradient-text">over ons zeggen</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "We hadden geen idee hoeveel tijd er verloren ging aan handmatige updates naar klanten. Juko heeft een portaal gebouwd waar klanten zelf hun orders kunnen volgen. Onze telefoon gaat sindsdien veel minder en de klanttevredenheid is echt verbeterd.",
                name: "Mark V.",
                role: "Operations Manager",
                company: "Technisch Installatiebedrijf",
              },
              {
                quote: "Onze klantenservice was altijd overbelast met dezelfde vragen. De chatbot die Juko heeft opgezet pakt het gros van die vragen nu zelf op. Mijn team heeft eindelijk ruimte voor de lastigere gevallen.",
                name: "Sandra K.",
                role: "Customer Service Lead",
                company: "E-commerce Bedrijf",
              },
              {
                quote: "Ons facturatieproces kostte vroeger een halve werkweek per maand. Na de automatisering door Juko zijn we dat teruggebracht naar anderhalve dag. Die gewonnen tijd investeren we nu in dingen die er echt toe doen.",
                name: "Peter J.",
                role: "Directeur",
                company: "Dienstverlener MKB",
              },
            ].map((review, i) => (
              <motion.blockquote
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-8 flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-[oklch(0.65_0.22_25)] text-[oklch(0.65_0.22_25)]" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1 italic">
                  "{review.quote}"
                </p>
                <div>
                  <p className="text-white font-semibold text-sm">{review.name}</p>
                  <p className="text-white/40 text-xs">{review.role} — {review.company}</p>
                </div>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ SECTION ─── */}
      <section className="relative py-24 overflow-hidden" aria-label="Veelgestelde vragen" itemScope itemType="https://schema.org/FAQPage">
        <div className="container relative z-10">
          <div className="mb-16 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-4"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[oklch(0.65_0.22_25)]" aria-hidden="true" />
              <span className="text-xs font-medium text-white/60">FAQ</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold leading-tight mb-4"
            >
              Veelgestelde{" "}
              <span className="gradient-text">vragen</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/60"
            >
              Antwoorden op de meest gestelde vragen over onze AI implementaties, webapps en automatiseringen.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl flex flex-col gap-3"
          >
            {faqs.map((faq, index) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FINAL CTA BANNER ─── */}
      <section className="relative py-24 overflow-hidden" aria-label="Contact opnemen">
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
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Klaar om uw bedrijf{" "}
              <span className="gradient-text">slimmer te laten werken?</span>
            </h2>
            <p className="text-lg text-white/60 mb-10">
              Plan een gratis intake en ontdek wat AI, webapps en automatisering voor uw bedrijf kunnen betekenen. Geen verplichtingen — wel een concreet advies binnen 24 uur.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact#contact-form">
                <button className="btn-primary-glow flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg shadow-2xl shadow-[oklch(0.65_0.22_25/0.3)] hover:shadow-[oklch(0.65_0.22_25/0.5)] transition-all duration-300 hover:scale-105">
                  Start gratis intake
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </button>
              </Link>
              <Link href="/diensten">
                <button className="btn-outline-theme flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-base">
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
