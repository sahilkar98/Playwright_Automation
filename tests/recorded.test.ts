import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover("ul[class='navbar-nav horizontal']>li:nth-of-type(6)")
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('karnewar.sahil@gmail.com');
  await page.getByPlaceholder('E-Mail Address').press('Tab');
  await page.getByPlaceholder('Password').fill('test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator("h2:has-text('My Account')")).toHaveText("My Account");
  await page.getByRole('link', { name: ' Edit your account information' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('sahil');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.hover("ul[class='navbar-nav horizontal']>li:nth-of-type(6)")
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
});