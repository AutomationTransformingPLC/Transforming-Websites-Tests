import { test, expect, devices } from '@playwright/test';

test.use({ ...devices['Pixel 5'] });

test('Debug Mobile Switch Button', async ({ page }) => {
  await page.goto('https://uat.transforming.plc.uk/');
  
  console.log('--- Checking Mobile Visibility ---');
  
  // 1. Check if it's on the main page
  const mainPageBtn = page.locator('button.button_button__dZRSb.button_theme4__nJzSY:has-text("Switch Sites here")');
  const isVisibleMain = await mainPageBtn.isVisible();
  console.log(`Visible on main page: ${isVisibleMain}`);

  // 2. Open burger menu and check
  console.log('Opening burger menu...');
  const burger = page.locator('button:has-text("Menu"), .burger-menu, .navbar-toggler').first();
  await burger.click();
  await page.waitForTimeout(1000);
  
  const isVisibleMenu = await mainPageBtn.isVisible();
  console.log(`Visible inside burger menu: ${isVisibleMenu}`);

  if (isVisibleMenu) {
      const hrefs = await page.evaluate(() => {
          const btn = document.querySelector('button.button_button__dZRSb.button_theme4__nJzSY');
          if (!btn) return 'Btn not found in DOM';
          // Find the wrapper if it appeared
          return 'Btn found';
      });
      console.log(hrefs);
  }
  
  await page.screenshot({ path: 'test-results/mobile-menu-debug.png' });
});
