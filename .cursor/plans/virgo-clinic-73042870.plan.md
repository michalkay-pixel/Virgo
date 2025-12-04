<!-- 73042870-bedd-4317-bb4f-3f54abf3a2ed 2e712b3a-e92c-4898-9d83-c1287be0080c -->
# Virgo Laser Clinic - Master Build Plan

## PHASE 1: FOUNDATION & CONFIG

### 1.1 Tech Stack Confirmation

| Technology | Version | Purpose |

|------------|---------|---------|

| Next.js | 15 (App Router) | Framework with RSC support |

| TypeScript | 5.x | Type safety |

| Tailwind CSS | 4.x | Utility-first styling |

| Framer Motion | 11.x | Scroll reveals & micro-interactions |

| Shadcn UI | Latest | Base component primitives |

### 1.2 Tailwind Configuration (`tailwind.config.ts`)

Extend the default theme with the "Old Money" palette from [virgo_brand_identity.md](virgo_brand_identity.md):

```ts
colors: {
  'charcoal': '#2C2A29',      // Bespoke Charcoal - Primary
  'cream': '#F5F3EF',         // Limestone Cream - Background
  'copper': '#B07C5D',        // Burnished Copper - Accent/CTA
  'taupe': '#8A8683',         // Soft Taupe - Body text
}
```

Additional config:

- Set `cream` as default background (never pure white)
- Define spacing scale for generous whitespace ("luxury breathing room")
- Configure container max-width for elegant content width

### 1.3 Font Strategy (`next/font`)

Per [virgo_brand_identity.md](virgo_brand_identity.md) typography system:

| Font | Source | CSS Variable | Usage |

|------|--------|--------------|-------|

| Cinzel | Google Fonts | `--font-cinzel` | Headings, Logo, Section Titles |

| Lato | Google Fonts | `--font-lato` | Body copy, Buttons, Navigation |

Implementation in `app/layout.tsx`:

- Load both fonts via `next/font/google`
- Apply Lato as body default
- Create utility classes: `font-heading` (Cinzel), `font-body` (Lato)

---

## PHASE 2: CORE COMPONENT ARCHITECTURE

### 2.1 Layout Components

| Component | File | Requirements |

|-----------|------|--------------|

| `Navbar` | `components/layout/Navbar.tsx` | Charcoal logo on cream, sticky on scroll, mobile hamburger, "Request Consultation" CTA button in copper |

| `Footer` | `components/layout/Footer.tsx` | Deep charcoal background, Harrow location, WhatsApp link, copper social icons, "Private Parking Available" badge |

| `Container` | `components/layout/Container.tsx` | Max-width wrapper with consistent padding |

### 2.2 Hero & Landing Components

| Component | File | Requirements |

|-----------|------|--------------|

| `HeroVideo` | `components/hero/HeroVideo.tsx` | Full-screen video loop (water/light textures), responsive (different crops for mobile), headline overlay with Cinzel font |

| `OfferBadge` | `components/hero/OfferBadge.tsx` | The "3 for £69" card, sticky on mobile scroll, copper accent border |

| `LeadMagnet` | `components/sections/LeadMagnet.tsx` | "The Invitation" section with offer details and referral program copy |

### 2.3 Content Section Components

| Component | File | Requirements |

|-----------|------|--------------|

| `ExpertProfile` | `components/sections/ExpertProfile.tsx` | Split layout (B&W image left, bio right), Jolanta Kay's credentials, NMC trust badges |

| `TreatmentCard` | `components/treatments/TreatmentCard.tsx` | Elegant card for the 5 "Bespoke Curations" (Ageless, Sculpt, Clarity, Radiance, Restoration) |

| `TreatmentGrid` | `components/treatments/TreatmentGrid.tsx` | 5-card responsive grid layout |

| `PartnerStrip` | `components/sections/PartnerStrip.tsx` | Monochromatic logo strip (Obagi, ZO Skin Health) |

| `JournalPreview` | `components/sections/JournalPreview.tsx` | 3-article thumbnail grid for SEO blog |

### 2.4 UI Primitives (Shadcn-based)

| Component | Customization |

|-----------|---------------|

| `Button` | Copper background variant, charcoal outline variant |

| `Card` | Cream background, subtle shadow, copper hover border |

| `Badge` | Trust markers styling |

---

## PHASE 3: PAGE CONSTRUCTION

### 3.1 Homepage Structure (`app/page.tsx`)

Sections in order per [virgo_website_structure.md](virgo_website_structure.md):

```
1. <HeroVideo />           - "Timeless Skin. Tailored to You."
2. <LeadMagnet />          - Soprano Ice £69 Offer + Referral
3. <ExpertProfile />       - Jolanta Kay bio
4. <TreatmentGrid />       - 5 Bespoke Curations
5. <PartnerStrip />        - Obagi/ZO logos
6. <JournalPreview />      - 3 blog articles
7. <Footer />              - Concierge footer
```

### 3.2 Data Architecture

**Static Data Files (`lib/data/`):**

| File | Content Source | Maps To |

|------|----------------|---------|

| `treatments.ts` | [virgo_company_profile.md](virgo_company_profile.md) Section 4 | `TreatmentCard` props |

| `services.ts` | [virgo_company_profile.md](virgo_company_profile.md) Section 5 | Future service pages |

| `contact.ts` | [virgo_company_profile.md](virgo_company_profile.md) Section 1-2 | Footer, Contact page |

