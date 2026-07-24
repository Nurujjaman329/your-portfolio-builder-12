import { Link } from "@tanstack/react-router";
import { Home, User, LayoutGrid, FileText, Mail, Briefcase } from "lucide-react";

/**
 * App-style tab bar. Mobile only — desktop keeps the header nav.
 * Six tabs — labels kept short so they fit on narrow screens.
 */
const tabs = [
  { to: "/", label: "Home", icon: Home, exact: true },
  { to: "/projects", label: "Work", icon: LayoutGrid, exact: false },
  { to: "/experience", label: "Career", icon: Briefcase, exact: false },
  { to: "/about", label: "About", icon: User, exact: false },
  { to: "/resume", label: "Resume", icon: FileText, exact: false },
  { to: "/contact", label: "Contact", icon: Mail, exact: false },
] as const;

export function BottomNav() {
  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border/60 glass pb-[env(safe-area-inset-bottom)] md:hidden print:hidden"
    >
      <ul className="flex items-stretch justify-around">
        {tabs.map((t) => (
          <li key={t.to} className="flex-1">
            <Link
              to={t.to}
              activeOptions={{ exact: t.exact }}
              className="flex flex-col items-center gap-1 px-1 py-2.5 text-muted-foreground transition-smooth"
              activeProps={{ className: "text-primary" }}
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`flex h-7 w-12 items-center justify-center rounded-full transition-spring ${
                      isActive ? "bg-primary/15" : ""
                    }`}
                  >
                    <t.icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="text-[10px] font-medium leading-none">{t.label}</span>
                </>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
