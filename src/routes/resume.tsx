import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/portfolio/Section";
import { Download, Mail, MapPin, Phone, Globe } from "lucide-react";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume / CV — MD. Nurujjaman" },
      { name: "description", content: "Full resume of MD. Nurujjaman, Flutter Developer. Skills, experience, education and certifications." },
      { property: "og:title", content: "Resume — MD. Nurujjaman" },
      { property: "og:description", content: "Full CV of a Flutter Developer." },
    ],
  }),
  component: Resume,
});

function Resume() {
  return (
    <Section
      eyebrow="Curriculum Vitae"
      title="Resume."
      description="The full picture — print-friendly and ready to share."
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
        <header className="border-b border-border/60 pb-8">
          <h1 className="font-display text-4xl font-bold text-gradient">MD. Nurujjaman</h1>
          <p className="mt-1 text-lg text-foreground/80">Flutter Developer · Dhaka, Bangladesh</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Mail className="h-4 w-4 text-primary" /> mdnurujjaman329@gmail.com</span>
            <span className="inline-flex items-center gap-1.5"><Phone className="h-4 w-4 text-primary" /> +880 1957 073942</span>
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" /> Mohakhali, Dhaka</span>
            <a className="inline-flex items-center gap-1.5 hover:text-primary" href="https://www.linkedin.com/in/nurujjaman329/" target="_blank" rel="noreferrer"><Globe className="h-4 w-4 text-primary" /> linkedin.com/in/nurujjaman329</a>
          </div>
        </header>

        <Block title="Career Objective">
          <p className="text-foreground/85 leading-relaxed">
            Experienced Flutter Developer with 2+ years of expertise in building high-performance, cross-platform
            mobile applications. Skilled in clean architecture, responsive UI, and integrating key features like
            push notifications, Google Maps, Socket.IO, deep linking, location and secure payments. Passionate
            about collaborating with innovative teams to deliver scalable, user-friendly solutions while
            continuously advancing my technical skills.
          </p>
        </Block>

        <Block title="Experience">
          <Job role="Software Engineer (Flutter)" company="Sparktech Agency – Betopia Group" period="Dec 2025 — Present"
            bullets={[
              "Developing scalable Flutter applications with real-time data synchronization using Socket.IO.",
              "Integrating Google Maps APIs for advanced tracking and location-based services.",
              "Collaborating with distributed teams to ensure code quality, maintainability and performance.",
            ]}
          />
          <Job role="Software Developer (Flutter)" company="Synergy Interface Ltd." period="Oct 2023 — Nov 2025"
            bullets={[
              "Developed and maintained 6+ production-grade Flutter applications for enterprise and government clients.",
              "Applied clean architecture principles to ensure modular, testable and maintainable codebases.",
              "Optimized application performance through efficient state management and API handling.",
            ]}
          />
        </Block>

        <Block title="Key Projects">
          <Job role="MyKrishi — Smart Agriculture Investment Platform" company="Role-based investor & agent app" period=""
            bullets={[
              "Developed role-based Flutter interfaces for investors and agents.",
              "Implemented deep linking, real-time chat and secure payment integration using ShurjoPay.",
            ]} />
          <Job role="Distributor Management System (DMS)" company="Enterprise logistics" period=""
            bullets={["Built role-based dashboards with real-time logistics tracking using Google Maps."]} />
          <Job role="Meghna Life Insurance — Customer & Advisor Apps" company="Fintech / Insurance" period=""
            bullets={[
              "Developed policy management, reporting and payment modules.",
              "Integrated secure digital payments via bKash and Nagad.",
            ]} />
          <Job role="Edex-365 & Nursery Management System" company="Education & Government" period=""
            bullets={["Engineered educational and government applications with notification systems and backend API synchronization."]} />
        </Block>

        <Block title="Skills">
          <div className="grid gap-3 sm:grid-cols-2">
            <SkillRow label="Languages" items={["Dart", "C", "C++"]} />
            <SkillRow label="Framework" items={["Flutter"]} />
            <SkillRow label="Mobile" items={["Clean Architecture", "State Management", "REST API", "Push Notifications", "Deep Linking"]} />
            <SkillRow label="Integrations" items={["Google Maps", "Socket.IO", "ShurjoPay", "bKash", "Nagad"]} />
            <SkillRow label="Tools" items={["Git", "GitHub", "VS Code", "Figma"]} />
          </div>
        </Block>

        <Block title="Education">
          <Job role="B.Sc. in Computer Science and Engineering" company="Dhaka City College (National University, Bangladesh)" period="2018 — 2021 (Held in 2023)"
            bullets={["CGPA 3.18 / 4.00"]} />
        </Block>

        <Block title="Professional Courses">
          <ul className="space-y-2 text-foreground/85">
            <li>• Mobile Application Development — Flutter · BASIS SEIP (Sep 2022 – Dec 2022)</li>
            <li>• Professional English Communication Skill · WSDA New Zealand (Nov 2022)</li>
            <li>• CSE Fundamentals · Phitron</li>
          </ul>
        </Block>

        <Block title="Extra-Curricular Activities">
          <ul className="space-y-2 text-foreground/85">
            <li>• Participation in DCC CSE Digital Week 2020</li>
            <li>• Participation in DCC Inter Dept. Programming Contest 2019</li>
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
        {period && <span className="font-mono text-xs text-muted-foreground">{period}</span>}
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
