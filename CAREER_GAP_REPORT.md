# Career Assets Gap Report — MD. Nurujjaman

**Reviewed as:** Hiring Lead / Senior Engineer (Flutter & mobile hiring bar)  
**Review date:** 23 Sep 2026  
**Method:** Read CV source + live portfolio pages + GitHub API/profile README + LinkedIn public signals (profile fetch blocked; used public posts / profile index)

**Sources reviewed**

| Asset | URL / path |
| --- | --- |
| CV (source) | `resume-print/resume.html` → `MD_Nurujjaman_Resume.pdf` / `public/resume.pdf` |
| Portfolio (live) | https://nurujjaman-portfolio-site.vercel.app/ |
| GitHub | https://github.com/Nurujjaman329 |
| LinkedIn | https://www.linkedin.com/in/nurujjaman329/ |
| Store apps (from CV) | Presentini, Fouta, BloodFit, Meghna (App Store / Play links) |

---

## Executive verdict

| Asset | Score | Status |
| --- | --- | --- |
| **CV (PDF)** | **8.5 / 10** | Apply-ready. Strongest asset. |
| **Portfolio** | **7.5 / 10** | Strong case studies; domain + education + sitemap drift. |
| **GitHub** | **5.5 / 10** | Profile README is strong; **public repo shelf still looks junior**. |
| **LinkedIn** | **5 / 10** | Weakest link vs CV. About / title / tenure / role labels lag. |

**Bottom line for a hiring lead:** Your **CV and portfolio case studies** can clear a Flutter mid-level screen. Your **GitHub landing page and LinkedIn** currently undercut that same story. Fix LinkedIn + GitHub pins/cleanup before volume-applying abroad or to strong local product teams.

---

## How a strong Flutter engineer looks to a lead

What I expect in ~30 seconds:

1. **One title** everywhere (CV / LinkedIn / GitHub / portfolio).
2. **Proof of shipped product** (store links or clear NDA → case study).
3. **GitHub that looks intentional** — 6–12 public repos, pinned, described, not 50 practice folders.
4. **LinkedIn that reads like the CV**, not a student About section.
5. **No fact drift** (years, role titles, education, domain URL).

You already have #2. Gaps are mostly #1, #3, #4, #5.

---

## 1. CV — strong (apply-ready)

### What works

- Clear title: **Flutter Developer · Cross-Platform Mobile Engineer**
- Contact + three proof links: portfolio, LinkedIn, GitHub
- Hard numbers: **3 years**, **13+ apps**, **5 live** on stores
- Named live products with **real store hyperlinks**
- Skills match the work (Socket.IO, payments, Clean Architecture, Play Console / ASC)
- Education clean: **Graduated 2023**, no CGPA
- ATS-safe single-column HTML → PDF path

### Gaps / tighten (optional, not blocking)

| Item | Why it matters | Priority |
| --- | --- | --- |
| Bullets are strong but mostly qualitative | Leads want 1–2 metrics (crash rate, MAU, payment success, release cadence) when you can defend them | Low |
| Sparktech bullets don’t name Fouta / Presentini / BloodFit | Names on the job line help ATS + human skim | Medium |
| Synergy role on CV = “Software Developer”; LinkedIn metadata shows “Junior…” | Recruiter will trust LinkedIn if they conflict — align titles | High (via LinkedIn) |
| Portfolio URL is long Vercel hostname | Fine until custom domain works; then update CV + all profiles same day | Medium |
| Download filename still generic | `MD_Nurujjaman_Flutter_Developer.pdf` reads better in ATS folders | Low |

### CV links checklist (present and correct)

- [x] Portfolio → `nurujjaman-portfolio-site.vercel.app`
- [x] LinkedIn → `linkedin.com/in/nurujjaman329`
- [x] GitHub → `github.com/Nurujjaman329`
- [x] Presentini App Store + Play
- [x] Fouta App Store + Play
- [x] BloodFit Play
- [x] Meghna Play
- [x] Cert verify (Drive)

---

## 2. Portfolio — strong content, consistency debt

Live experience page confirms solid narrative and company timelines. Case studies + store apps are your real differentiator.

### What works

- Production projects with architecture write-ups
- Store apps + enterprise / gov case studies
- Stack and problem framing are lead-readable
- Contact / LinkedIn / GitHub wired in

### Gaps

| Issue | Current | Need | Priority |
| --- | --- | --- | --- |
| **Canonical domain split** | Live = Vercel; code default + sitemap = `nurujjaman.dev` (domain fails / not serving) | One URL everywhere (CV, GitHub blog, LinkedIn, OG, sitemap) | **High** |
| **Experience copy drift** | Site uses `experienceText()` → today **“nearly 3 years”**; CV says **“3 years”** | Pick one public rule: CV may round; site can say “3 years” once you hit Oct 2026, or soft-align now | Medium |
| **Education stale vs CV** | Live Experience: `2018 — 2021 (Held in 2023)` + **CGPA 3.18** | Match CV: **Graduated 2023**, drop CGPA (or keep only if you want it public) | **High** |
| **Sitemap incomplete** | `public/sitemap.xml` uses `nurujjaman.dev` and **misses BloodFit** (`/projects/blood-fit`) | Fix host + add BloodFit (and any other live project slugs) | **High** |
| **Job bullet mismatch** | Portfolio Sparktech: “7 production apps”; CV: softer “shipped… across…” | Align numbers you can defend in interview | Medium |
| OG / social image | Portrait-style | Optional 1200×630 banner | Low |

