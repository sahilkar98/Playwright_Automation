import { Page } from "@playwright/test";

export default class LoginPage{


    constructor(public page: Page){

    }
    async enterLoginEmail(email: string){
        await this.page.locator("input#input-email").type(email);
    }

    async enterLoginPassword(password: string){
        await this.page.locator("input#input-password").type(password);
    }

    async clickOnLogin(){
        await this.page.locator("input[type='submit']").click();
    }

}