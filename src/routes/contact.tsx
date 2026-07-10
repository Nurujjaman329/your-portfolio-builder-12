import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Section } from "@/components/portfolio/Section";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      const form = new FormData(formRef.current);
      form.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("sent");
        formRef.current.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section
      eyebrow="Contact"
      title="Let's build something."
      description="Open to Flutter roles, freelance work and collaborations on innovative mobile products."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6">
          <ContactItem icon={Mail} label="Email" value="mdnurujjaman329@gmail.com" href="mailto:mdnurujjaman329@gmail.com" />
          <ContactItem icon={Phone} label="Phone" value="+880 1957 073942" href="tel:+8801957073942" />
          <ContactItem icon={MapPin} label="Based in" value="Mohakhali, Dhaka, Bangladesh" />
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">Elsewhere</p>
            <div className="flex gap-3">
              <Social icon={Github} href="https://github.com/Nurujjaman329" />
              <Social icon={Linkedin} href="https://www.linkedin.com/in/nurujjaman329/" />
            </div>
          </div>
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Status</p>
            <p className="mt-1 text-sm text-foreground/90">
              Currently <span className="font-semibold text-primary">working</span> at Sparktech Agency — open to freelance Flutter projects.
            </p>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border/60 bg-card-gradient p-8 shadow-card space-y-5"
        >
          <Field label="Name">
            <input required name="name" type="text" className="w-full rounded-md border border-input bg-background/60 px-4 py-2.5 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/30" placeholder="Your name" />
          </Field>
          <Field label="Email">
            <input required name="email" type="email" className="w-full rounded-md border border-input bg-background/60 px-4 py-2.5 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/30" placeholder="you@company.com" />
          </Field>
          <Field label="Subject">
            <input name="title" type="text" className="w-full rounded-md border border-input bg-background/60 px-4 py-2.5 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/30" placeholder="Flutter project enquiry" />
          </Field>
          <Field label="Message">
            <textarea required name="message" rows={5} className="w-full rounded-md border border-input bg-background/60 px-4 py-2.5 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/30" placeholder="Tell me about your project or role..." />
          </Field>
          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-spring hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <Send className="h-4 w-4" />
            {status === "sending" ? "Sending…" : status === "sent" ? "Sent!" : "Send message"}
          </button>
          {status === "sent" && (
            <p className="text-sm text-primary text-center animate-fade-up">
              ✓ Thanks — I'll get back to you within 48 hours.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-destructive text-center">
              Something went wrong. Please email me directly at mdnurujjaman329@gmail.com
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const Comp = href ? "a" : "div";
  return (
    <Comp {...(href ? { href } : {})} className="flex items-start gap-4 rounded-xl border border-border/60 bg-card-gradient p-5 transition-spring hover:shadow-glow">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
        <Icon className="h-5 w-5 text-primary-foreground" />
      </div>
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="mt-0.5 font-medium">{value}</p>
      </div>
    </Comp>
  );
}

function Social({ icon: Icon, href }: { icon: typeof Github; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-secondary/60 transition-spring hover:scale-110 hover:border-primary hover:text-primary">
      <Icon className="h-5 w-5" />
    </a>
  );
}
