import { Link, useNavigate } from "@tanstack/react-router";
import { Smartphone } from "lucide-react";
import { useRef } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-glow transition-spring group-hover:scale-110">
            <Smartphone className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">
            nurujjaman<span className="text-primary">.dev</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-md transition-smooth hover:text-foreground hover:bg-secondary"
              activeProps={{ className: "px-3 py-2 text-sm font-medium rounded-md text-primary bg-secondary" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center rounded-md bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-spring hover:scale-105"
        >
          Hire me
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  const navigate = useNavigate();
  const clickCount = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleSecretClick() {
    clickCount.current += 1;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      clickCount.current = 0;
    }, 3000);
    if (clickCount.current >= 5) {
      clickCount.current = 0;
      navigate({ to: "/admin" });
    }
  }

  return (
    <footer className="border-t border-border/50 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p
          onClick={handleSecretClick}
          className="select-none cursor-default"
        >
          © {new Date().getFullYear()} MD. Nurujjaman — Flutter Developer.
        </p>
        <p className="font-mono text-xs">Built with React · TypeScript · TanStack</p>
      </div>
    </footer>
  );
}
