---
name: Durham Diwali Festival
description: A night bazaar at rest before the crowd arrives — an asymmetric, lantern-lit marketplace scene for Ajax's first-ever Diwali festival.
colors:
  ink-night: "#1a1023"
  ink-night-deep: "#210536"
  saffron: "#ff7f0d"
  saffron-deep: "#ce4805"
  saffron-pale: "#fff8ed"
  marigold: "#ffc233"
  marigold-light: "#ffd166"
  diya-purple: "#a238e8"
  diya-purple-deep: "#6d17a0"
  card-ink-text: "#1a1023"
typography:
  marquee:
    fontFamily: "'Bungee', 'Baloo 2', system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 2.65rem)"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0.01em"
  display:
    fontFamily: "'Baloo 2', system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "'Mukta', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  card: "1.75rem"
  pill: "9999px"
  field: "0.75rem"
  panel: "1.5rem"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.marigold}"
    textColor: "{colors.card-ink-text}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.saffron-pale}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-outline:
    backgroundColor: "#ffffff"
    textColor: "{colors.diya-purple-deep}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  stall-card:
    backgroundColor: "{colors.saffron-pale}"
    textColor: "{colors.card-ink-text}"
    rounded: "{rounded.card}"
    padding: "28px 24px"
  field:
    backgroundColor: "#ffffff"
    textColor: "{colors.card-ink-text}"
    rounded: "{rounded.field}"
    padding: "12px 16px"
---

# Design System: Durham Diwali Festival

## Overview

**Creative North Star: "Night Bazaar & String Lights"**

The site is the night market itself, caught at rest just before the crowd arrives: a near-black ink-night ground strung with warm saffron and marigold fairy-light bulbs, lit stalls (sponsor tiers, vendor packages, team pillars, the sponsor/vendor letters) glowing against the dark, and hand-lettered marquee signage announcing the event. This replaced a generic purple-gradient-hero-plus-three-icon-cards template; the explicit rejection is that arrangement, not gradients or purple as such — the incumbent diya-purple hue survives as a supporting tone (night-sky glow, one Mission pillar accent, outline-button color) rather than the dominant identity.

Every recurring UI motif earns its place by literally existing in a night market: string-light strands do the job a plain rule or divider would elsewhere; bulb-glow (not gray box-shadow) is the interactive/focus affordance; stall-card components carry a scalloped canvas-awning top exactly where a card would otherwise have a plain edge. The system is asymmetric and hand-set rather than gridded-and-centered — pillars and stall cards tilt, lift, and settle back on hover, matching a market stall rather than a SaaS dashboard.

**Key Characteristics:**
- Near-black ink-night ground with warm saffron/marigold light as the only source of "glow"
- Bungee marquee display type reserved strictly for `h1` — every page banner and 404 gets one hand-lettered marquee moment
- Stall-card as the one recurring container shape, reused for sponsor tiers, vendor packages, and letters
- String-lights and bunting strips as literal, animated (twinkling) section dividers, not abstract line rules
- Asymmetric, tilted composition (rotated cards, staggered "hanging" pillars) in place of a centered grid

## Colors

A three-tone warm-on-dark palette: an ink-night ground, a saffron/marigold light system doing all "glow" and interaction work, and a supporting diya-purple carried over from the previous identity as a minority accent.

### Primary
- **Saffron** (`#ff7f0d`, with a deep `#ce4805` and pale `#fff8ed`): the workhorse warm accent — button gradients, focus rings, checkmarks, section-heading dashes, letterhead labels. Saffron-50 (`#fff8ed`) is also the lit interior surface color of every stall-card.

### Secondary
- **Marigold** (`#ffc233`, light `#ffd166`): the "bulb" itself — string-light glow, active-nav bulb dot, hero marquee highlight word, lantern-glow halo around the logo, focus outlines. Where saffron is the market's warm light overall, marigold is the point-source glow of an individual bulb.

