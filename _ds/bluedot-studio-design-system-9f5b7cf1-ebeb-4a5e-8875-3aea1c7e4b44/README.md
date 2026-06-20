# BlueDot Studio Design System

**블루닷스튜디오 (BlueDot Studio)** — 전문직 숏폼 대행 마케팅 회사 / Professional short-form marketing agency producing Instagram Reels for professional-service clients (doctors, lawyers, accountants, dentists, financial advisors, etc.).

> **Positioning** — minimal, professional, performance-driven. The studio sells short-form video that *looks credentialed*: clean type, restrained color, generous whitespace, no influencer fluff. Clients are licensed professionals who can't afford to look trendy.

## Sources reviewed
- `uploads/블루닷마케팅-03.jpg` — brand asset uploaded by the user. **⚠ Could not be opened by the file tools (non-ASCII filename rejected).** Brand direction in this system is therefore inferred from the name, the company description, and Korean professional-services design conventions. Please re-upload as e.g. `bluedot-logo.jpg` so the actual mark and color can be confirmed.

## What's in this folder

| Path | Purpose |
|---|---|
| `README.md` | This file — brand context, content + visual foundations, iconography |
| `SKILL.md` | Agent Skill manifest for Claude Code / other agents |
| `colors_and_type.css` | All design tokens — colors, type scale, spacing, radii, shadows, motion |
| `assets/bluedot-logo.svg` · `bluedot-logo-ko.svg` · `bluedot-mark.svg` | Logo placeholders (mark + KR/Latin wordmarks) |
| `preview/` | 20 specimen cards (palette, type, components) that populate the Design System tab |
| `ui_kits/website/` | Marketing-site UI kit — Nav, Hero, Services, CaseGrid, Process, Footer |
| `ui_kits/reels-showcase/` | Instagram-Reels-style portfolio viewer — snap-scroll feed + case panel |

### Preview cards index
**Brand** — `brand-mark.html`, `iconography.html`, `voice-tone.html`
**Colors** — `color-primary.html`, `color-neutrals.html`, `color-accent-semantic.html`
**Type** — `type-display.html`, `type-headings.html`, `type-body.html`, `type-mono-stats.html`
**Spacing** — `spacing-scale.html`, `radii.html`, `shadows.html`, `motion.html`
**Components** — `buttons.html`, `inputs.html`, `tags-badges.html`, `cards.html`, `reel-thumbnail.html`, `stat-block.html`

## Quick-reference manifest
- **Primary blue**: `--bd-blue` `#1547FF` (the "BlueDot" mark color)
- **Ink**: `--bd-ink` `#0A0E1A` (near-black, warm-cool neutral)
- **Paper**: `--bd-paper` `#FAFAFA` (default page background)
- **Display type**: Pretendard, 600–800 (local OTFs in /fonts/)
- **Body type**: Pretendard, 400–500
- **Mono**: IBM Plex Mono — for KPIs, view counts, codes
- **Radius scale**: 0 / 4 / 10 / 16 / 24 / 999px
- **Logo motif**: a single solid blue circle ("•") paired with the wordmark

---

## CONTENT FUNDAMENTALS

### Voice
Korean-first, occasionally bilingual. The studio talks **to professionals, not at consumers**. Sentences are short, declarative, and numbers-led. The brand never sounds like a TikTok agency — no slang, no emoji-bombing, no exclamation marks in body copy.

### Tone matrix
| Axis | Lean |
|---|---|
| Formal ↔ Casual | **Formal-leaning** — 합쇼체("…합니다") for outward copy, 해요체("…해요") only for soft CTAs |
| We ↔ You | **You-first** (원장님, 변호사님 = honorifics). The studio refers to itself as "블루닷" or "저희", not "우리" |
| Promise ↔ Proof | **Proof-first.** Lead with numbers (조회수, 팔로워 증가, 상담 전환), then frame the promise |
| Korean ↔ English | **Korean dominant.** English appears only for industry terms (Reels, CTA, KPI, B2B) or as an accent label |

