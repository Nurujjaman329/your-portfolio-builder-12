/** Canonical site URL — set VITE_SITE_URL in production (e.g. https://nurujjaman.dev). */
export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? "https://nurujjaman.dev").replace(
  /\/$/,
  "",
);

export const SITE_NAME = "MD. Nurujjaman — Flutter Developer";

/** Default Open Graph image. Not cropped to the ideal 1200×630 ratio yet — replace with a dedicated banner when ready. */
export const OG_IMAGE = `${SITE_URL}/portrait.jpg`;
