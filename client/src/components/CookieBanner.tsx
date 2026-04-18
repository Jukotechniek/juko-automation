import { useEffect } from "react";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { useLocation } from "wouter";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const MEASUREMENT_ID = "G-4QSG8LRWMG";

export default function CookieBanner() {
  const { hasConsent, analyticsAccepted, acceptAnalytics, declineAnalytics, isLoading } =
    useCookieConsent();
  const [location] = useLocation();

  const sendPageView = () => {
    window.gtag?.("event", "page_view", {
      page_path: window.location.pathname + window.location.search + window.location.hash,
      page_title: document.title,
    });
  };

  useEffect(() => {
    if (analyticsAccepted) {
      initializeGoogleAnalytics();
    }
  }, [analyticsAccepted]);

  useEffect(() => {
    if (!analyticsAccepted || !window.gtag) {
      return;
    }

    sendPageView();
  }, [analyticsAccepted, location]);

  const initializeGoogleAnalytics = () => {
    if (document.querySelector(`script[src*="gtag/js?id=${MEASUREMENT_ID}"]`)) {
      return;
    }

    const w = window as Window & { dataLayer: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.gtag = function gtag(...args: unknown[]) {
      w.dataLayer.push(args);
    };

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;

    script.onload = () => {
      window.gtag?.("js", new Date());
      window.gtag?.("config", MEASUREMENT_ID, {
        anonymize_ip: true,
        send_page_view: false,
        debug_mode:
          window.location.hostname === "localhost" ||
          window.location.hostname === "127.0.0.1",
      });
      sendPageView();
    };

    script.onerror = () => {
      console.error("Failed to load Google Analytics script");
    };

    document.head.appendChild(script);
  };

  if (isLoading) {
    return null;
  }

  if (hasConsent) {
    return null;
  }

  return (
    <div
      id="cookie-banner"
      className="fixed left-1/2 top-1/2 z-[20000] flex max-w-[420px] -translate-x-1/2 -translate-y-1/2 flex-wrap items-center justify-center gap-3 rounded-lg border border-black bg-white p-5 text-center text-[#1d1d1b] shadow-[0_8px_12px_rgba(0,0,0,0.12)] [color-scheme:light]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
    >
      <p id="cookie-banner-title" className="m-0 w-full flex-[1_1_100%] text-[0.95rem] leading-relaxed">
        We gebruiken analytische cookies om onze website te verbeteren. Deze gegevens zijn anoniem en niet
        herleidbaar.
      </p>

      <div className="mt-2 flex w-full flex-wrap items-center justify-center gap-4">
        <button
          id="cookie-accept"
          type="button"
          onClick={acceptAnalytics}
          className="cursor-pointer rounded-md border-none bg-[#20c997] px-6 py-2.5 text-base font-semibold text-white"
        >
          Accepteren
        </button>

        <button
          id="cookie-decline"
          type="button"
          onClick={declineAnalytics}
          className="cursor-pointer border-none bg-transparent px-2.5 py-2.5 text-base text-neutral-600"
        >
          Nee bedankt
        </button>
      </div>
    </div>
  );
}