### Casing & punctuation
- Korean: no terminal period in headlines, period in body. No exclamation marks in headlines.
- English: Sentence case for headlines (not Title Case). UPPERCASE only for short eyebrow labels ("CASE 01", "SERVICE").
- Numbers always with thousands separator (조회수 1,240,000). Use 만/억 for very large counts in display contexts ("124만 뷰").

### Emoji & symbols
- **Emoji: no.** Never in headlines, body, or buttons. The only "emoji" is the brand dot "●".
- **Unicode glyphs used sparingly**: `—` (em-dash, structural), `·` (middle dot, separator), `→` (next/CTA), `●` (brand mark).
- **No `~`, `^^`, `ㅎㅎ`, `ㅋㅋ`** — these read amateur in a professional context.

### Concrete copy examples

✅ **Do**
- 헤드라인: "전문직을 위한 릴스 마케팅"
- 서브: "월 4개 릴스로 평균 조회수 38만, 상담 문의 2.4배."
- CTA: "무료 상담 신청 →"
- 케이스 라벨: "CASE 03 · 강남 치과"
- 통계: "누적 조회수 4,820만"

❌ **Don't**
- "릴스로 인생 역전! 🚀✨"
- "우리가 도와드릴게요~ ㅎㅎ"
- "Instagram Reels Marketing Agency!!!" (English-first, exclamation-spammed)
- Title Case English headlines

### Sentence rhythm
Short. Period. Then a longer line that earns the pause with a number or proof point. Avoid stacking three short lines in a row — feels like a slogan generator.

---

## VISUAL FOUNDATIONS

### Color
- **Single-hue system.** One blue does the heavy lifting (`--bd-blue` `#1547FF`). Everything else is neutral ink + paper + a 9-step gray scale.
- **No gradients.** Flat fills only. The "BlueDot" mark stays a solid disc — never a gradient orb.
- **Accent yellow** (`--bd-highlight` `#FFE45C`) appears at ≤5% surface area — for KPI underlines, "new" pills, the occasional highlighter swipe behind a word.
- **Semantic colors** are muted: success `#1B8B4F`, warning `#C77700`, danger `#C03434`. They never compete with brand blue.

### Type
- **Pretendard** handles 99% of text — Korean and Latin in one family. Brand-supplied OTFs (Thin 100 → Black 900) live in `/fonts/` and are wired into `colors_and_type.css` via `@font-face`.
- **Hierarchy is by weight + size, not by family.** Display is 700–800 at large sizes; body is 400–500.
- **IBM Plex Mono** for numerals in stat blocks ("1,240,000 views"). Tabular figures only.
- **Line-height**: 1.15 for display, 1.45 for body, 1.6 for long-form. Korean text needs slightly tighter leading than Latin — use `text-wrap: pretty` everywhere.
- **No italics in Korean.** Latin italic is acceptable for foreign-language terms.

