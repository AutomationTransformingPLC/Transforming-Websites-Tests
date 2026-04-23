# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mobile-menu.spec.ts >> Mobile Burger Menu Audit >> Audit Support Mobile Menu Links
- Location: tests\mobile-menu.spec.ts:34:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://uat.transformingsupport.uk/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - link "Skip To Content" [ref=e3] [cursor=pointer]:
    - /url: "#main"
  - banner [ref=e4]:
    - generic [ref=e5]:
      - button "close" [ref=e6]:
        - img
      - button "Hide SitesSwitch Sites" [ref=e8]:
        - img [ref=e10]
        - generic [ref=e12]: Hide SitesSwitch Sites
        - img [ref=e14]
        - img [ref=e17]
      - generic [ref=e19]:
        - button "Back" [ref=e20]:
          - img [ref=e22]
          - text: Back
        - generic [ref=e24]:
          - generic [ref=e25]: Switch Sites
          - generic [ref=e26]: Our brands offer different levels of support
        - generic [ref=e27]:
          - link "Green Ascend Logo Ascend SupportPerson-centred outreach and community support" [ref=e29] [cursor=pointer]:
            - /url: https://transforming.plc.uk/ascend-support
            - generic [ref=e30]:
              - img "Green Ascend Logo" [ref=e31]
              - generic [ref=e32]: Ascend SupportPerson-centred outreach and community support
          - generic [ref=e34]:
            - text: You are on this site
            - generic [ref=e35]:
              - img "Purple Transforming Healthcare Logo" [ref=e36]
              - generic [ref=e37]: Transforming SupportPerson-centred supported living services
          - generic [ref=e39]:
            - text: Coming soon
            - generic [ref=e40]:
              - img "Pink Heart Logo" [ref=e41]
              - generic [ref=e42]: Nurture SupportPerson-centred residential support
    - generic [ref=e43]:
      - link "Transforming Logo":
        - /url: /
        - img "Transforming Logo" [ref=e44] [cursor=pointer]
      - navigation [ref=e45]:
        - generic [ref=e46]:
          - link "Make Referral" [ref=e47] [cursor=pointer]:
            - /url: /referral-form/
            - text: Make Referral
            - img [ref=e48]
          - button "Switch Sites here" [ref=e50]:
            - text: Switch Sites here
            - img [ref=e51]
        - list [ref=e53]:
          - listitem [ref=e54]:
            - button "For Individuals" [ref=e55]:
              - text: For Individuals
              - img [ref=e56]
            - generic [ref=e59]:
              - button "Back" [ref=e60]:
                - img [ref=e62]
                - text: Back
              - generic [ref=e64]:
                - generic [ref=e65]: For Individuals
                - navigation [ref=e66]:
                  - link "Who do we support" [ref=e67] [cursor=pointer]:
                    - /url: /who-do-we-support
                  - link "Success Stories" [ref=e68] [cursor=pointer]:
                    - /url: /case-studies/success-stories/
                  - link "Feedback" [ref=e69] [cursor=pointer]:
                    - /url: /people-we-support-feedback
              - generic [ref=e70]:
                - generic [ref=e72]:
                  - heading "Find Support" [level=2] [ref=e73]
                  - paragraph [ref=e75]: Search for location availability or our experts by expertise.
                - generic [ref=e77]:
                  - link "Find Locations" [ref=e78] [cursor=pointer]:
                    - /url: /locations
                  - link "Search Staff" [ref=e79] [cursor=pointer]:
                    - /url: /staff/
          - listitem [ref=e81]:
            - button "For Families" [ref=e82]:
              - text: For Families
              - img [ref=e83]
            - generic [ref=e86]:
              - button "Back" [ref=e87]:
                - img [ref=e89]
                - text: Back
              - generic [ref=e91]:
                - generic [ref=e92]: For Families
                - navigation [ref=e93]:
                  - link "How do we support" [ref=e94] [cursor=pointer]:
                    - /url: /how-do-we-support-families
                  - link "Who do we support" [ref=e95] [cursor=pointer]:
                    - /url: /who-do-we-support
                  - link "Our locations" [ref=e96] [cursor=pointer]:
                    - /url: /locations
                  - link "Feedback" [ref=e97] [cursor=pointer]:
                    - /url: /family-feedback
              - generic [ref=e98]:
                - generic [ref=e100]:
                  - heading "Find Support" [level=2] [ref=e101]
                  - paragraph [ref=e103]: Search for location availability or our experts by expertise.
                - generic [ref=e105]:
                  - link "Find Locations" [ref=e106] [cursor=pointer]:
                    - /url: /locations
                  - link "Search Staff" [ref=e107] [cursor=pointer]:
                    - /url: /staff/
          - listitem [ref=e109]:
            - button "For Professionals" [ref=e110]:
              - text: For Professionals
              - img [ref=e111]
            - generic [ref=e114]:
              - button "Back" [ref=e115]:
                - img [ref=e117]
                - text: Back
              - generic [ref=e119]:
                - generic [ref=e120]: For Professionals
                - navigation [ref=e121]:
                  - link "How do we support" [ref=e122] [cursor=pointer]:
                    - /url: /how-do-we-support-professionals
                  - link "Support tiers" [ref=e123] [cursor=pointer]:
                    - /url: /support-tiers
                  - link "Transitioning to supported living" [ref=e124] [cursor=pointer]:
                    - /url: /transitioning-to-supported-living
                  - link "Referral process" [ref=e125] [cursor=pointer]:
                    - /url: /referral-process
                  - link "Tenancy" [ref=e126] [cursor=pointer]:
                    - /url: /tenancy
                  - link "Quality assurance" [ref=e127] [cursor=pointer]:
                    - /url: /quality-assurance
                  - link "Safeguarding" [ref=e128] [cursor=pointer]:
                    - /url: /safeguarding
                  - link "Our locations" [ref=e129] [cursor=pointer]:
                    - /url: /locations
                  - link "Feedback" [ref=e130] [cursor=pointer]:
                    - /url: /professionals-feedback
              - generic [ref=e131]:
                - generic [ref=e133]:
                  - heading "Find Support" [level=2] [ref=e134]
                  - paragraph [ref=e136]: Search for location availability or our experts by expertise.
                - generic [ref=e138]:
                  - link "Find Locations" [ref=e139] [cursor=pointer]:
                    - /url: /locations
                  - link "Search Staff" [ref=e140] [cursor=pointer]:
                    - /url: /staff/
          - listitem [ref=e142]:
            - button "Careers" [ref=e143]:
              - text: Careers
              - img [ref=e144]
            - generic [ref=e147]:
              - button "Back" [ref=e148]:
                - img [ref=e150]
                - text: Back
              - generic [ref=e152]:
                - generic [ref=e153]: Careers
                - navigation [ref=e154]:
                  - link "Transforming Support Careers" [ref=e155] [cursor=pointer]:
                    - /url: https://www.indeed.com/cmp/Transforming-Support/about
              - generic [ref=e156]:
                - generic [ref=e158]:
                  - heading "Find Support" [level=2] [ref=e159]
                  - paragraph [ref=e161]: Search for location availability or our experts by expertise.
                - generic [ref=e163]:
                  - link "Find Locations" [ref=e164] [cursor=pointer]:
                    - /url: /locations
                  - link "Search Staff" [ref=e165] [cursor=pointer]:
                    - /url: /staff/
          - listitem [ref=e167]:
            - button "Locations" [ref=e168]:
              - text: Locations
              - img [ref=e169]
            - generic [ref=e172]:
              - button "Back" [ref=e173]:
                - img [ref=e175]
                - text: Back
              - generic [ref=e177]:
                - generic [ref=e178]: Find Locations
                - navigation [ref=e179]:
                  - link "Locations" [ref=e180] [cursor=pointer]:
                    - /url: /locations/?services=&region=
      - link "Call Us0800 048 5792" [ref=e181] [cursor=pointer]:
        - /url: tel:0800 048 5792
        - img [ref=e183]
        - text: Call Us0800 048 5792
      - button "Menu" [ref=e185]:
        - generic [ref=e186]:
          - img [ref=e187]
          - img [ref=e189]
        - text: Menu
      - link "Make Referral" [ref=e191] [cursor=pointer]:
        - /url: /referral-form/
        - text: Make Referral
        - img [ref=e192]
  - main [ref=e194]:
    - generic [ref=e198]:
      - generic [ref=e199]:
        - heading "Personalised support for individuals, built around you." [level=1] [ref=e200]:
          - text: Personalised support for individuals,
          - generic [ref=e201]:
            - text: built around you.
            - img [ref=e203]
        - paragraph [ref=e206]: Transforming Support offers personalised supported living and community support services for people with learning disabilities, autism, or other complex needs across the UK. Our focus is on providing independence and quality of life with specialised, person-centred support.
      - link "Make Referral" [ref=e208] [cursor=pointer]:
        - /url: /referral-form/
    - generic [ref=e212]:
      - generic [ref=e213]: Find support in your area
      - generic [ref=e214]:
        - text: "Search for:"
        - generic [ref=e215]:
          - radio "Locations" [checked] [ref=e216]
          - text: Locations
        - generic [ref=e217]:
          - radio "Staff" [ref=e218]
          - text: Staff
      - generic [ref=e219]:
        - generic [ref=e220]:
          - generic [ref=e221]:
            - generic [ref=e222]:
              - text: Services
              - textbox "All Services" [ref=e223]
            - img [ref=e225]
          - generic [ref=e228]:
            - img [ref=e230]
            - checkbox [checked] [ref=e232]
            - generic [ref=e233]: All Services
        - generic [ref=e234]:
          - generic [ref=e235]:
            - generic [ref=e236]:
              - text: Region
              - textbox "All Region" [ref=e237]
            - img [ref=e239]
          - generic [ref=e243]: All Region
        - button "Search" [ref=e244]:
          - text: Search
          - img [ref=e245]
    - generic [ref=e250]:
      - heading "We support people with learning disabilities, autism, and/or complex needs, through our core services which includes outreach." [level=2] [ref=e252]
      - generic [ref=e253]:
        - group [ref=e254]:
          - generic "What is supported living?" [ref=e255]:
            - text: What is supported living?
            - img [ref=e257]
        - group [ref=e259]:
          - generic "How do we support people?" [ref=e260]:
            - text: How do we support people?
            - img [ref=e262]
        - group [ref=e264]:
          - generic "How to make a referral" [ref=e265]:
            - text: How to make a referral
            - img [ref=e267]
        - group [ref=e269]:
          - generic "What is outreach support?" [ref=e270]:
            - text: What is outreach support?
            - img [ref=e272]
