import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/portfolio/Section";
import { Printer, Download, Mail, MapPin, Phone, Globe } from "lucide-react";

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
      description="Download a PDF copy, or use your browser's print dialog for a live-formatted version."
    >
      <div className="mb-6 flex flex-col items-end gap-2 print:hidden">
        <div className="flex flex-wrap justify-end gap-3">
          <a
            href="/resume.pdf"
            download
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-spring hover:scale-105"
          >
            <Download className="h-4 w-4" /> Download PDF
          </a>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/60 px-4 py-2 text-sm font-semibold transition-smooth hover:bg-secondary"
          >
            <Printer className="h-4 w-4" /> Save as PDF
          </button>
        </div>
        <p className="text-xs text-muted-foreground">
          Download for a quick copy, or print to save a live-formatted PDF from this page.
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
            Flutter Developer with 3 years of experience building scalable cross-platform
            mobile apps across social commerce, beauty, fitness, ride-sharing, agri-tech and enterprise
            sectors. Experienced in clean architecture, real-time systems (Socket.IO), map-based
            services and secure payment integrations (Stripe, bKash, Nagad, ShurjoPay). Proven track
            record of delivering 13+ production apps, with 5 currently live on the App Store and
            Google Play (Presentini, Fouta, BloodFit, Meghna). Open to new full-time
            opportunities.
          </p>
        </Block>

        <Block title="Experience">
          <Job
            role="Software Engineer (Flutter)"
            company="Sparktech Agency"
            period="Dec 2025 — Present"
            bullets={[
              "Shipped production Flutter apps across social commerce, beauty, city discovery and fitness — published on App Store and Google Play.",
              "Built Socket.IO real-time features for multi-role communication (feeds, messaging and live order updates) in production apps.",
              "Owned Google Maps and geolocation flows for live tracking and location-based service discovery.",
              "Collaborated across distributed teams on performance optimisation, code reviews and scalable module design.",
            ]}
          />
          <Job
            role="Software Developer (Flutter)"
            company="Synergy Interface Ltd."
            period="Oct 2023 — Nov 2025"
            bullets={[
              "Delivered 6+ production Flutter apps for enterprise and government clients across insurance, agriculture and edtech.",
              "Applied Clean Architecture to keep feature modules modular and testable across multi-role codebases.",
              "Optimised state management and API handling, reducing load times and improving app responsiveness.",
              "Integrated bKash, Nagad and ShurjoPay payment gateways for digital premium and investment transactions in production.",
            ]}
          />
        </Block>

        <Block title="Key Projects">
          <Job
            role="Presentini — City Discovery"
            company="Sparktech Agency · App Store & Play Store"
            period=""
            bullets={[
              "Built a city discovery platform for local events and specials with location-based browsing, favorites and push notifications.",
              "Shipped live on both App Store and Google Play with Firebase-backed alerts and geolocation discovery.",
            ]}
          />
          <Job
            role="Fouta App — Social Commerce Platform"
            company="Sparktech Agency · App Store & Play Store"
            period=""
            bullets={[
              "Engineered a 4-role system (user, seller, driver, admin) with separate onboarding flows and permission-based access control.",
              "Built real-time messaging, feeds and stories using Socket.IO, powering a live social marketplace.",
              "Implemented end-to-end checkout, payment processing and delivery management pipeline.",
            ]}
          />
          <Job
            role="BloodFit — AI Health & Fitness"
            company="Sparktech Agency · Live on Google Play"
            period=""
            bullets={[
              "Built blood-type personalized meal plans and workouts with AI generation and dual Socket.IO + polling fetch.",
              "Implemented multi-tier in-app purchases (Starter/Pro/Elite) with Firebase Auth and GetX state management.",
            ]}
          />
          <Job
            role="Meghna Life Insurance — Customer & Advisor Apps"
            company="Synergy Interface Ltd. · Live on Google Play"
            period=""
            bullets={[
              "Delivered dual-app suite for a government-linked insurance provider.",
              "Integrated bKash and Nagad for secure digital premium payments, replacing manual collection workflows.",
            ]}
          />
        </Block>

        <Block title="Skills">
          <div className="grid gap-3 sm:grid-cols-2">
            <SkillRow label="Languages" items={["Dart"]} />
            <SkillRow label="Framework" items={["Flutter"]} />
            <SkillRow label="State Management" items={["Bloc", "GetX", "Provider", "Riverpod"]} />
            <SkillRow label="Architecture" items={["Clean Architecture"]} />
            <SkillRow label="Backend & APIs" items={["REST API", "Dio", "Firebase", "Socket.IO"]} />
            <SkillRow
              label="Payments"
              items={["Stripe", "bKash", "Nagad", "ShurjoPay", "In-App Purchases"]}
            />
            <SkillRow
              label="Core Features"
              items={[
                "Google Maps",
                "Push Notifications",
                "Deep Linking",
                "Biometric Auth",
                "Hive",
                "Get Storage",
              ]}
            />
            <SkillRow
              label="Tools"
              items={[
                "Git",
                "GitHub",
                "VS Code",
                "Figma",
                "Postman",
                "Play Console",
                "App Store Connect",
              ]}
            />
          </div>
        </Block>

        <Block title="Education">
          <Job
            role="B.Sc. in Computer Science and Engineering"
            company="Dhaka City College (National University, Bangladesh)"
            period="Graduated 2023"
            bullets={[]}
          />
        </Block>

        <Block title="Professional Courses">
          <ul className="space-y-2 text-foreground/85">
            <li>
              • Mobile Application Development — Flutter · BASIS SEIP (Sep 2022 – Dec 2022) ·{" "}
              <a
                href="https://drive.google.com/file/d/1kibfkA2Zp4aV6Iq5OpP_sz6bsdx-phOD/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                Verify
              </a>
            </li>
            <li>
              • Professional English Communication Skill · WSDA New Zealand (Nov 2022) ·{" "}
              <a
                href="https://drive.google.com/file/d/1kj_M8FgAZO76zJlQAXMFT1vmK5s7-t2n/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                Verify
              </a>
            </li>
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
