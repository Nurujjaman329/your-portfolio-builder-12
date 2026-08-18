import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/portfolio/Section";
import { Smartphone, Code2, Award, MapPin } from "lucide-react";
import { experienceStat, experienceText } from "@/data/profile";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MD. Nurujjaman" },
      {
        name: "description",
        content: `Flutter Developer based in Dhaka with ${experienceText()} of experience in clean architecture and cross-platform mobile development.`,
      },
      { property: "og:title", content: "About MD. Nurujjaman" },
      { property: "og:description", content: "Flutter Developer based in Dhaka, Bangladesh." },
    ],
  }),
  component: About,
});

const skills = [
  { group: "Languages", items: ["Dart", "C", "C++"] },
  { group: "Framework", items: ["Flutter"] },
  { group: "State Management", items: ["Bloc", "Provider", "Riverpod"] },
  { group: "Architecture", items: ["Clean Architecture (MVVM)"] },
  { group: "Backend & APIs", items: ["REST API", "Firebase", "Socket.IO"] },
  { group: "Payments", items: ["Stripe", "bKash", "Nagad", "ShurjoPay"] },
  {
    group: "Core Features",
    items: [
      "Google Maps",
      "Push Notifications",
      "Deep Linking",
      "Multi-role Auth",
      "Biometric Auth",
    ],
  },
  { group: "Tools", items: ["Git", "GitHub", "VS Code", "Figma", "Postman"] },
];

const facts = [
  { icon: Code2, label: "Years experience", value: experienceStat() },
  { icon: Smartphone, label: "Apps shipped", value: "13+" },
  { icon: Award, label: "Certifications", value: "3" },
  { icon: MapPin, label: "Based in", value: "Dhaka" },
];

function About() {
  return (
    <Section
      eyebrow="About"
      title="Flutter developer & mobile craftsman."
      description={`Experienced Flutter Developer with ${experienceText()} building high-performance, cross-platform mobile applications. Passionate about clean architecture, responsive UI and shipping scalable, user-friendly products.`}
    >
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <img
              src={portrait}
              alt="MD. Nurujjaman"
              className="mx-auto h-40 w-40 shrink-0 rounded-2xl border border-border/60 object-cover shadow-card sm:mx-0 sm:h-44 sm:w-44"
            />
            <p>
              I'm <span className="text-primary font-semibold">MD. Nurujjaman</span>, a Flutter
              Developer based in Mohakhali, Dhaka. I specialize in building cross-platform mobile
              applications with clean architecture, responsive UI, and integrations like push
              notifications, Google Maps, Socket.IO, deep linking and secure payment gateways.
            </p>
          </div>
          <p>
            Across {experienceText()} I've shipped 13+ production-grade apps published on both the
            App Store and Google Play — across social commerce, beauty, ride-sharing, agri-tech,
            insurance, education and government sectors. I love collaborating with innovative teams
            to deliver scalable, user-friendly solutions while continuously sharpening my craft.
          </p>
          <p>
            I hold a B.Sc. in Computer Science & Engineering from{" "}
            <span className="text-primary font-semibold">Dhaka City College</span> (National
            University, Bangladesh) and have completed professional courses in Flutter from
            BASIS-SEIP and CSE Fundamentals from Phitron.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
            {facts.map((f) => (
              <div
                key={f.label}
                className="rounded-xl border border-border/60 bg-card-gradient p-4 text-center"
              >
                <f.icon className="mx-auto h-5 w-5 text-primary" />
                <div className="mt-2 font-display text-2xl font-bold">{f.value}</div>
                <div className="text-xs text-muted-foreground">{f.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {skills.map((s) => (
            <div
              key={s.group}
              className="rounded-xl border border-border/60 bg-card-gradient p-6 shadow-card"
            >
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
