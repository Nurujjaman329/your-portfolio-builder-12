import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/portfolio/Section";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — MD. Nurujjaman" },
      { name: "description", content: "Flutter developer experience at Sparktech Agency and Synergy Interface Ltd., plus academic and professional courses." },
      { property: "og:title", content: "Experience — MD. Nurujjaman" },
      { property: "og:description", content: "Career timeline of MD. Nurujjaman, Flutter Developer." },
    ],
  }),
  component: Experience,
});

const roles = [
  {
    company: "Sparktech Agency – Betopia Group",
    role: "Software Engineer (Flutter)",
    period: "Dec 2025 — Present",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Developing scalable Flutter applications with real-time data synchronization using Socket.IO.",
      "Integrating Google Maps APIs for advanced tracking and location-based services.",
      "Collaborating with distributed teams to ensure code quality, maintainability and performance.",
    ],
  },
  {
    company: "Synergy Interface Ltd.",
    role: "Software Developer (Flutter)",
    period: "Oct 2023 — Nov 2025",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Developed and maintained 6+ production-grade Flutter applications for enterprise and government clients.",
      "Applied clean architecture principles to ensure modular, testable and maintainable codebases.",
      "Optimized application performance through efficient state management and API handling.",
    ],
  },
];

const education = [
  {
    school: "Dhaka City College (National University, Bangladesh)",
    degree: "B.Sc. in Computer Science and Engineering",
    period: "2018 — 2021 (Held in 2023)",
    note: "CGPA 3.18 / 4.00",
  },
];

const courses = [
  {
    school: "BASIS SEIP",
    degree: "Mobile Application Development — Flutter",
    period: "Sep 2022 — Dec 2022",
    note: "Certificate",
  },
  {
    school: "WSDA New Zealand",
    degree: "Professional English Communication Skill",
    period: "Nov 2022",
    note: "Certificate",
  },
  {
    school: "Phitron",
    degree: "CSE Fundamentals",
    period: "—",
    note: "Certificate",
  },
];

function Experience() {
  return (
    <Section
      eyebrow="Experience"
      title="My professional journey."
      description="Two years of shipping Flutter apps for enterprise, government and agency clients — and counting."
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
        <div className="grid gap-4">
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

      {/* Professional Courses */}
      <div className="mt-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Professional Courses</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {courses.map((e) => (
            <div key={e.school} className="rounded-xl border border-border/60 bg-card-gradient p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">{e.period}</p>
              <h3 className="mt-1 font-display text-base font-semibold">{e.degree}</h3>
              <p className="text-sm text-muted-foreground">{e.school}</p>
              {e.note && <p className="mt-2 text-xs text-foreground/70">{e.note}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Extra Curricular */}
      <div className="mt-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Extra-Curricular</h2>
        <ul className="space-y-2 text-foreground/85">
          <li className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" /> Participation in DCC CSE Digital Week 2020</li>
          <li className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" /> Participation in DCC Inter Dept. Programming Contest 2019</li>
        </ul>
      </div>
    </Section>
  );
}
