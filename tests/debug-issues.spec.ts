import { test, expect } from '@playwright/test';

test.describe('Deep Dive into UAT Issues', () => {

  test('Issue 1: Broken Phone Number Link (404)', async ({ page }) => {
    await page.goto('https://uat.transforming.plc.uk/');
    
    // Find the link that contains the phone number
    const phoneLink = page.locator('a:has-text("0303 300 3000")').first();
    await expect(phoneLink).toBeVisible();
    
    const href = await phoneLink.getAttribute('href');
    console.log(`Phone Link href: ${href}`);

    // Click it and wait for navigation
    await phoneLink.click();
    await page.waitForLoadState('networkidle');
    
    console.log(`URL after clicking phone link: ${page.url()}`);
    
    // Take a screenshot of the 404 page
    await page.screenshot({ path: 'test-results/phone-link-404.png', fullPage: true });
    
    // Verify it's a 404 or contains "Not Found"
    await expect(page.locator('body')).toContainText(/Not Found|404/i);
  });

  test('Issue 2: Firefox Timeout & Performance Bottlenecks', async ({ page }) => {
    // We'll monitor console errors and network requests
    const logs: string[] = [];
    page.on('console', msg => logs.push(`[${msg.type()}] ${msg.text()}`));
    page.on('pageerror', err => logs.push(`[ERROR] ${err.message}`));

    const start = Date.now();
    try {
        await page.goto('https://uat.transformingsupport.uk/contact-form/', { waitUntil: 'networkidle', timeout: 60000 });
    } catch (e) {
        console.log('Page failed to load within 60s');
    }
    const duration = Date.now() - start;
    console.log(`Total load time: ${duration}ms`);

    // Capture screenshot even if timed out (or partially loaded)
    await page.screenshot({ path: 'test-results/slow-load-capture.png', fullPage: true });

    console.log('--- Console Logs ---');
    console.log(logs.join('\n'));
    
    // Analyze network requests
    const entries = await page.evaluate(() => 
        performance.getEntriesByType('resource').map(e => ({ name: e.name, duration: e.duration }))
    );
    console.log(`Top 5 slowest resources:`);
    console.log(JSON.stringify(entries.sort((a, b) => b.duration - a.duration).slice(0, 5), null, 2));
  });

  test('Issue 3: SEO Placeholder Check', async ({ page }) => {
    await page.goto('https://uat.transforming.plc.uk/');
    const ogDesc = await page.locator('meta[property="og:description"]').getAttribute('content');
    console.log(`OG Description: ${ogDesc}`);
    expect(ogDesc).toBe('Social Media Description');
    await page.screenshot({ path: 'test-results/seo-placeholder.png' });
  });

});
