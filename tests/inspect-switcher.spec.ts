import { test, expect, devices } from '@playwright/test';

test.describe('Switch Sites Deep UI Audit', () => {
  test('Inspect Switcher UI Structure', async ({ page }) => {
    await page.goto('https://uat.transformingsupport.uk/');
    
    const switchButton = page.locator('button.switchSite_switchButton__ZMy9o');
    await switchButton.click();
    await page.waitForTimeout(1000);

    const switcherWrapper = page.locator('div[data-testid="container"].switchSite_wrapper__sHfOw');
    
    const wrapperHtml = await switcherWrapper.innerHTML();
    console.log('--- Full Switcher Wrapper HTML ---');
    console.log(wrapperHtml);
    
    const details = await switcherWrapper.evaluate((el) => {
        const results: any[] = [];
        const all = el.querySelectorAll('*');
        all.forEach((item: any) => {
            if (item.className && item.className.includes('switchSite')) {
                results.push({
                    tag: item.tagName,
                    text: item.innerText.trim(),
                    classes: item.className,
                    href: item.getAttribute('href')
                });
            }
        });
        return results;
    });

    console.log('--- Switcher UI Items ---');
    details.forEach((item, i) => {
        console.log(`Item ${i}: ${item.text.replace(/\n/g, ' ')}`);
        console.log(`Classes: ${item.classes}`);
        console.log(`HTML: ${item.html.substring(0, 200)}...`);
    });
  });
});
