# Kathabo Group — Website

Rebuild of [kathabo.co.za](https://www.kathabo.co.za/) as a fast, dependency-free static site (previously Wix). Built by Under Bridges.

## Stack

Plain HTML + CSS + vanilla JS — no build step, no framework. Deploy the folder as-is to any static host (GitHub Pages, Vercel, Netlify, cPanel/Afrihost, etc.).

```
index.html        Home — hero slideshow, story, services, spotlight, clients
about.html        About — profile, vision & beliefs, founder, team, process
services.html     Services — events (photos + case study), activations, media, advertising
golf.html         Corporate Golf Days — track record, case study, filterable gallery
contact.html      Contact — details + enquiry form (opens email client)
assets/
  css/styles.css  Design system (Fraunces + Archivo, ivory/ink/gold palette)
  js/main.js      Slideshow, mobile nav, gallery filter + lightbox, reveals, form
  img/            Optimised photos (events / golf / people / logos)
```

## Client feedback → what changed

| Feedback (Lerato, 13 Jun 2025) | Where it's addressed |
| --- | --- |
| Likes the landing page with pictures | Kept — full-screen photo slideshow hero with rotating headlines (`index.html`) |
| Change the Standard Bank photo (staff faces can't be used) | Both Standard Bank activation photos removed site-wide; hero slides swapped for golf/event imagery |
| About Us — use the profile + supplied picture | About page rebuilt from **Kathabo Media Profile.pdf**; founder portraits from the profile document |
| Our Story alignment is off | Rebuilt as a cleanly aligned two-column feature (`about.html`, also on home) |
| Events management — event photos at the bottom + a case study | Labelled photo mosaic (IEW, Innovator Trust, registration…) + IEW Summit case-study block (`services.html#events`) |
| Brand Activation — Standard Bank, Schweppes, Vanish, Land Rover | Brand cards + activation list (`services.html#activations`) |
| Corporate Golf Days list | All five golf days listed with badges (`golf.html`) |
| Case study: Kathabo Golf, Bloemfontein Golf Course, 30 four-ball teams, 120+ players | Corrected copy in the golf case study (old site said 120 teams / 480 players) |
| Change the golf picture (background not nice) | New fairway hero photo; case-study image swapped |
| A gallery to showcase the different golf days | Filterable gallery (2023 / 2024 / St Michael's 2025) with lightbox |
| Cleaner, simpler format, easy to navigate | 5-page structure, persistent top nav (no hamburger-only), consistent sections, placeholder testimonials/portfolio pages dropped |

## Content sources

- Copy: existing site + **Kathabo Media Profile.pdf** (emailed by Maki Mholo, 13 Jun 2025).
- Photos: existing site (Wix CDN) + the shared Google Drive folder **"Kathabo Golf Photos & Videos"** (Macufe/Kathabo Golf Day 2023, Kathabo Golf Day 2024, St Michael's 2025).
- Contact details per the profile + email signatures: info@kathabo.co.za · 051 430 8050 · 17 Milner Road, Waverley, Bloemfontein 9301.

## Still pending from the client

- The **About Us picture** Lerato said she'd send (the profile's founder portrait is used meanwhile).
- Photos of the **PASA, Land Rover and FNB** events for the events mosaic (named in copy; images slot straight into `services.html#events`).
- Testimonials (the old site's placeholders were dropped rather than kept as lorem).
- Confirm the office address (old site footer said Centurion; profile and signatures say Bloemfontein — Bloemfontein used).

## Local preview

Any static server works:

```bash
python3 -m http.server 8080
# → http://localhost:8080
```