---

## 3. GitHub — profile README strong; shelf weak

### Profile identity (done well)

| Field | Live value |
| --- | --- |
| Name | Md Nurujjaman |
| Bio | Flutter Developer \| Clean Architecture · Socket.IO · Payments \| Dhaka |
| Location | Dhaka, Bangladesh |
| Website | https://nurujjaman-portfolio-site.vercel.app/ |
| Hireable | true |
| Profile README | Aligned: 3 years, 13+, 5 live, store table + enterprise case studies |

A lead who opens your README first will be impressed. A lead who scrolls your **repositories list** next will downgrade you.

### Repo shelf (live API, 23 Sep 2026)

| Metric | Live | Target for mid Flutter hire |
| --- | --- | --- |
| Public repos | **57** | **~8–15** polished |
| Repos with About/description | **1 / 57** (`fu_uber` only) | **All public** |
| Topics | **0** | `flutter`, `dart`, `clean-architecture`, etc. on pins |
| Custom pins | Effectively **none** (Top Repos = activity noise) | **Pin 6 best** |
| Followers | 0 | Optional; not required |

**Top of list currently surfaces practice / admin / ecommerce clones** (`ai_cake_*`, `mak-ecommerce`, `blood_donationUi`, `BMI-AGE-Calculation`, etc.) — that is the opposite of your CV story.

### Keep public / pin candidates

1. `your-portfolio-builder-12` — portfolio site (add description + topics)
2. `dupliko-app` — public Flutter sample (README + description required)
3. One clean architecture / sample Flutter repo (or `clean_architecture` if you polish it)
4. NDA-safe client sample only if allowed; otherwise point pins’ README to portfolio case studies
5. Optional: `image_detection` as ML side signal (not a Flutter pin)
6. Optional: `Edex_365` only if README explains NDA / demo / screenshots safely

### Make private (examples of clutter still public)

Practice / clone / typo / tutorial-shaped names that dilute signal, e.g.:

`BMI-AGE-Calculation`, `CALCUALAT_OR`, `Wallpaper-app`, `number_to_word`, `Info-App`, `chat_app_firebase`, `ecommerce_*` cluster, `push-notification-02-09-2024`, `youtube_shorts_copy`, `weather_app-project-`, `new_learn`, duplicate `dupliko` / `dupliko_final` if `dupliko-app` is the canonical one, old `nurujjaman_portfolio` if superseded.

### Per-pin hygiene checklist

For each pinned repo:

- [ ] 1-line **About** description
- [ ] Topics (`flutter`, `dart`, …)
- [ ] Website → portfolio case study or store URL when relevant
- [ ] Short README (what / why / stack / “full write-up → portfolio”)
- [ ] No secrets, large binaries, or junk APKs in history if avoidable

---

## 4. LinkedIn — largest gap vs CV (fix this next)

LinkedIn full HTML was not scrapeable here; judgment uses public profile index + posts + CV cross-check. Treat this as the **priority alignment pass**.

### What a lead sees today (signals)

| Signal | Observation | Problem |
| --- | --- | --- |
| **About** | CSE graduate + “passionate about clean code / user-centric” | Student/generic. Does not match CV summary (13+ apps, 5 live, Socket.IO, payments). |
| **Headline** | Not clearly matching CV title in public snippets | Must be keyword-searchable: Flutter + role + outcome |
| **Experience duration** | Public posts show **~2y 8m** total / Sparktech **7 months** | CV markets **3 years**. Small gap, but looks sloppy if both are open. |
| **Synergy title** | Metadata: **Junior Software Developer** | CV: **Software Developer (Flutter)**. Align to the title you can defend. |
| **Featured** | Unclear / not CV-grade | Should feature portfolio + 2–3 store apps + Medium deep-link post |
| **Activity** | Good: Flutter Guild Day notes, Medium deep linking | Keep this; it helps seniority signal |
| **Skills** | Noise like **Microsoft Excel** appears in indexed skills | Pin Flutter, Dart, Firebase, Bloc/GetX, Socket.IO, payments; prune junk |
| **Open to work / Open to** | Not visible in public index | Turn on if job-seeking; set roles = Flutter / Mobile |

### LinkedIn rewrite targets (match CV)

**Headline (suggested)**  
`Flutter Developer · Cross-Platform Mobile Engineer | 13+ production apps · 5 live on App Store & Google Play`

