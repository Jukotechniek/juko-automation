/*
  DESIGN: Dark Precision Tech - Contact & Intake
  - Intake form with 3 core service options
  - FAQ section with schema markup
  - SEO optimized
*/

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, ChevronDown, MessageSquare, Clock, CheckCircle2, Phone, MapPin } from "lucide-react";
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

const faqs = [
  {
    q: "Hoe lang duurt een typisch project?",
    a: "De duur hangt af van de complexiteit. Eenvoudige automatiseringen zijn binnen 2-4 weken klaar. Een AI chatbot of klantenportaal duurt 4-8 weken. Complexe webapps met meerdere integraties 8-12 weken. Na de intake geven we een concrete tijdsinschatting.",
  },
  {
    q: "Wat kost een project gemiddeld?",
    a: "Automatiseringen starten vanaf €1.500, AI implementaties vanaf €2.500 en webapps/klantenportalen vanaf €3.500. Complexere projecten vragen meer investering. Na de gratis intake ontvangt u altijd een heldere offerte.",
  },
  {
    q: "Bieden jullie ondersteuning na oplevering?",
    a: "Ja, bij elk project zit minimaal 30 dagen support inbegrepen. Daarna kunt u kiezen voor een doorlopend supportpakket. Wij monitoren uw systemen en voeren updates en optimalisaties door.",
  },
  {
    q: "Kunnen jullie met onze bestaande software integreren?",
    a: "Ja, systeemintegratie is een van onze specialisaties. We koppelen met ERP-systemen, CRM-software, boekhoudsystemen, webshops en meer via API-integraties.",
  },
  {
    q: "Werken jullie ook voor kleine bedrijven?",
    a: "Absoluut. Onze visie is dat ook MKB-bedrijven toegang moeten hebben tot AI en automatisering. We passen scope en budget aan op uw situatie.",
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
        aria-controls={`contact-faq-${index}`}
      >
        <span className="font-medium text-white/80 text-sm" itemProp="name">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4 text-white/40 flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={`contact-faq-${index}`}
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

export default function Contact() {
  const [formData, setFormData] = useState({
    naam: "",
    bedrijf: "",
    email: "",
    telefoon: "",
    bericht: "",
    dienst: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              <span className="text-xs font-medium text-white/60">Contact & Intake</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl lg:text-6xl font-bold leading-tight mb-5">
              Gratis intake{" "}
              <span className="gradient-text">aanvragen</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/50 text-lg leading-relaxed">
              Vul het formulier in (±2 min) en ontdek wat AI, webapps of automatisering voor uw bedrijf kan betekenen. Reactie binnen 24 uur op werkdagen.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Main content */}
      <section className="py-16" id="contact-form" aria-label="Intake formulier">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="glass-card p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-[oklch(0.70_0.20_35/0.15)] border border-[oklch(0.70_0.20_35/0.3)] flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-[oklch(0.70_0.20_35)]" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">
                    Bedankt voor uw aanvraag!
                  </h2>
                  <p className="text-white/50">
                    We nemen binnen 24 uur contact met u op om een kennismaking in te plannen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="naam" className="block text-sm font-medium text-white/60 mb-2">Naam *</label>
                      <input
                        id="naam"
                        type="text"
                        required
                        value={formData.naam}
                        onChange={(e) => setFormData({ ...formData, naam: e.target.value })}
                        placeholder="Jan de Vries"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[oklch(0.65_0.22_25/0.5)] focus:bg-white/8 transition-all duration-200 text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="bedrijf" className="block text-sm font-medium text-white/60 mb-2">Bedrijf</label>
                      <input
                        id="bedrijf"
                        type="text"
                        value={formData.bedrijf}
                        onChange={(e) => setFormData({ ...formData, bedrijf: e.target.value })}
                        placeholder="Uw bedrijfsnaam"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[oklch(0.65_0.22_25/0.5)] focus:bg-white/8 transition-all duration-200 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">E-mail *</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jan@bedrijf.nl"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[oklch(0.65_0.22_25/0.5)] focus:bg-white/8 transition-all duration-200 text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefoon" className="block text-sm font-medium text-white/60 mb-2">Telefoon</label>
                      <input
                        id="telefoon"
                        type="tel"
                        value={formData.telefoon}
                        onChange={(e) => setFormData({ ...formData, telefoon: e.target.value })}
                        placeholder="+31 6 12345678"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[oklch(0.65_0.22_25/0.5)] focus:bg-white/8 transition-all duration-200 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="dienst" className="block text-sm font-medium text-white/60 mb-2">Waar heeft u interesse in?</label>
                    <select
                      id="dienst"
                      value={formData.dienst}
                      onChange={(e) => setFormData({ ...formData, dienst: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[oklch(0.65_0.22_25/0.5)] transition-all duration-200 text-sm"
                    >
                      <option value="" className="bg-[oklch(0.13_0.018_240)]">Selecteer een dienst</option>
                      <option value="ai-implementatie" className="bg-[oklch(0.13_0.018_240)]">AI Implementatie (chatbot, analytics, document AI)</option>
                      <option value="webapp-portaal" className="bg-[oklch(0.13_0.018_240)]">Webapp of Klantenportaal op maat</option>
                      <option value="automatisering" className="bg-[oklch(0.13_0.018_240)]">Automatisering (API-integraties, workflows)</option>
                      <option value="meerdere" className="bg-[oklch(0.13_0.018_240)]">Combinatie van diensten</option>
                      <option value="anders" className="bg-[oklch(0.13_0.018_240)]">Anders / Weet ik nog niet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="bericht" className="block text-sm font-medium text-white/60 mb-2">Vertel ons over uw uitdaging *</label>
                    <textarea
                      id="bericht"
                      required
                      rows={5}
                      value={formData.bericht}
                      onChange={(e) => setFormData({ ...formData, bericht: e.target.value })}
                      placeholder="Beschrijf kort welk proces u wilt verbeteren, automatiseren of digitaliseren..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[oklch(0.65_0.22_25/0.5)] focus:bg-white/8 transition-all duration-200 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary-glow w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white"
                  >
                    Verstuur intake aanvraag
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <p className="text-center text-white/30 text-xs">
                    Gratis en vrijblijvend. Reactie binnen 24 uur op werkdagen.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 flex flex-col gap-5"
            >
              {/* Contact info */}
              <div className="glass-card p-6">
                <h2 className="font-bold text-white mb-4">Direct contact</h2>
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:info@jukoautomation.nl"
                    className="flex items-center gap-3 text-sm text-white/50 hover:text-[oklch(0.65_0.22_25)] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[oklch(0.65_0.22_25/0.1)] flex items-center justify-center">
                      <Mail className="w-4 h-4 text-[oklch(0.65_0.22_25)]" aria-hidden="true" />
                    </div>
                    info@jukoautomation.nl
                  </a>
                </div>
              </div>

              {/* Promises */}
              <div className="glass-card p-6">
                <h3 className="font-bold text-white mb-4">Wat u kunt verwachten</h3>
                <div className="flex flex-col gap-3">
                  {[
                    { icon: <Clock className="w-4 h-4" />, text: "Reactie binnen 24 uur op werkdagen" },
                    { icon: <MessageSquare className="w-4 h-4" />, text: "Persoonlijk gesprek, geen standaard pitch" },
                    { icon: <CheckCircle2 className="w-4 h-4" />, text: "Concrete inschatting na intake" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3 text-sm text-white/50">
                      <div className="text-[oklch(0.65_0.22_25)] mt-0.5 flex-shrink-0">{item.icon}</div>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick links */}
              <div className="glass-card p-6">
                <h3 className="font-bold text-white mb-4">Onze diensten</h3>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "AI Implementaties", href: "/diensten#ai-implementaties" },
                    { label: "Webapps & Portalen", href: "/diensten#webapps-portalen" },
                    { label: "Automatiseringen", href: "/diensten#automatiseringen" },
                  ].map((link) => (
                    <a key={link.label} href={link.href} className="flex items-center gap-2 text-sm text-white/50 hover:text-[oklch(0.65_0.22_25)] transition-colors">
                      <ArrowRight className="w-3 h-3" aria-hidden="true" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* FAQ */}
      <section className="py-20" aria-label="Veelgestelde vragen" itemScope itemType="https://schema.org/FAQPage">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-10"
          >
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold mb-4">
              Veelgestelde{" "}
              <span className="gradient-text">vragen</span>
            </motion.h2>
          </motion.div>

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

      <Footer />
    </div>
  );
}
