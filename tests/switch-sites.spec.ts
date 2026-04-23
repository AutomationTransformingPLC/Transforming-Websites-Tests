import { test, expect, devices } from '@playwright/test';

test.describe('Switch Sites Functionality Audit', () => {

  const sites = [
    { name: 'Transforming PLC', url: 'https://uat.transforming.plc.uk/' },
    { name: 'Transforming Support', url: 'https://uat.transformingsupport.uk/' }
  ];

  for (const site of sites) {
    test(`Verify "Switch Sites" functionality on ${site.name}`, async ({ page }) => {
      // Increase timeout for UAT navigation
      await page.goto(site.url, { timeout: 60000 });

      // 1. Locate the Switch Site Button
      const mobileSwitchButton = page.locator('button.button_button__dZRSb.button_theme4__nJzSY:has-text("Switch Sites here")');
      const desktopSwitchButton = page.locator('button.switchSite_switchButton__ZMy9o');
      
      let triggerButton;
      if (await mobileSwitchButton.count() > 0 && await mobileSwitchButton.isVisible()) {
          triggerButton = mobileSwitchButton;
          console.log(`Mobile-specific switch button detected on ${site.name}`);
      } else if (await desktopSwitchButton.count() > 0 && await desktopSwitchButton.isVisible()) {
          triggerButton = desktopSwitchButton;
          console.log(`Desktop switch button detected on ${site.name}`);
      } else {
          triggerButton = page.locator('button:has-text("Switch Sites")').first();
          console.log(`Using generic search for Switch button on ${site.name}`);
      }

      await triggerButton.scrollIntoViewIfNeeded();
      
      // 2. Click the button (Using dispatchEvent as fallback for mobile viewport issues)
      try {
          await triggerButton.click({ force: true, timeout: 5000 });
      } catch (e) {
          console.log(`Standard click failed on ${site.name}, using dispatchEvent('click')...`);
          await triggerButton.dispatchEvent('click');
      }
      
      // 3. Verify the switcher container/wrapper appears
      const switcherWrapper = page.locator('div[data-testid="container"].switchSite_wrapper__sHfOw');
      await expect(switcherWrapper).toBeVisible({ timeout: 10000 });
      console.log(`Switcher wrapper visible on ${site.name}`);

      // Wait longer for potential dynamic content
      await page.waitForTimeout(2000);

      // 4. Audit all items inside the switcher
      const switcherItems = await switcherWrapper.evaluate((el) => {
        const results: any[] = [];
        // Catching links and potentially site titles that are clickable
        const elements = el.querySelectorAll('a, button, [role="button"], .switchSite_siteItem__text, .switchSite_siteItem__title');
        elements.forEach((item: any) => {
          results.push({
            text: item.innerText.trim().replace(/\n/g, ' '),
            tag: item.tagName,
            href: item.getAttribute('href') || item.closest('a')?.getAttribute('href'),
            classes: item.className
          });
        });
        return results;
      });

      console.log(`Found ${switcherItems.length} potential items inside the switcher on ${site.name}`);

      switcherItems.forEach((item, i) => {
        console.log(`Auditing Item ${i}: [${item.tag}] "${item.text}" -> href: ${item.href}`);

        if (item.tag === 'A' && !item.href) {
            console.log(`🚨 ISSUE: Link "${item.text}" has no href.`);
        } else if (item.href && item.href.startsWith('http') && !item.href.includes('uat.')) {
            console.log(`⚠️ WARNING: Item "${item.text}" targets PRODUCTION: ${item.href}`);
        } else if (item.href) {
            console.log(`✅ Item "${item.text}" targets UAT/Valid path: ${item.href}`);
        }
      });

      const screenshotPath = `test-results/switcher-${site.name.replace(/\s+/g, '-').toLowerCase()}-${test.info().project.name}.png`;
      await page.screenshot({ path: screenshotPath });
    });
  }
});
