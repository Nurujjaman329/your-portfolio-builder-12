import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/portfolio/Section";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Alex Carter" },
      { name: "description", content: "10+ years of senior engineering experience across startups, scale-ups, and open source." },
      { property: "og:title", content: "Experience — Alex Carter" },
      { property: "og:description", content: "Career timeline of a senior software engineer." },
    ],
  }),
  component: Experience,
});

const roles = [
  {
    company: "Lumen Analytics",
    role: "Staff Software Engineer",
    period: "2023 — Present",
    location: "Berlin · Remote",
    bullets: [
      "Lead a platform team of 8 engineers building real-time analytics infrastructure.",
      "Re-architected the query engine in Rust, reducing p99 latency by 70% and infra cost by 40%.",
      "Drove the company's adoption of feature flags, trunk-based development and CI/CD.",
    ],
  },
  {
    company: "Northwind Cloud",
    role: "Senior Software Engineer",
    period: "2020 — 2023",
    location: "Amsterdam",
    bullets: [
      "Migrated a 6-year-old Rails monolith to a Go microservices platform on Kubernetes.",
      "Built the internal developer platform used by 50+ engineers daily.",
      "Mentored 12 engineers, 4 of whom were promoted to senior under my guidance.",
    ],
  },
  {
    company: "Specter Labs",
    role: "Software Engineer",
    period: "2017 — 2020",
    location: "London",
    bullets: [
      "Joined as employee #5; helped grow eng team from 3 to 25 over three years.",
      "Owned the entire frontend stack and shipped the first paying-customer product.",
      "Open-sourced internal tooling that became the company's flagship SDK.",
    ],
  },
  {
    company: "Freelance & Indie",
    role: "Full-Stack Developer",
    period: "2014 — 2017",
    location: "Remote",
    bullets: [
      "Built MVPs and production apps for 20+ early-stage startups across Europe.",
      "Specialized in real-time apps with WebSockets, React, and Node.js.",
    ],
  },
];

const education = [
  {
    school: "TU Munich",
    degree: "M.Sc. Computer Science",
    period: "2012 — 2014",
    note: "Distributed Systems · Thesis on consensus algorithms.",
  },
  {
    school: "University of Edinburgh",
    degree: "B.Sc. Software Engineering, First Class",
    period: "2009 — 2012",
  },
];

function Experience() {
  return (
    <Section
      eyebrow="Experience"
      title="A decade in the trenches."
      description="From freelance hacker to staff engineer leading platform teams. Here's the path."
    >
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2" />
        <div className="space-y-10">
          {roles.map((r, i) => (
            <div
              key={r.company}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              <div className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-br from-primary to-accent shadow-glow md:left-1/2" />
              <div className="ml-12 md:ml-0">
                <div className="rounded-2xl border border-border/60 bg-card-gradient p-6 shadow-card transition-spring hover:shadow-glow">
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">{r.period}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold">{r.role}</h3>
                  <p className="text-muted-foreground">
                    {r.company} <span className="text-foreground/40">·</span> {r.location}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-foreground/85">
                    {r.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="hidden md:block" />
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-20">
        <h2 className="font-display text-2xl font-semibold mb-6">Education</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((e) => (
            <div key={e.school} className="rounded-xl border border-border/60 bg-card-gradient p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">{e.period}</p>
              <h3 className="mt-1 font-display text-lg font-semibold">{e.degree}</h3>
              <p className="text-muted-foreground">{e.school}</p>
              {e.note && <p className="mt-2 text-sm text-foreground/70">{e.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
