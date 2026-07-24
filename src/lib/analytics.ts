declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined;

export function isAnalyticsEnabled(): boolean {
  return Boolean(PLAUSIBLE_DOMAIN);
}

/** Load Plausible when VITE_PLAUSIBLE_DOMAIN is set. Privacy-friendly, no cookie banner needed. */
export function initAnalytics(): void {
  if (!PLAUSIBLE_DOMAIN || typeof document === "undefined") return;
  if (document.querySelector('script[data-plausible="true"]')) return;

  const script = document.createElement("script");
  script.defer = true;
  script.dataset.domain = PLAUSIBLE_DOMAIN;
  script.dataset.plausible = "true";
  script.src = "https://plausible.io/js/script.js";
  document.head.appendChild(script);
}

export function trackEvent(name: string, props?: Record<string, string>): void {
  if (!PLAUSIBLE_DOMAIN) return;
  window.plausible?.(name, props ? { props } : undefined);
}
