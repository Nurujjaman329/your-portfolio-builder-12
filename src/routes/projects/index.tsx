import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/portfolio/Section";
import { ExternalLink, ArrowRight } from "lucide-react";
import { fetchProjects } from "@/lib/firestore-projects";
import { type ProjectDetail } from "@/data/projects";

export const Route = createFileRoute("/projects/")({
  loader: () => fetchProjects(),
  component: Projects,
});

function Projects() {
  const projects = Route.useLoaderData() as ProjectDetail[];

  return (
    <Section
      eyebrow="Selected work"
      title="Apps I've built."
      description="13+ Flutter apps shipped on App Store and Google Play — across social commerce, beauty, ride-sharing, agri-tech, fintech, edtech and government sectors."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            to="/projects/$slug"
            params={{ slug: p.slug }}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card-gradient p-7 shadow-card transition-spring hover:-translate-y-1 hover:shadow-glow block"
          >
            <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${p.accent} opacity-60`} />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-primary">{p.tag}</p>
                <h3 className="mt-1 font-display text-2xl font-semibold">{p.name}</h3>
              </div>
              <ArrowRight className="h-4 w-4 mt-2 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </div>
            <p className="mt-4 text-muted-foreground leading-relaxed line-clamp-3">{p.overview}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.slice(0, 4).map((s) => (
                <span key={s.name} className="rounded-md bg-secondary/70 px-2.5 py-1 font-mono text-xs">
                  {s.name}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between text-sm">
              <span className="text-xs text-muted-foreground">{p.company}</span>
              {p.storeLink && (
                <span className="inline-flex items-center gap-1.5 text-primary font-mono text-xs">
                  <ExternalLink className="h-3 w-3" /> Live on Store
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
