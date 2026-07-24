# nurujjaman.dev — Flutter Developer Portfolio

Personal portfolio site for **MD. Nurujjaman** — Flutter developer showcasing shipped apps, case studies, resume, and contact.

Built with **React 19**, **TypeScript**, **Vite**, **TanStack Router**, **Tailwind CSS v4**, and optional **Firebase** for a content admin.

## Live site

[https://nurujjaman.dev](https://nurujjaman.dev) — update `VITE_SITE_URL` if your domain differs.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command                  | Description                               |
| ------------------------ | ----------------------------------------- |
| `npm run dev`            | Start dev server                          |
| `npm run build`          | Production build → `dist/`                |
| `npm run preview`        | Preview production build                  |
| `npm run lint`           | ESLint                                    |
| `npm run test`           | Run unit tests (Vitest)                   |
| `npm run test:watch`     | Vitest in watch mode                      |
| `npm run seed:projects`  | Push static projects to Firestore         |
| `npm run update:project` | Update a single Firestore project         |
| `npm run upload:images`  | Upload project images to Firebase Storage |

## Environment variables

Copy `.env.example` to `.env` and fill in values as needed. All client vars must be prefixed with `VITE_`.

| Variable                            | Required    | Purpose                                                                        |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------ |
| `VITE_SITE_URL`                     | Recommended | Canonical URL for SEO, sitemap, Open Graph (default: `https://nurujjaman.dev`) |
| `VITE_FIREBASE_API_KEY`             | Optional    | Firebase — enables Firestore project CMS                                       |
| `VITE_FIREBASE_AUTH_DOMAIN`         | Optional    | Firebase auth domain                                                           |
| `VITE_FIREBASE_PROJECT_ID`          | Optional    | Firebase project ID                                                            |
| `VITE_FIREBASE_STORAGE_BUCKET`      | Optional    | Firebase Storage for admin image uploads                                       |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Optional    | Firebase messaging sender                                                      |
| `VITE_FIREBASE_APP_ID`              | Optional    | Firebase app ID                                                                |
| `VITE_ADMIN_PASSWORD`               | Optional    | Admin panel password (client-side only — not secure for sensitive data)        |
| `VITE_WEB3FORMS_ACCESS_KEY`         | Optional    | Contact form via [Web3Forms](https://web3forms.com/)                           |
| `VITE_PLAUSIBLE_DOMAIN`             | Optional    | [Plausible](https://plausible.io/) analytics (e.g. `nurujjaman.dev`)           |

Without Firebase, the site uses static data from `src/data/projects.ts`.

## Project structure

```
src/
├── routes/              # Pages (file-based routing)
├── components/portfolio/ # Site UI (layout, nav, phone showcase)
├── data/                # profile.ts, projects.ts (static content)
├── lib/                 # firebase, firestore-projects, site config
public/
├── projects/            # App screenshots (served at /projects/…)
├── robots.txt
└── sitemap.xml
```

## Screenshots & assets

Project images live in `public/projects/<slug>/` and are referenced in `src/data/projects.ts` as `/projects/<slug>/filename.jpg`.

All 80 referenced images are checked into the repo. After adding new screenshots:

1. Place files under `public/projects/<slug>/`
2. Update paths in `src/data/projects.ts`
3. Run `npm run build` to verify paths resolve

## Admin panel

Hidden entry: click the footer copyright **5 times** within 3 seconds, or go to `/admin`.

- **Login:** `VITE_ADMIN_PASSWORD`
- **Dashboard:** `/admin/dashboard` — CRUD projects, upload images to Firebase Storage
- **Restore defaults:** Re-seeds Firestore from `src/data/projects.ts`

> Admin auth is client-side only. Do not use for sensitive data.

## Deploy (Vercel)

1. Connect the GitHub repo to Vercel
2. Build command: `npm run build`
3. Output directory: `dist`
4. Add environment variables in the Vercel dashboard
5. Set `VITE_SITE_URL` to your production domain

`vercel.json` includes SPA rewrites so client-side routes work.

## SEO

- Per-route meta tags via TanStack Router `head()`
- `public/robots.txt` — blocks `/admin` from crawlers
- `public/sitemap.xml` — static sitemap (update domain if not nurujjaman.dev)
- JSON-LD `Person` + `WebSite` on the home page

## Analytics (optional)

Set `VITE_PLAUSIBLE_DOMAIN` to your Plausible site domain. The script loads automatically and tracks SPA pageviews. Custom events:

- `Project Click` — when a visitor opens a project card
- `Contact Form` — on submit success or error

## Testing & CI

```bash
npm run test        # unit tests
npm run test:watch  # watch mode
```

GitHub Actions (`.github/workflows/ci.yml`) runs **lint**, **test**, and **build** on push/PR to `main` and `redesign/flutter-app-shell`.

Tests cover:

- `src/data/profile.test.ts` — experience duration helpers
- `src/lib/firestore-projects.test.ts` — Firestore fallback and sort order

## Resume PDF

The resume page uses the browser **Print → Save as PDF** flow (no separate PDF file). Use the **Save as PDF** button on `/resume`.

## License

Private portfolio — all rights reserved.
