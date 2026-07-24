import { useEffect } from "react";
import { initAnalytics } from "@/lib/analytics";

/** Loads Plausible when VITE_PLAUSIBLE_DOMAIN is set (auto-tracks SPA pageviews). */
export function Analytics() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return null;
}
