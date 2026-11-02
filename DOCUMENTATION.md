# Flowstate — AI Automation Website Template
Version 1.1.0

Thank you for choosing Flowstate. This is a responsive, static HTML website template for AI automation, workflow automation, SaaS, and productivity products.

## 1. What's included
- `index.html` — complete single-page landing page
- `dashboard.html` — responsive multi-view SaaS dashboard UI kit
- `assets/css/style.css` — layout, responsive styles, colors, and motion
- `assets/js/main.js` — navigation, reveal effects, workflow-template switcher
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
Open `index.html` and replace the Flowstate name, logo letter, headings, descriptions, testimonials, feature copy, pricing, and footer text with your own brand content.

### Colors and typography
Open `assets/css/style.css`. The main theme variables are at the top of the file:
- `--bg`: page background
- `--text`: primary text
- `--muted`: secondary text
- `--lime`: accent color
- `--sans` and `--mono`: font families

### Workflow examples
Open `assets/js/main.js` and edit the `templates` object. Each template contains a title, description, and ordered workflow steps. The four sample tabs are Sales, Support, Content, and Operations.

### Links and contact details
Search `index.html` for `hello@example.com` and replace it with your real support or sales email. Update all section links and pricing destinations. The email links are examples only; no contact form or lead storage backend is included.

### Pricing and integrations
The pricing, customer quote, usage metrics, and integration logos/names are illustrative sample content. Replace them with accurate details for your own product before publishing.

## 5. Animation and accessibility
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
- **Email buttons do not work:** replace the example email address with your own.
- **Workflow tab content does not change:** make sure the JavaScript file has not been renamed and that the browser has JavaScript enabled.

## 11. Support
For product support, use the support/contact channel provided by the marketplace author profile or item page. Before requesting help, include your browser, hosting environment, a description of the issue, and steps to reproduce it.

## 12. Credits and license
The original template source is provided under the MIT License in `LICENSE`. Review the license before redistribution. Google Fonts are provided by Google under their respective font licenses. You are responsible for replacing sample content and verifying the rights to any third-party content you add.
