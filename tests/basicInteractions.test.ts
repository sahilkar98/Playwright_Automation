import {expect, test} from "@playwright/test"
test("interaction with inputs", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = page.locator("input#user-message");
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder","Please enter your Message");
    console.log('Before entering the data '+await messageInput.inputValue());
    await messageInput.type('Hi Sahil');
    console.log('After entering the data '+await messageInput.inputValue());

})

test("sum", async ({page}) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const sum1 = page.locator("input#sum1");
    const sum2 = page.locator("input#sum2");
    const getSum = page.locator("//button[contains(text(),'Get Sum')]");
    const result = page.locator("p#addmessage");
    let a =23;
    let b =27;
    await sum1.type(""+a);
    await sum2.type(""+b);
    await getSum.click();
    const er = a+b;
    expect(result).toHaveText(""+er);




})