import {expect, test} from "@playwright/test"

test ("alerts", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async (alert) => {
        const text = alert.message();
        console.log(text);
        await alert.accept();
    })

    await page.locator("button:has-text('Click Me')").nth(0).click();
})

test (" confirm box alerts", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async (alert) => {
        const text = alert.message();
        console.log(text);
        await alert.dismiss();
    })

    await page.locator("button:has-text('Click Me')").nth(1).click();
    expect(page.locator("id=confirm-demo")).toContainText("Cancel!");
})

test (" prompt box alerts", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async (alert) => {
        const text = alert.defaultValue();
        console.log(text);
        await alert.accept("Sahil");
    })

    await page.locator("button:has-text('Click Me')").nth(2).click();
    expect(page.locator("id=prompt-demo")).toContainText("'Sahil'");

    

})

test (" Modal alerts", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    await page.locator("button:has-text('Launch Modal')").nth(0).click();
    await page.locator("button:has-text('Save Changes')").nth(0).click();
})