# Flowstate — AI Automation Website Template
Version 1.2.0

Thank you for choosing Flowstate. This is a responsive, static HTML website template for AI automation, workflow automation, SaaS, and productivity products.

## 1. What's included
- `index.html` — complete single-page landing page
- `dashboard.html` — responsive multi-view SaaS dashboard UI kit
- `assets/css/style.css` — layout, responsive styles, colors, and motion
- `assets/js/config.js` — centralized brand, theme, optional contact, and workspace configuration\n- `assets/js/main.js` — navigation, reveal effects, workflow-template switcher
- `assets/css/dashboard.css` and `assets/js/dashboard.js` — dashboard layout and demo interactions
- `assets/img/favicon.svg` — browser icon
- `README.md`, `CHANGELOG.md`, and `LICENSE`

No build tools, framework, database, or server-side language is required.

## 2. Requirements
- A modern browser: Chrome, Firefox, Safari, or Edge
- Any static web host (GitHub Pages, Netlify, Vercel, Apache, Nginx, etc.)
- Internet access for the optional Google Fonts stylesheet. The page falls back to system fonts if Google Fonts are unavailable.

## 3. Installation
1. Extract the downloaded ZIP archive.
2. Open the extracted project folder.
3. Preview by opening `index.html` in a modern browser, or start a local server:
   ```bash
   python -m http.server 8000
   ```
4. Visit `http://localhost:8000`.
5. Upload the project files to the document root of your static hosting provider.

Keep the `assets` directory beside `index.html`; do not rename asset paths unless you also update the references in the HTML.

## 4. Customize the template
### Brand and content
Start with `assets/js/config.js`. Change the brand name, logo mark, accent/background/surface colors, typography, workspace name, and profile details in one place. The `brand.contactEmail` value is blank by default; add your own email address only if you want the email-based CTA links enabled. The configuration is loaded by both the landing page and dashboard.

### Colors and typography
For deeper styling, edit the design tokens at the top of `assets/css/style.css` and `assets/css/dashboard.css`. The configuration file overrides the shared brand and theme tokens on both pages.
- `--bg`: page background
- `--text`: primary text
- `--muted`: secondary text
- `--lime`: accent color
- `--sans` and `--mono`: font families

### Workflow examples
Open `assets/js/main.js` and edit the `templates` object. Each template contains a title, description, and ordered workflow steps. The four sample tabs are Sales, Support, Content, and Operations.

### Links and contact details
Optionally set `brand.contactEmail` to your own support address in `assets/js/config.js`. When it is blank, email-based CTA links fall back to the pricing section and the footer Contact link is hidden. Review product-specific destinations in `index.html`. No contact form or lead storage backend is included.

### Pricing and integrations
The pricing, customer quote, usage metrics, and integration names are illustrative sample content. The landing page uses generic text-symbol marks rather than official partner logos. Replace all examples with accurate details and only use customer quotes and brand assets you have permission to publish.

### Launch checklist\n- Replace the fictional brand, sample copy, testimonial, metrics, pricing, and integration examples with truthful product information.\n- Optionally add your own support email to `brand.contactEmail` in `assets/js/config.js` if you want email-based CTA links.\n- Set your primary call-to-action destination.\n- Review every navigation and pricing link.\n- Connect your own forms, authentication, billing, integrations, and product APIs if required.\n- Test both pages at desktop, tablet, and mobile widths before publishing.\n\n## 5. Animation and accessibility
- Scroll reveal effects use the browser's Intersection Observer API.
- Decorative motion uses CSS keyframes.
- The navigation toggle is keyboard-operable.
- The page respects `prefers-reduced-motion` and reduces non-essential motion for users who request it.

## 6. Browser support
Designed for current evergreen versions of Chrome, Edge, Firefox, and Safari. The layout uses CSS Grid, Flexbox, custom properties, and modern CSS features.

## 7. Dashboard UI kit
Open `dashboard.html` to preview the included workspace dashboard. It includes Overview, Workflows, Integrations, Activity, and Settings views, responsive sidebar navigation, workflow search and status filters, sample activity, chart-style visualizations, and demo toast feedback. The interface is frontend-only; controls that imply backend actions display demo messages and do not connect to real services. Sample metrics, integrations, workflow runs, and account details are illustrative.

## 8. Backend and functionality notes
This is a frontend website template, not a functioning automation platform. It does not include AI inference, workflow execution, user accounts, authentication, billing, a database, contact-form processing, or an admin panel. Connect your own services and APIs if you need those features. Never place private API keys in frontend JavaScript.

## 9. Third-party resources
- Google Fonts is loaded from fonts.googleapis.com (Manrope and DM Mono). Internet access is required to fetch these fonts; system fallbacks are provided.
- No third-party JavaScript framework or paid icon library is required.
- The sample integration marks are text symbols for visual illustration, not official partner logos.

## 10. Troubleshooting
- **Styles or images are missing:** make sure the `assets` folder is in the same directory as `index.html`; check filename capitalization.
- **Fonts look different:** check internet access or change the font variables in the CSS.
- **Menu does not open:** ensure `assets/js/main.js` is present and loaded after the page markup.
- **Email CTA links do not open an email:** add your own address to `brand.contactEmail` in `assets/js/config.js`.
- **Workflow tab content does not change:** make sure the JavaScript file has not been renamed and that the browser has JavaScript enabled.

## 11. Support
For product support, use the support/contact channel provided by the marketplace author profile or item page. Before requesting help, include your browser, hosting environment, a description of the issue, and steps to reproduce it.

## 12. Credits and license
The original template source is provided under the MIT License in `LICENSE`. Review the license before redistribution. Google Fonts are provided by Google under their respective font licenses. You are responsible for replacing sample content and verifying the rights to any third-party content you add.