### Spacing
4px base unit. Scale: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160`. Sections breathe — minimum 96px between top-level sections on desktop, 64px mobile.

### Backgrounds
- **Default page**: solid `--bd-paper` (#FAFAFA), occasionally white.
- **Hero & section breaks**: solid `--bd-ink` (near-black) with white text — confident, gallery-like.
- **No full-bleed photography on default page chrome.** Imagery lives inside cards / 9:16 frames.
- **No textures, no noise, no patterns.** The only "pattern" is a faint 1px hairline (`--bd-line`).

### Imagery
- Reel thumbnails are the dominant imagery — always shown in **9:16 frames** with subtle rounded corners (10px).
- Tone of imagery: **cool, neutral, slightly desaturated**. Clinic shots, professional headshots, document close-ups. No warm orange sunset stock, no people-laughing-in-meeting stock.
- Black-and-white treatment acceptable for client logos and team photos.
- No film grain, no duotone gradients.

### Animation
- **Easing**: `cubic-bezier(0.2, 0.8, 0.2, 1)` for almost everything (Apple-ish ease-out). Default duration **180–240ms**.
- **Hover**: opacity drop to 0.85 on text links; background tint shift on buttons (no scale).
- **Press**: subtle scale `0.98` + opacity 0.9, 100ms.
- **No bounces, no spring overshoot, no parallax.** Reels themselves are the motion in the design.
- Page transitions: fade + 8px upward translation. Never slide horizontally.

### Borders & lines
- 1px hairline `--bd-line` (#E5E7EB) for dividers and card outlines.
- Cards prefer a **1px line + no shadow** look. Shadows only on floating elements (menus, tooltips, modals).
- Buttons: filled (primary) or outlined (secondary). No ghost-on-tint.

### Shadows / elevation
Restrained 3-step system, all near-black with cool tint:
- `--shadow-1`: `0 1px 2px rgba(10,14,26,0.04)` — cards on hover
- `--shadow-2`: `0 8px 24px rgba(10,14,26,0.08)` — dropdowns, popovers
- `--shadow-3`: `0 24px 64px rgba(10,14,26,0.12)` — modals
- No inner shadows. No glow. No colored shadows.

### Corner radii
- `0` — section dividers, full-bleed blocks
- `4` — tags, inline pills
- `10` — cards, thumbnails, inputs (default)
- `16` — feature cards
- `24` — large hero cards
- `999` — buttons, avatars, the brand dot

### Cards
Default card: **1px hairline border, 10px radius, white fill, no shadow at rest**. On hover, lift to `--shadow-1` and translateY(-2px). Card padding 24px (desktop) / 16px (mobile).

### Transparency & blur
- Sparingly used. Sticky nav uses a 90% white background + 12px backdrop-blur. Modals use rgba(10,14,26,0.4) scrim.
- No frosted-glass cards. No glassmorphism. No tinted-blur hero overlays.

### Layout rules
- **Fixed elements**: top nav (64px desktop, 56px mobile), bottom mobile CTA bar.
- **Grid**: 12-col desktop, 4-col mobile, 24px gutter desktop / 16px mobile.
- **Max content width**: 1200px. Long-form text caps at 680px.
- Reels gallery uses an asymmetric 9:16 masonry — 3 cols desktop, 2 cols tablet, 1 col mobile.

### The dot
The brand dot (●) is more than a logo — it's a **typographic accent**. Use it:
- as a separator in eyebrow labels: "CASE 03 ● 강남 치과"
- as a bullet in lists (replaces the default disc)
- as a "live" indicator on case-study video cards
- never decoratively in headlines, never larger than the cap-height of adjacent type

---

## ICONOGRAPHY

The brand has **no proprietary icon set**. We use **Lucide** (lucide.dev) — a permissively licensed line-icon library with consistent 1.5px strokes that matches the minimal, professional posture.

- **Style**: outline only, 1.5px stroke, square line caps, 24×24 viewbox.
- **Size in use**: 16px (inline with body), 20px (buttons, nav), 24px (feature/card), 32px+ (hero).
- **Color**: inherits `currentColor`. Never tint icons in brand blue except when paired with primary buttons.
- **No filled / duotone variants.** No glyph fonts. No emoji.
- **No hand-drawn SVG illustrations** — if a section feels empty, use a real photo or a numeric stat block.

Loading Lucide:
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="play" class="w-5 h-5"></i>
<script>lucide.createIcons()</script>
```

**Logo placeholder note** — until the uploaded JPG can be opened, the brand mark in this system is a **solid blue disc + "bluedot studio" wordmark in Pretendard 700**. See `assets/bluedot-logo.svg` for the placeholder. Replace once the real file is re-uploaded.

---

## CAVEATS & ASKS
- The uploaded asset `블루닷마케팅-03.jpg` could not be read. **Please re-upload with an ASCII filename** (e.g. `bluedot-mark.jpg`) so the real mark, color, and any provided typography can be incorporated.
- Primary blue (`#1547FF`) is an educated guess based on the name. Confirm or swap.
- ✅ **Pretendard** is now wired in from local OTFs (`/fonts/`, weights 100–900) — the brand font is in place.
