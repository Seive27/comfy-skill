---
name: neo-brutalism-ui
description: Build bold, high-contrast neo-brutalism UI components and pages. Use this skill whenever the user asks about styling, UI design, making something look "cool" or "bold", creating components, designing landing pages, dashboards, forms, buttons, cards, navigation, or any frontend UI work — especially if they mention brutalism, neo-brutalism, neubrutalism, raw design, bold shadows, thick borders, high-contrast, or want their UI to "stand out". Also use when the user is building a React/Next.js/Tailwind project and wants distinctive, memorable design that breaks away from conventional Material Design or Tailwind defaults. This skill applies to any frontend stack: React, Vue, Svelte, vanilla HTML/CSS, or any CSS framework.
---

# Neo-Brutalism UI Design Skill

A comprehensive guide for creating distinctive, bold neo-brutalism user interfaces. This skill teaches the principles, patterns, and implementation details for building memorable, high-impact UIs.

## Why Neo-Brutalism Works

Neo-brutalism is not just a visual trend — it's a design philosophy that prioritizes **function over form**, **honesty in materials**, and **emotional impact**. Unlike overly-polished UI trends (neumorphism, glassmorphism) that hide interactions behind gradients and blur, neo-brutalism makes every element's purpose unmistakably clear through:

- **High contrast** — every element is easy to see and interact with
- **Hard lines and hard shadows** — interactions feel physical and tactile
- **Bold color** — creates emotional engagement and memorability
- **Raw simplicity** — pages load faster, code is simpler, and the message isn't buried in decoration

When you design with neo-brutalism, the user **always knows what's clickable**, **always knows what state things are in**, and **will not forget they visited**.

## Core Visual Principles

Every neo-brutalism design must follow these principles. Understand *why* each one matters — don't just apply them mechanically.

### 1. Flat Design with Hard Shadows

Neo-brutalism is flat. No gradients, no blur, no subtlety. Depth is expressed through **solid offset shadows** — like a cardboard cutout casting a sharp shadow in direct sunlight.

The shadow pattern:
```
box-shadow: [x-offset] [y-offset] 0px 0px [color]
```

The blur radius is **always 0**. The offset is typically 4-8px. The shadow color is typically pure black (`#000000`) or a very dark variant of the background color.

**Why:** Soft shadows imply uncertainty. A hard shadow says "this element is right here, click it." It creates a tactile, physical feel without the performance cost of blur.

### 2. Thick, Solid Borders

Every significant UI element gets a thick border — typically **3-4px solid black** (`border: 3px solid #000000`). This gives the interface a deliberate, confident look.

**Why:** Thin gray borders (common in Material Design) try to disappear. Thick black borders say "every element here has integrity and purpose." They also create rhythm and structure across the page.

### 3. High-Contrast, Clashing Color

Neo-brutalism uses bold, saturated colors that conventional design avoids pairing. Think:
- Bright yellow (`#FFD700`) with hot pink (`#FF1493`)
- Electric blue (`#0066FF`) with bright red (`#FF0000`)
- Lime green (`#00FF00`) with deep purple (`#800080`)
- Pure black (`#000000`) with pure white (`#FFFFFF`)

**The rule:** If a color combination looks "correct" and harmonious, it's probably too safe. Neo-brutalism leans into tension. The contrast should be intentionally jarring — it's what makes people remember.

**Why:** Safe, desaturated color palettes are forgettable. High-contrast, unexpected color combinations create an emotional response and make your UI memorable. They also improve readability and accessibility for many users.

### 4. Bold, Impactful Typography

Typography is often the **primary visual element** in neo-brutalism. Text should be large, bold, and unapologetic.

**Recommended fonts:**
- **Headlines:** Archivo Black, Bebas Neue, Anton, Syne, Fraunces (heavy weight)
- **Body/UI:** Plus Jakarta Sans, Space Grotesk, Inter, DM Sans
- **Accent/Monospace:** JetBrains Mono, Fira Code, DM Mono

