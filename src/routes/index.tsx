import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Carter — Senior Software Engineer" },
      { name: "description", content: "Senior full-stack engineer specializing in scalable React, TypeScript and cloud architectures. 10+ years shipping production software." },
      { property: "og:title", content: "Alex Carter — Senior Software Engineer" },
      { property: "og:description", content: "Senior full-stack engineer. 10+ years shipping production software." },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "10+", label: "Years building" },
  { value: "60+", label: "Projects shipped" },
  { value: "20+", label: "Teams led" },
  { value: "4M+", label: "Users impacted" },
];

const stack = [
  "TypeScript", "React", "Next.js", "Node.js", "GraphQL",
  "PostgreSQL", "AWS", "Kubernetes", "Terraform", "Rust",
];

const highlights = [
  {
    title: "Architecture",
    desc: "Designing distributed systems that scale to millions of users without breaking the bank.",
  },
  {
    title: "Product Engineering",
    desc: "Shipping pixel-perfect, accessible interfaces that users actually love.",
  },
  {
    title: "Team Leadership",
    desc: "Mentoring engineers, running design reviews, and raising the bar on craft.",
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="animate-fade-up">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary">
              <Sparkles className="h-3 w-3" />
              Available for senior roles · Q3 2026
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Building software <br />
              that <span className="text-gradient">scales beautifully</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-semibold">Alex Carter</span>, a senior software engineer with a decade of experience designing distributed systems, leading platform teams, and shipping products used by millions.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-spring hover:scale-105"
              >
                View my work <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/60 px-5 py-3 text-sm font-semibold transition-smooth hover:bg-secondary"
              >
                <Download className="h-4 w-4" /> Resume
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-4 text-muted-foreground">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="transition-smooth hover:text-primary"><Github className="h-5 w-5" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition-smooth hover:text-primary"><Linkedin className="h-5 w-5" /></a>
              <a href="mailto:hello@alex.dev" className="transition-smooth hover:text-primary"><Mail className="h-5 w-5" /></a>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-elegant animate-float">
              <img
                src={heroImage}
                alt="Senior developer working at night on a laptop with glowing code"
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-6">
                <p className="font-mono text-xs text-primary">$ deploying to production...</p>
                <p className="font-mono text-xs text-muted-foreground mt-1">✓ build complete · 0 errors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/50 bg-surface/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">What I do</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">A senior engineer's toolkit.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="group relative rounded-2xl bg-card-gradient p-7 shadow-card border border-border/60 transition-spring hover:-translate-y-1 hover:shadow-glow"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute top-0 left-7 -translate-y-1/2 rounded-md bg-gradient-to-r from-primary to-accent px-2 py-0.5 font-mono text-xs font-bold text-primary-foreground">
                0{i + 1}
              </div>
              <h3 className="font-display text-2xl font-semibold">{h.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-2xl border border-border/60 bg-card-gradient p-10 shadow-card">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">Tech I love</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold">My daily stack</h2>
            </div>
            <Link to="/about" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
              More about me <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {stack.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border bg-secondary/60 px-4 py-2 font-mono text-sm text-foreground/90 transition-smooth hover:border-primary hover:text-primary"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-surface to-accent/10 p-12 text-center shadow-elegant">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl font-bold">Have a project in mind?</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              I'm currently taking on a small number of senior contracts and full-time roles. Let's talk.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-spring hover:scale-105"
            >
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
