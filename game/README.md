# Aqua Jokers: Treatment Tycoon

A mobile-first wastewater treatment clicker inspired by the water scarcity and WWTP optimization report.

## Play Locally

Run a tiny static server from the project folder:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4173
```

The game data currently lives directly in `game.js`, so it also works if opened directly as a local file.

## Deploy

This is a static HTML/CSS/JS project, so it can be deployed directly to GitHub Pages.

Required files:

- `index.html`
- `styles.css`
- `game.js`

## Current MVP

- Cookie-clicker style tap loop
- Passive tycoon income
- Stage structure based on training, Zenin, Abu Rawash, and national reuse goals
- Inline upgrades with sample SVG icons
- Rule-based DST assistant tips
- Local save through `localStorage`
