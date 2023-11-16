import { chromium, expect, test } from "@playwright/test";

test ("checkboxes", async ({}) => {

    const browser = await chromium.launch({ headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")
    const singleCheckbox =page.locator("input#isAgeSelected")
    await expect(singleCheckbox).not.toBeChecked()
    await singleCheckbox.check();
    await expect(singleCheckbox).toBeChecked()

});