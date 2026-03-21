/*
  DESIGN: Dark Precision Tech
  - Contact pagina met FAQ accordion en intake formulier
*/

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, ChevronDown, MessageSquare, Clock, CheckCircle2 } from "lucide-react";
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

const faqs = [
  {
    q: "Hoe lang duurt een typisch project?",
    a: "De duur hangt af van de complexiteit, maar de meeste projecten duren 2–12 weken. Na de intake geven we u een concrete tijdsinschatting.",
  },
  {
    q: "Bieden jullie ondersteuning na oplevering?",
    a: "Ja, wij bieden verschillende ondersteuningspakketten voor na de oplevering. We bespreken dit graag tijdens de kennismaking.",
  },
  {
    q: "Wat kost een gemiddeld project?",
    a: "De kosten verschillen per project, maar we werken altijd transparant met duidelijke afspraken. Na de intake ontvangt u een heldere offerte.",
  },
  {
    q: "Kunnen jullie bestaande systemen integreren?",
    a: "Ja, wij zijn gespecialiseerd in het integreren van nieuwe oplossingen met bestaande systemen. Dit is vaak een belangrijk onderdeel van onze projecten.",
  },
  {
    q: "Werken jullie ook voor kleine bedrijven?",
    a: "Absoluut. Onze visie is juist dat ook kleinere bedrijven toegang moeten hebben tot slimme technologie. We passen onze aanpak aan op uw schaal.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`glass-card border transition-all duration-300 ${open ? "border-[oklch(0.65_0.22_25/0.25)]" : "border-white/5"}`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-white/80 text-sm">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4 text-white/40 flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm text-white/50 leading-relaxed border-t border-white/5 pt-4">
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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-4">
              <span className="text-xs font-medium text-white/60">Contact & Intake</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl lg:text-6xl font-bold leading-tight mb-5" style={{ fontFamily: "'Syne', sans-serif" }}>
              Plan een{" "}
              <span className="gradient-text">kennismaking</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/50 text-lg leading-relaxed">
              Vul het formulier in (±2 min). Dan kunnen we u direct gericht helpen. Reactie binnen 24 uur op werkdagen.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Main content */}
      <section className="py-16" id="contact-form">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="glass-card p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-[oklch(0.70_0.20_35/0.15)] border border-[oklch(0.70_0.20_35/0.3)] flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-[oklch(0.70_0.20_35)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
                    Bedankt voor uw bericht!
                  </h3>
                  <p className="text-white/50">
                    We nemen binnen 24 uur contact met u op om een kennismaking in te plannen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-white/60 mb-2">Naam *</label>
                      <input
                        type="text"
                        required
                        value={formData.naam}
                        onChange={(e) => setFormData({ ...formData, naam: e.target.value })}
                        placeholder="Jan de Vries"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[oklch(0.65_0.22_25/0.5)] focus:bg-white/8 transition-all duration-200 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/60 mb-2">Bedrijf</label>
                      <input
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
                      <label className="block text-sm font-medium text-white/60 mb-2">E-mail *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jan@bedrijf.nl"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[oklch(0.65_0.22_25/0.5)] focus:bg-white/8 transition-all duration-200 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/60 mb-2">Telefoon</label>
                      <input
                        type="tel"
                        value={formData.telefoon}
                        onChange={(e) => setFormData({ ...formData, telefoon: e.target.value })}
                        placeholder="+31 6 12345678"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[oklch(0.65_0.22_25/0.5)] focus:bg-white/8 transition-all duration-200 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">Interesse in</label>
                    <select
                      value={formData.dienst}
                      onChange={(e) => setFormData({ ...formData, dienst: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[oklch(0.65_0.22_25/0.5)] transition-all duration-200 text-sm"
                    >
                      <option value="geen" className="bg-[oklch(0.13_0.018_240)]">Selecteer een dienst</option>
                      <option value="automatisering" className="bg-[oklch(0.13_0.018_240)]">Automatiseringen & Software</option>
                      <option value="ai" className="bg-[oklch(0.13_0.018_240)]">AI Implementatie</option>
                      <option value="beide" className="bg-[oklch(0.13_0.018_240)]">Beide</option>
                      <option value="anders" className="bg-[oklch(0.13_0.018_240)]">Anders / Weet ik nog niet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">Vertel ons over uw uitdaging *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.bericht}
                      onChange={(e) => setFormData({ ...formData, bericht: e.target.value })}
                      placeholder="Beschrijf kort welk proces u wilt automatiseren of welke uitdaging u heeft..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[oklch(0.65_0.22_25/0.5)] focus:bg-white/8 transition-all duration-200 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary-glow w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white"
                  >
                    Verstuur intake
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-white/30 text-xs">
                    Geen verplichtingen. Reactie binnen 24 uur op werkdagen.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
              className="lg:col-span-2 flex flex-col gap-5"
            >
              {/* Contact info */}
              <div className="glass-card p-6">
                <h3 className="font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Direct contact
                </h3>
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:info@jukoautomation.nl"
                    className="flex items-center gap-3 text-sm text-white/50 hover:text-[oklch(0.65_0.22_25)] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[oklch(0.65_0.22_25/0.1)] flex items-center justify-center">
                      <Mail className="w-4 h-4 text-[oklch(0.65_0.22_25)]" />
                    </div>
                    info@jukoautomation.nl
                  </a>
                </div>
              </div>

              {/* Promises */}
              <div className="glass-card p-6">
                <h3 className="font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Wat u kunt verwachten
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    { icon: <Clock className="w-4 h-4" />, text: "Reactie binnen 24 uur op werkdagen" },
                    { icon: <MessageSquare className="w-4 h-4" />, text: "Persoonlijk gesprek, geen standaard pitch" },
                    { icon: <CheckCircle2 className="w-4 h-4" />, text: "Concrete eerste inschatting na intake" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3 text-sm text-white/50">
                      <div className="text-[oklch(0.65_0.22_25)] mt-0.5 flex-shrink-0">{item.icon}</div>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* FAQ */}
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
              Veelgestelde{" "}
              <span className="gradient-text">vragen</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="max-w-3xl flex flex-col gap-3"
          >
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
