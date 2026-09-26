# Career Assets Report — MD. Nurujjaman

**Lens:** Senior engineer / Flutter hiring lead  
**Date:** 26 Sep 2026  
**Reviewed:** CV source + live portfolio + GitHub API/README + LinkedIn public signals

| Asset | Score | Verdict |
| --- | --- | --- |
| **CV / Resume** | **8.5 / 10** | Apply-ready. Strongest asset. |
| **Portfolio** | **7.5 / 10** | Strong case studies; URL + fact drift. |
| **GitHub** | **5.5 / 10** | Profile README is strong; repo shelf undercuts you. |
| **LinkedIn** | **~5 / 10** | Weakest vs CV (About/skills lag). |

**Bottom line:** Your CV and portfolio case studies can clear a Flutter mid-level screen. GitHub’s public shelf and LinkedIn currently tell a weaker story than the work you’ve actually shipped. Fix those before volume-applying to strong product teams.

---

## What a hiring lead expects in ~30 seconds

1. One title everywhere (CV / LinkedIn / GitHub / portfolio)
2. Proof of shipped product (store links or solid case studies)
3. GitHub that looks intentional — pinned, described, not 50 practice folders
4. LinkedIn that reads like the CV, not a fresh graduate
5. No fact drift (years, titles, education, domain)

You already have #2. Gaps are mostly #1, #3, #4, #5.

---

## Sources reviewed

| Asset | URL / path |
| --- | --- |
| CV (source) | `resume-print/resume.html` → `MD_Nurujjaman_Resume.pdf` / `public/resume.pdf` |
| Portfolio (live) | https://nurujjaman-portfolio-site.vercel.app/ |
| GitHub | https://github.com/Nurujjaman329 |
| LinkedIn | https://www.linkedin.com/in/nurujjaman329/ |
| Store apps (from CV) | Presentini, Fouta, BloodFit, Meghna (App Store / Play links) |

---

## 1. CV / Resume — strong

**Sources:** `resume-print/resume.html` → `public/resume.pdf`, plus `/resume` page

### What works

- Clear title: *Flutter Developer · Cross-Platform Mobile Engineer*
- Contact + proof links: portfolio, LinkedIn, GitHub
- Hard numbers: **3 years**, **13+ apps**, **5 live** on stores
- Named products with real App Store / Play links (Presentini, Fouta, BloodFit, Meghna)
- Skills match real work (Socket.IO, payments, Clean Architecture, Play Console / ASC)
- Education clean on CV: *Graduated 2023*, no CGPA
- ATS-safe single-column HTML → PDF path

### Tighten (optional)

| Item | Why | Priority |
| --- | --- | --- |
| Bullets are mostly qualitative | Add 1–2 defendable metrics (crash rate, release cadence, payment success) | Low |
| Sparktech bullets don’t name Fouta / Presentini / BloodFit | Names help ATS + skim | Medium |
| Long Vercel URL | Fine until custom domain works; then update everywhere same day | Medium |
| TNP Beauty live on stores but not in CV Projects | Worth adding or swapping if space | Medium |

### CV links checklist

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

**Live:** https://nurujjaman-portfolio-site.vercel.app/

### What works

- Real production breadth: social commerce, beauty, fitness, ride-sharing, agri-tech, insurance, GovTech
- Case studies with challenge / solution / architecture / stack / screenshots / store links
- Experience timeline matches CV titles and dates
- Dynamic tenure via `EXPERIENCE_START` (Oct 2023) → “nearly 3 years” — good engineering habit
- Contact + LinkedIn + GitHub wired

### Gaps

| Issue | Detail | Priority |
| --- | --- | --- |
| **Domain split** | Live = Vercel; `SITE_URL` + sitemap default to `nurujjaman.dev` (returns 500 / not serving) | **High** |
| **Sitemap incomplete** | Uses `nurujjaman.dev`, **misses BloodFit** (`/projects/blood-fit`) | **High** |
| **Education drift** | Portfolio: *2018–2021 (Held in 2023)* + CGPA 3.18; CV: Graduated 2023, no CGPA | Medium |
| **Job bullet mismatch** | Portfolio Sparktech: “7 production apps”; CV softer “shipped… across…” | Medium |

Case study quality is above average for ~3 years experience. Don’t wait on domain polish to apply — do fix the URL story so every link points to one working host.

---