| `articles.ts` | [virgo_website_structure.md](virgo_website_structure.md) Section 6 | `JournalPreview` |

**Treatment Data Structure:**

```ts
interface Treatment {
  id: string;
  name: string;           // e.g., "The Ageless Program"
  tagline: string;        // e.g., "Anti-Aging (Fillers, Profhilo)"
  icon: string;           // Lucide icon name
  href: string;           // Future detail page link
}
```

### 3.3 Asset Requirements

**Available Assets (from `Assets/` folder):**

| Asset | Source File | Destination |

|-------|-------------|-------------|

| Hero Video | `final video hero.mp4` (14MB) | `public/video/hero.mp4` |

| Jolanta Portrait | `jolantaimage.jpg` | `public/images/jolanta-kay.jpg` |

| Water Texture (Desktop) | `water ripple.png` | `public/images/textures/water-ripple.png` |

| Water Texture (Mobile) | `water ripple mobile.png` | `public/images/textures/water-ripple-mobile.png` |

| Silk Texture (Desktop) | `silk fabric.png` | `public/images/textures/silk-fabric.png` |

| Silk Texture (Mobile) | `silk fabric mobile.png` | `public/images/textures/silk-fabric-mobile.png` |

| Stone Texture | `Stone texture.png` | `public/images/textures/stone.png` |

| Charcoal Paper | `charcoal cotton paper.png` | `public/images/textures/charcoal-paper.png` |

**Placeholders Needed:**

| Asset | Status | Solution |

|-------|--------|----------|

| Partner Logos (Obagi, ZO) | Not yet available | Text placeholders until provided |

---

## PHASE 4: INTERACTIVITY & POLISH

### 4.1 Framer Motion Animation Strategy

**Scroll Reveal Wrapper (`components/motion/ScrollReveal.tsx`):**

- Reusable component for "slow luxury" fade-up reveals
- Default: `opacity: 0 -> 1`, `y: 40 -> 0`, `duration: 0.8s`, `ease: easeOut`
- Stagger children option for grid items

**Animation Targets:**

| Section | Animation Type |

|---------|---------------|

| Hero headline | Fade in with 0.5s delay after video loads |

| Offer card | Subtle scale-in (1.02 -> 1) on viewport entry |

| Treatment cards | Staggered reveal (0.1s delay between each) |

| Expert section | Slide-in from left (image) and right (text) |

| Partner logos | Fade in sequentially |

### 4.2 Mobile-Specific Behavior

Per [virgo_website_structure.md](virgo_website_structure.md) technical notes:

- **Sticky Offer Badge:** The "3 for £69" offer stays fixed at bottom of viewport on mobile scroll
- **Touch-friendly CTAs:** Minimum 48px tap targets for all buttons
- **Video optimization:** Lower resolution/shorter loop for mobile to ensure instant load

### 4.3 Trust & Conversion Elements

Per [virgo_competitor_analysis.md](virgo_competitor_analysis.md) Phase 2 goals:

- Google/Trustpilot star rating badge near "Claim Offer" button
- NMC registration logo in Expert section
- WhatsApp floating button for instant concierge contact

---

## File Structure Overview

```
app/
├── layout.tsx              # Fonts, global styles
├── page.tsx                # Homepage composition
├── globals.css             # Tailwind imports, CSS variables
components/
├── layout/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── Container.tsx
├── hero/
│   ├── HeroVideo.tsx
│   └── OfferBadge.tsx
├── sections/
│   ├── LeadMagnet.tsx
│   ├── ExpertProfile.tsx
│   ├── PartnerStrip.tsx
│   └── JournalPreview.tsx
├── treatments/
│   ├── TreatmentCard.tsx
│   └── TreatmentGrid.tsx
├── motion/
│   └── ScrollReveal.tsx
└── ui/                     # Shadcn primitives
lib/
├── data/
│   ├── treatments.ts
│   ├── services.ts
│   ├── contact.ts
│   └── articles.ts
└── utils.ts
public/
├── video/
├── images/
└── fonts/                  # If self-hosting
```

---

## Implementation Order

1. **Foundation:** Initialize Next.js 15 project, configure Tailwind with custom colors, set up fonts
2. **Primitives:** Install Shadcn, customize Button/Card components with copper/charcoal variants
3. **Layout Shell:** Build Navbar and Footer, establish page wrapper
4. **Hero Section:** HeroVideo component with headline overlay
5. **Lead Magnet:** Offer section with sticky mobile badge
6. **Expert Section:** Split layout with Jolanta's profile
7. **Treatment Grid:** Card component + 5-item grid
8. **Supporting Sections:** Partner strip, Journal preview
9. **Animations:** Implement ScrollReveal wrapper, apply to all sections
10. **Polish:** Mobile testing, performance optimization, trust badges

### To-dos

- [ ] Initialize Next.js 15 project with TypeScript, Tailwind, and custom color/font config
- [ ] Install Shadcn UI and customize Button/Card with copper/charcoal variants
- [ ] Build Navbar and Footer components with concierge strategy styling
- [ ] Create HeroVideo component with video loop and headline overlay
- [ ] Build LeadMagnet section with £69 offer and sticky mobile badge
- [ ] Create ExpertProfile with split layout for Jolanta Kay bio
- [ ] Build TreatmentCard and TreatmentGrid for 5 Bespoke Curations
- [ ] Create PartnerStrip and JournalPreview components
- [ ] Implement Framer Motion ScrollReveal wrapper and apply to sections
- [ ] Mobile testing, performance optimization, and trust badge integration