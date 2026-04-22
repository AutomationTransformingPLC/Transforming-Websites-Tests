# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: website-integrity.spec.ts >> Full Website Integrity Audit >> Transforming PLC Audit >> Subtab Integrity Check (Navigation & Status)
- Location: tests\website-integrity.spec.ts:54:11

# Error details

```
Error: Subtab https://uat.transforming.plc.uk/mission-statement-and-values/ failed with status 404

expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - link "Skip To Content" [ref=e3]:
    - /url: "#main"
  - banner [ref=e4]:
    - generic [ref=e5]:
      - link [ref=e6]:
        - /url: /
      - navigation [ref=e7]:
        - list [ref=e8]:
          - listitem [ref=e9]:
            - button "Who We Are" [ref=e10] [cursor=pointer]:
              - generic [ref=e11]: Who We Are
              - img [ref=e12]
          - listitem [ref=e14]:
            - button "Companies" [ref=e15] [cursor=pointer]:
              - generic [ref=e16]: Companies
              - img [ref=e17]
          - listitem [ref=e19]:
            - button "Careers" [ref=e20] [cursor=pointer]:
              - generic [ref=e21]: Careers
              - img [ref=e22]
          - listitem [ref=e24]:
            - button "Contact Us" [ref=e25] [cursor=pointer]:
              - generic [ref=e26]: Contact Us
              - img [ref=e27]
      - link "0303 300 3000" [ref=e29] [cursor=pointer]:
        - /url: 0303 300 3000
        - img [ref=e31]
        - generic [ref=e33]: 0303 300 3000
      - link "Contact Us" [ref=e34] [cursor=pointer]:
        - /url: /contact-us-page/
        - text: Contact Us
        - img [ref=e35]
  - main [ref=e37]:
    - generic [ref=e40]:
      - img "Warning Triangle Icon" [ref=e42]
      - generic [ref=e43]: 404 Error
      - heading "Page Not Found." [level=1] [ref=e44]
      - paragraph [ref=e46]: The page you are looking for can’t be found, please try again shortly. If you continue to experience problems please contact us.
      - link "Contact Us" [ref=e47] [cursor=pointer]:
        - /url: /
        - text: Contact Us
        - img [ref=e48]
    - generic [ref=e51]:
      - generic [ref=e52]:
        - heading "Looking for more information?" [level=2] [ref=e53]
        - paragraph [ref=e55]: If you require more information or would like to Make a Referral use the options below.
      - generic [ref=e56]:
        - link "Contact Us" [ref=e57] [cursor=pointer]:
          - /url: /home/
          - text: Contact Us
          - img [ref=e58]
        - link "Make Referral" [ref=e60] [cursor=pointer]:
          - /url: /home/
          - text: Make Referral
          - img [ref=e61]
  - contentinfo [ref=e63]:
    - generic [ref=e64]:
      - generic [ref=e65]:
        - generic [ref=e66]:
          - generic [ref=e67]: Who We Are
          - generic [ref=e68]:
            - link "Mission Statement" [ref=e69]:
              - /url: /mission-statement
            - link "Meet The Board" [ref=e70]:
              - /url: /meet-the-board
            - link "Leadership Team" [ref=e71]:
              - /url: /leadership-team
        - generic [ref=e72]:
          - generic [ref=e73]: Careers
          - generic [ref=e74]:
            - link "Why Work at Transforming PLC" [ref=e75]:
              - /url: /why-work-at-transforming-plc
            - link "Vacancies List" [ref=e76]:
              - /url: https://www.indeed.com/cmp/Transforming-Support/about
        - generic [ref=e77]:
          - generic [ref=e78]: Contact Us
          - generic [ref=e79]:
            - link "Contact us" [ref=e80]:
              - /url: /contact-us-page
            - link "Social Media" [ref=e81]:
              - /url: /social-media
            - link "Compliance and Statements" [ref=e82]:
              - /url: /compliance-and-statements
            - link "Privacy" [ref=e83]:
              - /url: /social-media
          - generic [ref=e84]:
            - link "https://www.facebook.com/TRFSupportUK/" [ref=e85]:
              - /url: https://www.facebook.com/TRFSupportUK/
              - img "White Facebook Logo" [ref=e86]
            - link "https://instagram.com/trfsupportuk?igshid=NTc4MTIwNjQ2YQ==" [ref=e87]:
              - /url: https://instagram.com/trfsupportuk?igshid=NTc4MTIwNjQ2YQ==
              - img "White Instagram Logo" [ref=e88]
            - link "https://twitter.com/trfsupportuk?s=21&t=inAChnC0WpuuKMH-BVQQXg" [ref=e89]:
              - /url: https://twitter.com/trfsupportuk?s=21&t=inAChnC0WpuuKMH-BVQQXg
              - img "White Twitter Logo" [ref=e90]
      - generic [ref=e91]:
        - generic [ref=e93]:
          - generic [ref=e94]: Registered Office
          - generic [ref=e95]:
            - generic [ref=e96]: New City Court
            - generic [ref=e97]: 20 St Thomas Street,
            - generic [ref=e98]: London,
            - generic [ref=e99]: SE1 9RS
        - paragraph [ref=e101]: © Copyright Transforming PLC 2026
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const SITES = [
  4  |   {
  5  |     name: 'Transforming PLC',
  6  |     url: 'https://uat.transforming.plc.uk/',
  7  |     subtabs: [
  8  |       'mission-statement-and-values/',
  9  |       'leadership-team',
  10 |       'meet-the-board',
  11 |       'nurture-support/',
  12 |       'transforming-support/',
  13 |       'ascend-support/',
  14 |       'transforming-developments/',
  15 |       'why-work-at-transforming-plc',
  16 |       'recruitment/',
  17 |       'contact-us/'
  18 |     ]
  19 |   },
  20 |   {
  21 |     name: 'Transforming Support',
  22 |     url: 'https://uat.transformingsupport.uk/',
  23 |     subtabs: [
  24 |       'who-do-we-support',
  25 |       'people-we-support-feedback',
  26 |       'locations',
  27 |       'staff/',
  28 |       'how-do-we-support-families',
  29 |       'support-tiers',
  30 |       'transitioning-to-supported-living',
  31 |       'referral-process',
  32 |       'tenancy',
  33 |       'quality-assurance',
  34 |       'safeguarding',
  35 |       'referral-form/'
  36 |     ]
  37 |   }
  38 | ];
  39 | 
  40 | test.describe('Full Website Integrity Audit', () => {
  41 |   for (const site of SITES) {
  42 |     test.describe(`${site.name} Audit`, () => {
  43 |       
  44 |       test('Homepage and SEO verification', async ({ page }) => {
  45 |         const response = await page.goto(site.url);
  46 |         expect(response?.status()).toBe(200);
  47 |         await expect(page).toHaveTitle(/.+/); // Ensure title exists
  48 |         
  49 |         // Check for common SEO/Meta tags
  50 |         const description = await page.locator('meta[name="description"]').getAttribute('content');
  51 |         expect(description).toBeTruthy();
  52 |       });
  53 | 
  54 |       test('Subtab Integrity Check (Navigation & Status)', async ({ page }) => {
  55 |         for (const path of site.subtabs) {
  56 |           const fullUrl = site.url + path;
  57 |           const response = await page.goto(fullUrl, { waitUntil: 'domcontentloaded' });
> 58 |           expect(response?.status(), `Subtab ${fullUrl} failed with status ${response?.status()}`).toBe(200);
     |                                                                                                    ^ Error: Subtab https://uat.transforming.plc.uk/mission-statement-and-values/ failed with status 404
  59 |           
  60 |           // Verify main content area is present
  61 |           await expect(page.locator('main, #main, article, .content').first()).toBeVisible();
  62 |           console.log(`✓ Verified: ${fullUrl}`);
  63 |         }
  64 |       });
  65 | 
  66 |       test('Internal Link Health (Sampled Crawl)', async ({ page }) => {
  67 |         await page.goto(site.url);
  68 |         const links = await page.locator('a').evaluateAll((elements, base) => 
  69 |           elements
  70 |             .map(el => (el as HTMLAnchorElement).href)
  71 |             .filter(href => href.startsWith(base) && !href.includes('#'))
  72 |         , site.url);
  73 | 
  74 |         const uniqueLinks = Array.from(new Set(links)).slice(0, 20); // Expanded sample
  75 |         
  76 |         for (const link of uniqueLinks) {
  77 |           const response = await page.request.get(link);
  78 |           expect(response.status(), `Broken link found: ${link}`).toBeLessThan(400);
  79 |         }
  80 |       });
  81 | 
  82 |       test('Responsive Layout Verification', async ({ page }) => {
  83 |         await page.goto(site.url);
  84 |         // Check header/footer on different viewports (Playwright handles this via projects, but we can check visibility)
  85 |         await expect(page.locator('header')).toBeVisible();
  86 |         await expect(page.locator('footer')).toBeVisible();
  87 |       });
  88 |     });
  89 |   }
  90 | });
  91 | 
```