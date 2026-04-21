import { test, expect } from '@playwright/test';

test.describe('Form and Input Interactions', () => {

  test('Referral Form - Field Interaction', async ({ page }) => {
    await page.goto('https://www.transformingsupport.uk/referral-form/');
    await page.waitForLoadState('networkidle');
    const textInputs = page.locator('input[type="text"], input[type="email"], textarea');
    const count = await textInputs.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < Math.min(count, 3); i++) {
        await textInputs.nth(i).fill(`Test Input ${i}`);
    }
  });

  test('Locations Search - Filters and Interaction', async ({ page }) => {
    await page.goto('https://www.transformingsupport.uk/locations/');
    await page.waitForLoadState('networkidle');

    // Region Select
    const regionSelect = page.locator('#region');
    await expect(regionSelect).toBeVisible(); // Should be visible on desktop
    await regionSelect.selectOption({ index: 1 });
    
    // Check if services are hidden inside a toggle/button
    // Many modern sites have a "Services" or "Filters" button
    const servicesButton = page.locator('button:has-text("Service"), label:has-text("Service")').first();
    if (await servicesButton.isVisible()) {
        await servicesButton.click();
    }

    // Instead of checking the hidden input, click the label
    const autismLabel = page.locator('label[for="services-1"]');
    if (await autismLabel.isVisible()) {
        await autismLabel.click();
    } else {
        // Fallback to direct check if label not found/visible
        await page.locator('#services-1').check({ force: true });
    }
    
    // Verify it's checked
    expect(await page.locator('#services-1').isChecked()).toBeTruthy();
  });

  test('Staff Search - Filters and Interaction', async ({ page }) => {
    await page.goto('https://www.transformingsupport.uk/staff/');
    await page.waitForLoadState('networkidle');

    // Staff Name Select
    const staffNameSelect = page.locator('#staffName');
    await expect(staffNameSelect).toBeVisible();
    
    // Toggle services if needed
    const expertiseButton = page.locator('button:has-text("Expertise"), label:has-text("Service")').first();
    if (await expertiseButton.isVisible()) {
        await expertiseButton.click();
    }

    const mentalHealthLabel = page.locator('label[for="services-6"]');
    if (await mentalHealthLabel.isVisible()) {
        await mentalHealthLabel.click();
    } else {
        await page.locator('#services-6').check({ force: true });
    }
    
    expect(await page.locator('#services-6').isChecked()).toBeTruthy();
  });

});
