/*
  DESIGN: Dark Precision Tech - Blog Article
  - Full article view with metadata
  - Related articles
  - CTA at bottom
*/

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2, ArrowRight } from "lucide-react";
import { Link, useParams } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const articleContent: Record<
  string,
  {
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: number;
    image: string;
    author: string;
    content: React.ReactNode;
  }
> = {
  "api-integratie-guide": {
    title: "Complete Guide: API Integratie voor Technische Bedrijven",
    excerpt: "Leer hoe u uw systemen naadloos kunt integreren met REST APIs, webhooks en real-time data synchronisatie.",
    category: "Technisch",
    date: "21 maart 2026",
    readTime: 8,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-automation-visual-5PKDExTwL5b3mWTke4noEe.webp",
    author: "Juko Team",
    content: (
      <div className="prose prose-invert max-w-none space-y-6 text-white/70">
        <p>
          API-integratie is de ruggengraat van moderne automatisering. In deze gids leren we hoe u uw ERP, CAD-systemen en IoT-apparaten naadloos met elkaar kunt verbinden.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
          Wat is een API?
        </h2>
        <p>
          Een API (Application Programming Interface) is een set regels die twee softwaresystemen toestaan met elkaar te communiceren. Voor technische bedrijven betekent dit dat u gegevens kunt uitwisselen tussen uw ERP-systeem, productieapparatuur en rapportagetools zonder handmatige invoer.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
          REST API's: De Standaard
        </h2>
        <p>
          REST (Representational State Transfer) is de meest gebruikte API-architectuur. Het werkt via HTTP-verzoeken (GET, POST, PUT, DELETE) en is ideaal voor:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Real-time data synchronisatie tussen systemen</li>
          <li>Automatische rapportage generatie</li>
          <li>IoT-sensorgegevens naar uw centrale database sturen</li>
          <li>Externe tools integreren (cloud services, analytics platforms)</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
          Praktische Use Case: Manufacturing
        </h2>
        <p>
          Stel, u heeft een productielijn met IoT-sensoren die temperatuur, druk en snelheid meten. Via een REST API kunnen deze gegevens automatisch naar uw ERP-systeem worden gestuurd, waar ze:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Real-time kwaliteitscontrole triggeren</li>
          <li>Automatisch onderhoud inplannen als parameters afwijken</li>
          <li>Productierapporten genereren zonder handmatige invoer</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
          Webhooks: Event-Driven Automatisering
        </h2>
        <p>
          Webhooks zijn als "reverse APIs" — in plaats van dat u een systeem vraagt om gegevens, stuurt het systeem u automatisch een bericht wanneer iets gebeurt. Dit is perfect voor:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Automatische notificaties wanneer een order klaar is</li>
          <li>Triggers voor volgende stappen in workflows</li>
          <li>Alerts bij kritieke fouten of afwijkingen</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
          Volgende Stappen
        </h2>
        <p>
          Wilt u uw systemen integreren? Neem contact met ons op voor een gratis technische intake. We analyseren uw huidige setup en stellen een concreet integratieplan op.
        </p>
      </div>
    ),
  },
  "predictive-maintenance-ai": {
    title: "Predictive Maintenance met AI: Downtime Voorkomen",
    excerpt: "Ontdek hoe machine learning u kan helpen onderhoud in te plannen voordat apparatuur faalt.",
    category: "AI",
    date: "18 maart 2026",
    readTime: 6,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-ai-visual-R77pzhAFECUcxHV25eoBK6.webp",
    author: "Juko Team",
    content: (
      <div className="prose prose-invert max-w-none space-y-6 text-white/70">
        <p>
          Predictive maintenance is een van de meest impactvolle toepassingen van AI in technische bedrijven. In plaats van apparatuur te onderhouden op vaste schema's, voorspelt AI wanneer onderhoud nodig is — wat downtime en kosten drastisch reduceert.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
          Hoe Werkt Predictive Maintenance?
        </h2>
        <p>
          AI-modellen analyseren historische sensorgegevens van uw apparatuur om patronen te herkennen die wijzen op toekomstige fouten. Dit gebeurt in drie stappen:
        </p>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li>Sensorgegevens verzamelen (temperatuur, trillingen, stroomverbruik)</li>
          <li>Machine learning modellen trainen op historische data</li>
          <li>Real-time voorspellingen doen en alerts genereren</li>
        </ol>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
          Praktische Voordelen
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>50-70% minder downtime:</strong> Onderhoud voorkomen in plaats van herstellen</li>
          <li><strong>Kostenbesparing:</strong> Geen noodinterventies meer nodig</li>
          <li><strong>Betere planning:</strong> Onderhoud inplannen op momenten die u uitkomen</li>
          <li><strong>Langere levensduur:</strong> Apparatuur werkt onder optimale omstandigheden</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
          Case Study: Productielijn
        </h2>
        <p>
          Een van onze klanten had onverwachte uitval van productieapparatuur, wat maandelijks €15.000 kostte. Na implementatie van predictive maintenance:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Downtime daalde van 8% naar 1%</li>
          <li>Onderhoudskosten daalden met 35%</li>
          <li>Productiviteit steeg met 12%</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
          Volgende Stappen
        </h2>
        <p>
          Heeft u interesse in predictive maintenance? Neem contact op voor een gratis analyse van uw huidige apparatuur en downtime-patronen.
        </p>
      </div>
    ),
  },
};

export default function BlogArticle() {
  const params = useParams();
  const articleId = params.id as string;
  const article = articleContent[articleId];

  if (!article) {
    return (
      <div className="min-h-screen bg-[oklch(0.09_0.015_240)] text-white">
        <Navbar />
        <div className="container py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Artikel niet gevonden</h1>
          <Link href="/blog">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[oklch(0.65_0.22_25)] text-white font-semibold hover:bg-[oklch(0.70_0.20_35)] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Terug naar blog
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[oklch(0.09_0.015_240)] text-white">
      <Navbar />

      {/* Header */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        <div className="container relative z-10">
          <Link href="/blog">
            <button className="flex items-center gap-2 text-[oklch(0.65_0.22_25)] hover:text-white transition-colors mb-8 font-semibold">
              <ArrowLeft className="w-4 h-4" />
              Terug naar blog
            </button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-[oklch(0.65_0.22_25/0.15)] text-[oklch(0.65_0.22_25)] text-xs font-semibold border border-[oklch(0.65_0.22_25/0.3)]">
                {article.category}
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/50">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime} min leestijd
              </div>
              <button className="flex items-center gap-2 hover:text-white transition-colors">
                <Share2 className="w-4 h-4" />
                Delen
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-white/10"
          >
            <img src={article.image} alt={article.title} className="w-full h-96 object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {article.content}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.12_0.025_230)] to-[oklch(0.09_0.015_240)]" />
        <div className="absolute inset-0 radial-glow-red opacity-60" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
              Klaar om dit in praktijk te brengen?
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
              Laat ons uw technische processen analyseren en een concreet plan maken.
            </p>
            <Link href="/contact">
              <button className="btn-primary-glow flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base shadow-2xl shadow-[oklch(0.65_0.22_25/0.3)] hover:shadow-[oklch(0.65_0.22_25/0.5)] transition-all duration-300 hover:scale-105 mx-auto">
                Start gratis intake
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
