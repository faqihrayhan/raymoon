# DESIGN.md — Cursor Dark Glass Precision System

## 1. Vision & Atmosphere
- **Archetype:** Cursor-inspired Precision & Minimal Dark Glass.
- **Philosophy:** Engineered code-editor aesthetics, subtle dark glass layering, zero cheesy floating blobs/rainbow gradients, crisp micro-borders, and high-density typography.
- **Canvas / Background:** Deep dark slate void (`#0c0d0e` to `#121417`).
- **Surfaces:**
  - Base Card: `rgba(22, 24, 29, 0.7)` with `backdrop-filter: blur(16px)`
  - Active Surface: `rgba(32, 36, 44, 0.85)` with `border: 1px solid rgba(255, 255, 255, 0.12)`
  - Elevated / Focus: `rgba(255, 255, 255, 0.05)` with `box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1)`
- **Accents:**
  - Primary Accent: Cursor Warm Orange / Amber (`#f54e00` / `#ff6b2b`) and crisp Cyan (`#00d4ff`) for on-chain telemetry.
  - Text: High contrast `#ededec` (primary), `#8b8e96` (secondary), `#555861` (subtle).
  - Borders: Sharp 1px precision hairline borders (`rgba(255, 255, 255, 0.08)`).

## 2. Typography
- Headings: Clean sans `Inter` / `Geist` with negative letter-spacing (`tracking-tight`).
- Body: `Inter` clean readable at 14px-16px.
- Code & Badges: `JetBrains Mono` / Monospace for version tags, telemetry, and labels.

## 3. Navigation Bar Architecture
- Straight bar (`rounded-none` or subtle `rounded-none border-b border-white/10 w-full`), fixed at top.
- Left: `Raymoon` brand logo.
- Center / Links: `Home`, `About me`, `Skills`, `Experience`, `Project`.
- Right: `Contact Me` button.
- Clean glass backdrop blur with crisp bottom border.

## 4. Skills & Orbital Architecture
- Orbit running circle for Tech Skills with genuine brand SVG/PNG icons and clear labels.
- Minimal engineered UI around the orbit with clean telemetry inspect cards.

## 5. Experience & Projects Section
- Separated or structured clearly:
  - **Experience**: Mission history / role log with clean timeline cards.
  - **Projects**: Clean cards with standard curve zoom in/out carousel, live tags, GitHub source links.
