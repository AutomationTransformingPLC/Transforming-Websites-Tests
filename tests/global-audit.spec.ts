import { test, expect } from '@playwright/test';

test.describe('UAT Link Redirection & Form Discovery Audit', () => {

  test('PLC Redirection Issue: Contact & Referral Buttons', async ({ page }) => {
    await page.goto('https://uat.transforming.plc.uk/');
    
    // Check "Contact Us" buttons
    const contactButtons = page.locator('a:has-text("Contact Us"), button:has-text("Contact Us")');
    const count = await contactButtons.count();
    console.log(`Found ${count} "Contact Us" buttons/links on PLC homepage.`);

    for (let i = 0; i < count; i++) {
        const btn = contactButtons.nth(i);
        const text = await btn.innerText();
        const href = await btn.getAttribute('href');
        console.log(`Button ${i}: "${text}" -> href: ${href}`);
        
        if (href && (href.endsWith('/home/') || href.endsWith('/home'))) {
            console.log(`🚨 ISSUE FOUND: Button "${text}" incorrectly links to /home/`);
        }
    }

    // Check "Make Referral" buttons - broadened search
    const referralButtons = page.locator('a:has-text("Referral"), button:has-text("Referral")');
    const refCount = await referralButtons.count();
    console.log(`Found ${refCount} "Referral" related buttons/links on PLC homepage.`);

    for (let i = 0; i < refCount; i++) {
        const btn = referralButtons.nth(i);
        const text = await btn.innerText();
        const href = await btn.getAttribute('href');
        console.log(`Referral Item ${i}: "${text.trim()}" -> href: ${href}`);
        
        if (href && (href.endsWith('/home/') || href.endsWith('/home'))) {
            console.log(`🚨 ISSUE FOUND: Item "${text.trim()}" incorrectly links to /home/`);
        }
    }
  });

  const DOMAINS = ['https://uat.transforming.plc.uk', 'https://uat.transformingsupport.uk'];

  for (const domain of DOMAINS) {
    test(`Global Form Submission Audit: ${domain}`, async ({ page }) => {
      test.setTimeout(300000); // 5 mins
      await page.goto(domain);
      
      // Get all unique internal links
      const links = await page.evaluate((base) => {
        return Array.from(document.querySelectorAll('a'))
          .map(a => a.href)
          .filter(href => href.startsWith(base) && !href.includes('#'))
          .filter((v, i, a) => a.indexOf(v) === i);
      }, domain);

      console.log(`Auditing ${links.length} pages for forms on ${domain}...`);

      for (const link of links) {
        try {
          await page.goto(link, { waitUntil: 'domcontentloaded', timeout: 10000 });
          
          // Check for Referral links on this page
          const referralLinks = page.locator('a:has-text("Referral"), button:has-text("Referral")');
          const refCount = await referralLinks.count();
          for (let i = 0; i < refCount; i++) {
              const btn = referralLinks.nth(i);
              const text = await btn.innerText();
              const href = await btn.getAttribute('href');
              if (href && (href.endsWith('/home/') || href.endsWith('/home'))) {
                  console.log(`🚨 ISSUE FOUND on ${link}: "${text.trim()}" incorrectly links to /home/`);
              } else {
                  console.log(`Verified Referral link on ${link}: "${text.trim()}" -> ${href}`);
              }
          }

          const forms = page.locator('form');
          const formCount = await forms.count();

          if (formCount > 0) {
            console.log(`Found ${formCount} form(s) on ${link}`);
            for (let f = 0; f < formCount; f++) {
              const form = forms.nth(f);
              // Fill all visible inputs
              const inputs = form.locator('input:not([type="hidden"]), textarea, select');
              const inputCount = await inputs.count();
              
              for (let i = 0; i < inputCount; i++) {
                const input = inputs.nth(i);
                if (await input.isVisible()) {
                    const type = await input.getAttribute('type');
                    const name = await input.getAttribute('name') || '';
                    if (type === 'email' || name.includes('email')) await input.fill('test@example.com');
                    else if (type === 'tel') await input.fill('01234567890');
                    else if (type === 'checkbox') await input.check({ force: true });
                    else if (await input.evaluate(el => el.tagName) === 'SELECT') await input.selectOption({ index: 1 });
                    else await input.fill('Audit Test Data');
                }
              }

              // Try to submit
              const submit = form.locator('button[type="submit"], input[type="submit"], button:has-text("Submit"), button:has-text("Send"), button:has-text("Referral")').first();
              if (await submit.isVisible()) {
                console.log(`Submitting form on ${link}...`);
                await submit.click();
                await page.waitForTimeout(2000); // Wait for submission reaction
                console.log(`✓ Form submitted on ${link}`);
              }
            }
          }
        } catch (e) {
          // Continue to next page
        }
      }
    });
  }
});
