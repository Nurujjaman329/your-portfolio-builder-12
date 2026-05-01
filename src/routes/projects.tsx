import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/portfolio/Section";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — MD. Nurujjaman" },
      { name: "description", content: "Selected Flutter projects: agriculture investment, distributor management, life insurance and education apps." },
      { property: "og:title", content: "Projects — MD. Nurujjaman" },
      { property: "og:description", content: "Flutter projects across fintech, govtech and edtech." },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    name: "MyKrishi",
    tag: "Smart Agriculture · Flutter",
    desc: "Smart agriculture investment platform with role-based interfaces for investors and agents. Implemented deep linking, real-time chat and secure payment integration using ShurjoPay.",
    stack: ["Flutter", "Dart", "ShurjoPay", "Socket.IO", "Deep Linking"],
    company: "Synergy Interface Ltd.",
    accent: "from-primary to-accent",
  },
  {
    name: "Distributor Management System",
    tag: "Enterprise · Logistics",
    desc: "Built role-based dashboards with real-time logistics tracking using Google Maps. Optimized state management and API handling for high performance across the field force.",
    stack: ["Flutter", "Google Maps", "REST API", "State Management"],
    company: "Synergy Interface Ltd.",
    accent: "from-accent to-primary",
  },
  {
    name: "Meghna Life Insurance",
    tag: "Fintech · Customer & Advisor Apps",
    desc: "Developed policy management, reporting and payment modules for both customers and advisors. Integrated secure digital payments via bKash and Nagad.",
    stack: ["Flutter", "bKash", "Nagad", "Clean Architecture"],
    company: "Synergy Interface Ltd.",
    accent: "from-primary to-accent",
  },
  {
    name: "Edex-365",
    tag: "EdTech · Education Platform",
    desc: "Engineered an educational application with notification systems and tight backend API synchronization for students and educators.",
    stack: ["Flutter", "Push Notifications", "REST API"],
    company: "Synergy Interface Ltd.",
    accent: "from-accent to-primary",
  },
  {
    name: "Nursery Management System",
    tag: "GovTech · Operations",
    desc: "Government nursery management application with notification systems and backend synchronization, focused on reliability and accessibility.",
    stack: ["Flutter", "Notifications", "API Sync"],
    company: "Synergy Interface Ltd.",
    accent: "from-primary to-accent",
  },
  {
    name: "Real-Time Tracking App",
    tag: "Current · Sparktech Agency",
    desc: "Building scalable Flutter applications with real-time data synchronization using Socket.IO and advanced Google Maps tracking and location-based services.",
    stack: ["Flutter", "Socket.IO", "Google Maps"],
    company: "Sparktech Agency – Betopia Group",
    accent: "from-accent to-primary",
  },
];

function Projects() {
  return (
    <Section
      eyebrow="Selected work"
      title="Apps I've built."
      description="A handful of Flutter projects I've shipped — from smart agriculture and logistics to insurance, education and government applications."
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
            </div>
            <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="rounded-md bg-secondary/70 px-2.5 py-1 font-mono text-xs">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between text-sm">
              <span className="text-xs text-muted-foreground">{p.company}</span>
              <a href="https://github.com/Nurujjaman329" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-primary transition-smooth hover:gap-2.5">
                <ExternalLink className="h-4 w-4" /> GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