### Tertiary
- **Diya Purple** (`#a238e8`, deep `#6d17a0`): the surviving night-sky/incumbent hue. Used for the ink-night ground gradient's cool undertone, one of three Mission pillars, the `stall-card--diya` awning variant (vendor context), and the outline-button color on light package pages. Never used for CTAs or focus states — those are exclusively saffron/marigold.

### Neutral
- **Ink Night** (`#1a1023`, deep `#210536`): the page ground — near-black plum, not true black. Body background is a layered gradient from `#1c0a2c` to `#120616` plus a soft radial marigold wash.
- **Card Ink** (`#1a1023`, `ink/90`, `ink/80`, `ink/70` opacities): the text color used *inside* lit stall-cards (dark text on the saffron-50 surface) — an intentional inversion from the saffron-tinted white text used on the dark ground.
- **Saffron-tinted white** (`saffron-50` at `/90`, `/75`, `/60`, `/50` opacity): all body text on the dark ground, stepped down in opacity for hierarchy rather than switching hue.

### Named Rules
**The Glow-Not-Gray Rule.** Every shadow in this system is a tinted light source (`shadow-glow`, `shadow-bulb`, `shadow-lantern`: all marigold/saffron rgba glows) or an ink-black diffuse drop (`shadow-stall`: `rgba(8,2,16,0.6)`). Neutral gray box-shadow never appears; depth reads as light, not as material lift.

**The Two-Surface Rule.** Text is either saffron-tinted white on the ink-night ground, or ink-dark on a saffron-50 lit surface (stall-cards, price-tags, fields). No third neutral gray text/background pairing is used.

## Typography

**Display Font:** Baloo 2 (with system-ui, sans-serif fallback)
**Marquee Font:** Bungee (with Baloo 2, system-ui fallback)
**Body Font:** Mukta (with system-ui fallback)

**Character:** A rounded, friendly display face (Baloo 2) paired with a chunky hand-painted-sign display face (Bungee) reserved for the single biggest headline moment per page, over a plain, highly legible body face (Mukta) that carries all the real informational copy (letters, bios, benefits lists).

### Hierarchy
- **Marquee** (Bungee 400, `text-3xl` to `text-[2.65rem]` clamped by breakpoint, line-height 1.25, `letter-spacing: 0.01em`): every `h1` in the app without exception — hero headline, both page-hero banners (Sponsorship, Vendor), and the 404 headline. This is a deliberate, enforced split: no other element in the app ever gets the marquee face.
- **Display** (Baloo 2 700, `text-lg` to `text-3xl`/`text-4xl`): all `h2`–`h4` — section headings, stall-card titles, tier/package names and prices, letterhead names.
- **Body** (Mukta 400, `text-sm` to `text-xl`/`2xl` for the mission lede): paragraph copy, letter bodies, benefit-list items, nav labels.
- **Label** (Mukta 700/800, `text-xs`, `uppercase`, `tracking-[0.2em]`): letterhead category labels ("Letter to Potential Sponsors"), bunting-strip category words (Music/Dance/Food/Marketplace/Fireworks & Light Show), "Top Tier"/"Most Popular" tags.

### Named Rules
**The One-Marquee Rule.** Bungee is scoped to `h1` only, globally, via the base stylesheet (`h1 { @apply font-marquee }`) rather than per-component classes — it is structurally impossible for a body paragraph or a card title to pick up the marquee face by accident.

## Layout

Single-scroll marketing page (Home) with in-page anchor sections (`#vision`, `#team`, `#sponsors`, `#contact`, `#newsletter`) plus two content-dense secondary pages (Sponsorship Packages, Vendor Packages) that reuse the same hero and card language. Content is constrained by `.container-page` (`max-w-7xl`, responsive padding `px-5` → `sm:px-8` → `lg:px-12`).

