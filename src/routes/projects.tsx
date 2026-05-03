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
    name: "Fouta App",
    tag: "Social Commerce · Live on App Store",
    desc: "Engineered a 4-role system (user, seller, driver, admin) with separate onboarding flows and permission-based access. Built real-time messaging, feeds and stories using Socket.IO, and an end-to-end checkout and delivery management pipeline.",
    stack: ["Flutter", "Firebase", "Socket.IO", "REST API"],
    company: "Sparktech Agency – Betopia Group",
    accent: "from-primary to-accent",
    storeLink: true,
  },
  {
    name: "TNP Beauty",
    tag: "Beauty Marketplace · App Store & Play Store",
    desc: "Designed a 3-role platform (Customer, Vendor, Beautician) with location-based discovery and appointment booking. Integrated Stripe payments, vendor earnings dashboards and a business verification system.",
    stack: ["Flutter", "Stripe", "Geolocation", "REST API"],
    company: "Sparktech Agency – Betopia Group",
    accent: "from-accent to-primary",
    storeLink: true,
  },
  {
    name: "Ride Sharing App",
    tag: "Transport · Dual-role Platform",
    desc: "Built separate Passenger and Driver onboarding flows with OTP-based authentication and wallet management. Integrated Google Directions API for real-time routing and auto-pricing, with in-trip Socket.IO chat.",
    stack: ["Flutter", "Socket.IO", "Google Maps", "REST API"],
    company: "Sparktech Agency – Betopia Group",
    accent: "from-primary to-accent",
    storeLink: false,
  },
  {
    name: "MyKrishi",
    tag: "Agri-Tech · Smart Agriculture Investment",
    desc: "Developed a role-based platform serving farmers, investors and agents with tailored dashboards per role. Implemented deep linking for campaign sharing, ShurjoPay for investment payments and real-time chat via Socket.IO.",
    stack: ["Flutter", "ShurjoPay", "Socket.IO", "Deep Linking"],
    company: "Synergy Interface Ltd.",
    accent: "from-accent to-primary",
    storeLink: false,
  },
  {
    name: "Meghna Life Insurance",
    tag: "Fintech · Customer & Advisor Apps",
    desc: "Delivered a dual-app suite for a government-linked insurance provider. Integrated bKash and Nagad for secure digital premium payments, replacing manual collection workflows. Built policy management, reporting and analytics modules.",
    stack: ["Flutter", "bKash", "Nagad", "Clean Architecture"],
    company: "Synergy Interface Ltd.",
    accent: "from-primary to-accent",
    storeLink: false,
  },
  {
    name: "Distributor Management System",
    tag: "Enterprise · Logistics & Field Force",
    desc: "Built panel-based features for Distributors, SRs and TSOs with real-time location tracking and performance monitoring. Optimised state management for high reliability across large field teams.",
    stack: ["Flutter", "Google Maps", "REST API", "State Management"],
    company: "Synergy Interface Ltd.",
    accent: "from-accent to-primary",
    storeLink: false,
  },
  {
    name: "Edex-365",
    tag: "EdTech · Education Platform",
    desc: "Created Flutter interfaces for students and teachers with secure payment modules and real-time notification systems. Collaborated closely with the backend team to maintain smooth API connectivity.",
    stack: ["Flutter", "Push Notifications", "REST API"],
    company: "Synergy Interface Ltd.",
    accent: "from-primary to-accent",
    storeLink: false,
  },
  {
    name: "Nursery Management System",
    tag: "GovTech · Government Operations",
    desc: "Developed a mobile app for streamlining nursery operations including inventory and scheduling. Designed intuitive Flutter UIs, integrated backend APIs and conducted end-to-end testing for quality assurance.",
    stack: ["Flutter", "REST API", "Notifications"],
    company: "Synergy Interface Ltd.",
    accent: "from-accent to-primary",
    storeLink: false,
  },
];

function Projects() {
  return (
    <Section
      eyebrow="Selected work"
      title="Apps I've built."
      description="13+ Flutter apps shipped on App Store and Google Play — across social commerce, beauty, ride-sharing, agri-tech, fintech, edtech and government sectors."
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
              {p.storeLink && (
                <span className="inline-flex items-center gap-1.5 text-primary font-mono text-xs">
                  <ExternalLink className="h-3 w-3" /> Live on Store
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
