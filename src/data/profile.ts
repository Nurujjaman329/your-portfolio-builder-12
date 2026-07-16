/**
 * Single source of truth for facts that drift with time.
 * Update the constants here — never hardcode a duration in a page.
 */

/** First day at Synergy Interface Ltd. — start of professional Flutter work. */
export const EXPERIENCE_START = new Date(2023, 9, 1); // Oct 2023

function monthsSince(start: Date, now: Date): number {
  const months =
    (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  // Don't count the current month until the day-of-month has come around.
  return Math.max(0, now.getDate() < start.getDate() ? months - 1 : months);
}

/**
 * Prose form, always true on the day it renders:
 * "2+ years" → "nearly 3 years" → "3 years" → "3+ years"
 */
export function experienceText(now: Date = new Date()): string {
  const months = monthsSince(EXPERIENCE_START, now);
  const years = Math.floor(months / 12);
  const remainder = months % 12;
  if (remainder >= 9) return `nearly ${years + 1} years`;
  if (remainder === 0) return `${years} years`;
  return `${years}+ years`;
}

/** Compact form for stat tiles: "2+", "~3", "3". */
export function experienceStat(now: Date = new Date()): string {
  const months = monthsSince(EXPERIENCE_START, now);
  const years = Math.floor(months / 12);
  const remainder = months % 12;
  if (remainder >= 9) return `~${years + 1}`;
  if (remainder === 0) return `${years}`;
  return `${years}+`;
}
