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
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - link "Skip To Content" [ref=e3] [cursor=pointer]:
      - /url: "#main"
    - banner [ref=e4]:
      - generic [ref=e5]:
        - link [ref=e6] [cursor=pointer]:
          - /url: /
        - navigation [ref=e7]:
          - link "Contact Us" [ref=e9] [cursor=pointer]:
            - /url: /contact-us-page/
            - text: Contact Us
            - img [ref=e10]
          - list [ref=e12]:
            - listitem [ref=e13]:
              - button "Who We Are" [ref=e14]:
                - generic [ref=e15]: Who We Are
                - img [ref=e16]
              - generic [ref=e18]:
                - button "Back" [ref=e19] [cursor=pointer]:
                  - img [ref=e21]
                  - generic [ref=e23]: Back
                - generic [ref=e24]:
                  - generic [ref=e25]: Who We Are
                  - navigation [ref=e26]:
                    - link "Mission Statement" [ref=e27] [cursor=pointer]:
                      - /url: /mission-statement
                    - link "Meet The Board" [ref=e28] [cursor=pointer]:
                      - /url: /meet-the-board
                    - link "Leadership Team" [ref=e29] [cursor=pointer]:
                      - /url: /leadership-team
                - generic [ref=e30]:
                  - generic [ref=e32]:
                    - heading "Our News!" [level=2] [ref=e33]
                    - paragraph [ref=e35]: Lets Get Connected for Our Latest News & Updates!
                  - link "Social Media" [ref=e38] [cursor=pointer]:
                    - /url: /social-media/
            - listitem [ref=e40]:
              - button "Companies" [ref=e41]:
                - generic [ref=e42]: Companies
                - img [ref=e43]
              - generic [ref=e45]:
                - button "Back" [ref=e46] [cursor=pointer]:
                  - img [ref=e48]
                  - generic [ref=e50]: Back
                - generic [ref=e51]:
                  - generic [ref=e52]: Companies
                  - navigation [ref=e53]:
                    - link "Transforming Support" [ref=e54] [cursor=pointer]:
                      - /url: /transforming-support/
                    - link "Nurture Support" [ref=e55] [cursor=pointer]:
                      - /url: /nurture-support/
                    - link "Transforming Developments" [ref=e56] [cursor=pointer]:
                      - /url: /transforming-developments/
                    - link "Ascend Support" [ref=e57] [cursor=pointer]:
                      - /url: /ascend-support/
                - generic [ref=e58]:
                  - generic [ref=e60]:
                    - heading "Our News!" [level=2] [ref=e61]
                    - paragraph [ref=e63]: Lets Get Connected for Our Latest News & Updates!
                  - link "Social Media" [ref=e66] [cursor=pointer]:
                    - /url: /social-media/
            - listitem [ref=e68]:
              - button "Careers" [ref=e69]:
                - generic [ref=e70]: Careers
                - img [ref=e71]
              - generic [ref=e73]:
                - button "Back" [ref=e74] [cursor=pointer]:
                  - img [ref=e76]
                  - generic [ref=e78]: Back
                - generic [ref=e79]:
                  - generic [ref=e80]: Careers
                  - navigation [ref=e81]:
                    - link "Why Work at Transforming PLC" [ref=e82] [cursor=pointer]:
                      - /url: /why-work-at-transforming-plc
                    - link "Vacancies List" [ref=e83] [cursor=pointer]:
                      - /url: https://www.indeed.com/cmp/Transforming-Support/about
                - generic [ref=e84]:
                  - generic [ref=e86]:
                    - heading "Our News!" [level=2] [ref=e87]
                    - paragraph [ref=e89]: Lets Get Connected for Our Latest News & Updates!
                  - link "Social Media" [ref=e92] [cursor=pointer]:
                    - /url: /social-media/
            - listitem [ref=e94]:
              - button "Contact Us" [ref=e95]:
                - generic [ref=e96]: Contact Us
                - img [ref=e97]
              - generic [ref=e99]:
                - button "Back" [ref=e100] [cursor=pointer]:
                  - img [ref=e102]
                  - generic [ref=e104]: Back
                - navigation [ref=e106]:
                  - link "Get in Touch" [ref=e107] [cursor=pointer]:
                    - /url: /contact-form/
                  - link "Social Media" [ref=e108] [cursor=pointer]:
                    - /url: /social-media/
                - generic [ref=e109]:
                  - generic [ref=e111]:
                    - heading [level=2]
                    - paragraph [ref=e113]: Click here to see our Homepage!
                  - link "Homepage" [ref=e116] [cursor=pointer]:
                    - /url: /home/
        - link "Call Us 0303 300 3000" [ref=e118] [cursor=pointer]:
          - /url: 0303 300 3000
          - img [ref=e120]
          - generic [ref=e122]: Call Us
          - generic [ref=e123]: 0303 300 3000
        - button "Menu" [ref=e124] [cursor=pointer]:
          - img [ref=e126]
          - generic [ref=e128]: Menu
    - main [ref=e129]:
      - generic [ref=e132]:
        - img "Warning Triangle Icon" [ref=e134]
        - generic [ref=e135]: 404 Error
        - heading "Page Not Found." [level=1] [ref=e136]
        - paragraph [ref=e138]: The page you are looking for can’t be found, please try again shortly. If you continue to experience problems please contact us.
        - link "Contact Us" [ref=e139] [cursor=pointer]:
          - /url: /
          - text: Contact Us
          - img [ref=e140]
      - generic [ref=e143]:
        - generic [ref=e144]:
          - heading "Looking for more information?" [level=2] [ref=e145]
          - paragraph [ref=e147]: If you require more information or would like to Make a Referral use the options below.
        - generic [ref=e148]:
          - link "Contact Us" [ref=e149] [cursor=pointer]:
            - /url: /home/
            - text: Contact Us
            - img [ref=e150]
          - link "Make Referral" [ref=e152] [cursor=pointer]:
            - /url: /home/
            - text: Make Referral
            - img [ref=e153]
    - contentinfo [ref=e155]:
      - generic [ref=e156]:
        - generic [ref=e157]:
          - generic [ref=e158]:
            - generic [ref=e159]: Who We Are
            - generic [ref=e160]:
              - link "Mission Statement" [ref=e161] [cursor=pointer]:
                - /url: /mission-statement
              - link "Meet The Board" [ref=e162] [cursor=pointer]:
                - /url: /meet-the-board
              - link "Leadership Team" [ref=e163] [cursor=pointer]:
                - /url: /leadership-team
          - generic [ref=e164]:
            - generic [ref=e165]: Careers
            - generic [ref=e166]:
              - link "Why Work at Transforming PLC" [ref=e167] [cursor=pointer]:
                - /url: /why-work-at-transforming-plc
              - link "Vacancies List" [ref=e168] [cursor=pointer]:
                - /url: https://www.indeed.com/cmp/Transforming-Support/about
          - generic [ref=e169]:
            - generic [ref=e170]: Contact Us
            - generic [ref=e171]:
              - link "Contact us" [ref=e172] [cursor=pointer]:
                - /url: /contact-us-page
              - link "Social Media" [ref=e173] [cursor=pointer]:
                - /url: /social-media
              - link "Compliance and Statements" [ref=e174] [cursor=pointer]:
                - /url: /compliance-and-statements
              - link "Privacy" [ref=e175] [cursor=pointer]:
                - /url: /social-media
            - generic [ref=e176]:
              - link "https://www.facebook.com/TRFSupportUK/" [ref=e177] [cursor=pointer]:
                - /url: https://www.facebook.com/TRFSupportUK/
                - img "White Facebook Logo" [ref=e178]
              - link "https://instagram.com/trfsupportuk?igshid=NTc4MTIwNjQ2YQ==" [ref=e179] [cursor=pointer]:
                - /url: https://instagram.com/trfsupportuk?igshid=NTc4MTIwNjQ2YQ==
                - img "White Instagram Logo" [ref=e180]
              - link "https://twitter.com/trfsupportuk?s=21&t=inAChnC0WpuuKMH-BVQQXg" [ref=e181] [cursor=pointer]:
                - /url: https://twitter.com/trfsupportuk?s=21&t=inAChnC0WpuuKMH-BVQQXg
                - img "White Twitter Logo" [ref=e182]
        - generic [ref=e183]:
          - generic [ref=e185]:
            - generic [ref=e186]: Registered Office
            - generic [ref=e187]: New City Court 20 St Thomas Street, London, SE1 9RS
          - paragraph [ref=e189]: © Copyright Transforming PLC 2026
  - alert [ref=e190]
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