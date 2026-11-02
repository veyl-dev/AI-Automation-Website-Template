# Deploying Flowstate to Vercel

Flowstate is a static HTML, CSS, and JavaScript template. It does not need a Node.js build, backend, database, API keys, or environment variables for its demo.

## Deploy from GitHub

1. Sign in to [Vercel](https://vercel.com/) and choose **Add New → Project**.
2. Import `veyl-dev/AI-Automation-Website-Template`.
3. Select the `main` branch.
4. Set **Framework Preset** to **Other**.
5. Leave **Build Command** and **Install Command** empty.
6. Leave **Output Directory** empty so Vercel serves the repository root.
7. Click **Deploy**.

Vercel will publish `index.html` as the homepage. The included `vercel.json` enables clean URLs, so the dashboard is also available at `/dashboard` (the source file remains `dashboard.html`).

## Updating the preview

Push changes to `main`; Vercel automatically creates a new production deployment. Pull requests and other branches can receive Preview Deployments when enabled in the Vercel project settings.

## Notes

- No environment variables are required.
- The dashboard is a frontend demo. Its sample workflows, integrations, activity, and settings do not connect to real services or persist server-side.
- To use a custom domain, open the Vercel project **Settings → Domains** and follow the DNS instructions shown there.
