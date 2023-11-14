import{chromium, test }from "@playwright/test"


test("login",async () => {

    const browser = await chromium.launch({ headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover("//a[@data-toggle='dropdown']//span[contains(text(),'My account')]")
    await page.click("text=Login")


    await page.fill("//input[@name='email']","karnewar.sahil@gmail.com")
    await page.fill("//input[@name='password']","test@123")
    await page.click("//input[@value='Login']")

    await page.waitForTimeout(5000)
})