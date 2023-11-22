import { Page } from "@playwright/test";

export default class HomePage{
    constructor(public page:Page){ }

    async clickonSpecialHotMenu(){
        await this.page.locator("'Special Hot'").click();
    }
}