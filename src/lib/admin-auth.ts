const TOKEN_KEY = "admin_token";
const EXPIRY_KEY = "admin_token_expiry";
const EXPIRY_HOURS = 24;

export function adminLogin(password: string): boolean {
  const correct = import.meta.env.VITE_ADMIN_PASSWORD;
  if (!correct || password !== correct) return false;
  const expiry = Date.now() + EXPIRY_HOURS * 60 * 60 * 1000;
  localStorage.setItem(TOKEN_KEY, btoa(`admin:${expiry}`));
  localStorage.setItem(EXPIRY_KEY, String(expiry));
  return true;
}

export function isAdminLoggedIn(): boolean {
  const token = localStorage.getItem(TOKEN_KEY);
  const expiry = localStorage.getItem(EXPIRY_KEY);
  if (!token || !expiry) return false;
  if (Date.now() > Number(expiry)) {
    adminLogout();
    return false;
  }
  return true;
}

export function adminLogout(): void {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(EXPIRY_KEY);
}
