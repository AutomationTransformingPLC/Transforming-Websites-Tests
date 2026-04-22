# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: form-interactions.spec.ts >> Form and Input Interactions >> Locations Search - Filters and Interaction
- Location: tests\form-interactions.spec.ts:16:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button:has-text("Service"), label:has-text("Service")').first()
    - locator resolved to <label for="facilityName" class="locationSearchFilters_label__OjRYB">Service</label>
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
    51 × waiting for element to be visible, enabled and stable
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
      - button "learn more about cookies" [ref=e5] [cursor=pointer]: Privacy Policy
    - generic [ref=e6]:
      - button "deny cookies" [ref=e7] [cursor=pointer]: Dismiss
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
            - button "Transforming Support Specialist supported living and outreach across the UK" [ref=e25] [cursor=pointer]:
              - generic [ref=e28]:
                - generic [ref=e29]: Transforming Support
                - generic [ref=e30]: Specialist supported living and outreach across the UK
            - generic [ref=e32]:
              - generic [ref=e33]: Coming Soon
              - generic [ref=e34]:
                - img "Green Ascend Logo" [ref=e36]
                - generic [ref=e37]:
                  - generic [ref=e38]: Ascend Support
                  - generic [ref=e39]: Person-centred outreach and community support
            - generic [ref=e41]:
              - generic [ref=e42]: Coming Soon
              - generic [ref=e43]:
                - img "Pink Heart Logo" [ref=e45]
                - generic [ref=e46]:
                  - generic [ref=e47]: Nurture Support
                  - generic [ref=e48]: Person-centred residential support
      - generic [ref=e49]:
        - link "Transforming Logo" [ref=e50] [cursor=pointer]:
          - /url: /
          - img "Transforming Logo" [ref=e51]
        - navigation [ref=e52]:
          - generic [ref=e53]:
            - link "Make Referral" [ref=e54] [cursor=pointer]:
              - /url: /referral-form/
              - text: Make Referral
              - img [ref=e55]
            - button "Switch Sites here" [ref=e57] [cursor=pointer]:
              - text: Switch Sites here
              - img [ref=e58]
          - list [ref=e60]:
            - listitem [ref=e61]:
              - button "For Individuals" [ref=e62]:
                - generic [ref=e63]: For Individuals
                - img [ref=e64]
              - generic [ref=e66]:
                - button "Back" [ref=e67] [cursor=pointer]:
                  - img [ref=e69]
                  - generic [ref=e71]: Back
                - generic [ref=e72]:
                  - generic [ref=e73]: For Individuals
                  - navigation [ref=e74]:
                    - link "Who do we support" [ref=e75] [cursor=pointer]:
                      - /url: /who-do-we-support
                    - link "Feedback" [ref=e76] [cursor=pointer]:
                      - /url: /people-we-support-feedback
                - generic [ref=e77]:
                  - generic [ref=e79]:
                    - heading "Find Support" [level=2] [ref=e80]
                    - paragraph [ref=e82]: Search for location availability or our experts by expertise.
                  - generic [ref=e84]:
                    - link "Find Locations" [ref=e85] [cursor=pointer]:
                      - /url: /locations
                    - link "Search Staff" [ref=e86] [cursor=pointer]:
                      - /url: /staff/
            - listitem [ref=e88]:
              - button "For Families" [ref=e89]:
                - generic [ref=e90]: For Families
                - img [ref=e91]
              - generic [ref=e93]:
                - button "Back" [ref=e94] [cursor=pointer]:
                  - img [ref=e96]
                  - generic [ref=e98]: Back
                - generic [ref=e99]:
                  - generic [ref=e100]: For Families
                  - navigation [ref=e101]:
                    - link "How do we support" [ref=e102] [cursor=pointer]:
                      - /url: /how-do-we-support-families
                    - link "Who do we support" [ref=e103] [cursor=pointer]:
                      - /url: /who-do-we-support
                    - link "Our locations" [ref=e104] [cursor=pointer]:
                      - /url: /locations
                    - link "Feedback" [ref=e105] [cursor=pointer]:
                      - /url: /family-feedback
                - generic [ref=e106]:
                  - generic [ref=e108]:
                    - heading "Find Support" [level=2] [ref=e109]
                    - paragraph [ref=e111]: Search for location availability or our experts by expertise.
                  - generic [ref=e113]:
                    - link "Find Locations" [ref=e114] [cursor=pointer]:
                      - /url: /locations
                    - link "Search Staff" [ref=e115] [cursor=pointer]:
                      - /url: /staff/
            - listitem [ref=e117]:
              - button "For Professionals" [ref=e118]:
                - generic [ref=e119]: For Professionals
                - img [ref=e120]
              - generic [ref=e122]:
                - button "Back" [ref=e123] [cursor=pointer]:
                  - img [ref=e125]
                  - generic [ref=e127]: Back
                - generic [ref=e128]:
                  - generic [ref=e129]: For Professionals
                  - navigation [ref=e130]:
                    - link "How do we support" [ref=e131] [cursor=pointer]:
                      - /url: /how-do-we-support-professionals
                    - link "Support tiers" [ref=e132] [cursor=pointer]:
                      - /url: /support-tiers
                    - link "Transitioning to supported living" [ref=e133] [cursor=pointer]:
                      - /url: /transitioning-to-supported-living
                    - link "Referral process" [ref=e134] [cursor=pointer]:
                      - /url: /referral-process
                    - link "Tenancy" [ref=e135] [cursor=pointer]:
                      - /url: /tenancy
                    - link "Quality assurance" [ref=e136] [cursor=pointer]:
                      - /url: /quality-assurance
                    - link "Safeguarding" [ref=e137] [cursor=pointer]:
                      - /url: /safeguarding
                    - link "Our locations" [ref=e138] [cursor=pointer]:
                      - /url: /locations
                    - link "Feedback" [ref=e139] [cursor=pointer]:
                      - /url: /professionals-feedback
                - generic [ref=e140]:
                  - generic [ref=e142]:
                    - heading "Find Support" [level=2] [ref=e143]
                    - paragraph [ref=e145]: Search for location availability or our experts by expertise.
                  - generic [ref=e147]:
                    - link "Find Locations" [ref=e148] [cursor=pointer]:
                      - /url: /locations
                    - link "Search Staff" [ref=e149] [cursor=pointer]:
                      - /url: /staff/
            - listitem [ref=e151]:
              - button "Careers" [ref=e152]:
                - generic [ref=e153]: Careers
                - img [ref=e154]
              - generic [ref=e156]:
                - button "Back" [ref=e157] [cursor=pointer]:
                  - img [ref=e159]
                  - generic [ref=e161]: Back
                - generic [ref=e162]:
                  - generic [ref=e163]: Careers
                  - navigation [ref=e164]:
                    - link "Transforming Support Careers" [ref=e165] [cursor=pointer]:
                      - /url: https://www.indeed.com/cmp/Transforming-Support/about
                - generic [ref=e166]:
                  - generic [ref=e168]:
                    - heading "Find Support" [level=2] [ref=e169]
                    - paragraph [ref=e171]: Search for location availability or our experts by expertise.
                  - generic [ref=e173]:
                    - link "Find Locations" [ref=e174] [cursor=pointer]:
                      - /url: /locations
                    - link "Search Staff" [ref=e175] [cursor=pointer]:
                      - /url: /staff/
            - listitem [ref=e177]:
              - button "Locations" [ref=e178]:
                - generic [ref=e179]: Locations
                - img [ref=e180]
              - generic [ref=e182]:
                - button "Back" [ref=e183] [cursor=pointer]:
                  - img [ref=e185]
                  - generic [ref=e187]: Back
                - generic [ref=e188]:
                  - generic [ref=e189]: Find Locations
                  - navigation [ref=e190]:
                    - link "Locations" [ref=e191] [cursor=pointer]:
                      - /url: /locations/?services=&region=
        - link "Call Us 0800 048 5792" [ref=e193] [cursor=pointer]:
          - /url: tel:0800 048 5792
          - img [ref=e195]
          - generic [ref=e197]: Call Us
          - generic [ref=e198]: 0800 048 5792
        - button "Menu" [ref=e199] [cursor=pointer]:
          - img [ref=e201]
          - generic [ref=e203]: Menu
    - main [ref=e204]:
      - generic [ref=e207]:
        - generic [ref=e208]:
          - generic [ref=e209]:
            - generic [ref=e210]: Filters
            - generic [ref=e211] [cursor=pointer]: Clear All
          - generic [ref=e212]:
            - generic [ref=e213]:
              - generic [ref=e215]:
                - generic [ref=e216]: Region
                - generic [ref=e217]:
                  - combobox "Region" [ref=e218] [cursor=pointer]:
                    - option "All Regions"
                    - option "Greater London" [selected]
                    - option "Midlands"
                    - option "North West"
                    - option "South East"
                  - generic:
                    - img
              - generic [ref=e220]:
                - generic [ref=e221]: County
                - generic [ref=e222]:
                  - combobox "County" [ref=e223] [cursor=pointer]:
                    - option "All Counties" [selected]
                    - option "Birmingham"
                    - option "Greater Manchester"
                    - option "Liverpool"
                    - option "Peterborough"
                    - option "South London"
                    - option "Surrey"
                    - option "Sussex"
                  - generic:
                    - img
            - generic [ref=e226]:
              - generic [ref=e227]: Service
              - generic [ref=e228]:
                - combobox "Service" [ref=e229] [cursor=pointer]:
                  - option "All Services" [selected]
                  - 'option "Birmingham Office: Birmingham Business Park"'
                  - option "Chipstead Court"
                  - option "Cross Court"
                  - option "Hampton Woods"
                  - option "Harvest Rise"
                  - option "Horsham Road"
                  - option "Lessingham Road"
                  - 'option "London Office: New City Court"'
                  - 'option "Manchester Office: John Dalton Street"'
                  - option "Prinsted"
                  - option "Safari"
                  - option "St Julian's Farm Road"
                  - option "Starling Close"
                  - option "Temple Road"
                - generic:
                  - img
            - generic [ref=e231]:
              - text: Services
              - generic [ref=e232]:
                - generic [ref=e233]:
                  - generic:
                    - img
                  - checkbox "Any Service" [checked]
                  - generic [ref=e234] [cursor=pointer]: Any Service
                - generic [ref=e235]:
                  - generic:
                    - img
                  - checkbox "Acquired Brain Injury"
                  - generic [ref=e236] [cursor=pointer]: Acquired Brain Injury
                - generic [ref=e237]:
                  - generic:
                    - img
                  - checkbox "Autism"
                  - generic [ref=e238] [cursor=pointer]: Autism
                - generic [ref=e239]:
                  - generic:
                    - img
                  - checkbox "Community Outreach"
                  - generic [ref=e240] [cursor=pointer]: Community Outreach
                - generic [ref=e241]:
                  - generic:
                    - img
                  - checkbox "Complex Care"
                  - generic [ref=e242] [cursor=pointer]: Complex Care
                - generic [ref=e243]:
                  - generic:
                    - img
                  - checkbox "Learning Disabilities"
                  - generic [ref=e244] [cursor=pointer]: Learning Disabilities
                - generic [ref=e245]:
                  - generic:
                    - img
                  - checkbox "Mental Health"
                  - generic [ref=e246] [cursor=pointer]: Mental Health
                - generic [ref=e247]:
                  - generic:
                    - img
                  - checkbox "Neurodiversity"
                  - generic [ref=e248] [cursor=pointer]: Neurodiversity
                - generic [ref=e249]:
                  - generic:
                    - img
                  - checkbox "Physical Disabilities"
                  - generic [ref=e250] [cursor=pointer]: Physical Disabilities
                - generic [ref=e251]:
                  - generic:
                    - img
                  - checkbox "Respite Care"
                  - generic [ref=e252] [cursor=pointer]: Respite Care
                - generic [ref=e253]:
                  - generic:
                    - img
                  - checkbox "Specialist Services"
                  - generic [ref=e254] [cursor=pointer]: Specialist Services
                - generic [ref=e255]:
                  - generic:
                    - img
                  - checkbox "Specialist Services - Forensic"
                  - generic [ref=e256] [cursor=pointer]: Specialist Services - Forensic
            - generic [ref=e258]:
              - text: Availability
              - generic [ref=e259]:
                - generic [ref=e260]:
                  - generic:
                    - img
                  - radio "Show All" [checked]
                  - generic [ref=e261] [cursor=pointer]: Show All
                - generic [ref=e262]:
                  - generic:
                    - img
                  - radio "Only locations with availability"
                  - generic [ref=e263] [cursor=pointer]: Only locations with availability
            - generic [ref=e265]:
              - text: For NHS/Professionals
              - generic [ref=e266]:
                - generic [ref=e267]: If you are a professional user you can choose to view our office locations as well as patient facilities.
                - generic [ref=e268]:
                  - generic:
                    - img
                  - checkbox "Show office locations"
                  - generic [ref=e269] [cursor=pointer]: Show office locations
          - button "Done" [ref=e271] [cursor=pointer]
        - generic [ref=e272]:
          - generic [ref=e273]:
            - generic [ref=e274] [cursor=pointer]:
              - generic [ref=e275]:
                - img [ref=e277]
                - generic [ref=e279]: Filters
              - generic [ref=e280]: 1 Applied
            - generic [ref=e281] [cursor=pointer]:
              - generic [ref=e282]:
                - img [ref=e284]
                - generic [ref=e286]: Sort by
              - generic [ref=e287]: Alphabetical (A-Z)
          - generic [ref=e289]: 3 results found
        - generic [ref=e290]:
          - button "Show on Map" [ref=e292] [cursor=pointer]:
            - img [ref=e293]
            - text: Show on Map
          - generic [ref=e295]:
            - img "Purple Clock Icon" [ref=e297]
            - generic [ref=e298]:
              - generic [ref=e299]: "This is an important message:"
              - paragraph [ref=e301]: Our services are located across the United Kingdom, with personalised support that meets our clients needs. You can see a list below of our locations nearest to you.
          - generic [ref=e303]:
            - generic [ref=e307]:
              - generic [ref=e308]:
                - generic [ref=e309]: "London Office: New City Court"
                - generic [ref=e310]:
                  - img [ref=e311]
                  - text: South London, Greater London
                  - button "View on map" [ref=e315]:
                    - generic [ref=e316] [cursor=pointer]: View on map
              - generic [ref=e317]: Our London offices are located in London Bridge, near Borough Market in Southwark Council.
              - generic [ref=e318]:
                - generic [ref=e319]:
                  - generic [ref=e320]: "Availability:"
                  - generic [ref=e322] [cursor=pointer]:
                    - img [ref=e323]
                    - text: Places Available
                - link "View Details" [ref=e325] [cursor=pointer]:
                  - /url: /london-office-new-city-court/
                  - text: View Details
                  - img [ref=e326]
            - generic [ref=e331]:
              - generic [ref=e332]:
                - generic [ref=e333]: St Julian's Farm Road
                - generic [ref=e334]:
                  - img [ref=e335]
                  - text: South London, Greater London
                  - button "View on map" [ref=e339]:
                    - generic [ref=e340] [cursor=pointer]: View on map
              - generic [ref=e341]: St Julian’s Farm Road is located in South London, providing specialist service in the Borough of Lambeth. Focusing on those with a Learning Disability or Autism, this service offers individual apartments, shared communal areas, and a large garden close to major shops and transport hubs. It is set within a quiet residential area where everyone knows each other.
              - generic [ref=e342]:
                - generic [ref=e343]:
                  - generic [ref=e344]: "Availability:"
                  - generic [ref=e346] [cursor=pointer]:
                    - img [ref=e347]
                    - text: Waiting List
                - link "View Details" [ref=e349] [cursor=pointer]:
                  - /url: /st-julians-farm-road/
                  - text: View Details
                  - img [ref=e350]
            - generic [ref=e355]:
              - generic [ref=e356]:
                - generic [ref=e357]: Temple Road
                - generic [ref=e358]:
                  - img [ref=e359]
                  - text: South London, Greater London
                  - button "View on map" [ref=e363]:
                    - generic [ref=e364] [cursor=pointer]: View on map
              - generic [ref=e365]: A sister service to St Julian's, Temple Road offers self-contained studio apartments supporting those with Learning Disabilities and Autism to live as independently as possible, access the community and make decisions through active support and encouragement. A large rear garden and easy access to the amenities within the Borough of Croydon supplement spacious community areas.
              - generic [ref=e366]:
                - generic [ref=e367]:
                  - generic [ref=e368]: "Availability:"
                  - generic [ref=e370] [cursor=pointer]:
                    - img [ref=e371]
                    - text: Waiting List
                - link "View Details" [ref=e373] [cursor=pointer]:
                  - /url: /temple-road/
                  - text: View Details
                  - img [ref=e374]
    - contentinfo [ref=e376]:
      - generic [ref=e377]:
        - generic [ref=e378]:
          - generic [ref=e379]:
            - generic [ref=e380]: Families
            - generic [ref=e381]:
              - link "How do we support" [ref=e382] [cursor=pointer]:
                - /url: /how-do-we-support-families
              - link "Who do we support" [ref=e383] [cursor=pointer]:
                - /url: /who-do-we-support
              - link "Our locations" [ref=e384] [cursor=pointer]:
                - /url: /locations
          - generic [ref=e385]:
            - generic [ref=e386]: Professionals
            - generic [ref=e387]:
              - link "How do we support" [ref=e388] [cursor=pointer]:
                - /url: /how-do-we-support-professionals
              - link "Support tiers" [ref=e389] [cursor=pointer]:
                - /url: /support-tiers
              - link "Locations" [ref=e390] [cursor=pointer]:
                - /url: /locations
          - generic [ref=e391]:
            - generic [ref=e392]: The People We Support
            - generic [ref=e393]:
              - link "Who do we support" [ref=e394] [cursor=pointer]:
                - /url: /who-do-we-support
              - link "Useful Information" [ref=e395] [cursor=pointer]:
                - /url: /useful-information
          - generic [ref=e396]:
            - generic [ref=e397]: Get in touch
            - generic [ref=e398]:
              - link "Contact us" [ref=e399] [cursor=pointer]:
                - /url: https://www.transformingsupport.uk/referral-form
              - link "Compliance and Statements" [ref=e400] [cursor=pointer]:
                - /url: /compliance-and-statements
              - link "Privacy Policy" [ref=e401] [cursor=pointer]:
                - /url: /privacy-policy
              - link "SecureDesk" [ref=e402] [cursor=pointer]:
                - /url: https://windows.cloud.microsoft/#
            - generic [ref=e403]:
              - link "https://www.facebook.com/TRFSupportUK/" [ref=e404] [cursor=pointer]:
                - /url: https://www.facebook.com/TRFSupportUK/
                - img "White Facebook Logo" [ref=e405]
              - link "https://instagram.com/trfsupportuk?igshid=NTc4MTIwNjQ2YQ==" [ref=e406] [cursor=pointer]:
                - /url: https://instagram.com/trfsupportuk?igshid=NTc4MTIwNjQ2YQ==
                - img "White Instagram Logo" [ref=e407]
              - link "https://twitter.com/trfsupportuk?s=21&t=inAChnC0WpuuKMH-BVQQXg" [ref=e408] [cursor=pointer]:
                - /url: https://twitter.com/trfsupportuk?s=21&t=inAChnC0WpuuKMH-BVQQXg
        - generic [ref=e409]:
          - img "Transforming Logo White Text" [ref=e411]
          - generic [ref=e412]:
            - generic [ref=e413]: Registered Office
            - generic [ref=e414]: New City Court 20 St Thomas Street, London, SE1 9RS
          - paragraph [ref=e416]: © Copyright Transforming PLC 2026
  - alert [ref=e417]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Form and Input Interactions', () => {
  4  | 
  5  |   test('Referral Form - Field Interaction', async ({ page }) => {
  6  |     await page.goto('https://www.transformingsupport.uk/referral-form/');
  7  |     await page.waitForLoadState('networkidle');
  8  |     const textInputs = page.locator('input[type="text"], input[type="email"], textarea');
  9  |     const count = await textInputs.count();
  10 |     expect(count).toBeGreaterThan(0);
  11 |     for (let i = 0; i < Math.min(count, 3); i++) {
  12 |         await textInputs.nth(i).fill(`Test Input ${i}`);
  13 |     }
  14 |   });
  15 | 
  16 |   test('Locations Search - Filters and Interaction', async ({ page }) => {
  17 |     await page.goto('https://www.transformingsupport.uk/locations/');
  18 |     await page.waitForLoadState('networkidle');
  19 | 
  20 |     // Region Select
  21 |     const regionSelect = page.locator('#region');
  22 |     await expect(regionSelect).toBeVisible(); // Should be visible on desktop
  23 |     await regionSelect.selectOption({ index: 1 });
  24 |     
  25 |     // Check if services are hidden inside a toggle/button
  26 |     // Many modern sites have a "Services" or "Filters" button
  27 |     const servicesButton = page.locator('button:has-text("Service"), label:has-text("Service")').first();
  28 |     if (await servicesButton.isVisible()) {
> 29 |         await servicesButton.click();
     |                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  30 |     }
  31 | 
  32 |     // Instead of checking the hidden input, click the label
  33 |     const autismLabel = page.locator('label[for="services-1"]');
  34 |     if (await autismLabel.isVisible()) {
  35 |         await autismLabel.click();
  36 |     } else {
  37 |         // Fallback to direct check if label not found/visible
  38 |         await page.locator('#services-1').check({ force: true });
  39 |     }
  40 |     
  41 |     // Verify it's checked
  42 |     expect(await page.locator('#services-1').isChecked()).toBeTruthy();
  43 |   });
  44 | 
  45 |   test('Staff Search - Filters and Interaction', async ({ page }) => {
  46 |     await page.goto('https://www.transformingsupport.uk/staff/');
  47 |     await page.waitForLoadState('networkidle');
  48 | 
  49 |     // Staff Name Select
  50 |     const staffNameSelect = page.locator('#staffName');
  51 |     await expect(staffNameSelect).toBeVisible();
  52 |     
  53 |     // Toggle services if needed
  54 |     const expertiseButton = page.locator('button:has-text("Expertise"), label:has-text("Service")').first();
  55 |     if (await expertiseButton.isVisible()) {
  56 |         await expertiseButton.click();
  57 |     }
  58 | 
  59 |     const mentalHealthLabel = page.locator('label[for="services-6"]');
  60 |     if (await mentalHealthLabel.isVisible()) {
  61 |         await mentalHealthLabel.click();
  62 |     } else {
  63 |         await page.locator('#services-6').check({ force: true });
  64 |     }
  65 |     
  66 |     expect(await page.locator('#services-6').isChecked()).toBeTruthy();
  67 |   });
  68 | 
  69 | });
  70 | 
```