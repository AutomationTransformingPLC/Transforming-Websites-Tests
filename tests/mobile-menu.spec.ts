import { test, expect, devices } from '@playwright/test';

test.use({ ...devices['Pixel 5'] });

test.describe('Mobile Burger Menu Audit', () => {

  test('Audit PLC Mobile Menu Links', async ({ page }) => {
    await page.goto('https://uat.transforming.plc.uk/');
    
    // Open burger menu (assuming common class or text)
    const burger = page.locator('button:has-text("Menu"), .burger-menu, .navbar-toggler').first();
    await burger.click();
    await page.waitForTimeout(1000);

    const menuLinks = page.locator('nav a, .mobile-menu a');
    const count = await menuLinks.count();
    console.log(`Found ${count} links in PLC mobile menu.`);

    for (let i = 0; i < count; i++) {
        const link = menuLinks.nth(i);
        const text = await link.innerText();
        const href = await link.getAttribute('href');
        console.log(`Menu Item ${i}: "${text.trim()}" -> href: ${href}`);
        
        if (href && (href.endsWith('/home/') || href.endsWith('/home'))) {
            console.log(`🚨 ISSUE FOUND in PLC Menu: "${text.trim()}" links to /home/`);
        }
        if (href === null || href === '') {
            console.log(`🚨 ISSUE FOUND in PLC Menu: "${text.trim()}" has null/empty href`);
        }
    }
  });

  test('Audit Support Mobile Menu Links', async ({ page }) => {
    await page.goto('https://uat.transformingsupport.uk/');
    
    const burger = page.locator('button:has-text("Menu"), .burger-menu, .navbar-toggler').first();
    await burger.click();
    await page.waitForTimeout(1000);

    const menuLinks = page.locator('nav a, .mobile-menu a');
    const count = await menuLinks.count();
    console.log(`Found ${count} links in Support mobile menu.`);

    for (let i = 0; i < count; i++) {
        const link = menuLinks.nth(i);
        const text = await link.innerText();
        const href = await link.getAttribute('href');
        console.log(`Menu Item ${i}: "${text.trim()}" -> href: ${href}`);
    }
  });
});
