/*
  DESIGN: Dark Precision Tech - Blog
  - Article grid with featured article
  - Search and category filters
  - Reading time and author info
*/

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const articles = [
  {
    id: "api-integratie-guide",
    title: "Complete Guide: API Integratie voor Technische Bedrijven",
    excerpt: "Leer hoe u uw systemen naadloos kunt integreren met REST APIs, webhooks en real-time data synchronisatie.",
    category: "Technisch",
    date: "21 maart 2026",
    readTime: 8,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-automation-card-Cmgzf2u7YyobuLyoUbbaT9.webp",
    featured: true,
  },
  {
    id: "predictive-maintenance-ai",
    title: "Predictive Maintenance met AI: Downtime Voorkomen",
    excerpt: "Ontdek hoe machine learning u kan helpen onderhoud in te plannen voordat apparatuur faalt.",
    category: "AI",
    date: "18 maart 2026",
    readTime: 6,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-ai-engineering-SeT63nmpEUT9TXX7vv544w.webp",
    featured: false,
  },
  {
    id: "erp-implementatie-best-practices",
    title: "ERP Implementatie: Best Practices voor Technische Bedrijven",
    excerpt: "Praktische tips voor een succesvolle ERP-implementatie met minimale verstoringen van uw operaties.",
    category: "Implementatie",
    date: "15 maart 2026",
    readTime: 10,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-process-manufacturing-X9uFfZfVUcMMZNT7JjVVji.webp",
    featured: false,
  },
  {
    id: "iot-sensoren-real-time-monitoring",
    title: "IoT Sensoren & Real-Time Monitoring: Praktische Implementatie",
    excerpt: "Hoe u IoT-sensoren inzet voor live monitoring van uw productieomgeving en procesoptimalisatie.",
    category: "IoT",
    date: "12 maart 2026",
    readTime: 7,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-process-manufacturing-X9uFfZfVUcMMZNT7JjVVji.webp",
    featured: false,
  },
  {
    id: "workflow-automatisering-roi",
    title: "Workflow Automatisering: ROI Berekenen en Implementeren",
    excerpt: "Stap-voor-stap gids om automatiseringsprojecten te evalueren en de return on investment te maximaliseren.",
    category: "Automatisering",
    date: "9 maart 2026",
    readTime: 9,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-automation-card-Cmgzf2u7YyobuLyoUbbaT9.webp",
    featured: false,
  },
  {
    id: "data-security-compliance",
    title: "Data Security & Compliance: Automatisering Veilig Implementeren",
    excerpt: "Zorg ervoor dat uw automatiseringsoplossingen voldoen aan GDPR, ISO en andere compliance-vereisten.",
    category: "Beveiliging",
    date: "6 maart 2026",
    readTime: 8,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462210963/ciqyepHAPiGH2dwpaT8Bqe/juko-ai-engineering-SeT63nmpEUT9TXX7vv544w.webp",
    featured: false,
  },
];

const categories = ["Alle", "Technisch", "AI", "Implementatie", "IoT", "Automatisering", "Beveiliging"];

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
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-5" style={{ fontFamily: "'Syne', sans-serif" }}>
              Blog & Resources
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              Praktische gidsen, case studies en inzichten over automatisering, AI en integraties voor technische bedrijven.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Search & Filters */}
      <section className="py-12 border-b border-white/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <input
                type="text"
                placeholder="Zoek artikelen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[oklch(0.65_0.22_25/0.5)] focus:bg-white/8 transition-all duration-200"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
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
      {featuredArticle && (
        <section className="py-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card-hover overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                {/* Image */}
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-[oklch(0.65_0.22_25/0.15)] text-[oklch(0.65_0.22_25)] text-xs font-semibold border border-[oklch(0.65_0.22_25/0.3)]">
                        Featured
                      </span>
                      <span className="text-xs text-white/40">{featuredArticle.category}</span>
                    </div>
                    <Link href={`/blog/${featuredArticle.id}`}>
                      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 hover:text-[oklch(0.65_0.22_25)] transition-colors cursor-pointer" style={{ fontFamily: "'Syne', sans-serif" }}>
                        {featuredArticle.title}
                      </h2>
                    </Link>
                    <p className="text-white/50 leading-relaxed mb-6">{featuredArticle.excerpt}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-white/40">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredArticle.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredArticle.readTime} min
                      </div>
                    </div>
                    <Link href={`/blog/${featuredArticle.id}`}>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[oklch(0.65_0.22_25/0.15)] text-[oklch(0.65_0.22_25)] hover:bg-[oklch(0.65_0.22_25/0.25)] transition-colors font-semibold text-sm">
                        Lees meer
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container">
          {otherArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherArticles.map((article, i) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="glass-card-hover overflow-hidden group flex flex-col"
                >
                  {/* Image */}
                  <div className="overflow-hidden h-48">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-[oklch(0.65_0.22_25)] bg-[oklch(0.65_0.22_25/0.15)] px-2.5 py-1 rounded-full border border-[oklch(0.65_0.22_25/0.2)]">
                        {article.category}
                      </span>
                    </div>

                    <Link href={`/blog/${article.id}`}>
                      <h3 className="text-lg font-bold text-white mb-2 hover:text-[oklch(0.65_0.22_25)] transition-colors cursor-pointer line-clamp-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                        {article.title}
                      </h3>
                    </Link>

                    <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">{article.excerpt}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex items-center gap-3 text-xs text-white/40">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime} min
                        </div>
                      </div>
                      <Link href={`/blog/${article.id}`}>
                        <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[oklch(0.65_0.22_25)] transition-colors" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-white/50 text-lg">Geen artikelen gevonden. Probeer een ander zoekterm of categorie.</p>
            </div>
          )}
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
              Klaar om te beginnen?
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
              Laat ons uw technische processen analyseren en een concreet automatiseringsplan maken.
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
