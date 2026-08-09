# Durham Diwali Festival

A React + TypeScript + Tailwind CSS site for the Durham Diwali Festival, rebuilt from the original Wix site with the same content (mission, vision, team, sponsorship tiers, vendor packages) in a faster, more professional design.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploying to Netlify

This project is pre-configured for Netlify:

- `netlify.toml` sets the build command (`npm run build`), publish directory (`dist`), and a SPA redirect so client-side routes like `/sponsorship-packages` work on refresh/direct link.
- Two forms — **newsletter signup** and **contact** — are wired for [Netlify Forms](https://docs.netlify.com/manage/forms/setup/). A hidden, static copy of each form lives in `index.html` so Netlify's build bot can detect them (required for JS-rendered forms); the real forms in `src/components/home/Newsletter.tsx` and `src/components/home/Contact.tsx` submit to those same form names via `fetch`.
- Form submissions will appear under **Site settings → Forms** in the Netlify dashboard. Set up email notifications there if you'd like an alert per submission.

To deploy: push this repo to GitHub/GitLab/Bitbucket and connect it as a new site in Netlify, or run `netlify deploy` from the Netlify CLI. No environment variables are required.

## Content notes

- Contact email/phone/address are placeholders (`info@durhamdiwalifestival.ca`, "North Ajax, Durham Region") — update `src/components/home/Contact.tsx` and `src/components/Footer.tsx` with real details.
- Social links in the footer are placeholders — add real URLs in `src/components/Footer.tsx`.
- The original site listed slightly different times for the H.A.N.D. daytime event in different places (2–6 p.m. in the vendor letter vs. 11 a.m.–4 p.m. in the vendor package section). Both are reproduced as-is on the Vendor Packages page — worth confirming the correct time with the organizing team.
- Team member photos aren't available from the source site, so initials-based avatars are used instead. Swap in real photos in `src/components/home/Team.tsx` when available.
