import {test } from "@playwright/test"
import RegisterPage from "../.github/workflows/pages/registerPage"
import LoginPage from "../.github/workflows/pages/loginPage"
import HomePage from "../.github/workflows/pages/homePage"


const email = "test1998sk@gmail.com"
const password = "test@123"
test ("Register Test_01",async ({page , baseURL}) =>{
    const register = new RegisterPage(page);

    await page.goto(`${baseURL}route=account/register`);
    await register.enterFirstName("Sahil");
    await register.enterLastName("Karnewar");
    await register.enterEmail(email);
    await register.enterTelePhoneNum("919876543213");
    await register.enterPassword(password);
    await register.enterConfirmPassword(password);
    await register.isSubscribeChecked();
    await register.clickOnTerms();
    await register.clickOnContinue();


})