```

# Test source

```ts
  1  | import { test, expect, devices } from '@playwright/test';
  2  | 
  3  | test.use({ ...devices['Pixel 5'] });
  4  | 
  5  | test.describe('Mobile Burger Menu Audit', () => {
  6  | 
  7  |   test('Audit PLC Mobile Menu Links', async ({ page }) => {
  8  |     await page.goto('https://uat.transforming.plc.uk/');
  9  |     
  10 |     // Open burger menu (assuming common class or text)
  11 |     const burger = page.locator('button:has-text("Menu"), .burger-menu, .navbar-toggler').first();
  12 |     await burger.click();
  13 |     await page.waitForTimeout(1000);
  14 | 
  15 |     const menuLinks = page.locator('nav a, .mobile-menu a');
  16 |     const count = await menuLinks.count();
  17 |     console.log(`Found ${count} links in PLC mobile menu.`);
  18 | 
  19 |     for (let i = 0; i < count; i++) {
  20 |         const link = menuLinks.nth(i);
  21 |         const text = await link.innerText();
  22 |         const href = await link.getAttribute('href');
  23 |         console.log(`Menu Item ${i}: "${text.trim()}" -> href: ${href}`);
  24 |         
  25 |         if (href && (href.endsWith('/home/') || href.endsWith('/home'))) {
  26 |             console.log(`🚨 ISSUE FOUND in PLC Menu: "${text.trim()}" links to /home/`);
  27 |         }
  28 |         if (href === null || href === '') {
  29 |             console.log(`🚨 ISSUE FOUND in PLC Menu: "${text.trim()}" has null/empty href`);
  30 |         }
  31 |     }
  32 |   });
  33 | 
  34 |   test('Audit Support Mobile Menu Links', async ({ page }) => {
> 35 |     await page.goto('https://uat.transformingsupport.uk/');
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  36 |     
  37 |     const burger = page.locator('button:has-text("Menu"), .burger-menu, .navbar-toggler').first();
  38 |     await burger.click();
  39 |     await page.waitForTimeout(1000);
  40 | 
  41 |     const menuLinks = page.locator('nav a, .mobile-menu a');
  42 |     const count = await menuLinks.count();
  43 |     console.log(`Found ${count} links in Support mobile menu.`);
  44 | 
  45 |     for (let i = 0; i < count; i++) {
  46 |         const link = menuLinks.nth(i);
  47 |         const text = await link.innerText();
  48 |         const href = await link.getAttribute('href');
  49 |         console.log(`Menu Item ${i}: "${text.trim()}" -> href: ${href}`);
  50 |     }
  51 |   });
  52 | });
  53 | 
```