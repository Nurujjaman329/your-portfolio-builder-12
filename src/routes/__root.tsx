import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Header, Footer } from "@/components/portfolio/Layout";
import { BottomNav } from "@/components/portfolio/BottomNav";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-hero px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-spring hover:scale-105"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {/* Clears the fixed tab bar so the footer isn't trapped under it. */}
      <div className="h-16 md:hidden print:hidden" aria-hidden />
      <BottomNav />
    </div>
  );
}