The hero is asymmetric rather than centered: a `1.15fr / 0.85fr` two-column grid at `lg:`, text-and-CTAs stage-left, two stacked, independently-rotated stall-cards stage-right (sponsor card tilted `-rotate-1`, vendor card `rotate-1` and offset `sm:self-end sm:w-[92%]`), collapsing to a single stacked column below `lg:`. The Mission pillars use the same asymmetric logic: three price-tag cards at staggered widths and vertical offsets (`sm:translate-y-6`, `sm:-translate-y-2`), each independently rotated, straightening to `rotate-0` on hover.

Card grids (sponsorship tiers, vendor packages) run `md:grid-cols-2 lg:grid-cols-3` with generous vertical gap (`gap-y-14`) to leave room for the awning-top overhang and any "Top Tier"/"Most Popular" tag that sits above the card edge.

## Elevation & Depth

This is a lit-object-on-dark-ground system, not a tonal-surface system: depth is conveyed by which elements glow and which sit in shadow, not by layered neutral surfaces. Interactive elements (buttons, active nav items, focused fields) get a warm colored glow; static containers (stall-cards) get a single ink-black diffuse drop shadow that reads as "this object is lit from within, floating over dark ground" rather than a UI card lift.

### Shadow Vocabulary
- **Glow** (`box-shadow: 0 0 40px rgba(255,194,51,0.35)`): broad ambient marigold wash, used behind lit elements.
- **Bulb** (`box-shadow: 0 0 0 3px rgba(255,194,51,0.28), 0 8px 24px -4px rgba(255,127,13,0.45)`): the primary-button glow — a bulb-halo ring plus a warm drop.
- **Lantern** (`box-shadow: 0 0 32px 6px rgba(255,194,51,0.35), 0 0 64px 16px rgba(162,56,232,0.2)`): the featured-tier stall-card glow (marigold core, faint purple bloom) — reserved for "Top Tier"/"Most Popular" cards only.
- **Stall** (`box-shadow: 0 20px 45px -20px rgba(8,2,16,0.6)`): the default stall-card drop shadow — ink-black, not gray, diffuse and low.

### Named Rules
**The Lit-From-Within Rule.** Elevation never uses a neutral gray shadow scale. An element is either glowing (warm, colored, used for anything interactive or featured) or sitting in ink-black shadow (used for static stall-cards at rest).

## Shapes

Two families of form: soft market-stall geometry, and one hard-edged signature cut (the price tag).

- **Stall-card** (`1.75rem` radius, full pill button radius `9999px`, field radius `0.75rem`): generous, soft rounding throughout — nothing in this system uses a sharp rectangular corner except the price-tag cut below.
- **Scalloped awning trim**: every stall-card gets a repeating semicircular CSS-mask cutout across its top edge (`radial-gradient` mask, `22px` repeat), rendered in an alternating orange/marigold stripe (or purple/violet via the `--diya` variant used on vendor-context cards) — this is the canvas-awning read, achieved without an image asset.
- **Price-tag clip** (`clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 50%)`): a literal hanging-tag notch, used for the Mission pillar cards, each suspended from a short colored "string" (a small circle + gradient line) above it.
- **Dashed letterhead divider**: `border-b-2 border-dashed` under each letter's header row (sponsor/vendor letters) — the one dashed-border use in the system, reserved for that letterhead context.

## Components

### Buttons
- **Shape:** full pill (`rounded-full`) across all three variants.
- **Primary:** `bg-gradient-to-b from-marigold-400 to-saffron-500`, ink text, `shadow-bulb`; used for the single primary action per view (Get Event Updates, tier/package apply CTAs on featured cards).
- **Secondary:** transparent with `bg-white/5`, `border-2 border-saffron-300/50`, backdrop-blur, saffron-tinted white text — used on the dark ground for a second-priority CTA (Become a Sponsor in the hero).
- **Outline:** white background, `border-2 border-diya-700/30`, diya-purple text — used specifically on light stall-card surfaces (non-featured tier/package cards) where a filled button would compete with the featured card's primary button.
- **Hover / Focus:** primary brightens and widens its glow ring; all three get `focus-visible:outline` in their accent color with `outline-offset-2`; all three scale to `0.98` on active press.

