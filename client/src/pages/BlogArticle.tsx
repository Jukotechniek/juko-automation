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
import { BLOG_AUTHOR } from "@/config/blog";

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
    author: BLOG_AUTHOR,
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
    author: BLOG_AUTHOR,
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
    author: BLOG_AUTHOR,
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
    author: BLOG_AUTHOR,
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
  "workflow-automatisering-roi": {
    title: "Workflowautomatisering: rendement berekenen en direct implementeren",
    excerpt:
      "Stap-voor-stap uitleg om automatiseringsprojecten te beoordelen en het rendement op uw investering te maximaliseren.",
    category: "Automatisering",
    date: "15 maart 2026",
    readTime: 9,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-process-manufacturing-X9uFfZfVUcMMZNT7JjVVji.webp",
    author: BLOG_AUTHOR,
    content: (
      <div className="prose prose-invert max-w-none space-y-6 text-white/70">
        <p>
          Veel bedrijven weten dat ze repetitief werk moeten automatiseren, maar schrikken terug voor de investering.
          Toch is het rendement vaak sneller zichtbaar dan u denkt — mits u vooraf scherp krijgt welk proces u eerst pakt
          en hoe u succes meet.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Waar begint u?</h2>
        <p>
          Begin met het proces dat het vaakst voorkomt en de meeste fouten of vertraging oplevert: offertes kopiëren,
          orders overtypen, of rapportages die elke week opnieuw handmatig worden opgebouwd. Dat zijn de plekken waar
          automatisering het verschil maakt in uren én in rust op de werkvloer.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Rendement inschatten zonder spreadsheet-stress</h2>
        <p>
          U hoeft geen ingewikkeld model te bouwen. Vraag uzelf af: hoeveel uur per week gaat dit kosten nu, en wat is
          een uur werk voor uw team waard? Vermenigvuldig dat met het aantal weken per jaar — dan ziet u snel of een
          investering van enkele duizenden euro&apos;s zich binnen een jaar kan terugverdienen. Voeg daar bijkomende
          voordelen aan toe: minder fouten, snellere reactie naar klanten, en medewerkers die weer tijd hebben voor
          werk dat echt waarde toevoegt.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Klein beginnen, stap voor stap uitbreiden</h2>
        <p>
          Een eerste workflow die stabiel draait, geeft vertrouwen om de volgende koppeling aan te pakken. Zo groeit uw
          automatisering mee met uw bedrijf, in plaats van in één keer een groot project dat maanden vastloopt. Wij
          helpen u die volgorde te bepalen en de techniek (API&apos;s, tools zoals n8n, of maatwerk waar nodig) passend te
          kiezen.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Volgende stappen</h2>
        <p>
          Wilt u een concreet beeld van rendement en planning voor uw situatie? Vraag een gratis intake aan — we lopen
          samen uw processen door en geven een eerlijke inschatting zonder jargon.
        </p>
      </div>
    ),
  },
  "webapp-vs-standaard-software": {
    title: "Maatwerk-webapp vs. standaardsoftware: wanneer kiest u wat?",
    excerpt:
      "De voor- en nadelen van maatwerk webapplicaties versus kant-en-klare oplossingen. Inclusief beslissingsmodel.",
    category: "Webapps",
    date: "6 maart 2026",
    readTime: 7,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-process-manufacturing-X9uFfZfVUcMMZNT7JjVVji.webp",
    author: BLOG_AUTHOR,
    content: (
      <div className="prose prose-invert max-w-none space-y-6 text-white/70">
        <p>
          Standaardsoftware is vaak snel te starten: u betaalt per gebruiker, en veel processen zijn al voor u
          nagedacht. Maar zodra uw manier van werken net even anders is dan het gemiddelde bedrijf, begint het
          wringen: workarounds in spreadsheets, dubbele invoer, of modules die u nooit gebruikt.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Wanneer past maatwerk beter?</h2>
        <p>
          Een webapp op maat loont als uw differentiatie in de markt precies in dat proces zit: een klantportaal dat
          aansluit op uw ERP, een interne tool die uw offertes en planning in één flow houdt, of een portal waar uw
          klanten alleen zien wat u wilt tonen. U betaalt voor bouw en onderhoud, maar u krijgt precies het gedrag en
          de integraties die bij uw team passen.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Een eenvoudig beslismoment</h2>
        <p>
          Vraag uzelf af: lost een pakket 80% van mijn probleem op zonder dat we het systeem kapot hoeven te tunen?
          Dan is standaardsoftware vaak de slimste keuze. Moeten we juist het laatste stuk onderscheidend maken, of
          bestaat er geen goede koppeling met uw bestaande stack? Dan is maatwerk of een combinatie (standaard + maatwerk)
          vaak rationeler.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Combinaties zijn normaal</h2>
        <p>
          In de praktijk zien we vaak een mix: boekhouding of CRM in de cloud, en een op maat gemaakt stuk ertussen dat
          gegevens synchroniseert en uw klanten de juiste ervaring geeft. Dat hoeft geen megaproject te zijn; het mag
          gefaseerd.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Volgende stappen</h2>
        <p>
          Twijfelt u tussen kant en klaar en maatwerk? In een kort gesprek brengen we uw wensen en beperkingen in kaart
          en geven we een eerlijk advies — ook als dat betekent dat standaardsoftware voldoende is.
        </p>
      </div>
    ),
  },
  "n8n-make-automatisering": {
    title: "n8n vs Make: welke automatiseringstool past bij uw bedrijf?",
    excerpt:
      "Een eerlijke vergelijking van n8n en Make (voorheen Integromat) voor bedrijfsautomatisering. Inclusief praktijkvoorbeelden.",
    category: "Automatisering",
    date: "3 maart 2026",
    readTime: 8,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-automation-card-Cmgzf2u7YyobuLyoUbbaT9.webp",
    author: BLOG_AUTHOR,
    content: (
      <div className="prose prose-invert max-w-none space-y-6 text-white/70">
        <p>
          Beide platforms helpen u om acties te koppelen: een nieuwe rij in een sheet, een mail, een webhook van uw
          webshop, een bericht in Slack. Het verschil zit vooral in hoe u wilt betalen, hoeveel controle u over hosting
          wilt, en hoe technisch uw team is.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Make: snel visueel, zorgeloos beheer</h2>
        <p>
          Make is prettig als u snel live wilt zonder servers te beheren. U sleept stappen aan elkaar, en de cloud draait
          het voor u. Geschikt voor teams die vooral betrouwbaarheid en support verwachten en minder bezig willen zijn
          met infrastructuur.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">n8n: meer eigenaarschap</h2>
        <p>
          n8n kiest u vaak als u workflows liever zelf host (of laat hosten), meer controle wilt over data en
          doorstroom, en bereid bent iets meer technische verantwoordelijkheid te dragen. Er is een sterke community en
          veel kant-en-klare nodes; voor maatwerk kunt u waar nodig code of eigen servers inzetten.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Praktijkvoorbeelden die we vaak bouwen</h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Lead uit formulier → CRM → welkomstmail en taak voor sales</li>
          <li>Order uit webshop → facturatie of magazijn → status terug naar klant</li>
          <li>Dagelijkse export van cijfers naar rapportage of e-mail naar het team</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Welke kiest u?</h2>
        <p>
          Er is geen universele winnaar. Het hangt af van volume, budget, interne kennis en of u streng bent op waar data
          mag landen. Wij helpen u dezelfde logica soms in Make te zetten, soms in n8n, en soms met een stukje Python
          ertussen als het echt maatwerk wordt.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Volgende stappen</h2>
        <p>
          Vertel ons welke systemen u nu gebruikt en wat u wilt bereiken — dan adviseren we een concrete route, inclusief
          welk platform daar het best bij past.
        </p>
      </div>
    ),
  },
  "data-security-compliance": {
    title: "Gegevensbeveiliging & AVG: automatisering veilig implementeren",
    excerpt:
      "Hoe u automatisering en slimme toepassingen inzet die voldoen aan de AVG en andere privacy-eisen.",
    category: "Beveiliging",
    date: "1 maart 2026",
    readTime: 8,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-ai-engineering-SeT63nmpEUT9TXX7vv544w.webp",
    author: BLOG_AUTHOR,
    content: (
      <div className="prose prose-invert max-w-none space-y-6 text-white/70">
        <p>
          Automatisering en slimme toepassingen maken uw processen sneller, maar ze raken ook persoonsgegevens: namen,
          mailadressen, orderhistorie, soms zelfs gevoelige informatie. De AVG vraagt niet om papierwerk om het papierwerk,
          maar om duidelijke keuzes: waar staat data, wie mag erbij, en hoe lang bewaart u die?
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Begin bij het proces, niet bij de tool</h2>
        <p>
          Voordat u een nieuwe koppeling of chatfunctie inschakelt, is het nuttig om te noteren welke gegevens nodig zijn
          en of een lichtere oplossing volstaat. Soms is anonimiseren of aggregeren al genoeg voor een rapport; dan hoeft
          er geen volledige dataset te stromen naar een derde partij.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Verwerkers en afspraken</h2>
        <p>
          Gebruikt u clouddiensten of externe modellen? Dan hoort daar een verwerkersovereenkomst of duidelijke
          voorwaarden bij, en moet u weten in welke regio data wordt opgeslagen. Dat zijn geen leuke details, maar ze
          beschermen uw organisatie en uw klanten — en ze helpen later ook bij audits of vragen van klanten.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Techniek die helpt: minimale rechten, logging, back-ups</h2>
        <p>
          In de praktijk combineren we vaak toegangsrechten per rol, versleutelde verbindingen, en heldere logging van
          wie wat heeft gedaan. Back-ups en herstel zijn onderdeel van hetzelfde verhaal: automatisering mag niet
          betekenen dat één fout onomkeerbaar is.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Volgende stappen</h2>
        <p>
          Wilt u automatisering of nieuwe digitale stappen veilig inrichten? We denken graag mee over een pragmatische
          aanpak: voldoende zekerheid zonder uw team te verstikken in regels. Plan een gesprek — dan koppelen we uw
          wensen aan concrete maatregelen.
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
            author: { "@type": "Person", name: article.author },
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
              <span className="text-white/60">Door {article.author}</span>
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
