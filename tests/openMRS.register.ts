import{chromium, expect, test }from "@playwright/test"
 
 
test("register",async ({}) => {

    const browser = await chromium.launch({ headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://demo.openmrs.org/openmrs/login.htm');
    await page.fill("input#username", "Admin")
    await page.fill("input#password", "Admin123")
    await page.click("li[id='Outpatient Clinic']");
    await page.click("input#loginButton");
    await page.waitForTimeout(3000);
    await page.click("a#referenceapplication-registrationapp-registerPatient-homepageLink-referenceapplication-registrationapp-registerPatient-homepageLink-extension");
    await page.fill("input[name='givenName']", "abc");
    await page.fill("input[name='familyName']", "test");
    await page.click("button#next-button");

    await page.locator("select#gender-field").selectOption("M");
    await page.click("button#next-button");
    
    await page.fill("input#birthdateDay-field","16");
    await page.locator("select#birthdateMonth-field").selectOption("3");
    await page.fill("input#birthdateYear-field", "1998");
    await page.click("button#next-button");

    await page.fill("input#address1", "svvsvsvdsvs");
    await page.click("button#next-button");

    await page.fill("input[name='phoneNumber']","9876543219")
    await page.click("button#next-button");

    await page.locator("select#relationship_type").selectOption("Doctor");
    await page.fill("input[placeholder='Person Name']","abc");
    await page.click("button#next-button");

    await page.click("input#submit");
    

    await page.waitForTimeout(3000);
 
 
 
 
})