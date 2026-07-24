import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/portfolio/Section";
import { Printer, Mail, MapPin, Phone, Globe } from "lucide-react";
import { experienceText } from "@/data/profile";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume / CV — MD. Nurujjaman" },
      {
        name: "description",
        content:
          "Full resume of MD. Nurujjaman, Flutter Developer. Skills, experience, education and certifications.",
      },
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
      description="Print-friendly CV — use Save as PDF in your browser's print dialog to download a copy."
    >
      <div className="mb-6 flex flex-col items-end gap-2 print:hidden">
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-spring hover:scale-105"
        >
          <Printer className="h-4 w-4" /> Save as PDF
        </button>
        <p className="text-xs text-muted-foreground">
          Opens print dialog → choose &quot;Save as PDF&quot; as the destination.
        </p>
      </div>

      <article className="rounded-2xl border border-border/60 bg-card-gradient p-10 shadow-elegant">
        <header className="border-b border-border/60 pb-8">
          <h1 className="font-display text-4xl font-bold text-gradient">MD. Nurujjaman</h1>
          <p className="mt-1 text-lg text-foreground/80">Flutter Developer · Dhaka, Bangladesh</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Mail className="h-4 w-4 text-primary" /> mdnurujjaman329@gmail.com
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-4 w-4 text-primary" /> +880 1957 073942
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" /> Mohakhali, Dhaka
            </span>
            <a
              className="inline-flex items-center gap-1.5 hover:text-primary"
              href="https://www.linkedin.com/in/nurujjaman329/"
              target="_blank"
              rel="noreferrer"
            >
              <Globe className="h-4 w-4 text-primary" /> linkedin.com/in/nurujjaman329
            </a>
          </div>
        </header>

        <Block title="Career Objective">
          <p className="text-foreground/85 leading-relaxed">
            Flutter Developer with {experienceText()} of experience building scalable cross-platform
            applications across social commerce, beauty, ride-sharing, agri-tech and enterprise
            sectors. Experienced in clean architecture, real-time systems (Socket.IO), map-based
            services and secure payment integrations (Stripe, bKash, Nagad, ShurjoPay). Proven track
            record of delivering 13+ production apps on the App Store and Google Play.
          </p>
        </Block>

        <Block title="Experience">
          <Job
            role="Software Engineer (Flutter)"
            company="Sparktech Agency – Betopia Group"
            period="Dec 2025 — Present"
            bullets={[
              "Delivered 7 production apps across social, beauty, transport and utility sectors, published on both App Store and Google Play.",
              "Architected real-time data sync using Socket.IO, enabling seamless multi-role communication across user bases.",
              "Integrated Google Maps APIs for live location tracking and geo-based service discovery.",
              "Collaborated across distributed teams on performance optimisation, code reviews and scalable module design.",
            ]}
          />
          <Job
            role="Software Developer (Flutter)"
            company="Synergy Interface Ltd."
            period="Oct 2023 — Nov 2025"
            bullets={[
              "Developed 6+ production-grade Flutter apps for enterprise and government clients, including insurance and agriculture sectors.",
              "Applied Clean Architecture (MVVM) to produce modular, testable codebases, reducing onboarding time for new developers.",
              "Optimised state management and API handling, reducing load times and improving app responsiveness.",
              "Integrated bKash, Nagad and ShurjoPay gateways, enabling secure digital transactions for government insurance clients.",
            ]}
          />
        </Block>

        <Block title="Key Projects">
          <Job
            role="Fouta App — Social Commerce Platform"
            company="Sparktech Agency · Live on App Store"
            period=""
            bullets={[
              "Engineered a 4-role system (user, seller, driver, admin) with separate onboarding flows and permission-based access control.",
              "Built real-time messaging, feeds and stories using Socket.IO, powering a live social marketplace.",
              "Implemented end-to-end checkout, payment processing and delivery management pipeline.",
            ]}
          />
          <Job
            role="TNP Beauty — Multi-role Beauty Marketplace"
            company="Sparktech Agency · App Store & Play Store"
            period=""
            bullets={[
              "Designed a 3-role platform (Customer, Vendor, Beautician) with location-based discovery and appointment booking.",
              "Integrated Stripe payments, vendor earnings dashboards and a business verification system.",
            ]}
          />
          <Job
            role="Ride Sharing App — Dual-role Ride Platform"
            company="Sparktech Agency"
            period=""
            bullets={[
              "Built Passenger and Driver onboarding with OTP auth, wallet management and auto-pricing via Google Directions API.",
              "Implemented real-time driver-passenger chat via Socket.IO for in-trip coordination.",
            ]}
          />
          <Job
            role="MyKrishi — Smart Agriculture Investment Platform"
            company="Synergy Interface Ltd."
            period=""
            bullets={[
              "Developed a role-based platform for farmers, investors and agents with tailored dashboards per role.",
              "Implemented deep linking for campaign sharing and ShurjoPay integration for investment payments.",
            ]}
          />
          <Job
            role="Meghna Life Insurance — Customer & Advisor Apps"
            company="Synergy Interface Ltd."
            period=""
            bullets={[
              "Delivered dual-app suite for a government-linked insurance provider.",
              "Integrated bKash and Nagad for secure digital premium payments, replacing manual collection workflows.",
            ]}
          />
        </Block>

        <Block title="Skills">
          <div className="grid gap-3 sm:grid-cols-2">
            <SkillRow label="Languages" items={["Dart", "C", "C++"]} />
            <SkillRow label="Framework" items={["Flutter"]} />
            <SkillRow label="State Management" items={["Bloc", "Provider", "Riverpod"]} />
            <SkillRow label="Architecture" items={["Clean Architecture (MVVM)"]} />
            <SkillRow label="Backend & APIs" items={["REST API", "Firebase", "Socket.IO"]} />
            <SkillRow label="Payments" items={["Stripe", "bKash", "Nagad", "ShurjoPay"]} />
            <SkillRow
              label="Core Features"
              items={["Google Maps", "Push Notifications", "Deep Linking", "Biometric Auth"]}
            />
            <SkillRow label="Tools" items={["Git", "GitHub", "VS Code", "Figma", "Postman"]} />
          </div>
        </Block>

        <Block title="Education">
          <Job
            role="B.Sc. in Computer Science and Engineering"
            company="Dhaka City College (National University, Bangladesh)"
            period="2018 — 2021 (Held in 2023)"
            bullets={["CGPA 3.18 / 4.00"]}
          />
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
      <h2 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-primary">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Job({
  role,
  company,
  period,
  bullets,
}: {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}) {
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
