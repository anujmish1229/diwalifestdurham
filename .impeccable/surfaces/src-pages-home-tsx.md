---
version: 1
slug: "src-pages-home-tsx"
primary_target: "src/pages/Home.tsx"
related_targets: ["src/pages/SponsorshipPackages.tsx","src/pages/VendorPackages.tsx","src/components/Navbar.tsx","src/components/Footer.tsx","src/pages/NotFound.tsx"]
---

# Surface: Site-wide redesign

## Scope & Mode

Persuade. Entire site: Home (single-scroll marketing page), Sponsorship Packages, Vendor Packages, shared Navbar/Footer, 404. Real nonprofit event, first-ever running, October 2026, North Ajax, Ontario.

## Audience, job, action, proof, constraints

- Audience: prospective attendees (Durham Region families and the broader public), sponsors ($500–$20,000 tiers), vendors, and volunteers/partners.
- Job: attendees decide to show up and subscribe for updates; sponsors and vendors decide to apply via the contact form.
- Proof/content: real mission/vision copy, real sponsor letter, real vendor letter, real named team bios, real tier pricing — all preserved verbatim, never rewritten as sample copy.
- Constraints: the official logo (`public/logo.jpg`) is fixed and must be kept exactly as-is. Netlify Forms wiring (`form-name`, field `name` attributes, honeypot field) must keep working through the redesign. No event photography exists yet (first-ever running) — illustrate with authored graphic material, never fabricate photos.

## Direction contract

THESIS: The site IS the night bazaar at rest before the crowd arrives — an asymmetric, lantern-lit marketplace scene, refusing the purple-gradient-hero-plus-three-icon-cards arrangement every "modern Diwali" site (including the current one) ships.

OWN-WORLD: Ink-night ground (near-black plum, #1a1023 / #210536) strung with warm saffron/marigold fairy-light bulbs as a literal recurring UI motif (section dividers, hover states, active nav indicator, focus rings); stall-card components with canvas-awning tops and hand-lettered marquee headlines; string-light bulb glow used as the interactive/focus affordance in place of generic box-shadow glows.

STORY: A visitor lands inside the marketplace itself, reads the marquee (what / when / where), browses "stalls" for sponsors, vendors, team, and contact, and leaves having subscribed, sponsored, or applied.

FIRST VIEWPORT: Full-bleed dark scene, a string-light strand strung across the top edge; stage-left a hand-lettered marquee headline plus one-line event facts (date, location), the primary CTA ("Get Event Updates"), and a secondary sponsor CTA ("Become a Sponsor") — cited adaptation: the product has two first-class audiences on this same viewport (attendees and sponsors), so the hero carries a primary/secondary CTA pair rather than one CTA, matching how the two stall cards on the right already split attendee vs. sponsor/vendor intent; stage-right two stacked "stall" cards spotlighting the sponsorship and vendor entry points; a bottom bunting strip repeating Music · Dance · Food · Marketplace · Fireworks & Light Show.

FORM: Night Bazaar & String Lights — my own top-ranked grounded candidate (IMPECCABLE’S PICK, chosen over the assigned Festival Invitation Suite direction), seed key 52c3a5a8.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved decisions

- Exact shared "stall card" component contract reused across Sponsors, Team, and Vendor package sections.
- Whether the fireworks/light-show gets its own dedicated closing section on Home or stays folded into the bunting strip.