**Typographic rules:**
- Headlines should be massive — don't be shy with font sizes
- Use all-caps for emphasis, especially on buttons and navigation
- Heavy font weights (700-900) as default
- High line-height (1.2-1.4) for readability with large text
- Use letter-spacing (tracking) on uppercase text (e.g., `letter-spacing: 0.05em`)

**Why:** In neo-brutalism, text doesn't just communicate information — it communicates *attitude*. Large, bold type fills space with confidence rather than filling it with decorative elements that don't serve the user.

### 5. Raw, Honest Structure

Don't hide the skeleton. Show the grid, show the structure, let margins and whitespace be visible. This is the "brutalist" architectural heritage — exposing the raw materials.

**Structural patterns:**
- Generous whitespace between sections
- Clear, visible grid structures
- Elements don't blend into backgrounds — they're separated by borders or high-contrast backgrounds
- Asymmetry is welcome — perfect symmetry can feel too "designed"
- Content blocks are rectangular and clearly defined

**Why:** Users understand a page's hierarchy better when they can see the structure. Hidden layouts (like invisible grids and floating elements) make users work harder to understand the page.

### 6. Tactile Interaction States

Interactions should feel physical. When a user clicks a button, it should feel like pushing a real button:

```css
/* Default state — element floats above the page */
.element {
  box-shadow: 4px 4px 0px 0px #000000;
}

/* Hover — element lifts up slightly */
.element:hover {
  box-shadow: 6px 6px 0px 0px #000000;
  transform: translate(-2px, -2px);
}

/* Active/pressed — element gets pushed down */
.element:active {
  box-shadow: 0px 0px 0px 0px #000000;
  transform: translate(4px, 4px);
}

/* Focus — visible focus indicator */
.element:focus-visible {
  outline: 3px solid #0000FF;
  outline-offset: 2px;
}
```

**Why:** Physical metaphors are intuitive. Making elements behave like physical objects — lifting on hover, pressing on click — gives users immediate, satisfying feedback that doesn't require reading documentation.

## Implementation Patterns

### Stack-Specific Guidance

