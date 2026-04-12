import { ArrowRight, Home, Search } from "lucide-react";
import { Link, useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-[oklch(0.09_0.015_240)] text-white">
      <Navbar />

      <SEOHead
        title="Pagina niet gevonden (404) | Juko Automation"
        description="De pagina die u zoekt bestaat niet of is verplaatst. Ga terug naar de homepagina van Juko Automation."
        canonical="/404"
        noindex
      />

      <div className="container py-32 text-center">
        <div className="max-w-lg mx-auto">
          <div className="w-20 h-20 rounded-full bg-[oklch(0.65_0.22_25/0.12)] border border-[oklch(0.65_0.22_25/0.2)] flex items-center justify-center mx-auto mb-8">
            <Search className="w-10 h-10 text-[oklch(0.65_0.22_25)]" aria-hidden="true" />
          </div>

          <h1 className="text-6xl font-bold mb-4">404</h1>

          <h2 className="text-2xl font-semibold text-white/80 mb-4">
            Pagina niet gevonden
          </h2>

          <p className="text-white/50 mb-10 leading-relaxed">
            Sorry, de pagina die u zoekt bestaat niet of is verplaatst.
            <br />
            Controleer de URL of ga terug naar de homepagina.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setLocation("/")}
              className="btn-primary-glow inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white"
            >
              <Home className="w-4 h-4" aria-hidden="true" />
              Naar homepagina
            </button>
            <Link href="/contact#contact-form">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white/70 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-300">
                Contact opnemen
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5">
            <p className="text-white/40 text-sm mb-4">Misschien vindt u dit interessant:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/diensten">
                <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/60 hover:text-white hover:border-white/20 transition-all">
                  Onze diensten
                </span>
              </Link>
              <Link href="/blog">
                <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/60 hover:text-white hover:border-white/20 transition-all">
                  Blog & Kennisbank
                </span>
              </Link>
              <Link href="/over-ons">
                <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/60 hover:text-white hover:border-white/20 transition-all">
                  Over ons
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
