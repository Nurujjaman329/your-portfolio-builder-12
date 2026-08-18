import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { AppShowcase } from "@/components/portfolio/AppShowcase";
import { experienceStat, experienceText } from "@/data/profile";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => {
    const description = `Flutter Developer with ${experienceText()} of experience building cross-platform mobile apps with clean architecture, Socket.IO, Google Maps and secure payments.`;
    return {
      meta: [
        { title: SITE_NAME },
        { name: "description", content: description },
        { property: "og:title", content: SITE_NAME },
        {
          property: "og:description",
          content: `Flutter Developer · ${experienceText()} · Cross-platform mobile apps.`,
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: SITE_URL },
        { property: "og:image", content: OG_IMAGE },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: SITE_NAME },
        { name: "twitter:image", content: OG_IMAGE },
      ],
      links: [{ rel: "canonical", href: SITE_URL }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "MD. Nurujjaman",
            jobTitle: "Flutter Developer",
            url: SITE_URL,
            email: "mdnurujjaman329@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Dhaka",
              addressCountry: "BD",
            },
            sameAs: [
              "https://github.com/Nurujjaman329",
              "https://www.linkedin.com/in/nurujjaman329/",
            ],
            knowsAbout: [
              "Flutter",
              "Dart",
              "Mobile Development",
              "Clean Architecture",
              "Firebase",
              "Socket.IO",
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: SITE_NAME,
            url: SITE_URL,
            description,
          }),
        },
      ],
    };
  },
  component: Index,
});

const stats = [
  { value: experienceStat(), label: "Years experience" },
  { value: "13+", label: "Production apps" },
  { value: "2", label: "Companies" },
  { value: "5+", label: "Payment gateways" },
];

const stack = [
  "Flutter",
  "Dart",
  "Bloc",
  "Riverpod",
  "Provider",
  "Socket.IO",
  "Google Maps",
  "Firebase",
  "Stripe",
  "REST APIs",
  "Clean Architecture",
  "Git",
  "Figma",
  "Postman",
];

const highlights = [
  {
    title: "Cross-Platform Apps",
    desc: "Shipped 13+ Flutter apps — 4 live on the App Store and Google Play — from social commerce and beauty marketplaces to ride-sharing and government platforms.",
  },
  {
    title: "Real-Time & Maps",
    desc: "Socket.IO for live chat and feeds, Google Directions API for routing and auto-pricing, deep linking and push notifications integrated end-to-end.",
  },
  {
    title: "Secure Payments",
    desc: "Production payment integrations with Stripe, ShurjoPay, bKash and Nagad across fintech, insurance and e-commerce products.",
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
            <div className="mb-5 flex items-center gap-4">
              <img
                src={portrait}
                alt="MD. Nurujjaman"
                className="h-16 w-16 shrink-0 rounded-full border-2 border-primary/40 object-cover shadow-glow md:h-20 md:w-20"
              />
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary">
                <Sparkles className="h-3 w-3" />
                Flutter Developer · Dhaka, Bangladesh
              </p>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Crafting mobile apps <br />
              that <span className="text-gradient">just feel right</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-semibold">MD. Nurujjaman</span>, a Flutter
              Developer with {experienceText()} of experience building scalable, cross-platform
              mobile applications with clean architecture, real-time features and secure payments.
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
              <a
                href="https://github.com/Nurujjaman329"
                target="_blank"
                rel="noreferrer"
                className="transition-smooth hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nurujjaman329/"
                target="_blank"
                rel="noreferrer"
                className="transition-smooth hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:mdnurujjaman329@gmail.com"
                className="transition-smooth hover:text-primary"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl" />
            <div className="relative">
              <AppShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/50 bg-surface/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">What I do</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            A Flutter developer's toolkit.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="group relative rounded-2xl bg-card-gradient p-7 shadow-card border border-border/60 transition-spring hover:-translate-y-1 hover:shadow-glow"
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
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
                Tech I use daily
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold">My stack</h2>
            </div>
            <Link
              to="/about"
              className="text-sm text-primary hover:underline inline-flex items-center gap-1"
            >
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
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Have a Flutter project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Open to collaborating on innovative mobile products. Let's build something great
              together.
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
