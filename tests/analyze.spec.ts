import { test } from '@playwright/test';

const urls = [
  'https://www.transformingsupport.uk/referral-form/',
  'https://www.transformingsupport.uk/locations/',
  'https://www.transformingsupport.uk/staff/'
];

test('Analyze form fields', async ({ page }) => {
  for (const url of urls) {
    console.log(`\n--- ANALYZING: ${url} ---`);
    await page.goto(url);
    await page.waitForLoadState('networkidle');
    const inputs = await page.evaluate(() => {
      const results: any[] = [];
      const elements = document.querySelectorAll('input, textarea, select, button');
      elements.forEach(el => {
        const info = {
          tag: el.tagName,
          type: (el as any).type || '',
          id: el.id || '',
          name: (el as any).name || '',
          placeholder: (el as any).placeholder || '',
          text: el.textContent?.trim().slice(0, 50) || '',
          label: ''
        };
        if (el.id) {
            const labelEl = document.querySelector(`label[for="${el.id}"]`);
            if (labelEl) info.label = labelEl.textContent?.trim() || '';
        }
        results.push(info);
      });
      return results;
    });
    console.log(JSON.stringify(inputs, null, 2));
  }
});
