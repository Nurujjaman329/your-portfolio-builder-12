import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { adminLogin, isAdminLoggedIn } from "@/lib/admin-auth";
import { Lock } from "lucide-react";

export const Route = createFileRoute("/admin/")({
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (isAdminLoggedIn()) navigate({ to: "/admin/dashboard" });
  }, [navigate]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (adminLogin(password)) {
      navigate({ to: "/admin/dashboard" });
    } else {
      setError(true);
      setShake(true);
      setPassword("");
      setTimeout(() => setShake(false), 600);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-sm rounded-2xl border border-border/60 bg-card-gradient p-8 shadow-elegant transition-all ${shake ? "animate-shake" : ""}`}
      >
        <div className="mb-6 flex flex-col items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
            <Lock className="h-5 w-5 text-muted-foreground" />
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Access Required</p>
        </div>
        <input
          type="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setError(false); }}
          placeholder="Password"
          autoFocus
          className="w-full rounded-md border border-input bg-background/60 px-4 py-2.5 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/30"
        />
        {error && (
          <p className="mt-2 text-center font-mono text-xs text-destructive">Incorrect password</p>
        )}
        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-foreground py-2.5 text-sm font-semibold text-background transition-all hover:opacity-80"
        >
          Enter
        </button>
      </form>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
        .animate-shake { animation: shake 0.5s ease-in-out; }
      `}</style>
    </div>
  );
}
