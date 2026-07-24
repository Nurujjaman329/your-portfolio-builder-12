/** Canonical site URL — set VITE_SITE_URL in production (e.g. https://nurujjaman.dev). */
export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? "https://nurujjaman.dev").replace(
  /\/$/,
  "",
);

export const SITE_NAME = "MD. Nurujjaman — Flutter Developer";

/** Default Open Graph image (project hero screenshot). Replace with a dedicated 1200×630 asset when ready. */
export const OG_IMAGE = `${SITE_URL}/projects/presentini/screenshot-01.jpg`;