### Cards / Containers — Stall-card
- **Corner Style:** `1.75rem` radius with the scalloped awning-top mask described in Shapes.
- **Background:** saffron-50 lit interior, ink text (the one place text flips to dark-on-light).
- **Shadow Strategy:** `shadow-stall` at rest; `shadow-lantern` plus a `ring-2 ring-marigold-400/60` for the single featured tier/package per grid.
- **Variant:** `.stall-card--diya` swaps the awning stripe to violet/purple, used for vendor-context cards to visually distinguish vendor from sponsor stalls.
- **Behavior:** used identically across Sponsorship tiers, Vendor packages, and the two hero entry-point cards — this is the one container shape the whole site reuses rather than a bespoke card per section.

### Inputs / Fields
- **Style:** white background, `2px` diya-purple-tinted border, ink text, rounded `0.75rem` (`.field`).
- **Focus:** border shifts to saffron-500 plus a `ring-2 ring-saffron-300` glow — consistent with the system's glow-as-focus doctrine.

### Navigation
- Sticky header (`bg-[#170822]` at `/70` → `/95` opacity on scroll, backdrop-blur), a string-light strand rendered along its bottom edge (`StringLights` at `height=16`). Nav labels are saffron-tinted white at rest, marigold on hover/active. The active link (current page, or the current in-view anchor section via `IntersectionObserver` scroll-spy) gets a small glowing marigold dot beneath it — the "lit bulb" is literally the active-state indicator, not a color change alone.

### String Lights & Bunting (signature components)
- **StringLights**: a procedurally generated SVG — a sagging quadratic-curve wire with alternating small/large bulbs in four warm hues, each with a blurred glow halo and an independent `twinkle` animation delay. Used at the top edge of the hero, every `PageHero` banner, the 404 screen, and as a thin strand under the navbar.
- **BuntingStrip**: the same sagging-wire generator producing triangular flags instead of bulbs, used once as the closing element of the hero (Music · Dance · Food · Marketplace · Fireworks & Light Show).
- Both respect `prefers-reduced-motion` globally (all animation/transition durations collapse to near-zero).

### Price-Tag Pillars (signature component)
The Mission section's three pillars are rendered as literal hanging price tags (clip-path cut, colored string above, small lucide glyph icon inside), replacing a plain icon-card grid — each independently rotated and vertically offset, straightening on hover. This is the one place small glyph icons (lucide-react) appear as accents inside a graphic-first system; they are used sparingly, only at small size inside a stall/tag surface, never as a standalone navigational or decorative motif on their own.

## Do's and Don'ts

### Do:
- **Do** reuse the stall-card as the single container for any tiered, packaged, or lettered content (sponsor tiers, vendor packages, outreach letters) rather than introducing a new card shape.
- **Do** reserve the Bungee marquee face for `h1` only, one per page.
- **Do** tie all shadow/glow to the saffron/marigold hue family (or ink-black for resting stall-cards); never introduce a neutral gray shadow.
- **Do** keep `StringLights`/`BuntingStrip` procedurally generated (SVG, no bulb/flag image assets) so hue and count stay tokenized and reduced-motion-safe.
- **Do** keep the logo (`/logo.jpg`) exactly as shipped, wrapped only in the `LanternGlow`/ring treatment in `Logo.tsx` — the mark itself is fixed, not a placeholder.

### Don't:
- **Don't** use the marquee (Bungee) face for body copy, card titles, or labels — it is an `h1`-only device, confirmed by the global `h1 { @apply font-marquee }` rule.
- **Don't** introduce event photography; no photo library exists for this first-ever running of the festival, and the system is built to carry that absence gracefully through pattern, light, and typography instead.
- **Don't** apply the `stall-card--diya` (purple awning) variant outside vendor-context cards — it is a deliberate sponsor/vendor color distinction, not a random alternate skin.
- **Don't** treat the diya-purple family as the dominant brand hue going forward — it is the retained supporting/incumbent tone; saffron and marigold carry the identity now.
