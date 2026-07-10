import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type StoreLinksProps = {
  appStoreUrl?: string;
  playStoreUrl?: string;
  className?: string;
};

const linkClass =
  "inline-flex items-center gap-1.5 rounded-md border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs text-primary transition-colors hover:bg-primary/20";

export function StoreLinks({ appStoreUrl, playStoreUrl, className }: StoreLinksProps) {
  if (!appStoreUrl && !playStoreUrl) {
    return (
      <span className={cn("inline-flex items-center gap-1.5 font-mono text-xs text-primary", className)}>
        <ExternalLink className="h-3 w-3" /> Live on Store
      </span>
    );
  }

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {appStoreUrl && (
        <a href={appStoreUrl} target="_blank" rel="noreferrer" className={linkClass}>
          <ExternalLink className="h-3 w-3" /> App Store
        </a>
      )}
      {playStoreUrl && (
        <a href={playStoreUrl} target="_blank" rel="noreferrer" className={linkClass}>
          <ExternalLink className="h-3 w-3" /> Play Store
        </a>
      )}
    </div>
  );
}
