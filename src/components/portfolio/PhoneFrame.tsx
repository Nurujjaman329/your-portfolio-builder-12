import { useEffect, useRef, useState, type ReactNode } from "react";
import { Signal, Wifi, BatteryFull } from "lucide-react";

/**
 * Device chrome. Renders children as the screen content at a real
 * handset aspect ratio (9:19.5), so screenshots sit unscaled.
 */
export function PhoneFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto w-[clamp(220px,72vw,300px)] ${className}`}>
      {/* Bezel */}
      <div className="relative rounded-[2.25rem] border border-border/80 bg-[oklch(0.12_0.02_250)] p-2 shadow-elegant">
        {/* Side buttons */}
        <span className="absolute -left-[3px] top-24 h-12 w-[3px] rounded-l bg-border" aria-hidden />
        <span className="absolute -left-[3px] top-40 h-8 w-[3px] rounded-l bg-border" aria-hidden />
        <span className="absolute -right-[3px] top-32 h-16 w-[3px] rounded-r bg-border" aria-hidden />

        {/* Screen */}
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.75rem] bg-background">
          <StatusBar />
          {children}
        </div>

        {/* Dynamic island — over the screen, inside the bezel */}
        <div className="pointer-events-none absolute left-1/2 top-[14px] h-[22px] w-[76px] -translate-x-1/2 rounded-full bg-black" aria-hidden />
      </div>
    </div>
  );
}

function StatusBar() {
  const [time, setTime] = useState(() => clockLabel(new Date()));

  useEffect(() => {
    // Tick on the minute rather than every second — nothing else changes.
    const id = setInterval(() => setTime(clockLabel(new Date())), 15_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 pt-[9px] text-[10px] font-medium text-white mix-blend-difference">
      <span className="tabular-nums">{time}</span>
      <span className="flex items-center gap-1">
        <Signal className="h-3 w-3" />
        <Wifi className="h-3 w-3" />
        <BatteryFull className="h-3.5 w-3.5" />
      </span>
    </div>
  );
}

function clockLabel(d: Date): string {
  return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: false });
}

/** Reduced-motion users get no autoplay. */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/**
 * Advances an index on an interval, pausing while `paused` is true.
 * Resets its timer whenever `index` changes so a manual tap gets a
 * full dwell before the next auto-advance.
 */
export function useAutoAdvance(
  count: number,
  index: number,
  setIndex: (updater: (i: number) => number) => void,
  { paused, intervalMs = 3400 }: { paused: boolean; intervalMs?: number },
) {
  const savedSetIndex = useRef(setIndex);
  savedSetIndex.current = setIndex;

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setTimeout(() => savedSetIndex.current((i) => (i + 1) % count), intervalMs);
    return () => clearTimeout(id);
  }, [paused, count, index, intervalMs]);
}
