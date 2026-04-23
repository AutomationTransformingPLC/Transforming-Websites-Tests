import { test, expect, devices } from '@playwright/test';

test.use({ ...devices['Pixel 5'] });

test('Debug Mobile Switcher Action', async ({ page }) => {
  await page.goto('https://uat.transforming.plc.uk/');
  
  // 1. Click the mobile button
  const mobileSwitchButton = page.locator('button.button_button__dZRSb.button_theme4__nJzSY:has-text("Switch Sites here")');
  await mobileSwitchButton.click();
  await page.waitForTimeout(2000); // Wait for animations
  
  // 2. Dump all visible containers/wrappers
  const containers = await page.evaluate(() => {
    const all = document.querySelectorAll('div[data-testid], div[class*="wrapper"], div[class*="container"]');
    return Array.from(all).filter(el => {
        const htmlEl = el as HTMLElement;
        const style = window.getComputedStyle(el);
        return style.display !== 'none' && style.visibility !== 'hidden' && (htmlEl.innerText || "").length > 0;
    }).map(el => {
        const htmlEl = el as HTMLElement;
        return {
            tag: el.tagName,
            testid: el.getAttribute('data-testid'),
            classes: el.className,
            textSnippet: (htmlEl.innerText || "").substring(0, 50)
        };
    });
  });

  console.log('--- Visible Containers After Click ---');
  console.log(JSON.stringify(containers, null, 2));

  await page.screenshot({ path: 'test-results/mobile-click-debug.png', fullPage: true });
});
