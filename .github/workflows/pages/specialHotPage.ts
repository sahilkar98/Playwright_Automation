import { Page } from "@playwright/test";

export default class SpecialHotPage{
    constructor(public page:Page){ }

    async addFirstProductToCart(){
        await this.page.hover("")
    }
}