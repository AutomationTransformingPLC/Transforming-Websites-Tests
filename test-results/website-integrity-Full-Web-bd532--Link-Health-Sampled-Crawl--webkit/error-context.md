# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: website-integrity.spec.ts >> Full Website Integrity Audit >> Transforming PLC Audit >> Internal Link Health (Sampled Crawl)
- Location: tests\website-integrity.spec.ts:66:11

# Error details

```
Error: Broken link found: https://uat.transforming.plc.uk/0303%20300%203000

expect(received).toBeLessThan(expected)

Expected: < 400
Received:   404
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - dialog "cookieconsent" [ref=e2]:
    - generic [ref=e3]:
      - paragraph [ref=e4]: By accessing our site you agree to the storing of cookies on your device to enhance site navigation, analyse site usage, and assist in our marketing efforts.
      - button "learn more about cookies" [ref=e5] [cursor=pointer]: Click here to view cookie consent policy
    - generic [ref=e6]:
      - button "deny cookies" [ref=e7] [cursor=pointer]: Deny
      - button "allow cookies" [ref=e8] [cursor=pointer]: Accept
  - generic [ref=e9]:
    - link "Skip To Content" [ref=e10]:
      - /url: "#main"
    - banner [ref=e11]:
      - generic [ref=e12]:
        - button "close" [ref=e13] [cursor=pointer]:
          - img [ref=e14]
        - button "Hide Sites Switch Sites" [ref=e16] [cursor=pointer]:
          - img [ref=e18]
          - generic [ref=e20]:
            - generic [ref=e21]: Hide Sites
            - generic [ref=e22]: Switch Sites
          - img [ref=e24]
          - img [ref=e27]
        - generic [ref=e29]:
          - generic [ref=e30]:
            - generic [ref=e31]: Switch Sites
            - generic [ref=e32]: Our brands offer different levels of support
          - generic [ref=e33]:
            - generic [ref=e35] [cursor=pointer]:
              - generic [ref=e36]: You are on this site
              - generic [ref=e40]: Transforming PLC
            - generic [ref=e42]:
              - generic [ref=e43]: Coming soon
              - generic [ref=e46]:
                - generic [ref=e47]: Transforming Support
                - generic [ref=e48]: Person-centred supported living services
      - generic [ref=e49]:
        - link [ref=e50]:
          - /url: /
        - navigation [ref=e51]:
          - list [ref=e52]:
            - listitem [ref=e53]:
              - button "Who We Are" [ref=e54] [cursor=pointer]:
                - generic [ref=e55]: Who We Are
                - img [ref=e56]
            - listitem [ref=e58]:
              - button "Companies" [ref=e59] [cursor=pointer]:
                - generic [ref=e60]: Companies
                - img [ref=e61]
            - listitem [ref=e63]:
              - button "Careers" [ref=e64] [cursor=pointer]:
                - generic [ref=e65]: Careers
                - img [ref=e66]
            - listitem [ref=e68]:
              - button "Contact Us" [ref=e69] [cursor=pointer]:
                - generic [ref=e70]: Contact Us
                - img [ref=e71]
        - link "0303 300 3000" [ref=e73] [cursor=pointer]:
          - /url: 0303 300 3000
          - img [ref=e75]
          - generic [ref=e77]: 0303 300 3000
        - link "Contact Us" [ref=e78] [cursor=pointer]:
          - /url: /contact-us-page/
          - text: Contact Us
          - img [ref=e79]
    - main [ref=e81]:
      - generic [ref=e86]:
        - heading "We invest, develop, enable and support people to achieve their aspirations. TESTING" [level=1] [ref=e87]:
          - text: We invest, develop, enable and support people to achieve their
          - generic [ref=e88]:
            - text: aspirations. TESTING
            - generic:
              - img
        - paragraph [ref=e90]: Our objective is to enable people to achieve their potential, realise their dreams and develop their skills in partnership with local government and communities. There are no glass ceilings.
      - generic [ref=e95]:
        - generic [ref=e96]:
          - heading "About Us" [level=2] [ref=e97]:
            - text: About
            - generic [ref=e98]:
              - text: Us
              - generic:
                - img
          - paragraph [ref=e100]: Transforming PLC is an organisation that exists to invest in people and enable public-private partnership and social care service delivery from a values-based approach that achieves great outcomes for investors, partners and the people we support.
        - generic [ref=e101]:
          - group [ref=e102]:
            - generic "Investors" [ref=e103] [cursor=pointer]:
              - generic [ref=e104]: Investors
              - img [ref=e106]
          - group [ref=e108]:
            - generic "Suppliers" [ref=e109] [cursor=pointer]:
              - generic [ref=e110]: Suppliers
              - img [ref=e112]
          - group [ref=e114]:
            - generic "Public Sector Partnerships" [ref=e115] [cursor=pointer]:
              - generic [ref=e116]: Public Sector Partnerships
              - img [ref=e118]
      - generic [ref=e125]:
        - heading "Our passion is to invest in people." [level=2] [ref=e126]:
          - text: Our passion is to invest in
          - generic [ref=e127]:
            - text: people.
            - generic:
              - img
        - generic [ref=e128]:
          - paragraph [ref=e129]:
            - text: We make a difference in people's lives by seeking to understand what is important to our staff, clients, and partners. We then set our strategy, including our communities, to generate fantastic outcomes, always putting people first in our considerations.
            - text: We also invest in our teams so they can develop their capabilities, strengths and confidence to reach their potential.
            - text: In Brian Tracy's words, "Recognising employees' accomplishments and showing appreciation is the fuel for motivation and the key to unlocking their potential."
          - paragraph [ref=e130]
      - generic [ref=e136]:
        - heading "Social Impact" [level=2] [ref=e137]:
          - text: Social
          - generic [ref=e138]:
            - text: Impact
            - generic:
              - img
        - paragraph [ref=e140]:
          - text: Social impact in social care is the idea of creating positive change and improving the world by addressing social issues. It involves doing more than just making money and instead focusing on making the world a better place for everyone.
          - text: Transforming PLC makes a difference in people's lives by creating spaces where that meet people's needs and developing its workforce to deliver care and support that makes a difference to the people we support lives, supporting public partners efforts to create a better quality of life for all.
      - generic [ref=e146]:
        - heading "Please let us know what we can do what we can do to help you!" [level=2] [ref=e147]:
          - text: Please let us know what we can do
          - generic [ref=e148]:
            - text: what we can do
            - generic:
              - img
          - text: to help you!
        - generic [ref=e151]:
          - heading "We are here to help" [level=3] [ref=e152]:
            - strong [ref=e153]: We are here to help
          - paragraph [ref=e154]: If you have a question about Transforming PLC, our services, partnerships, or investment opportunities, we’d be pleased to hear from you. Our team will ensure your enquiry is directed to the right person.
          - paragraph [ref=e155]
          - heading "Get in touch" [level=3] [ref=e156]:
            - strong [ref=e157]: Get in touch
          - paragraph [ref=e158]: Please contact us using the details provided. A member of our team will be in touch shortly.
          - paragraph [ref=e159]
          - paragraph [ref=e160]:
            - strong [ref=e161]: "General enquiries:"
            - text: 📧
            - link "info@transforming.plc.uk" [ref=e162]:
              - /url: mailto:info@transforming.plc.uk
              - strong [ref=e163]: info@transforming.plc.uk
            - text: 📞
            - link "0303 300 3000" [ref=e164]:
              - /url: tel:03033003000
              - strong [ref=e165]: 0303 300 3000
    - contentinfo [ref=e167]:
      - generic [ref=e168]:
        - generic [ref=e169]:
          - generic [ref=e170]:
            - generic [ref=e171]: Who We Are
            - generic [ref=e172]:
              - link "Mission Statement" [ref=e173]:
                - /url: /mission-statement
              - link "Meet The Board" [ref=e174]:
                - /url: /meet-the-board
              - link "Leadership Team" [ref=e175]:
                - /url: /leadership-team
          - generic [ref=e176]:
            - generic [ref=e177]: Careers
            - generic [ref=e178]:
              - link "Why Work at Transforming PLC" [ref=e179]:
                - /url: /why-work-at-transforming-plc
              - link "Vacancies List" [ref=e180]:
                - /url: https://www.indeed.com/cmp/Transforming-Support/about
          - generic [ref=e181]:
            - generic [ref=e182]: Contact Us
            - generic [ref=e183]:
              - link "Contact us" [ref=e184]:
                - /url: /contact-us-page
              - link "Social Media" [ref=e185]:
                - /url: /social-media
              - link "Compliance and Statements" [ref=e186]:
                - /url: /compliance-and-statements
              - link "Privacy" [ref=e187]:
                - /url: /social-media
            - generic [ref=e188]:
              - link "https://www.facebook.com/TRFSupportUK/" [ref=e189]:
                - /url: https://www.facebook.com/TRFSupportUK/
                - img "White Facebook Logo" [ref=e190]
              - link "https://instagram.com/trfsupportuk?igshid=NTc4MTIwNjQ2YQ==" [ref=e191]:
                - /url: https://instagram.com/trfsupportuk?igshid=NTc4MTIwNjQ2YQ==
                - img "White Instagram Logo" [ref=e192]
              - link "https://twitter.com/trfsupportuk?s=21&t=inAChnC0WpuuKMH-BVQQXg" [ref=e193]:
                - /url: https://twitter.com/trfsupportuk?s=21&t=inAChnC0WpuuKMH-BVQQXg
                - img "White Twitter Logo" [ref=e194]
        - generic [ref=e195]:
          - generic [ref=e197]:
            - generic [ref=e198]: Registered Office
            - generic [ref=e199]:
              - generic [ref=e200]: New City Court
              - generic [ref=e201]: 20 St Thomas Street,
              - generic [ref=e202]: London,
              - generic [ref=e203]: SE1 9RS
          - paragraph [ref=e205]: © Copyright Transforming PLC 2026
  - alert [ref=e206]
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
  58 |           expect(response?.status(), `Subtab ${fullUrl} failed with status ${response?.status()}`).toBe(200);
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
> 78 |           expect(response.status(), `Broken link found: ${link}`).toBeLessThan(400);
     |                                                                   ^ Error: Broken link found: https://uat.transforming.plc.uk/0303%20300%203000
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