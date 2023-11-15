import{chromium, expect, test }from "@playwright/test"
 
 
test("register",async ({}) => {

    const browser = await chromium.launch({ headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://demo.openmrs.org/openmrs/login.htm');
    await page.fill("//input[@name='username']", "Admin")
    await page.fill("//input[@name='password']", "Admin123")
    await page.click("//li[text() = 'Outpatient Clinic']");
    await page.click("//input[@id='loginButton']");
    await page.waitForTimeout(3000);
    await page.click("//a/i[@class='icon-user']");
    await page.fill("//input[@name='givenName']", "abc");
    await page.fill("//input[@name='familyName']", "test");
    await page.click("//button[@id='next-button']");

    await page.locator("//select[@name='gender']").selectOption("M");
    await page.click("//button[@id='next-button']");
    
    await page.fill("//input[@name='birthdateDay']","16");

    await page.locator("//select[@name='birthdateMonth']").selectOption("3");
    await page.fill("//input[@name='birthdateYear']", "1998");
    await page.click("//button[@id='next-button']");
    await page.fill("//input[@name='address1']", "svvsvsvdsvs");
    await page.click("//button[@id='next-button']");

    await page.fill("//input[@name='phoneNumber']","9876543219")
    await page.click("//button[@id='next-button']");
    await page.locator("//select[@name='relationship_type']").selectOption("Doctor");
    await page.fill("//input[@placeholder='Person Name']","abc");
    await page.click("//button[@id='next-button']");

    await page.click("//input[@type='submit']");
    

    await page.waitForTimeout(3000);
 
 
 
 
})