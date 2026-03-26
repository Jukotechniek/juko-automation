import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "juko_analytics_consent";

export function useCookieConsent() {
  const [isLoading, setIsLoading] = useState(true);
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "accepted" || stored === "declined") {
        setConsent(stored);
      }
    } catch {
      /* private mode / blocked storage */
    }
    setIsLoading(false);
  }, []);

  const acceptAnalytics = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setConsent("accepted");
  }, []);

  const declineAnalytics = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, "declined");
    } catch {
      /* ignore */
    }
    setConsent("declined");
  }, []);

  const hasConsent = consent !== null;
  const analyticsAccepted = consent === "accepted";

  return {
    hasConsent,
    analyticsAccepted,
    acceptAnalytics,
    declineAnalytics,
    isLoading,
  };
}
