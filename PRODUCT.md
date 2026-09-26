# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Prospective attendees / the Durham Region public** — families and residents of Durham Region (Ajax and surrounding area), including the South Asian diaspora and the broader community, learning about the first-ever Durham Diwali Festival and signing up for updates.
- **Sponsors** — local and regional organizations and businesses evaluating sponsorship tiers ($500–$20,000) to fund the festival in exchange for recognition and visibility.
- **Vendors** — food and marketplace businesses applying for a vendor booth package for the event evening.
- **Volunteers / community partners** — residents and organizations reaching out via the contact form about getting involved.

## Product Purpose

A marketing and information site for the Durham Diwali Festival, a real, first-ever Diwali (Festival of Lights) celebration coming to North Ajax, Ontario in October 2026. The site exists to build awareness, capture newsletter signups, and convert sponsors and vendors through dedicated package pages. Success is measured by newsletter subscriptions, sponsorship/vendor inquiries via the contact form, and community goodwill ahead of the event.

## Positioning

The first-ever Diwali festival held in Ajax, presented by the Durham Diwali Festival Organizing Committee in official partnership with the Durham District School Board. It is explicitly inclusive and community-centred (not limited to one cultural group), positioned as the start of a new annual regional tradition rather than a one-off event.

## Operating Context

- Built as a React + Vite + TypeScript + Tailwind SPA (react-router-dom), deployed on Netlify.
- Two lead-capture forms (newsletter signup, general contact) submit via Netlify Forms (`src/lib/netlifyForms.ts`), with hidden static forms in `index.html` for Netlify's build-time form detection. Any redesign of these forms must preserve the `form-name`, field `name` attributes, and honeypot field so Netlify continues to detect and process submissions.
- Three routed pages today: Home (`/`), Sponsorship Packages (`/sponsorship-packages`), Vendor Packages (`/vendor-packages`), plus a 404. Home is a single scrollable page with in-page anchor sections (`#vision`, `#team`, `#sponsors`, `#contact`, `#newsletter`) linked from the navbar/footer.
- No ticketing system; the event is promoted via updates signup, not ticket sales.

## Capabilities and Constraints

- All copy is real organizational content (mission/vision statements, a sponsor letter, a vendor letter, named team members with real bios and titles, real sponsorship tier names/prices/benefits, real vendor package data) — confirmed accurate and complete as of this redesign; preserve it rather than inventing or altering facts.
- The logo (`public/logo.jpg`, a circular photo-based mark) is the organization's official, already-in-use mark (print, social, signage) and **must be kept exactly as-is** — no new logo or wordmark should replace it in this redesign.
- Contact email: info@durhamdiwalifestival.ca. Location described as "North Ajax, Durham Region, Ontario." Event date: October 2026.
- Sponsorship tier names carry intentional Diwali symbolism (Diya, Rangoli, Lantern, Lotus, Spark, Community Friend) — preserve these names and their symbolic taglines.

## Brand Commitments

- Name: "Durham Diwali Festival." Presented by the Durham Diwali Festival Organizing Committee, in partnership with the Durham District School Board — this attribution must remain visible (currently in the footer and vision section).
- Official logo mark is fixed (see Capabilities and Constraints).
- Tone: warm, inclusive, culturally respectful, community-first — never exclusionary or narrowly commercial.

## Evidence on Hand

- Real team roster with photos-as-initials (no headshot photos currently available) at `src/data/team.ts`.
- Real sponsorship tiers at `src/data/sponsorshipTiers.ts` and vendor packages at `src/data/vendorPackages.ts`.
- Real sponsor/vendor outreach letters embedded in `SponsorshipPackages.tsx` and `VendorPackages.tsx`.
- No event photography exists yet (this is the first-ever running of the festival) — any imagery must be illustrative/graphic rather than fabricated event photos.
- Sponsor logos are not yet on file — the current site shows sponsorship tier names as placeholders, not actual partner logos.

## Product Principles

1. Preserve all factual content (names, prices, dates, org partnerships, bios) exactly — this is a real organization's real information, not sample copy.
2. Keep the official logo mark untouched; build the visual system around it rather than replacing it.
3. Inclusivity and community warmth over narrow commercial polish — the festival is explicitly for "every resident," not a single cultural audience.
4. Design for a first-time event with no photo library: lean on typography, color, pattern, and light/motif-driven graphics rather than implying nonexistent event photography.
5. Keep the two lead-capture forms (newsletter, contact) functionally intact for Netlify Forms detection through any visual redesign.

## Accessibility & Inclusion

No formal accessibility standard was specified. The mission statement explicitly commits to welcoming "every resident of Durham Region, regardless of background," so redesigned UI should hold to solid contrast, keyboard access, and legible type as a matter of the stated inclusion commitment.
