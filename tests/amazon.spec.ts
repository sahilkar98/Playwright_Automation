import { test, expect } from '@playwright/test';

test.describe('Amazon Search', () => {
  test('should search for a product and display results', async ({ page }) => {
    // Go to Amazon homepage
    await page.goto('https://www.amazon.in/');

    // Locate the search bar and enter a query
    const searchBar = page.locator('input#twotabsearchtextbox');
    await searchBar.fill('laptop');

    // Click the search button
    const searchButton = page.locator('input#nav-search-submit-button');
    await searchButton.click();

    // Wait for the search results to load
    await page.waitForSelector('div.s-main-slot');

   
    const firstResultTitle = await page.locator('span.a-color-state.a-text-bold').innerText();
    await expect(firstResultTitle.toLowerCase()).toContain('laptop');
  });
});