## 3. GitHub — README A, shelf C

**Profile:** https://github.com/Nurujjaman329  
**Stats:** 57 public repos · hireable · blog → portfolio · bio aligned with CV

### What works

- Profile README is excellent: title, stack, store table, enterprise case-study links
- Matches CV narrative (3y, 13+, 5 live, payments, Clean Architecture)

### What hurts

- **~56 / 57 repos have no description** — first glance looks like a student dump
- “Top repositories” surface practice / admin / tutorial repos, not Presentini / Fouta / BloodFit
- Only 1 repo with stars (`Edex_365`); portfolio repo has homepage but no description
- Duplicates / learning clutter: `dupliko` / `dupliko_final` / `dupliko-app`, `BMI-AGE-Calculation`, `CALCUALAT_OR`, `Wallpaper-app`, `youtube_shorts_copy`, etc.

### Fix order

1. Pin 6: `your-portfolio-builder-12`, `dupliko-app` (if showcaseable), plus any NDA-safe samples — or pin README-only and point pins’ READMEs to portfolio case studies
2. Add description + topics + short README on every pin
3. Archive or make private the old practice clutter
4. Set company on profile if allowed; keep blog = live portfolio URL

---

## 4. LinkedIn — largest gap vs CV

Full HTML was login-walled; judgment from public index + posts.

### Signals

- Custom URL good: `/in/nurujjaman329`
- About still reads graduate / early-career (“CSE graduate… passionate about…”)
- Skill noise includes **Microsoft Excel** alongside Flutter — dilutes signal for mobile roles
- Positive: posts exist (Flutter Guild Day 2026, Medium deep-linking) — keep that cadence
- Featured / title / tenure likely lag CV (align explicitly)

### Rewrite targets (match CV)

- **Headline:** `Flutter Developer | Clean Architecture · Socket.IO · Payments | 13+ apps shipped`
- **About:** Paste CV summary tone — years, domains, store apps, open to roles
- **Experience titles:** Software Engineer (Flutter) @ Sparktech; Software Developer (Flutter) @ Synergy — same dates as CV
- **Featured:** Portfolio home + 2–3 store apps + deep-link Medium post
- **Skills:** Drop Excel/Office; lead with Dart, Flutter, Bloc, GetX, Firebase, Socket.IO, Stripe

---

## Cross-asset consistency matrix

| Fact | CV | Portfolio | GitHub | LinkedIn |
| --- | --- | --- | --- | --- |
| Title | Flutter Developer · Cross-Platform | Flutter Developer | Matches CV (README) | About still junior-leaning |
| Years | 3 years | nearly 3 years (dynamic) | 3 years | Align |
| Sparktech title | Software Engineer (Flutter) | Same | — | Must match |
| Education | Graduated 2023 | 2018–2021 + CGPA | — | Align to CV |
| Portfolio URL | Vercel | Live Vercel; sitemap → `.dev` | Blog = Vercel | Should match CV |
| Store proof | 4 named + links | Full case studies + TNP | README tables | Should Featured |

---

## Priority action list

### This week

1. LinkedIn alignment — headline, About, titles, Featured, prune Excel-type skills
2. GitHub: pin 6 + descriptions; archive practice repos
3. Portfolio Experience education — match CV (Graduated 2023; drop CGPA unless intentional)
4. Sitemap — point to live URL (or fix `nurujjaman.dev`); add `/projects/blood-fit`

### Soon

5. One canonical domain; update CV + GitHub blog + LinkedIn the same day
6. Align Sparktech “7 apps” vs CV wording to numbers you can defend
7. Add 1–2 metrics to CV/LinkedIn when available
8. Keep LinkedIn technical posts weekly (you already started)

---

## Hiring-bar summary

| Dimension | Assessment |
| --- | --- |
| Shipped production work | Strong — store apps + enterprise breadth above average for ~3y |
| Narrative craft (CV / case studies) | Strong — architecture-aware, not just feature lists |
| GitHub as signal | Undercells you — README good, shelf noisy |
| LinkedIn as signal | Undercells you — About reads early-career |

**Recommendation:** Apply with the current CV. Before high-volume outreach abroad or to strong local product teams, finish LinkedIn + GitHub pins/cleanup — those are what recruiters open after the PDF.

---

*Report generated 26 Sep 2026. Separate from `CAREER_GAP_REPORT.md` (23 Sep).*
