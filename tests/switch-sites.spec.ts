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

      // 4. Detailed UI Audit based on Release Note Requirements
      const siteTeasers = switcherWrapper.locator('.siteTeaser_siteTeaser__zU6sw');
      const teaserCount = await siteTeasers.count();
      console.log(`Auditing ${teaserCount} Site Teasers inside the switcher...`);

      for (let i = 0; i < teaserCount; i++) {
        const teaser = siteTeasers.nth(i);
        const title = (await teaser.locator('.siteTeaser_title__xn4KO').innerText()).trim();
        const tagLine = (await teaser.locator('.siteTeaser_tagLine__v1zqo').innerText()).trim();
        const logo = teaser.locator('.siteTeaser_logo__J1JRp img');
        const statusText = await teaser.locator('.siteTeaser_status__8QkH5').innerText().catch(() => "");
        
        const isComingSoon = (await teaser.getAttribute('class'))?.includes('siteTeaser_isComingSoon');
        const isActive = (await teaser.getAttribute('class'))?.includes('siteTeaser_isActive');
        const href = await teaser.getAttribute('href');

        console.log(`--- Teaser ${i}: ${title} ---`);
        console.log(`Tagline: "${tagLine}"`);
        console.log(`Status Text: "${statusText.trim()}"`);
        console.log(`Logo present: ${await logo.count() > 0}`);
        
        if (isActive) {
            console.log(`✅ ACTIVE SITE: Styling detected via isActive class.`);
            if (statusText.toLowerCase().includes('you are on this site') || statusText.toLowerCase().includes('active')) {
                console.log(`✅ Correct status text for active site.`);
            } else {
                console.log(`⚠️ UNEXPECTED status text for active site: "${statusText}"`);
            }
        }

        if (isComingSoon) {
            console.log(`✅ COMING SOON: Styling detected via isComingSoon class.`);
            if (statusText.toLowerCase().includes('coming soon')) {
                console.log(`✅ Correct status text for coming soon.`);
            }
        }

        if (!isComingSoon && !isActive) {
            if (href && href.startsWith('http')) {
                console.log(`✅ REDIRECTION: Link points to ${href}`);
                if (!href.includes('uat.')) {
                    console.log(`🚨 WARNING: External/Production link detected: ${href}`);
                }
            } else {
                console.log(`🚨 ISSUE: Active-capable site "${title}" is missing a valid href.`);
            }
        }
      }

      const screenshotPath = `test-results/switcher-${site.name.replace(/\s+/g, '-').toLowerCase()}-${test.info().project.name}.png`;
      await page.screenshot({ path: screenshotPath });
    });
  }
});
