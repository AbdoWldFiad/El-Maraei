# El-Maraei Group Corporate Website - Design Guidelines

## Design Approach
**Selected Framework:** Corporate Design System with Middle Eastern Professional Aesthetic

Drawing inspiration from established corporate platforms like ABB, Siemens, and regional corporate leaders, while maintaining cultural relevance for Arabic-speaking markets. The design prioritizes **credibility, clarity, and professional excellence** over visual experimentation.

---

## Color Palette

### Primary Colors
**Navy Blue:** 220 45% 25% (Primary brand color - trust, stability, professionalism)  
**Deep Green:** 160 35% 30% (Secondary - growth, prosperity, business strength)

### Accent & Supporting
**Gold:** 45 85% 55% (Premium accent - used sparingly for CTAs and highlights)  
**Warm Gray:** 30 8% 45% (Text and subtle backgrounds)  
**Light Beige:** 40 25% 95% (Soft backgrounds, section dividers)  
**White:** 0 0% 100% (Clean space, card backgrounds)

### Semantic Colors
**Success Green:** 145 60% 45%  
**Alert Red:** 0 70% 50%  
**Info Blue:** 210 75% 55%

**Dark Mode:** Full implementation with navy backgrounds (220 50% 12%), gold accents maintained for consistency

---

## Typography

### Arabic Fonts
**Primary:** 'IBM Plex Sans Arabic' (via Google Fonts) - Professional, highly legible  
**Headings:** Font weights 600-700, sizes: 2.5rem (h1), 2rem (h2), 1.5rem (h3)  
**Body:** Font weight 400-500, size: 1.125rem for optimal Arabic readability

### English Fonts
**Primary:** 'Inter' (via Google Fonts) - Clean, modern, professional  
**Headings:** Font weights 600-700, matching Arabic hierarchy  
**Body:** Font weight 400-500, size: 1rem

### RTL/LTR Considerations
- Automatic text direction switching
- Mirrored layouts for navigation and card grids
- Consistent vertical rhythm regardless of language

---

## Layout System

### Spacing Scale
**Core Units:** Use Tailwind spacing of 4, 6, 8, 12, 16, 20, 24, 32 for consistency  
- Component padding: p-6 to p-8 (mobile), p-12 to p-16 (desktop)
- Section spacing: py-16 to py-24 (mobile), py-24 to py-32 (desktop)
- Container max-width: max-w-7xl with px-4 to px-8

### Grid Structure
- **Homepage:** Mixed single-column and multi-column layouts
- **Business Cards:** 3-column grid on desktop (lg:grid-cols-3), 2-column tablet (md:grid-cols-2), single on mobile
- **Features/Services:** 2-column layouts with imagery and text pairings
- **Content Pages:** Single column max-w-4xl for readability

---

## Component Library

### Navigation
**Desktop Header:**
- Sticky navigation with navy background (bg-opacity-95 with backdrop blur)
- Logo left (RTL: right), main navigation center, language toggle + CTA right (RTL: left)
- Gold underline on hover for nav items

**Mobile Navigation:**
- Hamburger menu with slide-in drawer
- Full-height menu with large touch targets
- Language switcher prominently placed

### Hero Section
**Large Hero Image:** Yes - Professional business imagery
- Full-width hero with subtle navy overlay (bg-navy-900/40)
- Height: 85vh on desktop, 70vh on mobile
- Centered headline (white text) + gold accent subheadline
- Dual CTAs: Primary (gold button) + Secondary (outline white with blur background)
- Subtle scroll indicator at bottom

### Business Showcase Cards
- White cards with subtle shadow (shadow-lg)
- Icon/image at top (colored circle backgrounds: navy, green, gold rotation)
- Business name in both Arabic and English
- 2-line description
- "Learn More" link with arrow (→ LTR, ← RTL)
- Hover: Slight lift (transform translate-y-1) + shadow increase

### Forms
**Contact & Appointment Forms:**
- Two-column layout on desktop (form + info/map)
- Clean input fields with navy borders, gold focus rings
- Large touch targets (min-height: 48px)
- Inline validation with semantic colors
- Primary button: Gold background, navy text

### News/Blog Cards
- Featured image (16:9 ratio)
- Date badge (top-right corner, gold background)
- Title + excerpt
- Category tag (navy or green)
- Grid: 3 columns desktop, 1 column mobile

### Footer
**Multi-Column Footer:**
- Navy background with gold accents
- 4 columns: About, Quick Links, Contact Info, Newsletter
- Social media icons (gold on hover)
- Bottom bar with copyright, legal links, certifications

---

## Images

### Hero Image
**Placement:** Homepage hero section  
**Description:** Professional corporate setting - modern office building exterior or group of professionals in meeting, high quality, warm tones with natural lighting

### Business Section Images
**5 Images Required:**
1. **Medical Center:** Clean, modern clinic interior or doctor consultation
2. **Shipping Agency:** Container ship at port or logistics operations
3. **Marine Works:** Marine construction equipment or harbor operations
4. **Mining Factory:** Industrial mining equipment or mineral processing
5. **Trade & Agency:** Handshake/partnership imagery or international cargo

**Treatment:** All images should have consistent color grading with slight warmth, professional composition

### Supporting Imagery
- Team/leadership photos: Professional headshots with neutral backgrounds
- Office locations: Building exteriors for Google Maps integration
- Icons: Use Heroicons for UI elements (outline style for clarity)

---

## Bilingual UX Patterns

### Language Toggle
- Flag icons or AR/EN text toggle in header
- Smooth transition without page reload (if using JavaScript framework)
- Persistent language preference

### Content Layout
- Automatic RTL/LTR mirroring for all grid layouts
- Consistent visual hierarchy regardless of language
- Slightly larger line-height for Arabic (1.8 vs 1.6)

---

## Animations & Interactions

**Minimal, Professional Animations:**
- Fade-in on scroll for section reveals (subtle, 0.3s)
- Smooth hover transitions for cards and buttons (0.2s)
- No elaborate scroll-triggered animations
- Focus: Fast, responsive feel over decorative motion

---

## Accessibility & Performance

- WCAG 2.1 AA compliance minimum
- Proper heading hierarchy (h1 → h6)
- Alt text for all images (bilingual)
- Keyboard navigation support
- High contrast ratios (navy on white: excellent, gold on navy: test)
- Lazy loading for images below fold
- Optimized web fonts with font-display: swap

---

## Key Differentiators

1. **Bilingual Excellence:** Seamless Arabic-English experience with cultural sensitivity
2. **Multi-Business Clarity:** Clear visual separation and navigation between 5 businesses
3. **Professional Credibility:** Conservative, trustworthy design suitable for corporate, medical, and industrial sectors
4. **Regional Relevance:** Gold accents and color choices resonate with Middle Eastern corporate aesthetics while maintaining international appeal