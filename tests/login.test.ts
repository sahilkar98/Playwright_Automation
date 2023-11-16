import{chromium, expect, test }from "@playwright/test"


test("login",async () => {

    const browser = await chromium.launch({ headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover("ul[class='navbar-nav horizontal']>li:nth-of-type(6)")
    await page.click("text=Login")


    await page.fill("input#input-email","karnewar.sahil@gmail.com")
    await page.fill("input#input-password","test@123")
    await page.click("input[type='submit']")
    //var tx = page.locator("//h2[contains(text(),'My Account')]").textContent();
    await expect(page.locator("h2:has-text('My Account')")).toHaveText("My Account")

    await page.waitForTimeout(5000)
})