#### Tailwind CSS
Neo-brutalism maps naturally to Tailwind's utility classes. The key custom classes to define in `tailwind.config.js`:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'neo': '4px 4px 0px 0px #000000',
        'neo-lg': '8px 8px 0px 0px #000000',
        'neo-sm': '2px 2px 0px 0px #000000',
        'neo-hover': '6px 6px 0px 0px #000000',
        'neo-pressed': '0px 0px 0px 0px #000000',
      },
      fontFamily: {
        'display': ['"Archivo Black"', 'sans-serif'],
        'body': ['"Plus Jakarta Sans"', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
      borderWidth: {
        '3': '3px',
      },
    }
  }
}
```

Then use like: `className="border-3 border-black shadow-neo bg-yellow-300 p-4"`

#### Plain CSS / Vanilla
Use CSS custom properties to create a consistent neo-brutalism design system:

```css
:root {
  --neo-border: 3px solid #000000;
  --neo-shadow: 4px 4px 0px 0px #000000;
  --neo-shadow-hover: 6px 6px 0px 0px #000000;
  --neo-shadow-pressed: 0px 0px 0px 0px #000000;
  --neo-bg-primary: #FFD700;
  --neo-bg-secondary: #0066FF;
  --neo-text: #000000;
  --neo-font-display: 'Archivo Black', sans-serif;
  --neo-font-body: 'Plus Jakarta Sans', sans-serif;
}
```

#### CSS-in-JS (styled-components, Emotion)
Export a design system object:

```js
const neo = {
  border: '3px solid #000000',
  shadow: '4px 4px 0px 0px #000000',
  shadowHover: '6px 6px 0px 0px #000000',
  shadowActive: '0px 0px 0px 0px #000000',
  colors: {
    primary: '#FFD700',
    secondary: '#0066FF',
    accent: '#FF0000',
    bg: '#FFFFFF',
    text: '#000000',
  }
}
```

## Components

For concrete component implementations — buttons, cards, forms, navigation, modals, badges, toggles, loading spinners, etc. — read the reference files:

- **`references/css-patterns.md`** — Complete CSS patterns for all common components with Tailwind, plain CSS, and CSS-in-JS variants
- **`references/color-palette.md`** — Curated color palettes and schemes for neo-brutalism
- **`references/examples.md`** — Complete page/section examples (hero sections, pricing cards, dashboards, landing pages, etc.)

## When to NOT use Neo-Brutalism

Neo-brutalism is not appropriate for every context. **Do not use it when:**

1. **The user explicitly asks for a different design style** — follow their preference
2. **The project is for healthcare, banking, or legal applications** where trust and conservative aesthetics are paramount (unless the user explicitly requests neo-brutalism for these contexts)
3. **The user's brand guidelines specify a particular style** — respect existing branding
4. **The target audience is known to prefer conservative, minimal design** — neo-brutalism can be polarizing

However, **do use it when** the user asks to make something "stand out," "look cool," "be bold," or wants a "personal website," "creative portfolio," "SaaS landing page," "developer tool UI," "art/fashion/creative brand site," or anything in the creative/tech space where memorability and impact are valued.

## Accessibility in Neo-Brutalism

Neo-brutalism's high-contrast nature is actually *good* for accessibility, but there are important considerations:

1. **Color contrast:** High contrast is great, but clashing colors can cause visual fatigue. Offer to add an optional "reduced contrast" mode or ensure sufficient contrast ratios (WCAG AA minimum: 4.5:1 for normal text, 3:1 for large text).

2. **Motion sensitivity:** The physical "press" animations (translate + shadow changes) should be wrapped in `@media (prefers-reduced-motion: no-preference)` or use React/Vue `prefers-reduced-motion` detection.

3. **Focus indicators:** Thick black borders are already good for focus visibility, but ensure `:focus-visible` styles are intentional (e.g., a bright blue outline that contrasts with the element).

4. **Readability:** Use large font sizes (minimum 16px, prefer 18px+ for body text) and generous line-height (1.5+ for body, 1.2+ for headings).

5. **Screen readers:** Neo-brutalism's visual structure (clear borders, distinct sections) naturally creates good document outlines. Don't let the bold visuals distract from proper semantic HTML.

## The Design Process

When implementing neo-brutalism for a user's request, follow this process:

1. **Understand the context** — What is this UI for? Who is the audience? What platform?
2. **Choose a color palette** — Read `references/color-palette.md` and pick a direction based on the brand/context
3. **Build the structure** — Start with layout and grid, add generous whitespace
4. **Apply neo-brutalism patterns** — Thick borders, hard shadows, bold typography
5. **Add interactions** — Hover, active, focus states with physical metaphors
6. **Review and refine** — Ensure every element follows the principles above. If an element uses a soft shadow, gradient, or thin border, reconsider it.

## Checking Your Work

Before presenting the design to the user, verify:

- [ ] Every interactive element has hard shadows (no blur radius)
- [ ] Thick borders (2-4px) on all significant UI elements
- [ ] Colors are bold and high-contrast (no muted/desaturated tones unless intentional)
- [ ] No gradients (unless explicitly requested as a stylistic exception)
- [ ] Typography is large, bold, and impactful
- [ ] Interactions feel physical (lift on hover, press on click)
- [ ] Layout has structure — visible sections, generous whitespace
- [ ] Focus states are visible and intentional
- [ ] `prefers-reduced-motion` is respected

## Good luck!

You are about to build some of the most memorable, impactful UIs on the web. Neo-brutalism is bold, honest, and unapologetic — and now you know how to wield it effectively. Trust the principles, be confident with color, and don't be afraid to be loud.
