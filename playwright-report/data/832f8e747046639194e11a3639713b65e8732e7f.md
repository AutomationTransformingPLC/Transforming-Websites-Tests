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
        - button "close":
          - img
        - generic [ref=e14]:
          - button "Back" [ref=e15] [cursor=pointer]:
            - img [ref=e17]
            - generic [ref=e19]: Back
          - generic [ref=e20]:
            - generic [ref=e21]: Switch Sites
            - generic [ref=e22]: Our brands offer different levels of support
          - generic [ref=e23]:
            - generic [ref=e25] [cursor=pointer]:
              - generic [ref=e26]: You are on this site
              - generic [ref=e30]: Transforming PLC
            - generic [ref=e32]:
              - generic [ref=e33]: Coming soon
              - generic [ref=e36]:
                - generic [ref=e37]: Transforming Support
                - generic [ref=e38]: Person-centred supported living services
      - generic [ref=e39]:
        - link [ref=e40]:
          - /url: /
        - navigation [ref=e41]:
          - generic [ref=e42]:
            - link "Contact Us" [ref=e43] [cursor=pointer]:
              - /url: /contact-us-page/
              - text: Contact Us
              - img [ref=e44]
            - button "Switch Sites here" [ref=e46] [cursor=pointer]:
              - text: Switch Sites here
              - img [ref=e47]
          - list [ref=e49]:
            - listitem [ref=e50]:
              - button "Who We Are" [ref=e51]:
                - generic [ref=e52]: Who We Are
                - img [ref=e53]
              - generic [ref=e55]:
                - button "Back" [ref=e56] [cursor=pointer]:
                  - img [ref=e58]
                  - generic [ref=e60]: Back
                - generic [ref=e61]:
                  - generic [ref=e62]: Who We Are
                  - navigation [ref=e63]:
                    - link "Mission Statement" [ref=e64]:
                      - /url: /mission-statement
                    - link "Meet The Board" [ref=e65]:
                      - /url: /meet-the-board
                    - link "Leadership Team" [ref=e66]:
                      - /url: /leadership-team
                - generic [ref=e67]:
                  - generic [ref=e69]:
                    - heading "Our News!" [level=2] [ref=e70]
                    - paragraph [ref=e72]: Lets Get Connected for Our Latest News & Updates!
                  - link "Social Media" [ref=e75] [cursor=pointer]:
                    - /url: /social-media/
            - listitem [ref=e77]:
              - button "Companies" [ref=e78]:
                - generic [ref=e79]: Companies
                - img [ref=e80]
              - generic [ref=e82]:
                - button "Back" [ref=e83] [cursor=pointer]:
                  - img [ref=e85]
                  - generic [ref=e87]: Back
                - generic [ref=e88]:
                  - generic [ref=e89]: Companies
                  - navigation [ref=e90]:
                    - link "Transforming Support" [ref=e91]:
                      - /url: /transforming-support/
                    - link "Nurture Support" [ref=e92]:
                      - /url: /nurture-support/
                    - link "Transforming Developments" [ref=e93]:
                      - /url: /transforming-developments/
                    - link "Ascend Support" [ref=e94]:
                      - /url: /ascend-support/
                - generic [ref=e95]:
                  - generic [ref=e97]:
                    - heading "Our News!" [level=2] [ref=e98]
                    - paragraph [ref=e100]: Lets Get Connected for Our Latest News & Updates!
                  - link "Social Media" [ref=e103] [cursor=pointer]:
                    - /url: /social-media/
            - listitem [ref=e105]:
              - button "Careers" [ref=e106]:
                - generic [ref=e107]: Careers
                - img [ref=e108]
              - generic [ref=e110]:
                - button "Back" [ref=e111] [cursor=pointer]:
                  - img [ref=e113]
                  - generic [ref=e115]: Back
                - generic [ref=e116]:
                  - generic [ref=e117]: Careers
                  - navigation [ref=e118]:
                    - link "Why Work at Transforming PLC" [ref=e119]:
                      - /url: /why-work-at-transforming-plc
                    - link "Vacancies List" [ref=e120]:
                      - /url: https://www.indeed.com/cmp/Transforming-Support/about
                - generic [ref=e121]:
                  - generic [ref=e123]:
                    - heading "Our News!" [level=2] [ref=e124]
                    - paragraph [ref=e126]: Lets Get Connected for Our Latest News & Updates!
                  - link "Social Media" [ref=e129] [cursor=pointer]:
                    - /url: /social-media/
            - listitem [ref=e131]:
              - button "Contact Us" [ref=e132]:
                - generic [ref=e133]: Contact Us
                - img [ref=e134]
              - generic [ref=e136]:
                - button "Back" [ref=e137] [cursor=pointer]:
                  - img [ref=e139]
                  - generic [ref=e141]: Back
                - navigation [ref=e143]:
                  - link "Get in Touch" [ref=e144]:
                    - /url: /contact-form/
                  - link "Social Media" [ref=e145]:
                    - /url: /social-media/
                - generic [ref=e146]:
                  - generic [ref=e148]:
                    - heading [level=2]
                    - paragraph [ref=e150]: Click here to see our Homepage!
                  - link "Homepage" [ref=e153] [cursor=pointer]:
                    - /url: /home/
        - link "Call Us 0303 300 3000" [ref=e155] [cursor=pointer]:
          - /url: 0303 300 3000
          - img [ref=e157]
          - generic [ref=e159]: Call Us
          - generic [ref=e160]: 0303 300 3000
        - button "Menu" [ref=e161] [cursor=pointer]:
          - img [ref=e163]
          - generic [ref=e165]: Menu
    - main [ref=e166]:
      - generic [ref=e171]:
        - heading "We invest, develop, enable and support people to achieve their aspirations. TESTING" [level=1] [ref=e172]:
          - text: We invest, develop, enable and support people to achieve their
          - generic [ref=e173]:
            - text: aspirations. TESTING
            - generic:
              - img
        - paragraph [ref=e175]: Our objective is to enable people to achieve their potential, realise their dreams and develop their skills in partnership with local government and communities. There are no glass ceilings.
      - generic [ref=e180]:
        - generic [ref=e181]:
          - heading "About Us" [level=2] [ref=e182]:
            - text: About
            - generic [ref=e183]:
              - text: Us
              - generic:
                - img
          - paragraph [ref=e185]: Transforming PLC is an organisation that exists to invest in people and enable public-private partnership and social care service delivery from a values-based approach that achieves great outcomes for investors, partners and the people we support.
        - generic [ref=e186]:
          - group [ref=e187]:
            - generic "Investors" [ref=e188] [cursor=pointer]:
              - generic [ref=e189]: Investors
              - img [ref=e191]
          - group [ref=e193]:
            - generic "Suppliers" [ref=e194] [cursor=pointer]:
              - generic [ref=e195]: Suppliers
              - img [ref=e197]
          - group [ref=e199]:
            - generic "Public Sector Partnerships" [ref=e200] [cursor=pointer]:
              - generic [ref=e201]: Public Sector Partnerships
              - img [ref=e203]
      - generic [ref=e210]:
        - heading "Our passion is to invest in people." [level=2] [ref=e211]:
          - text: Our passion is to invest in
          - generic [ref=e212]:
            - text: people.
            - generic:
              - img
        - generic [ref=e213]:
          - paragraph [ref=e214]:
            - text: We make a difference in people's lives by seeking to understand what is important to our staff, clients, and partners. We then set our strategy, including our communities, to generate fantastic outcomes, always putting people first in our considerations.
            - text: We also invest in our teams so they can develop their capabilities, strengths and confidence to reach their potential.
            - text: In Brian Tracy's words, "Recognising employees' accomplishments and showing appreciation is the fuel for motivation and the key to unlocking their potential."
          - paragraph [ref=e215]
      - generic [ref=e221]:
        - heading "Social Impact" [level=2] [ref=e222]:
          - text: Social
          - generic [ref=e223]:
            - text: Impact
            - generic:
              - img
        - paragraph [ref=e225]:
          - text: Social impact in social care is the idea of creating positive change and improving the world by addressing social issues. It involves doing more than just making money and instead focusing on making the world a better place for everyone.
          - text: Transforming PLC makes a difference in people's lives by creating spaces where that meet people's needs and developing its workforce to deliver care and support that makes a difference to the people we support lives, supporting public partners efforts to create a better quality of life for all.
      - generic [ref=e230]:
        - heading "Please let us know what we can do what we can do to help you!" [level=2] [ref=e231]:
          - text: Please let us know what we can do
          - generic [ref=e232]:
            - text: what we can do
            - generic:
              - img
          - text: to help you!
        - generic [ref=e235]:
          - heading "We are here to help" [level=3] [ref=e236]:
            - strong [ref=e237]: We are here to help
          - paragraph [ref=e238]: If you have a question about Transforming PLC, our services, partnerships, or investment opportunities, we’d be pleased to hear from you. Our team will ensure your enquiry is directed to the right person.
          - paragraph [ref=e239]
          - heading "Get in touch" [level=3] [ref=e240]:
            - strong [ref=e241]: Get in touch
          - paragraph [ref=e242]: Please contact us using the details provided. A member of our team will be in touch shortly.
          - paragraph [ref=e243]
          - paragraph [ref=e244]:
            - strong [ref=e245]: "General enquiries:"
            - text: 📧
            - link "info@transforming.plc.uk" [ref=e246]:
              - /url: mailto:info@transforming.plc.uk
              - strong [ref=e247]: info@transforming.plc.uk
            - text: 📞
            - link "0303 300 3000" [ref=e248]:
              - /url: tel:03033003000
              - strong [ref=e249]: 0303 300 3000
    - contentinfo [ref=e251]:
      - generic [ref=e252]:
        - generic [ref=e253]:
          - generic [ref=e254]:
            - generic [ref=e255]: Who We Are
            - generic [ref=e256]:
              - link "Mission Statement" [ref=e257]:
                - /url: /mission-statement
              - link "Meet The Board" [ref=e258]:
                - /url: /meet-the-board
              - link "Leadership Team" [ref=e259]:
                - /url: /leadership-team
          - generic [ref=e260]:
            - generic [ref=e261]: Careers
            - generic [ref=e262]:
              - link "Why Work at Transforming PLC" [ref=e263]:
                - /url: /why-work-at-transforming-plc
              - link "Vacancies List" [ref=e264]:
                - /url: https://www.indeed.com/cmp/Transforming-Support/about
          - generic [ref=e265]:
            - generic [ref=e266]: Contact Us
            - generic [ref=e267]:
              - link "Contact us" [ref=e268]:
                - /url: /contact-us-page
              - link "Social Media" [ref=e269]:
                - /url: /social-media
              - link "Compliance and Statements" [ref=e270]:
                - /url: /compliance-and-statements
              - link "Privacy" [ref=e271]:
                - /url: /social-media
            - generic [ref=e272]:
              - link "https://www.facebook.com/TRFSupportUK/" [ref=e273]:
                - /url: https://www.facebook.com/TRFSupportUK/
                - img "White Facebook Logo" [ref=e274]
              - link "https://instagram.com/trfsupportuk?igshid=NTc4MTIwNjQ2YQ==" [ref=e275]:
                - /url: https://instagram.com/trfsupportuk?igshid=NTc4MTIwNjQ2YQ==
                - img "White Instagram Logo" [ref=e276]
              - link "https://twitter.com/trfsupportuk?s=21&t=inAChnC0WpuuKMH-BVQQXg" [ref=e277]:
                - /url: https://twitter.com/trfsupportuk?s=21&t=inAChnC0WpuuKMH-BVQQXg
                - img "White Twitter Logo" [ref=e278]
        - generic [ref=e279]:
          - generic [ref=e281]:
            - generic [ref=e282]: Registered Office
            - generic [ref=e283]: New City Court 20 St Thomas Street, London, SE1 9RS
          - paragraph [ref=e285]: © Copyright Transforming PLC 2026
  - alert [ref=e286]
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