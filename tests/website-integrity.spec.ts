import { test, expect } from '@playwright/test';

const SITES = [
  {
    name: 'Transforming PLC',
    url: 'https://www.transforming.plc.uk/',
    subtabs: [
      'mission-statement-and-values/',
      'leadership-team',
      'meet-the-board',
      'nurture-support/',
      'transforming-support/',
      'ascend-support/',
      'transforming-developments/',
      'why-work-at-transforming-plc',
      'recruitment/',
      'contact-us/'
    ]
  },
  {
    name: 'Transforming Support',
    url: 'https://www.transformingsupport.uk/',
    subtabs: [
      'who-do-we-support',
      'people-we-support-feedback',
      'locations',
      'staff/',
      'how-do-we-support-families',
      'support-tiers',
      'transitioning-to-supported-living',
      'referral-process',
      'tenancy',
      'quality-assurance',
      'safeguarding',
      'referral-form/'
    ]
  }
];

test.describe('Full Website Integrity Audit', () => {
  for (const site of SITES) {
    test.describe(`${site.name} Audit`, () => {
      
      test('Homepage and SEO verification', async ({ page }) => {
        const response = await page.goto(site.url);
        expect(response?.status()).toBe(200);
        await expect(page).toHaveTitle(/.+/); // Ensure title exists
        
        // Check for common SEO/Meta tags
        const description = await page.locator('meta[name="description"]').getAttribute('content');
        expect(description).toBeTruthy();
      });

      test('Subtab Integrity Check (Navigation & Status)', async ({ page }) => {
        for (const path of site.subtabs) {
          const fullUrl = site.url + path;
          const response = await page.goto(fullUrl, { waitUntil: 'domcontentloaded' });
          expect(response?.status(), `Subtab ${fullUrl} failed with status ${response?.status()}`).toBe(200);
          
          // Verify main content area is present
          await expect(page.locator('main, #main, article, .content').first()).toBeVisible();
          console.log(`✓ Verified: ${fullUrl}`);
        }
      });

      test('Internal Link Health (Sampled Crawl)', async ({ page }) => {
        await page.goto(site.url);
        const links = await page.locator('a').evaluateAll((elements, base) => 
          elements
            .map(el => (el as HTMLAnchorElement).href)
            .filter(href => href.startsWith(base) && !href.includes('#'))
        , site.url);

        const uniqueLinks = Array.from(new Set(links)).slice(0, 20); // Expanded sample
        
        for (const link of uniqueLinks) {
          const response = await page.request.get(link);
          expect(response.status(), `Broken link found: ${link}`).toBeLessThan(400);
        }
      });

      test('Responsive Layout Verification', async ({ page }) => {
        await page.goto(site.url);
        // Check header/footer on different viewports (Playwright handles this via projects, but we can check visibility)
        await expect(page.locator('header')).toBeVisible();
        await expect(page.locator('footer')).toBeVisible();
      });
    });
  }
});