**About (structure)**  
1. Who you are + years + domains  
2. Proof line (13+ / 5 live / named apps)  
3. Technical strengths (Clean Architecture, Socket.IO, Maps, payments)  
4. Current role + open to full-time  
5. Links: portfolio, GitHub, email  

**Experience entries**  
- Mirror CV bullets (not longer, not weaker)  
- Same company dates: Sparktech Dec 2025–Present; Synergy Oct 2023–Nov 2025  
- Same role titles as CV  
- Add media: store screenshots / portfolio project URLs  

**Featured (pin)**  
1. Portfolio home  
2. Presentini or Fouta store listing  
3. Medium: Flutter Deep Linking guide  
4. GitHub profile README  

**Custom URL** — already good: `/in/nurujjaman329`

---

## Consistency matrix (fix of truth)

| Fact | CV | Portfolio | GitHub | LinkedIn (public) |
| --- | --- | --- | --- | --- |
| Title | Flutter Developer · Cross-Platform Mobile Engineer | Flutter Developer | Bio: Flutter Developer… | Weak / generic About |
| Experience | **3 years** | **nearly 3 years** (dynamic) | README: **3 years** | **~2y 8m** indexed |
| Apps | 13+ / 5 live | 13+ / 5 live | 13+ / 5 live | Not front-and-center |
| Featured products | Presentini, Fouta, BloodFit, Meghna | Full set + TNP + enterprise | Stores + TNP + enterprise | Fouta mentioned in recommendations; incomplete |
| Synergy title | Software Developer (Flutter) | Software Developer (Flutter) | — | Junior Software Developer (signal) |
| Education | Graduated 2023, no CGPA | 2018–2021 (Held 2023) + CGPA | — | Unknown — align to CV |
| Portfolio URL | Vercel | Live Vercel; sitemap/`SITE_URL` → `nurujjaman.dev` | Vercel | Should match CV |
| GitHub signal | Link present | Link present | README strong / repos weak | Link present; repos look weak |

**Canonical values to force everywhere**

| Field | Canonical |
| --- | --- |
| Name | MD. Nurujjaman |
| Title | Flutter Developer · Cross-Platform Mobile Engineer |
| Experience start | Oct 2023 (Synergy) |
| Tenure line (apply materials) | **3 years** (acceptable rounding) |
| Apps | 13+ production; 5 live on App Store and Google Play |
| CV featured | Presentini, Fouta, BloodFit, Meghna |
| Also showcase | TNP Beauty + enterprise case studies (portfolio / GitHub / LinkedIn Featured) |
| Employers | Sparktech Agency (Dec 2025–Present); Synergy Interface Ltd. (Oct 2023–Nov 2025) |
| Education | B.Sc. CSE, Dhaka City College (NU) · **Graduated 2023** · no CGPA on apply surfaces |
| Portfolio URL | `https://nurujjaman-portfolio-site.vercel.app/` until custom domain is live |
| GitHub | github.com/Nurujjaman329 |
| LinkedIn | linkedin.com/in/nurujjaman329 |
| Email | mdnurujjaman329@gmail.com |

---

## Priority action plan

### P0 — this week (blocks strong applications)

1. **LinkedIn alignment pass** — headline, About, role titles, Featured, prune Excel-type skills, match CV bullets/dates.  
2. **GitHub cleanup wave 2** — private more clutter → aim **≤15** public.  
3. **Pin 6 repos** + add **About + topics + README** on each pin (`dupliko-app`, portfolio repo first).  
4. **Portfolio Experience education** — Graduated 2023; remove CGPA (or match intentional choice).  
5. **Sitemap** — switch host to live URL (or fix `nurujjaman.dev`), add `/projects/blood-fit`.

### P1 — next 1–2 weeks

6. One canonical domain decision; update CV + GitHub blog + LinkedIn website the same day.  
7. Align Sparktech “7 apps” vs CV wording; only keep numbers you can defend.  
8. Add 1–2 defendable metrics to CV / LinkedIn bullets when available.  
9. LinkedIn Featured + weekly short technical posts (you already started — keep cadence).

### P2 — later / polish

10. Rename CV download file for ATS folders.  
11. Per-JD CV keyword tailoring.  
12. OG banner 1200×630.  
13. Optional: remove large binaries from any remaining public Flutter samples.

---

## Scorecard summary (hiring-lead view)

| If they only open… | Impression |
| --- | --- |
| **CV PDF** | Hireable Flutter mid — ship signal clear |
| **Portfolio projects** | Strong — production breadth above average for 3y |
| **GitHub profile README** | Strong |
| **GitHub Repositories tab** | Junior / student shelf — fix urgently |
| **LinkedIn** | Undercells you — About reads early-career; titles may conflict |

**Recommendation:** Do not wait on domain polish before applying. **Do** finish LinkedIn + GitHub pins/cleanup first — those are what recruiters open after the CV.

---

*Report regenerated 23 Sep 2026. Previous 22 Sep note still valid on CV completeness; this version adds a full LinkedIn section and live GitHub shelf metrics (57 public, 56 without descriptions).*
