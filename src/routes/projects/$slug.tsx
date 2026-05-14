import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Layers, Zap, Package } from "lucide-react";
import { fetchProject } from "@/lib/firestore-projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: async ({ params }) => {
    const project = await fetchProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const project = Route.useLoaderData();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link
        to="/projects"
        className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> All Projects
      </Link>

      <header className="mb-10">
        <div className={`mb-4 h-px w-16 bg-gradient-to-r ${project.accent}`} />
        <p className="font-mono text-xs uppercase tracking-widest text-primary">{project.tag}</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-foreground">{project.name}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{project.tagline}</p>
        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
          <span className="text-muted-foreground">{project.company}</span>
          <span className="text-border">·</span>
          <span className="text-muted-foreground">{project.period}</span>
          <span className="text-border">·</span>
          <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-0.5 font-mono text-xs text-primary">
            {project.status}
          </span>
          {project.storeLink && (
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-primary">
              <ExternalLink className="h-3 w-3" /> Live on Store
            </span>
          )}
        </div>
      </header>

      {/* Screenshots */}
      <section className="mb-12">
        {project.images.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {project.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${project.name} screenshot ${i + 1}`}
                className="rounded-xl border border-border/60 object-cover shadow-card"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex h-48 items-center justify-center rounded-xl border border-dashed border-border/60 bg-secondary/30">
                <p className="font-mono text-xs text-muted-foreground/50">Screenshot {n}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      <div className="space-y-10">
        <Block title="Overview" icon={<Layers className="h-4 w-4" />}>
          <p className="text-foreground/80 leading-relaxed">{project.overview}</p>
        </Block>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-secondary/20 p-6">
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">The Challenge</p>
            <p className="text-sm text-foreground/80 leading-relaxed">{project.challenge}</p>
          </div>
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">The Solution</p>
            <p className="text-sm text-foreground/80 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        <Block title="Key Features" icon={<Zap className="h-4 w-4" />}>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <div key={h.title} className="rounded-xl border border-border/60 bg-card-gradient p-5">
                <p className="font-semibold text-foreground">{h.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Architecture" icon={<Layers className="h-4 w-4" />}>
          <div className="rounded-xl border border-border/60 bg-card-gradient p-6">
            <span className="rounded-md bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary">
              {project.architecture.pattern}
            </span>
            <p className="mb-5 mt-4 text-sm text-foreground/80 leading-relaxed">{project.architecture.description}</p>
            <div className="space-y-3">
              {project.architecture.layers.map((layer, i) => (
                <div key={layer.name} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 font-mono text-xs font-bold text-primary">
                      {i + 1}
                    </div>
                    {i < project.architecture.layers.length - 1 && <div className="mt-1 h-full w-px bg-border/60" />}
                  </div>
                  <div className="pb-4">
                    <p className="font-semibold text-foreground">{layer.name}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{layer.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Block>

        <Block title="State Management" icon={<Zap className="h-4 w-4" />}>
          <div className="rounded-xl border border-border/60 bg-card-gradient p-6">
            <span className="rounded-md bg-accent/10 px-3 py-1 font-mono text-xs font-semibold text-accent">
              {project.stateManagement.solution}
            </span>
            <p className="mt-4 text-sm text-foreground/80 leading-relaxed">{project.stateManagement.reason}</p>
          </div>
        </Block>

        <Block title="Tech Stack" icon={<Package className="h-4 w-4" />}>
          <div className="grid gap-3 sm:grid-cols-2">
            {project.stack.map((s) => (
              <div key={s.name} className="flex items-start gap-3 rounded-xl border border-border/60 bg-card-gradient p-4">
                <span className="mt-0.5 rounded-md bg-secondary/70 px-2 py-0.5 font-mono text-xs shrink-0">{s.name}</span>
                <span className="text-sm text-muted-foreground">{s.purpose}</span>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Outcome" icon={<Zap className="h-4 w-4" />}>
          <ul className="space-y-2">
            {project.results.map((r) => (
              <li key={r} className="flex items-start gap-3 text-foreground/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {r}
              </li>
            ))}
          </ul>
        </Block>
      </div>

      <div className="mt-12 border-t border-border/60 pt-8">
        <Link to="/projects" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to all projects
        </Link>
      </div>
    </div>
  );
}

function Block({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <section>
      <div className="mb-4 flex items-center gap-2 text-muted-foreground">
        {icon}
        <h2 className="font-mono text-xs uppercase tracking-widest">{title}</h2>
      </div>
      {children}
    </section>
  );
}
