# Flowstate — AI Automation SaaS Website & Dashboard UI Kit

A responsive AI SaaS website and dashboard UI kit for an AI workflow and automation product. Built with plain HTML, CSS, and JavaScript — no build step or framework required.

## Included
- Premium dark visual system with a restrained soft-lime accent palette
- Responsive navigation and mobile menu
- Hero workflow preview with animated floating cards
- Scroll reveal animations using Intersection Observer
- Feature cards, integration orbit, testimonial, pricing, FAQ, and CTA sections
- Interactive workflow template switcher: Sales, Support, Content, Operations
- Reduced-motion accessibility support
- Centralized CSS and lightweight JavaScript
- Separate multi-view dashboard: Overview, Workflows, Integrations, Activity, and Settings
- Responsive dashboard sidebar, KPI cards, charts, tables, search, filters, and demo feedback

## Marketplace package
A Codester packaging workflow builds the buyer ZIP, marketplace preview PNG, icon PNG, and screenshot ZIP. The package includes both the marketing landing page and dashboard UI kit. See `CODESTER-LISTING.md` and run the **Build Codester submission package** workflow in GitHub Actions.

## Run locally
Open index.html for the landing page or dashboard.html for the workspace UI, or run a local static server:

    python -m http.server 8000

Then visit http://localhost:8000.

## Customize
1. Open `assets/js/config.js` and set the brand name, logo mark, contact email, theme colors, fonts, workspace name, and profile details.
2. Replace fictional copy, pricing, testimonials, metrics, and integration examples with accurate product information.
3. Edit workflow examples in `assets/js/main.js`.
4. Customize detailed styles in `assets/css/style.css` and `assets/css/dashboard.css`.
5. Review all navigation and CTA destinations, then test both pages on desktop and mobile.

The shared configuration keeps core branding and theme settings consistent across the landing page and dashboard.

## Deploy with GitHub Pages
In repository Settings, open Pages, choose Deploy from a branch, select main and / (root), then save. The included .nojekyll file keeps GitHub Pages from applying Jekyll processing.

## Important
Flowstate is a fictional demonstration brand. This is a front-end UI kit only; forms, authentication, billing, integrations, and actual automation execution are not connected to a backend. Dashboard metrics and records are sample data.

## License
MIT — see LICENSE.
