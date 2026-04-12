/*
  DESIGN: Dark Precision Tech - Blog
  - Updated categories matching 3 core services
  - New articles on AI, webapps, automation
  - SEO optimized
*/

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { BLOG_AUTHOR } from "@/config/blog";

const articles = [
  {
    id: "ai-chatbot-klantenservice",
    title: "AI-chatbot voor klantenservice: zo bespaart u tot 80% supporttijd",
    excerpt: "Ontdek hoe een AI-chatbot uw klantenservice verbetert. Van implementatie tot resultaten — een praktische gids voor bedrijven.",
    category: "AI",
    date: "21 maart 2026",
    isoDate: "2026-03-21",
    readTime: 8,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-ai-engineering-SeT63nmpEUT9TXX7vv544w.webp",
    featured: true,
  },
  {
    id: "klantenportaal-bouwen",
    title: "Klantenportaal op maat: waarom elk groeiend bedrijf er een nodig heeft",
    excerpt: "Een klantenportaal verhoogt klanttevredenheid en bespaart uw team uren per week. Ontdek wat het kost en wat het oplevert.",
    category: "Webapps",
    date: "18 maart 2026",
    isoDate: "2026-03-18",
    readTime: 7,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-automation-card-Cmgzf2u7YyobuLyoUbbaT9.webp",
    featured: false,
  },
  {
    id: "workflow-automatisering-roi",
    title: "Workflowautomatisering: rendement berekenen en direct implementeren",
    excerpt: "Stap-voor-stap uitleg om automatiseringsprojecten te beoordelen en het rendement op uw investering te maximaliseren.",
    category: "Automatisering",
    date: "15 maart 2026",
    isoDate: "2026-03-15",
    readTime: 9,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-process-manufacturing-X9uFfZfVUcMMZNT7JjVVji.webp",
    featured: false,
  },
  {
    id: "api-integratie-guide",
    title: "Volledige gids: API-integratie voor uw bedrijfssystemen",
    excerpt: "Ontdek hoe u uw ERP, CRM en andere systemen naadloos koppelt met REST-API's, webhooks en realtime synchronisatie.",
    category: "Automatisering",
    date: "12 maart 2026",
    isoDate: "2026-03-12",
    readTime: 8,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-automation-card-Cmgzf2u7YyobuLyoUbbaT9.webp",
    featured: false,
  },
  {
    id: "predictive-maintenance-ai",
    title: "Voorspellend onderhoud met AI: voorkom stilstand en bespaar kosten",
    excerpt: "Hoe machine learning u helpt onderhoud te plannen voordat apparatuur uitvalt. Resultaten uit de praktijk.",
    category: "AI",
    date: "9 maart 2026",
    isoDate: "2026-03-09",
    readTime: 6,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-ai-engineering-SeT63nmpEUT9TXX7vv544w.webp",
    featured: false,
  },
  {
    id: "webapp-vs-standaard-software",
    title: "Maatwerk-webapp vs. standaardsoftware: wanneer kiest u wat?",
    excerpt: "De voor- en nadelen van maatwerk webapplicaties versus kant-en-klare oplossingen. Inclusief beslissingsmodel.",
    category: "Webapps",
    date: "6 maart 2026",
    isoDate: "2026-03-06",
    readTime: 7,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-process-manufacturing-X9uFfZfVUcMMZNT7JjVVji.webp",
    featured: false,
  },
  {
    id: "n8n-make-automatisering",
    title: "n8n vs Make: welke automatiseringstool past bij uw bedrijf?",
    excerpt: "Een eerlijke vergelijking van n8n en Make (voorheen Integromat) voor bedrijfsautomatisering. Inclusief praktijkvoorbeelden.",
    category: "Automatisering",
    date: "3 maart 2026",
    isoDate: "2026-03-03",
    readTime: 8,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-automation-card-Cmgzf2u7YyobuLyoUbbaT9.webp",
    featured: false,
  },
  {
    id: "data-security-compliance",
    title: "Gegevensbeveiliging & AVG: automatisering veilig implementeren",
    excerpt: "Hoe u automatisering en slimme toepassingen inzet die voldoet aan de AVG en andere privacy-eisen.",
    category: "Beveiliging",
    date: "1 maart 2026",
    isoDate: "2026-03-01",
    readTime: 8,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-ai-engineering-SeT63nmpEUT9TXX7vv544w.webp",
    featured: false,
  },
];

