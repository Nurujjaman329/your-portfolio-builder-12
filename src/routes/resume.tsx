import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/portfolio/Section";
import { Download, Mail, MapPin, Phone, Globe } from "lucide-react";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume / CV — Alex Carter" },
      { name: "description", content: "Full resume of Alex Carter, senior software engineer. Skills, experience, education and certifications." },
      { property: "og:title", content: "Resume — Alex Carter" },
      { property: "og:description", content: "Full CV of a senior software engineer." },
    ],
  }),
  component: Resume,
});

function Resume() {
  return (
    <Section
      eyebrow="Curriculum Vitae"
      title="Resume."
      description="Here's the full picture — print-friendly and ready to share."
    >
      <div className="mb-6 flex justify-end">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-spring hover:scale-105"
        >
          <Download className="h-4 w-4" /> Download PDF
        </a>
      </div>

      <article className="rounded-2xl border border-border/60 bg-card-gradient p-10 shadow-elegant">
        {/* Header */}
        <header className="border-b border-border/60 pb-8">
          <h1 className="font-display text-4xl font-bold text-gradient">Alex Carter</h1>
          <p className="mt-1 text-lg text-foreground/80">Senior Software Engineer · Berlin, Germany</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Mail className="h-4 w-4 text-primary" /> hello@alex.dev</span>
            <span className="inline-flex items-center gap-1.5"><Phone className="h-4 w-4 text-primary" /> +49 30 1234 5678</span>
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" /> Berlin, DE</span>
            <span className="inline-flex items-center gap-1.5"><Globe className="h-4 w-4 text-primary" /> alex.dev</span>
          </div>
        </header>

        {/* Summary */}
        <Block title="Profile">
          <p className="text-foreground/85 leading-relaxed">
            Senior full-stack engineer with 10+ years of experience designing and shipping
            scalable web platforms. Strong background in distributed systems, developer tooling,
            and product engineering. Proven leader who mentors teams and drives engineering
            culture. Comfortable owning systems end-to-end from architecture to production.
          </p>
        </Block>

        {/* Experience */}
        <Block title="Experience">
          <Job role="Staff Software Engineer" company="Lumen Analytics, Berlin" period="2023 — Present"
            bullets={[
              "Lead an 8-person platform team building real-time analytics for 4B events/month.",
              "Re-architected query engine in Rust → 70% lower p99 latency, 40% infra savings.",
              "Drove adoption of feature flags, trunk-based development and progressive delivery.",
            ]}
          />
          <Job role="Senior Software Engineer" company="Northwind Cloud, Amsterdam" period="2020 — 2023"
            bullets={[
              "Migrated 6-year monolith to event-driven Go microservices on Kubernetes.",
              "Built the internal developer platform used by 50+ engineers daily.",
              "Mentored 12 engineers; 4 promoted to senior level.",
            ]}
          />
          <Job role="Software Engineer" company="Specter Labs, London" period="2017 — 2020"
            bullets={[
              "Employee #5 — helped grow eng team from 3 to 25.",
              "Owned the entire frontend stack and shipped first paying product.",
              "Open-sourced the company's flagship SDK (8k+ GitHub stars).",
            ]}
          />
          <Job role="Full-Stack Developer (Freelance)" company="Remote" period="2014 — 2017"
            bullets={[
              "Built MVPs and production apps for 20+ early-stage startups.",
            ]}
          />
        </Block>

        {/* Skills */}
        <Block title="Skills">
          <div className="grid gap-3 sm:grid-cols-2">
            <SkillRow label="Languages" items={["TypeScript", "Go", "Rust", "Python", "SQL"]} />
            <SkillRow label="Frontend" items={["React", "Next.js", "Tailwind", "Vite"]} />
            <SkillRow label="Backend" items={["Node.js", "GraphQL", "gRPC", "REST", "Kafka"]} />
            <SkillRow label="Cloud" items={["AWS", "GCP", "Kubernetes", "Terraform", "Docker"]} />
          </div>
        </Block>

        {/* Education */}
        <Block title="Education">
          <Job role="M.Sc. Computer Science" company="TU Munich" period="2012 — 2014"
            bullets={["Specialization in Distributed Systems · Thesis on consensus algorithms."]} />
          <Job role="B.Sc. Software Engineering, First Class" company="University of Edinburgh" period="2009 — 2012"
            bullets={[]} />
        </Block>

        {/* Certs & Languages */}
        <Block title="Certifications & Languages">
          <ul className="space-y-2 text-foreground/85">
            <li>• AWS Certified Solutions Architect — Professional (2024)</li>
            <li>• CKA — Certified Kubernetes Administrator (2022)</li>
            <li>• English (native) · German (C1) · Spanish (B1)</li>
          </ul>
        </Block>
      </article>
    </Section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-primary">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Job({ role, company, period, bullets }: { role: string; company: string; period: string; bullets: string[] }) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-lg font-semibold">{role}</h3>
        <span className="font-mono text-xs text-muted-foreground">{period}</span>
      </div>
      <p className="text-sm text-muted-foreground">{company}</p>
      {bullets.length > 0 && (
        <ul className="mt-2 space-y-1 text-sm text-foreground/85">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SkillRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-1 text-foreground/90">{items.join(" · ")}</p>
    </div>
  );
}
