import { useState, useEffect } from "react";

/** WhatsApp-bubbel-icoon (`currentColor` = merkgroen op transparante knop) */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  );
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  // Auto-open chat after 5 seconds (only once)
  useEffect(() => {
    if (!hasAutoOpened) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setShowNotification(false);
        setHasAutoOpened(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [hasAutoOpened]);

  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours >= 5 && hours < 12) return "Goedemorgen 👋";
    if (hours >= 12 && hours < 18) return "Goedemiddag 👋";
    return "Goedenavond 👋";
  };

  const openChat = () => {
    setIsOpen(true);
    setShowNotification(false);
  };

  const closeChat = () => {
    setIsOpen(false);
    setShowNotification(true); // Badge komt TERUG na sluiten!
  };

  const handleEmail = () => {
    window.location.href = "mailto:info@jukoautomation.nl";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/31622035459", "_blank");
  };

  const handlePhone = () => {
    window.location.href = "tel:+31622035459";
  };

  return (
    <>
      {/* ===== Alleen WhatsApp-logo + rode badge (geen groene cirkel) ===== */}
      <button
        type="button"
        onClick={openChat}
        className={`fixed bottom-4 right-5 z-[9999] min-h-[48px] min-w-[48px] items-center justify-center rounded-full border-none bg-transparent p-0 shadow-none outline-none [color-scheme:light] focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background md:bottom-5 md:right-5 ${
          isOpen ? "hidden" : "flex"
        }`}
        aria-label="Open WhatsApp-chat"
      >
        <span className="relative inline-flex items-center justify-center">
          <WhatsAppIcon className="h-11 w-11 text-[#25D366] drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] md:h-12 md:w-12" />
          {showNotification && (
            <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-0.5 text-xs font-bold text-white">
              1
            </span>
          )}
        </span>
      </button>

      {/* ===== CHATBOT WINDOW (alleen als open) — lichte UI los van site-thema ===== */}
      {isOpen && (
        <div className="fixed bottom-8 right-4 z-[10000] flex max-w-[min(360px,calc(100vw-1.5rem))] flex-col items-start overflow-visible text-neutral-900 [color-scheme:light] sm:bottom-6 sm:right-5 md:bottom-[5.25rem]">
          <div className="w-full">
            <div
              className="relative bg-white rounded-xl p-[14px_16px] pt-3 shadow-[0_4px_20px_rgba(0,0,0,0.15)] mb-[10px]"
              style={{ maxWidth: "360px" }}
            >
              <button
                type="button"
                onClick={closeChat}
                className="absolute right-2 top-2 z-10 flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-neutral-900 shadow-md transition-opacity hover:opacity-90"
                style={{ color: "#ffffff" }}
                aria-label="Sluit"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="flex gap-3 items-start pr-9">
              <img
                src="/justin.png"
                alt="Justin"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shrink-0"
              />
              <div className="min-w-0">
                <div className="text-sm md:text-base font-semibold text-black">Justin</div>
                <div className="text-xs md:text-sm text-black block mt-1 leading-[1.4]">
                  van <span className="font-semibold">Juko Automation</span>
                </div>
                <div className="text-xs md:text-sm text-black block mt-1 leading-[1.4]">
                  {getGreeting()}
                  <br />
                  Heb je een vraag? Ik help je graag verder via:
                </div>
              </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-[10px] justify-center">
              <button
                type="button"
                onClick={handleEmail}
                className="bg-white border border-black rounded-[999px] py-[10px] md:py-[14px] px-[20px] md:px-[26px] font-medium text-sm md:text-base text-neutral-900 cursor-pointer shadow-[0_2px_4px_rgba(0,0,0,0.08)] transition-all duration-200 text-center whitespace-nowrap w-full hover:bg-[#8e8e8e] hover:text-neutral-900"
              >
                E-mail
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 border-none rounded-[999px] py-[10px] md:py-[14px] px-[20px] md:px-[26px] font-medium text-sm md:text-base cursor-pointer shadow-[0_2px_4px_rgba(0,0,0,0.08)] transition-all duration-200 text-center whitespace-nowrap w-full text-white"
                style={{ background: "#20c997" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1aa179";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#20c997";
                }}
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                WhatsApp
              </button>

              <button
                type="button"
                onClick={handlePhone}
                className="col-span-2 justify-self-center w-1/2 bg-white border border-black rounded-[999px] py-[10px] md:py-[14px] px-[20px] md:px-[26px] font-medium text-sm md:text-base text-neutral-900 cursor-pointer shadow-[0_2px_4px_rgba(0,0,0,0.08)] transition-all duration-200 text-center whitespace-nowrap hover:bg-[#8e8e8e] hover:text-neutral-900"
              >
                Bellen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