const categories = ["Alle", "AI", "Webapps", "Automatisering", "Beveiliging"];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Alle" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = articles.find((a) => a.featured);
  const otherArticles = filteredArticles.filter((a) => !a.featured);

  return (
    <div className="min-h-screen bg-[oklch(0.09_0.015_240)] text-white">
      <Navbar />

      <SEOHead
        title="Blog & Kennisbank | AI, Webapps & Automatisering - Juko Automation"
        description="Praktische gidsen en inzichten over AI-chatbots, webapp-ontwikkeling, klantenportalen en procesautomatisering. Leer hoe u uw bedrijf slimmer laat werken met technologie."
        canonical="/blog"
        ogTitle="Blog & Kennisbank | Juko Automation"
        ogDescription="Praktische gidsen, praktijkvoorbeelden en inzichten over AI-implementaties, webapp-ontwikkeling en procesautomatisering."
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Juko Automation Blog & Kennisbank",
            description: "Praktische gidsen en inzichten over AI, webapps en automatisering.",
            url: "https://www.jukoautomation.nl/blog",
            publisher: {
              "@type": "Organization",
              name: "Juko Automation",
              logo: { "@type": "ImageObject", url: "https://www.jukoautomation.nl/juko-logo-light.png" },
            },
            blogPost: articles.map((a) => ({
              "@type": "BlogPosting",
              headline: a.title,
              description: a.excerpt,
              url: `https://www.jukoautomation.nl/blog/${a.id}`,
              image: a.image,
              datePublished: a.isoDate,
              author: { "@type": "Person", name: BLOG_AUTHOR },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jukoautomation.nl/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.jukoautomation.nl/blog" },
            ],
          },
        ]}
      />

      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[oklch(0.65_0.22_25/0.06)] blur-3xl" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-5">
              Blog &{" "}
              <span className="gradient-text">Kennisbank</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              Praktische gidsen, praktijkvoorbeelden en inzichten over AI-implementaties, webapp-ontwikkeling en procesautomatisering. Ontdek hoe u uw bedrijf slimmer laat werken.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Search & Filters */}
      <section className="py-12 border-b border-white/5" aria-label="Zoeken en filteren">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" aria-hidden="true" />
              <input
                type="text"
                placeholder="Zoek op onderwerp: AI, webapps, automatisering…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Zoek artikelen"
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[oklch(0.65_0.22_25/0.5)] focus:bg-white/8 transition-all duration-200"
              />
            </div>

            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Categorieën">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-[oklch(0.65_0.22_25)] text-white"
                      : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && selectedCategory === "Alle" && !searchQuery && (
        <section className="py-16" aria-label="Uitgelicht artikel">
          <div className="container">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card-hover overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={featuredArticle.image}
                    alt={`Afbeelding bij artikel: ${featuredArticle.title}`}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-[oklch(0.65_0.22_25/0.15)] text-[oklch(0.65_0.22_25)] text-xs font-semibold border border-[oklch(0.65_0.22_25/0.3)]">
                        Uitgelicht
                      </span>
                      <span className="text-xs text-white/40">{featuredArticle.category}</span>
                      <span className="text-xs text-white/40">· {BLOG_AUTHOR}</span>
                    </div>
                    <Link href={`/blog/${featuredArticle.id}`}>
                      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 hover:text-[oklch(0.65_0.22_25)] transition-colors cursor-pointer">
                        {featuredArticle.title}
                      </h2>
                    </Link>
                    <p className="text-white/50 leading-relaxed mb-6">{featuredArticle.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-white/40">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" aria-hidden="true" />
                        <time dateTime={featuredArticle.isoDate}>{featuredArticle.date}</time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" aria-hidden="true" />
                        {featuredArticle.readTime} min. leestijd
                      </div>
                    </div>
                    <Link href={`/blog/${featuredArticle.id}`}>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[oklch(0.65_0.22_25/0.15)] text-[oklch(0.65_0.22_25)] hover:bg-[oklch(0.65_0.22_25/0.25)] transition-colors font-semibold text-sm">
                        Lees meer
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16" aria-label="Artikelen overzicht">
        <div className="container">
          {otherArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherArticles.map((article, i) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="glass-card-hover overflow-hidden group flex flex-col"
                >
                  <div className="overflow-hidden h-48">
                    <img
                      src={article.image}
                      alt={`Afbeelding bij artikel: ${article.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-[oklch(0.65_0.22_25)] bg-[oklch(0.65_0.22_25/0.15)] px-2.5 py-1 rounded-full border border-[oklch(0.65_0.22_25/0.2)]">
                        {article.category}
                      </span>
                      <span className="text-xs text-white/35">{BLOG_AUTHOR}</span>
                    </div>
                    <Link href={`/blog/${article.id}`}>
                      <h3 className="text-lg font-bold text-white mb-2 hover:text-[oklch(0.65_0.22_25)] transition-colors cursor-pointer line-clamp-2">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex items-center gap-3 text-xs text-white/40">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" aria-hidden="true" />
                          <time dateTime={article.isoDate}>{article.date}</time>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" aria-hidden="true" />
                          {article.readTime} min.
                        </div>
                      </div>
                      <Link href={`/blog/${article.id}`}>
                        <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[oklch(0.65_0.22_25)] transition-colors" aria-label={`Lees ${article.title}`} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-white/50 text-lg">Geen artikelen gevonden. Probeer een andere zoekterm of categorie.</p>
            </div>
          )}
        </div>
      </section>

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
              Klaar om te starten?
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
              Laat ons uw processen analyseren en een concreet plan maken voor AI, webapps of automatisering.
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
