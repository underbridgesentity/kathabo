# Kathabo Group Website

Rebuild of [kathabo.co.za](https://www.kathabo.co.za/) as a fast, dependency-free static site (previously Wix). Built by Under Bridges.

**Live preview:** https://kathabo.vercel.app (auto-deploys from `main` via Vercel)

## Stack

Plain HTML + CSS + vanilla JS. No build step. Deploy the folder as-is to any static host.

```
index.html        Home: hero, client logos, story + stats, services, golf spotlight, CTA
about.html        About: profile, vision & beliefs, our story, founder, process
services.html     Services: events (photos + case study), activations, media, advertising
golf.html         Corporate Golf Days: track record, case study, filterable gallery
contact.html      Contact: details + enquiry form (opens email client)
assets/
  css/styles.css  Design system (Plus Jakarta Sans + Inter, ivory/ink palette, logo-dot accents)
  js/main.js      Hero fade, mobile nav, gallery filter + lightbox, reveals, form
  img/            Optimised photos (events / golf / people / logos)
```

## Design language

Minimal and mobile-first: warm ivory background, near-black ink for text and buttons, and the five colours of the Kathabo logo dots used only as small brand moments. Type is Plus Jakarta Sans for headings and Inter for body copy. The home hero is a static headline over a slow three-photo fade.

## Client feedback and what changed

| Feedback (Lerato, 13 Jun 2025) | Where it is addressed |
| --- | --- |
| Likes the landing page with pictures | Kept: full-screen photo hero with a calm background fade (`index.html`) |
| Change the Standard Bank photo (staff faces can't be used) | Both Standard Bank activation photos removed site-wide |
| About Us: use the profile + supplied picture | About page rebuilt from the Kathabo Media Profile PDF; founder portrait from the profile |
| Our Story alignment is off | Rebuilt as cleanly aligned two-column sections |
| Events management: event photos at the bottom + a case study | Labelled photo mosaic + IEW Summit case study (`services.html#events`) |
| Brand Activation: Standard Bank, Schweppes, Vanish, Land Rover | Brand cards + activation list (`services.html#activations`) |
| Corporate Golf Days list | All five golf days listed (`golf.html`) |
| Case study: Kathabo Golf, Bloemfontein Golf Course, 30 four-ball teams, 120+ players | Corrected copy in the golf case study (old site said 120 teams / 480 players) |
| Change the golf picture (background not nice) | New fairway hero photo; case-study image swapped |
| A gallery to showcase the different golf days | Filterable gallery (2023 / 2024 / St Michael's 2025) with lightbox |
| Cleaner, simpler format, easy to navigate | Five-page structure, persistent top nav, minimal monochrome design |

## Content sources

- Copy: existing site + the Kathabo Media Profile PDF (emailed by Maki Mholo, 13 Jun 2025).
- Photos: existing site (Wix CDN) + the shared Google Drive folder "Kathabo Golf Photos & Videos" (Macufe/Kathabo Golf Day 2023, Kathabo Golf Day 2024, St Michael's 2025).
- Contact details per the profile and email signatures: info@kathabo.co.za · 051 430 8050 · 17 Milner Road, Waverley, Bloemfontein 9301.

## Still pending from the client

- The About Us picture Lerato said she would send (the profile's founder portrait is used meanwhile).
- Photos of the PASA, Land Rover and FNB events for the services mosaic (named in copy; images slot straight into `services.html#events`).
- Testimonials (the old site's placeholders were dropped rather than kept as filler).
- Confirm the office address (old site footer said Centurion; profile and signatures say Bloemfontein, which is used).

## Local preview

```bash
python3 -m http.server 8080
# http://localhost:8080
```

## Deploying

Pushes to `main` deploy automatically via the Vercel GitHub integration. Manual deploys: `vercel deploy --prod`.
