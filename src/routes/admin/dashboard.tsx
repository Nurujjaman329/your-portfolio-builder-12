import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { isAdminLoggedIn, adminLogout } from "@/lib/admin-auth";
import { isFirebaseConfigured } from "@/lib/firebase";
import {
  fetchProjects, saveProject, removeProject,
  uploadProjectImage, deleteProjectImage, seedStaticProjects,
} from "@/lib/firestore-projects";
import { projects as staticProjects } from "@/data/projects";
import { type ProjectDetail } from "@/data/projects";
import { LogOut, Plus, Pencil, Trash2, Upload, X, AlertCircle, RotateCcw } from "lucide-react";

export const Route = createFileRoute("/admin/dashboard")({
  component: AdminDashboard,
});

type Tab = "projects";

function AdminDashboard() {
  const navigate = useNavigate();
  const [tab] = useState<Tab>("projects");

  useEffect(() => {
    if (!isAdminLoggedIn()) navigate({ to: "/admin" });
  }, [navigate]);

  function handleLogout() {
    adminLogout();
    navigate({ to: "/" });
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Admin header */}
      <header className="border-b border-border/60 bg-card-gradient px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Admin</p>
            <h1 className="font-display text-lg font-bold text-foreground">Portfolio Manager</h1>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-md border border-border/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-destructive hover:text-destructive"
          >
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </div>
      </header>

      {!isFirebaseConfigured && (
        <div className="mx-auto mt-6 max-w-5xl px-6">
          <div className="flex items-start gap-3 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-sm text-yellow-400">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <p>Firebase is not configured yet. Changes will not be saved. Add Firebase env vars to enable persistence.</p>
          </div>
        </div>
      )}

      <main className="mx-auto max-w-5xl px-6 py-8">
        <ProjectsTab />
      </main>
    </div>
  );
}

/* ─── Projects Tab ─────────────────────────────────────── */

