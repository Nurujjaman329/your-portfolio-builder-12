import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { projects, type ProjectDetail } from "@/data/projects";
import { PhoneFrame, useAutoAdvance, usePrefersReducedMotion } from "./PhoneFrame";

/** Apps worth putting on the device: shipped, and with screenshots to show. */
const featured = projects.filter((p) => p.storeLink && p.images.length > 0).slice(0, 4);

/** Store listing mockups for the hero phone — separate from project-page screenshots. */
const showcaseStoreAssets: Record<string, { images: string[]; heroIndex?: number }> = {
  "tnp-beauty": {
    images: Array.from({ length: 13 }, (_, i) => `/projects/tnp-beauty/store/screenshot-${String(i + 1).padStart(2, "0")}.jpg`),
    heroIndex: 7,
  },
};

function showcaseShots(app: ProjectDetail): string[] {
  const store = showcaseStoreAssets[app.slug];
  if (store) {
    if (store.heroIndex !== undefined) {
      const hero = store.images[store.heroIndex];
      return hero ? [hero] : store.images.slice(0, 5);
    }
    return store.images.slice(0, 5);
  }
  return app.images.slice(0, 5);
}

/**
 * A live handset cycling through real shipped apps. The bottom bar
 * switches apps; the screen cross-fades between their screenshots.
 */
export function AppShowcase() {
  const [appIndex, setAppIndex] = useState(0);
  const [shotIndex, setShotIndex] = useState(0);
  const [engaged, setEngaged] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  const app = featured[appIndex];
  const shots = useMemo(() => (app ? showcaseShots(app) : []), [app]);

  // Pause autoplay once the visitor takes over — they're driving now.
  useAutoAdvance(shots.length, shotIndex, setShotIndex, {
    paused: engaged || reducedMotion,
  });

  if (!app) return null;

  function selectApp(i: number) {
    setEngaged(true);
    setAppIndex(i);
    setShotIndex(0);
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <PhoneFrame className="animate-float">
        <div className="absolute inset-0">
          {shots.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={i === shotIndex ? `${app.name} — app screenshot` : ""}
              loading={appIndex === 0 && i === 0 ? "eager" : "lazy"}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                i === shotIndex ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={i !== shotIndex}
            />
          ))}

          {/* App switcher — the phone's own dock */}
          <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-around gap-1 border-t border-white/10 bg-black/55 px-2 pb-4 pt-2.5 backdrop-blur-md">
            {featured.map((p, i) => (
              <button
                key={p.slug}
                onClick={() => selectApp(i)}
                aria-label={`Show ${p.name}`}
                aria-current={i === appIndex}
                className={`flex flex-1 flex-col items-center gap-1 rounded-lg px-1 py-1 transition-spring ${
                  i === appIndex ? "scale-105" : "opacity-55 hover:opacity-90"
                }`}
              >
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-[9px] bg-gradient-to-br ${p.accent} font-display text-[11px] font-bold text-primary-foreground shadow-glow`}
                >
                  {p.name.charAt(0)}
                </span>
                <span className="max-w-full truncate text-[8px] font-medium text-white/90">
                  {p.name.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </PhoneFrame>

      {/* Caption + screenshot dots */}
      <div className="text-center">
        <Link
          to="/projects/$slug"
          params={{ slug: app.slug }}
          className="font-display text-lg font-semibold transition-smooth hover:text-primary"
        >
          {app.name}
        </Link>
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          {app.tag} · Live on store
        </p>

        <div className="mt-3 flex items-center justify-center gap-1.5">
          {shots.map((src, i) => (
            <button
              key={src}
              onClick={() => {
                setEngaged(true);
                setShotIndex(i);
              }}
              aria-label={`Screenshot ${i + 1} of ${shots.length}`}
              className={`h-1.5 rounded-full transition-spring ${
                i === shotIndex ? "w-5 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
