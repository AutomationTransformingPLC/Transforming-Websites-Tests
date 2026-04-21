import { chromium } from 'playwright';

const urls = [
  'https://www.transformingsupport.uk/referral-form/',
  'https://www.transformingsupport.uk/locations/',
  'https://www.transformingsupport.uk/staff/'
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  for (const url of urls) {
    console.log(`\nAnalyzing: ${url}`);
    await page.goto(url);
    const inputs = await page.evaluate(() => {
      const results: any[] = [];
      const elements = document.querySelectorAll('input, textarea, select, button');
      elements.forEach(el => {
        results.push({
          tag: el.tagName,
          type: (el as any).type,
          id: el.id,
          name: (el as any).name,
          placeholder: (el as any).placeholder,
          text: el.textContent?.trim().slice(0, 50),
          label: document.querySelector(`label[for="${el.id}"]`)?.textContent?.trim()
        });
      });
      return results;
    });
    console.log(JSON.stringify(inputs, null, 2));
  }
  
  await browser.close();
})();
