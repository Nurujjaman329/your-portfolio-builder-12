import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/portfolio/Section";
import { Award, Coffee, Code2, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Alex Carter" },
      { name: "description", content: "Senior software engineer with 10+ years of experience leading teams and shipping products used by millions." },
      { property: "og:title", content: "About Alex Carter" },
      { property: "og:description", content: "Senior engineer, team lead, and lifelong learner." },
    ],
  }),
  component: About,
});

const skills = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "Vite"] },
  { group: "Backend", items: ["Node.js", "Go", "Rust", "GraphQL", "REST", "tRPC"] },
  { group: "Data", items: ["PostgreSQL", "Redis", "Kafka", "ClickHouse", "Elasticsearch"] },
  { group: "Cloud / DevOps", items: ["AWS", "GCP", "Kubernetes", "Terraform", "Docker", "GitHub Actions"] },
];

const facts = [
  { icon: Code2, label: "Years coding", value: "10+" },
  { icon: Users, label: "Engineers mentored", value: "40+" },
  { icon: Award, label: "Talks given", value: "12" },
  { icon: Coffee, label: "Cups of coffee", value: "∞" },
];

function About() {
  return (
    <Section
      eyebrow="About"
      title="Engineer, mentor, builder."
      description="I've spent the last decade building products at startups and scale-ups — from pre-seed prototypes to platforms serving millions. I care about craft, clarity, and shipping."
    >
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>
            I started writing code at 14, dropped out of a CS PhD to join an early-stage startup,
            and never really stopped. Today I split my time between hands-on engineering, system
            design, and coaching the next generation of senior engineers.
          </p>
          <p>
            Outside of work, you'll find me contributing to open source, writing about distributed
            systems on my blog, or training for the next marathon. I believe the best engineers
            are curious humans first.
          </p>
          <p>
            I'm based in <span className="text-primary font-semibold">Berlin</span>, work
            remote-first, and collaborate across time zones with global teams.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="rounded-xl border border-border/60 bg-card-gradient p-4 text-center">
                <f.icon className="mx-auto h-5 w-5 text-primary" />
                <div className="mt-2 font-display text-2xl font-bold">{f.value}</div>
                <div className="text-xs text-muted-foreground">{f.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {skills.map((s) => (
            <div key={s.group} className="rounded-xl border border-border/60 bg-card-gradient p-6 shadow-card">
              <h3 className="font-display text-lg font-semibold text-primary">{s.group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span key={it} className="rounded-md bg-secondary/70 px-3 py-1 font-mono text-xs">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
