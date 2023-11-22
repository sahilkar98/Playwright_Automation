import { Page } from "@playwright/test";

export default class RegisterPage{

    constructor(public page: Page){

    }

    async enterFirstName(firstName: string){
        await this.page.locator("input#input-firstname").type(firstName);
    }

    async enterLastName(lastName: string){
        await this.page.locator("input#input-lastname").type(lastName);
    }

    async enterEmail(email: string){
        await this.page.locator("input#input-email").type(email);
    }

    async enterTelePhoneNum(telePhone: string){
        await this.page.locator("input#input-telephone").type(telePhone);
    }

    async enterPassword(password: string){
        await this.page.locator("input#input-password").type(password);
    }

    async enterConfirmPassword(password: string){
        await this.page.locator("input#input-confirm").type(password);
    }

    async isSubscribeChecked(){
        return await this.page.locator("#input-newsletter-no").isChecked();
    }

    async clickOnTerms(){
        await this.page.click("label[for='input-agree']");
    }

    async clickOnContinue(){
        await Promise.all([
            this.page.waitForNavigation({waitUntil:"networkidle"}),
            this.page.locator("input[type='submit']").click()
        ])
        
    }
    
}