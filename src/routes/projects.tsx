import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/portfolio/Section";
import { ExternalLink, Github } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Alex Carter" },
      { name: "description", content: "Selected work from the past few years: SaaS platforms, developer tools, and open-source." },
      { property: "og:title", content: "Projects — Alex Carter" },
      { property: "og:description", content: "Selected work: SaaS platforms, developer tools, open source." },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    name: "Lumen Analytics",
    tag: "SaaS · Lead Engineer",
    desc: "Real-time product analytics platform processing 4B events/month. Designed the ingestion pipeline and rebuilt the query engine in Rust, cutting p99 latency by 70%.",
    stack: ["Rust", "ClickHouse", "Kafka", "React", "AWS"],
    year: "2025",
    accent: "from-primary to-accent",
  },
  {
    name: "Forge UI",
    tag: "Open Source",
    desc: "A headless React component library focused on accessibility and composition. 12k stars on GitHub, used by teams at Vercel, Linear, and Notion.",
    stack: ["TypeScript", "React", "Radix", "Tailwind"],
    year: "2024",
    accent: "from-accent to-primary",
  },
  {
    name: "Pulse DevTools",
    tag: "Developer Tools",
    desc: "Browser extension giving engineers x-ray vision into their app's network, state, and rendering pipeline. Acquired by a YC startup in 2024.",
    stack: ["TypeScript", "WebExtensions", "Vite"],
    year: "2024",
    accent: "from-primary to-accent",
  },
  {
    name: "Northwind Cloud",
    tag: "Platform · Architect",
    desc: "Multi-tenant logistics platform serving 200+ enterprise customers. Led migration from monolith to event-driven microservices on Kubernetes.",
    stack: ["Go", "Kubernetes", "PostgreSQL", "gRPC"],
    year: "2023",
    accent: "from-accent to-primary",
  },
  {
    name: "Echo Mail",
    tag: "Side Project",
    desc: "Privacy-first email client with end-to-end encryption and beautiful keyboard-first UI. 40k active users.",
    stack: ["Next.js", "Postgres", "WebCrypto"],
    year: "2023",
    accent: "from-primary to-accent",
  },
  {
    name: "Specter SDK",
    tag: "Open Source",
    desc: "Type-safe schema-first API framework for TypeScript. Powers internal tooling at several Fortune 500 companies.",
    stack: ["TypeScript", "Zod", "OpenAPI"],
    year: "2022",
    accent: "from-accent to-primary",
  },
];

function Projects() {
  return (
    <Section
      eyebrow="Selected work"
      title="Things I've built."
      description="A handful of projects from the last few years — products I shipped, platforms I architected, and open source I'm proud of."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card-gradient p-7 shadow-card transition-spring hover:-translate-y-1 hover:shadow-glow"
          >
            <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${p.accent} opacity-60`} />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-primary">{p.tag}</p>
                <h3 className="mt-1 font-display text-2xl font-semibold">{p.name}</h3>
              </div>
              <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
            </div>
            <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="rounded-md bg-secondary/70 px-2.5 py-1 font-mono text-xs">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm">
              <a href="#" className="inline-flex items-center gap-1.5 text-primary transition-smooth hover:gap-2.5">
                <ExternalLink className="h-4 w-4" /> Live
              </a>
              <a href="#" className="inline-flex items-center gap-1.5 text-muted-foreground transition-smooth hover:text-foreground">
                <Github className="h-4 w-4" /> Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
