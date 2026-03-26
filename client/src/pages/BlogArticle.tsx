/*
  DESIGN: Dark Precision Tech - Blog Article
  - Full article view with new AI/webapp/automation articles
  - SEO optimized with article schema
*/

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
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
  "ai-chatbot-klantenservice": {
    title: "AI-chatbot voor klantenservice: zo bespaart u tot 80% supporttijd",
    excerpt: "Ontdek hoe een AI-chatbot uw klantenservice verbetert.",
    category: "AI",
    date: "21 maart 2026",
    readTime: 8,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-ai-engineering-SeT63nmpEUT9TXX7vv544w.webp",
    author: "Juko Team",
    content: (
      <div className="prose prose-invert max-w-none space-y-6 text-white/70">
        <p>
          Een AI-chatbot is voor veel bedrijven de snelste manier om klantenservice te verbeteren en tegelijk kosten te verlagen. In dit artikel leggen we uit hoe het werkt, wat het kost en welke resultaten u kunt verwachten.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Wat is een AI-chatbot?</h2>
        <p>
          Een AI-chatbot is een virtuele assistent die klantvragen begrijpt en beantwoordt zonder menselijke tussenkomst. Moderne chatbots gebruiken grote taalmodellen (LLM&apos;s) die natuurlijke taal begrijpen en relevante antwoorden genereren op basis van uw bedrijfsdocumentatie.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Hoe werkt het in de praktijk?</h2>
        <p>
          De chatbot wordt getraind op uw kennisbank, productcatalogus, handleidingen en FAQ. Wanneer een klant een vraag stelt, zoekt de AI het juiste antwoord op en formuleert een helder, persoonlijk antwoord.
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Beantwoordt 70-90% van veelgestelde vragen automatisch</li>
          <li>Draagt complexe vragen naadloos over aan een medewerker</li>
          <li>Beschikbaar 24/7, ook buiten kantooruren</li>
          <li>Leert continu bij door nieuwe vragen en feedback</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Resultaten uit de praktijk</h2>
        <p>
          Bedrijven die een AI-chatbot implementeren zien gemiddeld 60-80% minder supporttickets en een hogere klanttevredenheid door snellere antwoorden.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Wat kost een AI-chatbot?</h2>
        <p>
          De implementatie van een AI-chatbot begint vanaf €4.500 en kan oplopen afhankelijk van complexiteit, koppelingen en het aantal talen. Na de intake ontvangt u een concrete offerte.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Volgende stappen</h2>
        <p>
          Wilt u ontdekken wat een AI-chatbot voor uw bedrijf kan betekenen? Neem contact op voor een gratis intake. We analyseren uw huidige klantenservice en doen een concreet voorstel.
        </p>
      </div>
    ),
  },
  "klantenportaal-bouwen": {
    title: "Klantenportaal op maat: waarom elk groeiend bedrijf er een nodig heeft",
    excerpt: "Een klantenportaal verhoogt klanttevredenheid en bespaart uw team uren per week.",
    category: "Webapps",
    date: "18 maart 2026",
    readTime: 7,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-automation-card-Cmgzf2u7YyobuLyoUbbaT9.webp",
    author: "Juko Team",
    content: (
      <div className="prose prose-invert max-w-none space-y-6 text-white/70">
        <p>
          Een klantenportaal is een beveiligde webapplicatie waar uw klanten zelf toegang hebben tot hun gegevens, orders, facturen en documenten. Het bespaart uw team uren aan telefonische en e-mailondersteuning.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Waarom een klantenportaal?</h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Klanten helpen zichzelf, 24/7</li>
          <li>Minder telefonische vragen over orderstatus, facturen en documenten</li>
          <li>Professionele uitstraling en hogere klanttevredenheid</li>
          <li>Centrale plek voor alle klantcommunicatie</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Wat kan er in een klantenportaal?</h2>
        <p>Typische functionaliteiten die wij bouwen zijn:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Ordervolging en statusupdates</li>
          <li>Facturenoverzicht en betalingsstatus</li>
          <li>Documentbeheer (offertes, contracten, rapporten)</li>
          <li>Ticketsysteem voor supportaanvragen</li>
          <li>Persoonlijke dashboards met KPI&apos;s</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Investering en doorlooptijd</h2>
        <p>
          Een klantenportaal op maat start vanaf €5.500. De gemiddelde bouwtijd is 4-8 weken, afhankelijk van functionaliteiten en koppelingen met uw bestaande systemen.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Volgende stappen</h2>
        <p>
          Benieuwd naar een klantenportaal voor uw bedrijf? Plan een gratis intake en we bespreken de mogelijkheden.
        </p>
      </div>
    ),
  },
  "api-integratie-guide": {
    title: "Volledige gids: API-integratie voor uw bedrijfssystemen",
    excerpt: "Ontdek hoe u uw ERP, CRM en andere systemen naadloos verbindt.",
    category: "Automatisering",
    date: "12 maart 2026",
    readTime: 8,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-automation-card-Cmgzf2u7YyobuLyoUbbaT9.webp",
    author: "Juko Team",
    content: (
      <div className="prose prose-invert max-w-none space-y-6 text-white/70">
        <p>
          API-integratie is de ruggengraat van moderne automatisering. In deze gids leest u hoe u uw ERP, CRM en andere bedrijfssystemen naadloos met elkaar verbindt.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Wat is een API?</h2>
        <p>
          Een API is een programmeerinterface: een set afspraken waarmee twee softwaresystemen met elkaar kunnen communiceren. Zo wisselt u gegevens automatisch tussen uw systemen uit.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">REST-API&apos;s: de standaard</h2>
        <p>
          REST is de meest gebruikte API-architectuur en werkt via HTTP-verzoeken. Ideaal voor gegevenssynchronisatie, automatische rapportages en koppelingen met externe tools.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Webhooks: gebeurtenisgestuurde automatisering</h2>
        <p>
          Webhooks sturen automatisch een bericht wanneer iets gebeurt — handig voor meldingen, het starten van workflows en realtime bijwerkingen.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Volgende stappen</h2>
        <p>
          Wilt u uw systemen integreren? Neem contact met ons op voor een gratis technische intake.
        </p>
      </div>
    ),
  },
  "predictive-maintenance-ai": {
    title: "Voorspellend onderhoud met AI: voorkom stilstand en bespaar kosten",
    excerpt: "Hoe machine learning u helpt onderhoud te plannen voordat apparatuur uitvalt.",
    category: "AI",
    date: "9 maart 2026",
    readTime: 6,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-ai-engineering-SeT63nmpEUT9TXX7vv544w.webp",
    author: "Juko Team",
    content: (
      <div className="prose prose-invert max-w-none space-y-6 text-white/70">
        <p>
          Voorspellend onderhoud is een van de meest krachtige toepassingen van AI. In plaats van apparatuur alleen op vaste momenten te onderhouden, voorspelt AI wanneer onderhoud nodig is.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Hoe werkt voorspellend onderhoud?</h2>
        <p>Modellen analyseren sensorgegevens om patronen te herkennen die wijzen op toekomstige storingen:</p>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li>Sensorgegevens verzamelen (temperatuur, trillingen, stroomverbruik)</li>
          <li>Modellen voor machine learning trainen op historische gegevens</li>
          <li>Realtime voorspellingen doen en waarschuwingen genereren</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Praktische voordelen</h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>50-70% minder stilstand</strong></li>
          <li><strong>Kostenbesparing:</strong> Geen noodinterventies meer</li>
          <li><strong>Betere planning:</strong> Onderhoud op uw momenten</li>
          <li><strong>Langere levensduur</strong> van apparatuur</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Volgende stappen</h2>
        <p>
          Heeft u interesse in voorspellend onderhoud? Neem contact op voor een gratis analyse.
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
          <p className="text-white/50 mb-8">Dit artikel bestaat niet of is verplaatst.</p>
          <Link href="/blog">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[oklch(0.65_0.22_25)] text-white font-semibold hover:bg-[oklch(0.70_0.20_35)] transition-colors">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
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

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            author: { "@type": "Organization", name: "Juko Automation" },
            publisher: { "@type": "Organization", name: "Juko Automation" },
            datePublished: article.date,
            image: article.image,
          }),
        }}
      />

      {/* Header */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        <div className="container relative z-10">
          <Link href="/blog">
            <button className="flex items-center gap-2 text-[oklch(0.65_0.22_25)] hover:text-white transition-colors mb-8 font-semibold">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
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
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/50">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <time>{article.date}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" aria-hidden="true" />
                {article.readTime} min leestijd
              </div>
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
            <img src={article.image} alt={`Afbeelding bij artikel: ${article.title}`} className="w-full h-96 object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
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
      </article>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden" aria-label="Contact opnemen">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.12_0.025_230)] to-[oklch(0.09_0.015_240)]" />
        <div className="absolute inset-0 radial-glow-red opacity-60" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Klaar om dit in de praktijk te brengen?
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
              Plan een gratis intake en ontdek hoe we dit voor uw bedrijf kunnen implementeren.
            </p>
            <Link href="/contact#contact-form">
              <button className="btn-primary-glow flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base shadow-2xl shadow-[oklch(0.65_0.22_25/0.3)] hover:shadow-[oklch(0.65_0.22_25/0.5)] transition-all duration-300 hover:scale-105 mx-auto">
                Start gratis intake
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
