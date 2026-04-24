# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: form-interactions.spec.ts >> Form and Input Interactions >> Staff Search - Filters and Interaction
- Location: tests\form-interactions.spec.ts:45:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button:has-text("Expertise"), label:has-text("Service")').first()
    - locator resolved to <label class="locationSearchFilters_label__OjRYB">Services</label>
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
    38 × waiting for element to be visible, enabled and stable
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
        - link "Transforming Logo" [ref=e50]:
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
                    - link "Who do we support" [ref=e75]:
                      - /url: /who-do-we-support
                    - link "Feedback" [ref=e76]:
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
                    - link "How do we support" [ref=e102]:
                      - /url: /how-do-we-support-families
                    - link "Who do we support" [ref=e103]:
                      - /url: /who-do-we-support
                    - link "Our locations" [ref=e104]:
                      - /url: /locations
                    - link "Feedback" [ref=e105]:
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
                    - link "How do we support" [ref=e131]:
                      - /url: /how-do-we-support-professionals
                    - link "Support tiers" [ref=e132]:
                      - /url: /support-tiers
                    - link "Transitioning to supported living" [ref=e133]:
                      - /url: /transitioning-to-supported-living
                    - link "Referral process" [ref=e134]:
                      - /url: /referral-process
                    - link "Tenancy" [ref=e135]:
                      - /url: /tenancy
                    - link "Quality assurance" [ref=e136]:
                      - /url: /quality-assurance
                    - link "Safeguarding" [ref=e137]:
                      - /url: /safeguarding
                    - link "Our locations" [ref=e138]:
                      - /url: /locations
                    - link "Feedback" [ref=e139]:
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
                    - link "Transforming Support Careers" [ref=e165]:
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
                    - link "Locations" [ref=e191]:
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
                    - option "All Regions" [selected]
                    - option "Greater London"
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
                    - option "South London"
                    - option "Surrey"
                    - option "Sussex"
                  - generic:
                    - img
            - generic [ref=e226]:
              - generic [ref=e227]: Staff Name
              - generic [ref=e228]:
                - combobox "Staff Name" [ref=e229] [cursor=pointer]:
                  - option "Please Select" [selected]
                  - option "Aisha Ajia"
                  - option "Andrea Richards"
                  - option "Beata Kozlowska"
                  - option "Caroline Theodorou"
                  - option "Charlotte Holmes"
                  - option "Damilola Olanisimi"
                  - option "Denise King"
                  - option "Francis Chakku"
                  - option "Joshua Abolarin"
                  - option "Kersti Lootus"
                  - option "Marcus Van-Hagen"
                  - option "Natalie Carroll"
                  - option "Natalie Smith"
                  - option "Sabina Quansah"
                  - option "Sally Price"
                  - option "Skye Olyvia"
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
                  - checkbox "Management Team"
                  - generic [ref=e246] [cursor=pointer]: Management Team
                - generic [ref=e247]:
                  - generic:
                    - img
                  - checkbox "Mental Health"
                  - generic [ref=e248] [cursor=pointer]: Mental Health
                - generic [ref=e249]:
                  - generic:
                    - img
                  - checkbox "Neurodiversity"
                  - generic [ref=e250] [cursor=pointer]: Neurodiversity
                - generic [ref=e251]:
                  - generic:
                    - img
                  - checkbox "Physical Disabilities"
                  - generic [ref=e252] [cursor=pointer]: Physical Disabilities
                - generic [ref=e253]:
                  - generic:
                    - img
                  - checkbox "Respite Care"
                  - generic [ref=e254] [cursor=pointer]: Respite Care
                - generic [ref=e255]:
                  - generic:
                    - img
                  - checkbox "Specialist Services"
                  - generic [ref=e256] [cursor=pointer]: Specialist Services
                - generic [ref=e257]:
                  - generic:
                    - img
                  - checkbox "Specialist Services - Forensic"
                  - generic [ref=e258] [cursor=pointer]: Specialist Services - Forensic
          - button "Done" [ref=e260] [cursor=pointer]
        - generic [ref=e261]:
          - generic [ref=e262]:
            - generic [ref=e263] [cursor=pointer]:
              - generic [ref=e264]:
                - img [ref=e266]
                - generic [ref=e268]: Filters
              - generic [ref=e269]: 0 Applied
            - generic [ref=e270] [cursor=pointer]:
              - generic [ref=e271]:
                - img [ref=e273]
                - generic [ref=e275]: Sort by
              - generic [ref=e276]: Alphabetical (A-Z)
          - generic [ref=e278]: 16 results found
        - generic [ref=e280]:
          - generic [ref=e281]:
            - generic [ref=e282]:
              - link "Aisha Ajia" [ref=e283] [cursor=pointer]:
                - /url: /aisha-ajia/
                - generic [ref=e284]: Aisha Ajia
              - generic [ref=e286]:
                - generic [ref=e287]: Aisha Ajia
                - generic [ref=e289]: Aisha Ajia is a registered manager for St Julian’s Farm Road, Temple Road and Ealing at Transforming Support South London.
                - generic [ref=e290] [cursor=pointer]:
                  - text: View Details
                  - img [ref=e291]
            - generic [ref=e293]:
              - link "Andrea Richards" [ref=e294] [cursor=pointer]:
                - /url: /andrea-richards/
                - generic [ref=e295]: Andrea Richards
              - generic [ref=e297]:
                - generic [ref=e298]: Andrea Richards
                - generic [ref=e300]: Andrea Richards is the Director of New Services in Transforming Support.
                - generic [ref=e301] [cursor=pointer]:
                  - text: View Details
                  - img [ref=e302]
            - generic [ref=e304]:
              - link "Beata Kozlowka" [ref=e305] [cursor=pointer]:
                - /url: /beata-kozlowska/
                - generic [ref=e306]: Beata Kozlowka
              - generic [ref=e308]:
                - generic [ref=e309]: Beata Kozlowka
                - generic [ref=e311]: Beata Kozlowka is a quality and assessment manager working with all locations within Transforming Support.
                - generic [ref=e312] [cursor=pointer]:
                  - text: View Details
                  - img [ref=e313]
            - generic [ref=e315]:
              - link "Caroline Theodorou" [ref=e316] [cursor=pointer]:
                - /url: /caroline-theodorou/
                - generic [ref=e317]: Caroline Theodorou
              - generic [ref=e319]:
                - generic [ref=e320]: Caroline Theodorou
                - generic [ref=e322]: Caroline is a chief operating officer at Transforming Support.
                - generic [ref=e323] [cursor=pointer]:
                  - text: View Details
                  - img [ref=e324]
            - generic [ref=e326]:
              - link "Charlotte Holmes" [ref=e327] [cursor=pointer]:
                - /url: /charlotte-holmes/
                - generic [ref=e328]: Charlotte Holmes
              - generic [ref=e330]:
                - generic [ref=e331]: Charlotte Holmes
                - generic [ref=e333]: Charlotte is a Consultant Social Worker at Transforming Support.
                - generic [ref=e334] [cursor=pointer]:
                  - text: View Details
                  - img [ref=e335]
            - generic [ref=e337]:
              - link "Damilola Olanisimi" [ref=e338] [cursor=pointer]:
                - /url: /damilola-olanisimi/
                - generic [ref=e339]: Damilola Olanisimi
              - generic [ref=e341]:
                - generic [ref=e342]: Damilola Olanisimi
                - generic [ref=e344]: Damilola is a Team Leader at Temple Road and Sudbury Heights.
                - generic [ref=e345] [cursor=pointer]:
                  - text: View Details
                  - img [ref=e346]
            - generic [ref=e348]:
              - link "Denise King" [ref=e349] [cursor=pointer]:
                - /url: /denise-king/
                - generic [ref=e350]: Denise King
              - generic [ref=e352]:
                - generic [ref=e353]: Denise King
                - generic [ref=e355]: Denise King is a service manager for Horsham Road at Transforming Support Sussex.
                - generic [ref=e356] [cursor=pointer]:
                  - text: View Details
                  - img [ref=e357]
            - generic [ref=e359]:
              - link "Francis Chakku" [ref=e360] [cursor=pointer]:
                - /url: /francis-chakku/
                - generic [ref=e361]: Francis Chakku
              - generic [ref=e363]:
                - generic [ref=e364]: Francis Chakku
                - generic [ref=e366]: Francis is a Team Leader at Prinsted.
                - generic [ref=e367] [cursor=pointer]:
                  - text: View Details
                  - img [ref=e368]
            - generic [ref=e370]:
              - link "Joshua Abolarin" [ref=e371] [cursor=pointer]:
                - /url: /joshua-abolarin/
                - generic [ref=e372]: Joshua Abolarin
              - generic [ref=e374]:
                - generic [ref=e375]: Joshua Abolarin
                - generic [ref=e377]: Joshua is a Team Leader at St Julian's Farm Road.
                - generic [ref=e378] [cursor=pointer]:
                  - text: View Details
                  - img [ref=e379]
            - generic [ref=e381]:
              - link "Kersti Lootus" [ref=e382] [cursor=pointer]:
                - /url: /kersti-lootus/
                - generic [ref=e383]: Kersti Lootus
              - generic [ref=e385]:
                - generic [ref=e386]: Kersti Lootus
                - generic [ref=e388]: Kersti Lootus is a service manager at Chipstead Court and is a key team member at Transforming Support Surrey.
                - generic [ref=e389] [cursor=pointer]:
                  - text: View Details
                  - img [ref=e390]
            - generic [ref=e392]:
              - link "Marcus Van-Hagen" [ref=e393] [cursor=pointer]:
                - /url: /marcus-van-hagen/
                - generic [ref=e394]: Marcus Van-Hagen
              - generic [ref=e396]:
                - generic [ref=e397]: Marcus Van-Hagen
                - generic [ref=e399]: Marcus Van-Hagen is a Development Director at Transforming Support.
                - generic [ref=e400] [cursor=pointer]:
                  - text: View Details
                  - img [ref=e401]
            - generic [ref=e403]:
              - link "Natalie Carroll" [ref=e404] [cursor=pointer]:
                - /url: /natalie-carroll/
                - generic [ref=e405]: Natalie Carroll
              - generic [ref=e407]:
                - generic [ref=e408]: Natalie Carroll
                - generic [ref=e410]: Natalie Carroll is a Registered Manager at Transforming Support.
                - generic [ref=e411] [cursor=pointer]:
                  - text: View Details
                  - img [ref=e412]
          - generic [ref=e414]:
            - button "previous page button" [disabled] [ref=e415]:
              - img [ref=e416]
            - generic [ref=e419]:
              - combobox [ref=e420] [cursor=pointer]:
                - option "Page 1" [selected]
                - option "Page 2"
              - generic:
                - img
            - button "next page button" [ref=e421] [cursor=pointer]:
              - img [ref=e422]
      - generic [ref=e426]:
        - generic [ref=e427]:
          - heading "Looking for more information?" [level=2] [ref=e428]
          - paragraph [ref=e430]: If you require more information or would like to Make a Referral use the options below.
        - generic [ref=e431]:
          - link "Contact Us" [ref=e432] [cursor=pointer]:
            - /url: /home/
          - link "Make Referral" [ref=e433] [cursor=pointer]:
            - /url: /home/
    - contentinfo [ref=e434]:
      - generic [ref=e435]:
        - generic [ref=e436]:
          - generic [ref=e437]:
            - generic [ref=e438]: Families
            - generic [ref=e439]:
              - link "How do we support" [ref=e440]:
                - /url: /how-do-we-support-families
              - link "Who do we support" [ref=e441]:
                - /url: /who-do-we-support
              - link "Our locations" [ref=e442]:
                - /url: /locations
          - generic [ref=e443]:
            - generic [ref=e444]: Professionals
            - generic [ref=e445]:
              - link "How do we support" [ref=e446]:
                - /url: /how-do-we-support-professionals
              - link "Support tiers" [ref=e447]:
                - /url: /support-tiers
              - link "Locations" [ref=e448]:
                - /url: /locations
          - generic [ref=e449]:
            - generic [ref=e450]: The People We Support
            - generic [ref=e451]:
              - link "Who do we support" [ref=e452]:
                - /url: /who-do-we-support
              - link "Useful Information" [ref=e453]:
                - /url: /useful-information
          - generic [ref=e454]:
            - generic [ref=e455]: Get in touch
            - generic [ref=e456]:
              - link "Contact us" [ref=e457]:
                - /url: https://www.transformingsupport.uk/referral-form
              - link "Compliance and Statements" [ref=e458]:
                - /url: /compliance-and-statements
              - link "Privacy Policy" [ref=e459]:
                - /url: /privacy-policy
              - link "SecureDesk" [ref=e460]:
                - /url: https://windows.cloud.microsoft/#
            - generic [ref=e461]:
              - link "https://www.facebook.com/TRFSupportUK/" [ref=e462]:
                - /url: https://www.facebook.com/TRFSupportUK/
                - img "White Facebook Logo" [ref=e463]
              - link "https://instagram.com/trfsupportuk?igshid=NTc4MTIwNjQ2YQ==" [ref=e464]:
                - /url: https://instagram.com/trfsupportuk?igshid=NTc4MTIwNjQ2YQ==
                - img "White Instagram Logo" [ref=e465]
              - link "https://twitter.com/trfsupportuk?s=21&t=inAChnC0WpuuKMH-BVQQXg" [ref=e466]:
                - /url: https://twitter.com/trfsupportuk?s=21&t=inAChnC0WpuuKMH-BVQQXg
        - generic [ref=e467]:
          - generic [ref=e468]:
            - img "Transforming Logo White Text"
          - generic [ref=e469]:
            - generic [ref=e470]: Registered Office
            - generic [ref=e471]: New City Court 20 St Thomas Street, London, SE1 9RS
          - paragraph [ref=e473]: © Copyright Transforming PLC 2026
  - alert [ref=e474]
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
  29 |         await servicesButton.click();
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
> 56 |         await expertiseButton.click();
     |                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
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