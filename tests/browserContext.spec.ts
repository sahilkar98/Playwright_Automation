import { test, expect } from "@playwright/test";

test("BrowserContext", async({ browser}) => {

    // Create a new incognito browser context
const context = await browser.newContext();
// Create a new page inside context.
const page = await context.newPage();
await page.goto('https://www.google.co.in/');
// Dispose context once it's no longer needed.
await context.close();
});