function ProjectsTab() {
  const [projects, setProjects] = useState<ProjectDetail[]>([]);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [editing, setEditing] = useState<ProjectDetail | null>(null);
  const [isNew, setIsNew] = useState(false);

  async function load() {
    setLoading(true);
    const data = await fetchProjects();
    setProjects(data);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  function startNew() {
    setIsNew(true);
    setEditing(emptyProject());
  }

  async function handleSave(p: ProjectDetail) {
    await saveProject(p);
    setEditing(null);
    setIsNew(false);
    load();
  }

  async function handleDelete(slug: string) {
    if (!confirm("Delete this project?")) return;
    await removeProject(slug);
    load();
  }

  async function handleRestoreDefaults() {
    if (
      !confirm(
        `Restore all ${staticProjects.length} default projects to Firebase?\n\nExisting projects with the same slug will be overwritten. Projects you added manually with new slugs will be kept.`,
      )
    ) {
      return;
    }
    setSeeding(true);
    try {
      const count = await seedStaticProjects();
      await load();
      alert(`Restored ${count} projects. Refresh /projects to see them on your portfolio.`);
    } catch {
      alert("Restore failed. Make sure Firebase is configured in your .env file.");
    }
    setSeeding(false);
  }

  if (editing) {
    return (
      <ProjectForm
        project={editing}
        isNew={isNew}
        onSave={handleSave}
        onCancel={() => { setEditing(null); setIsNew(false); }}
      />
    );
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-xl font-semibold">Projects <span className="ml-2 font-mono text-sm text-muted-foreground">({projects.length})</span></h2>
        <div className="flex flex-wrap gap-2">
          {isFirebaseConfigured && (
            <button
              onClick={handleRestoreDefaults}
              disabled={seeding}
              className="inline-flex items-center gap-2 rounded-md border border-border/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-60"
            >
              <RotateCcw className="h-4 w-4" />
              {seeding ? "Restoring…" : `Restore defaults (${staticProjects.length})`}
            </button>
          )}
          <button
            onClick={startNew}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            <Plus className="h-4 w-4" /> Add Project
          </button>
        </div>
      </div>

      {loading ? (
        <div className="space-y-3">
          {[1,2,3].map(i => <div key={i} className="h-16 rounded-xl bg-secondary/30 animate-pulse" />)}
        </div>
      ) : (
        <div className="space-y-3">
          {projects.map((p) => (
            <div key={p.slug} className="flex items-center justify-between rounded-xl border border-border/60 bg-card-gradient px-5 py-4">
              <div>
                <p className="font-semibold text-foreground">{p.name}</p>
                <p className="font-mono text-xs text-muted-foreground">{p.tag} · {p.company}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => { setIsNew(false); setEditing(p); }}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-border/60 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Pencil className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => handleDelete(p.slug)}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-border/60 text-muted-foreground transition-colors hover:border-destructive hover:text-destructive"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Project Form ─────────────────────────────────────── */

function ProjectForm({
  project, isNew, onSave, onCancel,
}: {
  project: ProjectDetail;
  isNew: boolean;
  onSave: (p: ProjectDetail) => Promise<void>;
  onCancel: () => void;
}) {
  const [form, setForm] = useState<ProjectDetail>(project);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  function set<K extends keyof ProjectDetail>(key: K, value: ProjectDetail[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    await onSave(form);
    setSaving(false);
  }

  async function handleImageUpload(files: FileList | null) {
    if (!files || files.length === 0) return;
    setUploading(true);
    try {
      const urls: string[] = [];
      for (const file of Array.from(files)) {
        const url = await uploadProjectImage(form.slug, file);
        urls.push(url);
      }
      set("images", [...form.images, ...urls]);
    } catch (err) {
      alert("Image upload failed. Make sure Firebase Storage is configured.");
    }
    setUploading(false);
  }

  async function handleRemoveImage(url: string) {
    await deleteProjectImage(url);
    set("images", form.images.filter((u) => u !== url));
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-semibold">{isNew ? "New Project" : `Editing: ${form.name}`}</h2>
        <button type="button" onClick={onCancel} className="font-mono text-xs text-muted-foreground hover:text-foreground">
          ← Cancel
        </button>
      </div>

      {/* Basic info */}
      <Section title="Basic Info">
        <Grid2>
          <Field label="Name"><Input value={form.name} onChange={(v) => set("name", v)} required /></Field>
          <Field label="Slug (URL)"><Input value={form.slug} onChange={(v) => set("slug", v)} required placeholder="fouta-app" /></Field>
          <Field label="Tag"><Input value={form.tag} onChange={(v) => set("tag", v)} placeholder="Social Commerce" /></Field>
          <Field label="Company"><Input value={form.company} onChange={(v) => set("company", v)} /></Field>
          <Field label="Period"><Input value={form.period} onChange={(v) => set("period", v)} placeholder="2024" /></Field>
          <Field label="Status"><Input value={form.status} onChange={(v) => set("status", v)} placeholder="Live on App Store" /></Field>
        </Grid2>
        <Field label="Tagline" className="mt-4">
          <Input value={form.tagline} onChange={(v) => set("tagline", v)} />
        </Field>
        <div className="mt-4 flex items-center gap-3">
          <input
            type="checkbox"
            id="storeLink"
            checked={form.storeLink}
            onChange={(e) => set("storeLink", e.target.checked)}
            className="h-4 w-4 accent-primary"
          />
          <label htmlFor="storeLink" className="text-sm text-foreground/80">Live on App Store / Play Store</label>
        </div>
      </Section>

      {/* Images */}
      <Section title="Screenshots">
        <div className="flex flex-wrap gap-3 mb-3">
          {form.images.map((url) => (
            <div key={url} className="relative">
              <img src={url} alt="" className="h-24 w-20 rounded-lg object-cover border border-border/60" />
              <button
                type="button"
                onClick={() => handleRemoveImage(url)}
                className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-white"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
            className="flex h-24 w-20 flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-border/60 text-muted-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-50"
          >
            <Upload className="h-4 w-4" />
            <span className="font-mono text-xs">{uploading ? "..." : "Upload"}</span>
          </button>
          <input ref={fileRef} type="file" accept="image/*" multiple className="hidden" onChange={(e) => handleImageUpload(e.target.files)} />
        </div>
      </Section>

      {/* Case study text */}
      <Section title="Case Study">
        <Field label="Overview">
          <Textarea value={form.overview} onChange={(v) => set("overview", v)} rows={3} />
        </Field>
        <Field label="The Challenge" className="mt-4">
          <Textarea value={form.challenge} onChange={(v) => set("challenge", v)} rows={3} />
        </Field>
        <Field label="The Solution" className="mt-4">
          <Textarea value={form.solution} onChange={(v) => set("solution", v)} rows={3} />
        </Field>
      </Section>

      {/* Architecture */}
      <Section title="Architecture">
        <Grid2>
          <Field label="Pattern">
            <Input value={form.architecture.pattern} onChange={(v) => set("architecture", { ...form.architecture, pattern: v })} placeholder="Clean Architecture" />
          </Field>
          <Field label="Description">
            <Input value={form.architecture.description} onChange={(v) => set("architecture", { ...form.architecture, description: v })} />
          </Field>
        </Grid2>
        <div className="mt-4 space-y-3">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Layers</p>
          {form.architecture.layers.map((layer, i) => (
            <div key={i} className="flex gap-3 items-start">
              <div className="flex-1 grid grid-cols-2 gap-3">
                <Input value={layer.name} onChange={(v) => {
                  const layers = [...form.architecture.layers];
                  layers[i] = { ...layers[i], name: v };
                  set("architecture", { ...form.architecture, layers });
                }} placeholder="Layer name" />
                <Input value={layer.desc} onChange={(v) => {
                  const layers = [...form.architecture.layers];
                  layers[i] = { ...layers[i], desc: v };
                  set("architecture", { ...form.architecture, layers });
                }} placeholder="Description" />
              </div>
              <button type="button" onClick={() => {
                const layers = form.architecture.layers.filter((_, j) => j !== i);
                set("architecture", { ...form.architecture, layers });
              }} className="mt-1 text-muted-foreground hover:text-destructive"><X className="h-4 w-4" /></button>
            </div>
          ))}
          <button type="button" onClick={() => set("architecture", { ...form.architecture, layers: [...form.architecture.layers, { name: "", desc: "" }] })}
            className="font-mono text-xs text-primary hover:underline">+ Add layer</button>
        </div>
      </Section>

      {/* State Management */}
      <Section title="State Management">
        <Grid2>
          <Field label="Solution">
            <Input value={form.stateManagement.solution} onChange={(v) => set("stateManagement", { ...form.stateManagement, solution: v })} placeholder="Bloc" />
          </Field>
          <Field label="Reason">
            <Input value={form.stateManagement.reason} onChange={(v) => set("stateManagement", { ...form.stateManagement, reason: v })} />
          </Field>
        </Grid2>
      </Section>

      {/* Tech Stack */}
      <Section title="Tech Stack">
        <div className="space-y-3">
          {form.stack.map((s, i) => (
            <div key={i} className="flex gap-3 items-center">
              <Input value={s.name} onChange={(v) => {
                const stack = [...form.stack]; stack[i] = { ...stack[i], name: v };
                set("stack", stack);
              }} placeholder="Technology" />
              <Input value={s.purpose} onChange={(v) => {
                const stack = [...form.stack]; stack[i] = { ...stack[i], purpose: v };
                set("stack", stack);
              }} placeholder="Purpose" />
              <button type="button" onClick={() => set("stack", form.stack.filter((_, j) => j !== i))} className="text-muted-foreground hover:text-destructive shrink-0"><X className="h-4 w-4" /></button>
            </div>
          ))}
          <button type="button" onClick={() => set("stack", [...form.stack, { name: "", purpose: "" }])}
            className="font-mono text-xs text-primary hover:underline">+ Add technology</button>
        </div>
      </Section>

      {/* Highlights */}
      <Section title="Key Features">
        <div className="space-y-3">
          {form.highlights.map((h, i) => (
            <div key={i} className="flex gap-3 items-center">
              <Input value={h.title} onChange={(v) => {
                const hl = [...form.highlights]; hl[i] = { ...hl[i], title: v };
                set("highlights", hl);
              }} placeholder="Feature title" />
              <Input value={h.desc} onChange={(v) => {
                const hl = [...form.highlights]; hl[i] = { ...hl[i], desc: v };
                set("highlights", hl);
              }} placeholder="Description" />
              <button type="button" onClick={() => set("highlights", form.highlights.filter((_, j) => j !== i))} className="text-muted-foreground hover:text-destructive shrink-0"><X className="h-4 w-4" /></button>
            </div>
          ))}
          <button type="button" onClick={() => set("highlights", [...form.highlights, { title: "", desc: "" }])}
            className="font-mono text-xs text-primary hover:underline">+ Add feature</button>
        </div>
      </Section>

      {/* Results */}
      <Section title="Results / Outcome">
        <div className="space-y-3">
          {form.results.map((r, i) => (
            <div key={i} className="flex gap-3 items-center">
              <Input value={r} onChange={(v) => {
                const results = [...form.results]; results[i] = v;
                set("results", results);
              }} placeholder="Result" />
              <button type="button" onClick={() => set("results", form.results.filter((_, j) => j !== i))} className="text-muted-foreground hover:text-destructive shrink-0"><X className="h-4 w-4" /></button>
            </div>
          ))}
          <button type="button" onClick={() => set("results", [...form.results, ""])}
            className="font-mono text-xs text-primary hover:underline">+ Add result</button>
        </div>
      </Section>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 disabled:opacity-60"
        >
          {saving ? "Saving…" : "Save Project"}
        </button>
        <button type="button" onClick={onCancel} className="rounded-md border border-border/60 px-6 py-2.5 text-sm text-muted-foreground hover:text-foreground">
          Cancel
        </button>
      </div>
    </form>
  );
}

/* ─── Helpers ──────────────────────────────────────────── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border/60 bg-card-gradient p-6">
      <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">{title}</h3>
      {children}
    </div>
  );
}

function Grid2({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2">{children}</div>;
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label className="mb-1.5 block font-mono text-xs text-muted-foreground">{label}</label>
      {children}
    </div>
  );
}

function Input({ value, onChange, placeholder = "", required = false }: {
  value: string; onChange: (v: string) => void; placeholder?: string; required?: boolean;
}) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-md border border-input bg-background/60 px-3 py-2 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/30"
    />
  );
}

function Textarea({ value, onChange, rows = 3 }: { value: string; onChange: (v: string) => void; rows?: number }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      className="w-full rounded-md border border-input bg-background/60 px-3 py-2 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/30"
    />
  );
}

function emptyProject(): ProjectDetail {
  return {
    slug: "", name: "", tag: "", tagline: "", company: "", period: "",
    status: "", accent: "from-primary to-accent", storeLink: false,
    overview: "", challenge: "", solution: "",
    architecture: { pattern: "Clean Architecture", description: "", layers: [
      { name: "Presentation", desc: "" },
      { name: "Domain", desc: "" },
      { name: "Data", desc: "" },
    ]},
    stateManagement: { solution: "Bloc", reason: "" },
    stack: [{ name: "", purpose: "" }],
    highlights: [{ title: "", desc: "" }],
    images: [],
    results: [""],
  };
}
