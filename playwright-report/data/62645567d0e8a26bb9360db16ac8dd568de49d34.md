# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: debug-mobile-click.spec.ts >> Debug Mobile Switcher Action
- Location: tests\debug-mobile-click.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button.button_button__dZRSb.button_theme4__nJzSY:has-text("Switch Sites here")')
    - locator resolved to <button type="button" class="button_button__dZRSb button_theme4__nJzSY">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
    - retrying click action
      - waiting 100ms
    52 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - element is outside of the viewport
     - retrying click action
       - waiting 500ms

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
    - link "Skip To Content" [ref=e10] [cursor=pointer]:
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
        - link [ref=e40] [cursor=pointer]:
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
                    - link "Mission Statement" [ref=e64] [cursor=pointer]:
                      - /url: /mission-statement
                    - link "Meet The Board" [ref=e65] [cursor=pointer]:
                      - /url: /meet-the-board
                    - link "Leadership Team" [ref=e66] [cursor=pointer]:
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
                    - link "Transforming Support" [ref=e91] [cursor=pointer]:
                      - /url: /transforming-support/
                    - link "Nurture Support" [ref=e92] [cursor=pointer]:
                      - /url: /nurture-support/
                    - link "Transforming Developments" [ref=e93] [cursor=pointer]:
                      - /url: /transforming-developments/
                    - link "Ascend Support" [ref=e94] [cursor=pointer]:
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
                    - link "Why Work at Transforming PLC" [ref=e119] [cursor=pointer]:
                      - /url: /why-work-at-transforming-plc
                    - link "Vacancies List" [ref=e120] [cursor=pointer]:
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
                  - link "Get in Touch" [ref=e144] [cursor=pointer]:
                    - /url: /contact-form/
                  - link "Social Media" [ref=e145] [cursor=pointer]:
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
      - generic [ref=e231]:
        - heading "Please let us know what we can do what we can do to help you!" [level=2] [ref=e232]:
          - text: Please let us know what we can do
          - generic [ref=e233]:
            - text: what we can do
            - generic:
              - img
          - text: to help you!
        - generic [ref=e236]:
          - heading "We are here to help" [level=3] [ref=e237]:
            - strong [ref=e238]: We are here to help
          - paragraph [ref=e239]: If you have a question about Transforming PLC, our services, partnerships, or investment opportunities, we’d be pleased to hear from you. Our team will ensure your enquiry is directed to the right person.
          - paragraph [ref=e240]
          - heading "Get in touch" [level=3] [ref=e241]:
            - strong [ref=e242]: Get in touch
          - paragraph [ref=e243]: Please contact us using the details provided. A member of our team will be in touch shortly.
          - paragraph [ref=e244]
          - paragraph [ref=e245]:
            - strong [ref=e246]: "General enquiries:"
            - text: 📧
            - link "info@transforming.plc.uk" [ref=e247] [cursor=pointer]:
              - /url: mailto:info@transforming.plc.uk
              - strong [ref=e248]: info@transforming.plc.uk
            - text: 📞
            - link "0303 300 3000" [ref=e249] [cursor=pointer]:
              - /url: tel:03033003000
              - strong [ref=e250]: 0303 300 3000
    - contentinfo [ref=e252]:
      - generic [ref=e253]:
        - generic [ref=e254]:
          - generic [ref=e255]:
            - generic [ref=e256]: Who We Are
            - generic [ref=e257]:
              - link "Mission Statement" [ref=e258] [cursor=pointer]:
                - /url: /mission-statement
              - link "Meet The Board" [ref=e259] [cursor=pointer]:
                - /url: /meet-the-board
              - link "Leadership Team" [ref=e260] [cursor=pointer]:
                - /url: /leadership-team
          - generic [ref=e261]:
            - generic [ref=e262]: Careers
            - generic [ref=e263]:
              - link "Why Work at Transforming PLC" [ref=e264] [cursor=pointer]:
                - /url: /why-work-at-transforming-plc
              - link "Vacancies List" [ref=e265] [cursor=pointer]:
                - /url: https://www.indeed.com/cmp/Transforming-Support/about
          - generic [ref=e266]:
            - generic [ref=e267]: Contact Us
            - generic [ref=e268]:
              - link "Contact us" [ref=e269] [cursor=pointer]:
                - /url: /contact-us-page
              - link "Social Media" [ref=e270] [cursor=pointer]:
                - /url: /social-media
              - link "Compliance and Statements" [ref=e271] [cursor=pointer]:
                - /url: /compliance-and-statements
              - link "Privacy" [ref=e272] [cursor=pointer]:
                - /url: /social-media
            - generic [ref=e273]:
              - link "https://www.facebook.com/TRFSupportUK/" [ref=e274] [cursor=pointer]:
                - /url: https://www.facebook.com/TRFSupportUK/
                - img "White Facebook Logo" [ref=e275]
              - link "https://instagram.com/trfsupportuk?igshid=NTc4MTIwNjQ2YQ==" [ref=e276] [cursor=pointer]:
                - /url: https://instagram.com/trfsupportuk?igshid=NTc4MTIwNjQ2YQ==
                - img "White Instagram Logo" [ref=e277]
              - link "https://twitter.com/trfsupportuk?s=21&t=inAChnC0WpuuKMH-BVQQXg" [ref=e278] [cursor=pointer]:
                - /url: https://twitter.com/trfsupportuk?s=21&t=inAChnC0WpuuKMH-BVQQXg
                - img "White Twitter Logo" [ref=e279]
        - generic [ref=e280]:
          - generic [ref=e282]:
            - generic [ref=e283]: Registered Office
            - generic [ref=e284]: New City Court 20 St Thomas Street, London, SE1 9RS
          - paragraph [ref=e286]: © Copyright Transforming PLC 2026
  - alert [ref=e287]
```

# Test source

```ts
  1  | import { test, expect, devices } from '@playwright/test';
  2  | 
  3  | test.use({ ...devices['Pixel 5'] });
  4  | 
  5  | test('Debug Mobile Switcher Action', async ({ page }) => {
  6  |   await page.goto('https://uat.transforming.plc.uk/');
  7  |   
  8  |   // 1. Click the mobile button
  9  |   const mobileSwitchButton = page.locator('button.button_button__dZRSb.button_theme4__nJzSY:has-text("Switch Sites here")');
> 10 |   await mobileSwitchButton.click();
     |                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  11 |   await page.waitForTimeout(2000); // Wait for animations
  12 |   
  13 |   // 2. Dump all visible containers/wrappers
  14 |   const containers = await page.evaluate(() => {
  15 |     const all = document.querySelectorAll('div[data-testid], div[class*="wrapper"], div[class*="container"]');
  16 |     return Array.from(all).filter(el => {
  17 |         const htmlEl = el as HTMLElement;
  18 |         const style = window.getComputedStyle(el);
  19 |         return style.display !== 'none' && style.visibility !== 'hidden' && (htmlEl.innerText || "").length > 0;
  20 |     }).map(el => {
  21 |         const htmlEl = el as HTMLElement;
  22 |         return {
  23 |             tag: el.tagName,
  24 |             testid: el.getAttribute('data-testid'),
  25 |             classes: el.className,
  26 |             textSnippet: (htmlEl.innerText || "").substring(0, 50)
  27 |         };
  28 |     });
  29 |   });
  30 | 
  31 |   console.log('--- Visible Containers After Click ---');
  32 |   console.log(JSON.stringify(containers, null, 2));
  33 | 
  34 |   await page.screenshot({ path: 'test-results/mobile-click-debug.png', fullPage: true });
  35 | });
  36 | 
```