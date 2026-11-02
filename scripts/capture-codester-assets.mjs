import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
const base = process.env.BASE_URL || 'http://127.0.0.1:4173';
await mkdir('dist/screenshots', { recursive: true });
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
await page.goto(base, { waitUntil: 'networkidle' });
await page.screenshot({ path: 'dist/screenshots/01-homepage.png' });
for (const [name, selector] of [['02-workflows', '#workflows'], ['03-integrations', '#integrations'], ['04-pricing-faq', '#pricing']]) {
  const el = page.locator(selector);
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(450);
  await el.screenshot({ path: `dist/screenshots/${name}.png` });
}
await page.setViewportSize({ width: 390, height: 844 });
await page.goto(base, { waitUntil: 'networkidle' });
await page.screenshot({ path: 'dist/screenshots/05-mobile.png' });
await page.goto(base + '/assets/img/codester-preview.svg', { waitUntil: 'load' });
await page.setViewportSize({ width: 800, height: 400 });
await page.screenshot({ path: 'dist/codester-preview.png' });
await page.goto(base + '/assets/img/codester-icon.svg', { waitUntil: 'load' });
await page.setViewportSize({ width: 200, height: 200 });
await page.screenshot({ path: 'dist/codester-icon.png' });
await browser.close();
