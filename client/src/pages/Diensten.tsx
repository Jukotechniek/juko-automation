/*
  DESIGN: Dark Precision Tech - Services Page
  - 3 Core services with detailed descriptions
  - AI Implementaties, Webapps & Klantenportalen, Automatiseringen
  - Pricing indications for trust
  - SEO: proper heading hierarchy, structured data
*/

import { motion } from "framer-motion";
import {
  Zap, Brain, ArrowRight, CheckCircle2, Monitor, Bot, FileText, BarChart,
  Globe, Database, Workflow, MessageSquare, Cpu, Code2, Lock, Layers,
  TrendingUp, Clock, Star, Smartphone, Gauge, Settings
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

export default function Diensten() {
  return (
    <div className="min-h-screen bg-[oklch(0.09_0.015_240)] text-white">
      <Navbar />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Diensten - Juko Automation",
            description: "AI implementaties, webapp ontwikkeling, klantenportalen en procesautomatisering.",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@type": "Service",
                  name: "AI Implementaties",
                  description: "AI chatbots, predictive analytics, documentverwerking en AI-gestuurde automatisering.",
                  provider: { "@type": "Organization", name: "Juko Automation" },
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@type": "Service",
                  name: "Webapps & Klantenportalen",
                  description: "Maatwerk webapplicaties, klantenportalen op maat, interne dashboards en workflow apps.",
                  provider: { "@type": "Organization", name: "Juko Automation" },
                },
              },
              {
                "@type": "ListItem",
                position: 3,
                item: {
                  "@type": "Service",
                  name: "Automatiseringen",
                  description: "Procesautomatisering, API-integraties, workflow optimalisatie met n8n en Make.",
                  provider: { "@type": "Organization", name: "Juko Automation" },
                },
              },
            ],
          }),
        }}
      />

      {/* Page Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[oklch(0.65_0.22_25/0.06)] blur-3xl" />
        <div className="container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-4">
              <Layers className="w-3.5 h-3.5 text-[oklch(0.65_0.22_25)]" aria-hidden="true" />
              <span className="text-xs font-medium text-white/60">Onze Diensten</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl lg:text-6xl font-bold leading-tight mb-5">
              AI, Webapps &{" "}
              <span className="gradient-text">Automatisering</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/50 text-lg leading-relaxed">
              Van intelligente AI-chatbots tot klantenportalen op maat en volledig geautomatiseerde workflows. Ontdek hoe wij uw bedrijf helpen groeien met technologie die werkt.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── SERVICE 1: AI IMPLEMENTATIES ─── */}
      <section id="ai-implementaties" className="py-24 scroll-mt-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[oklch(0.65_0.22_25/0.3)] bg-[oklch(0.65_0.22_25/0.08)] mb-5">
                <Brain className="w-3.5 h-3.5 text-[oklch(0.65_0.22_25)]" aria-hidden="true" />
                <span className="text-xs font-medium text-[oklch(0.65_0.22_25)]">Dienst 01 — Meest gevraagd</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                AI Implementaties
              </h2>
              <p className="text-white/55 leading-relaxed mb-4">
                Zet kunstmatige intelligentie in om slimmer te werken. Wij implementeren AI-oplossingen die direct impact maken — van chatbots die 80% van klantvragen automatisch beantwoorden tot systemen die patronen herkennen in uw data.
              </p>
              <p className="text-white/55 leading-relaxed mb-8">
                Geen hype, maar bewezen technologie op maat gemaakt voor uw bedrijfsprocessen. Wij zorgen voor implementatie, training en doorlopend onderhoud.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Bot, text: "AI Chatbots & assistenten" },
                  { icon: BarChart, text: "Predictive analytics" },
                  { icon: FileText, text: "Document AI & OCR" },
                  { icon: Database, text: "Kennisbank automatisering" },
                  { icon: Cpu, text: "Data-analyse met AI" },
                  { icon: MessageSquare, text: "NLP & tekst analyse" },
                ].map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.text} className="flex items-center gap-3 text-sm text-white/60">
                      <IconComponent className="w-4 h-4 text-[oklch(0.65_0.22_25)] flex-shrink-0" aria-hidden="true" />
                      {item.text}
                    </div>
                  );
                })}
              </div>

              <div className="glass-card p-4 mb-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[oklch(0.65_0.22_25/0.12)] flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-[oklch(0.65_0.22_25)]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Vanaf €2.500</p>
                  <p className="text-white/40 text-xs">Afhankelijk van complexiteit en scope</p>
                </div>
              </div>

              <Link href="/contact">
                <button className="btn-primary-glow flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm">
                  Bespreek uw AI project
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white mb-4">Praktijkvoorbeelden</h3>
                {[
                  {
                    title: "AI Chatbot voor Klantenservice",
                    desc: "Een slimme chatbot die klantvragen beantwoordt, technische documenten opzoekt en schema's doorstuurt. 24/7 beschikbaar, 80% minder belasting voor uw team.",
                    result: "80% automatische afhandeling",
                  },
                  {
                    title: "Predictive Maintenance Systeem",
                    desc: "AI die sensordata analyseert en voorspelt wanneer machines onderhoud nodig hebben. Voorkom onverwachte stilstand en bespaar op onderhoudskosten.",
                    result: "60% minder downtime",
                  },
                  {
                    title: "Documentverwerking met AI",
                    desc: "Automatische extractie van data uit facturen, offertes en formulieren. Geen handmatige invoer meer, direct verwerkt in uw systemen.",
                    result: "95% snellere verwerking",
                  },
                ].map((example) => (
                  <div key={example.title} className="glass-card-hover p-6">
                    <h4 className="text-base font-bold text-white mb-2">{example.title}</h4>
                    <p className="text-white/45 text-sm leading-relaxed mb-3">{example.desc}</p>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[oklch(0.65_0.22_25)]" aria-hidden="true" />
                      <span className="text-sm font-semibold text-[oklch(0.65_0.22_25)]">{example.result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── SERVICE 2: WEBAPPS & KLANTENPORTALEN ─── */}
      <section id="webapps-portalen" className="py-24 scroll-mt-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="order-2 lg:order-1"
            >
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white mb-4">Wat wij bouwen</h3>
                {[
                  {
                    icon: Lock,
                    title: "Klantenportaal op Maat",
                    desc: "Geef uw klanten 24/7 toegang tot hun orders, facturen, tickets en documenten. Verlaag de druk op uw support team.",
                    features: ["Veilige login & rollen", "Order tracking", "Document management"],
                  },
                  {
                    icon: Monitor,
                    title: "Interne Dashboards & Tools",
                    desc: "Real-time overzicht van productie, verkoop, voorraad of KPI's. Alle data op één plek, visueel en actionable.",
                    features: ["Live data feeds", "Custom grafieken", "Export & rapportages"],
                  },
                  {
                    icon: Workflow,
                    title: "Workflow Applicaties",
                    desc: "Digitaliseer uw interne processen: goedkeuringen, formulieren, taakbeheer en meer. Weg met Excel en papieren processen.",
                    features: ["Formulieren & approvals", "Notificaties", "Audit trail"],
                  },
                ].map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.title} className="glass-card-hover p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[oklch(0.65_0.22_25/0.12)] border border-[oklch(0.65_0.22_25/0.2)] flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-[oklch(0.65_0.22_25)]" aria-hidden="true" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                          <p className="text-white/45 text-sm leading-relaxed mb-3">{item.desc}</p>
                          <div className="flex flex-wrap gap-2">
                            {item.features.map((f) => (
                              <span key={f} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-xs text-white/50">
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[oklch(0.65_0.22_25/0.3)] bg-[oklch(0.65_0.22_25/0.08)] mb-5">
                <Globe className="w-3.5 h-3.5 text-[oklch(0.65_0.22_25)]" aria-hidden="true" />
                <span className="text-xs font-medium text-[oklch(0.65_0.22_25)]">Dienst 02</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Webapps & Klantenportalen
              </h2>
              <p className="text-white/55 leading-relaxed mb-4">
                Maatwerk webapplicaties die uw bedrijfsprocessen digitaliseren en uw klanten zelfbediening bieden. Van eenvoudige interne tools tot complete klantenportalen met geavanceerde functionaliteit.
              </p>
              <p className="text-white/55 leading-relaxed mb-8">
                Elke webapp is mobile-responsive, veilig en gebouwd om te integreren met uw bestaande systemen. Geen standaard templates — volledig op maat.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Mobile-responsive op elk apparaat",
                  "Integratie met ERP, CRM en boekhouding",
                  "Veilige authenticatie & autorisatie",
                  "Schaalbaar voor groei",
                  "Eigen huisstijl & branding",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-white/60">
                    <CheckCircle2 className="w-4 h-4 text-[oklch(0.65_0.22_25)] flex-shrink-0" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="glass-card p-4 mb-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[oklch(0.65_0.22_25/0.12)] flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-[oklch(0.65_0.22_25)]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Vanaf €3.500</p>
                  <p className="text-white/40 text-xs">Afhankelijk van functionaliteit en integraties</p>
                </div>
              </div>

              <Link href="/contact">
                <button className="btn-primary-glow flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm">
                  Bespreek uw webapp project
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── SERVICE 3: AUTOMATISERINGEN ─── */}
      <section id="automatiseringen" className="py-24 scroll-mt-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[oklch(0.65_0.22_25/0.3)] bg-[oklch(0.65_0.22_25/0.08)] mb-5">
                <Zap className="w-3.5 h-3.5 text-[oklch(0.65_0.22_25)]" aria-hidden="true" />
                <span className="text-xs font-medium text-[oklch(0.65_0.22_25)]">Dienst 03</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Automatiseringen
              </h2>
              <p className="text-white/55 leading-relaxed mb-4">
                Stop met repetitieve handmatige taken. Wij automatiseren uw workflows zodat data vanzelf stroomt tussen systemen, rapporten zichzelf genereren en uw team zich kan focussen op werk dat er toe doet.
              </p>
              <p className="text-white/55 leading-relaxed mb-8">
                Met tools als n8n, Make en custom API-integraties bouwen wij automatiseringen die betrouwbaar draaien en makkelijk te onderhouden zijn.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Database, text: "API-integraties & koppelingen" },
                  { icon: Workflow, text: "n8n & Make automatiseringen" },
                  { icon: Settings, text: "Data synchronisatie" },
                  { icon: FileText, text: "Rapportage automatisering" },
                  { icon: MessageSquare, text: "E-mail & notificatie flows" },
                  { icon: Gauge, text: "Monitoring & alerting" },
                ].map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.text} className="flex items-center gap-3 text-sm text-white/60">
                      <IconComponent className="w-4 h-4 text-[oklch(0.65_0.22_25)] flex-shrink-0" aria-hidden="true" />
                      {item.text}
                    </div>
                  );
                })}
              </div>

              <div className="glass-card p-4 mb-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[oklch(0.65_0.22_25/0.12)] flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-[oklch(0.65_0.22_25)]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Vanaf €1.500</p>
                  <p className="text-white/40 text-xs">Afhankelijk van aantal koppelingen en complexiteit</p>
                </div>
              </div>

              <Link href="/contact">
                <button className="btn-primary-glow flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm">
                  Bespreek uw automatisering
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white mb-4">Automatiserings-voorbeelden</h3>
                {[
                  {
                    title: "CRM → Facturatie → Boekhouding",
                    desc: "Wanneer een deal wordt gesloten in uw CRM, wordt automatisch een factuur aangemaakt en naar de boekhouding gestuurd. Geen handmatige stappen meer.",
                    savings: "Bespaar 5+ uur per week",
                  },
                  {
                    title: "Formulier → Database → Notificatie",
                    desc: "Online formulieren die data direct opslaan in uw systeem en het juiste teamlid notificeren. Van leadgeneratie tot service-aanvragen.",
                    savings: "90% snellere opvolging",
                  },
                  {
                    title: "Data Sync tussen Systemen",
                    desc: "Houd voorraad, klantdata en orders gesynchroniseerd tussen webshop, ERP en warehouse systeem. Altijd up-to-date, altijd correct.",
                    savings: "Zero handmatige invoer",
                  },
                ].map((example) => (
                  <div key={example.title} className="glass-card-hover p-6">
                    <h4 className="text-base font-bold text-white mb-2">{example.title}</h4>
                    <p className="text-white/45 text-sm leading-relaxed mb-3">{example.desc}</p>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[oklch(0.65_0.22_25)]" aria-hidden="true" />
                      <span className="text-sm font-semibold text-[oklch(0.65_0.22_25)]">{example.savings}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TECHNOLOGY STACK ─── */}
      <section className="py-20 bg-[oklch(0.07_0.012_240)]" aria-label="Technologie stack">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Technologie die{" "}
              <span className="gradient-text">wij gebruiken</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Wij werken met bewezen, moderne technologieën die schaalbaar en onderhoudbaar zijn.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              "React", "TypeScript", "Node.js", "Python", "OpenAI", "n8n", "Make",
              "PostgreSQL", "REST APIs", "Webhooks", "Tailwind CSS", "Docker",
              "Vercel", "AWS", "Langchain", "Pinecone",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2.5 rounded-xl glass-card border border-white/8 text-sm text-white/60 hover:text-white hover:border-[oklch(0.65_0.22_25/0.3)] transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
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
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Klaar om uw processen{" "}
              <span className="gradient-text">te verbeteren?</span>
            </h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Plan een gratis intake en ontdek welke dienst het beste past bij uw uitdagingen. Reactie binnen 24 uur.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <button className="btn-primary-glow inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg shadow-2xl shadow-[oklch(0.65_0.22_25/0.3)]">
                  Start gratis intake
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </button>
              </Link>
              <Link href="/blog">
                <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white/70 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-300">
                  Lees onze case studies
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
