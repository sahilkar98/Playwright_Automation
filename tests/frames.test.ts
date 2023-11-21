import { expect, test } from "@playwright/test";

test ("Interact with frames", async ({page}) => {

    await page.goto("https://letcode.in/frame");
    const allFrames = page.frames();
    console.log("No. of Frames"+allFrames.length);

    const myFrame = page.frame("firstFr");
    await myFrame?.fill("input[name='fname']","Sahil");
    await myFrame?.fill("input[name='lname']","Karnewar");

    expect(await myFrame?.locator("p.has-text-info").textContent()).toContain("You have entered");

    const innerFrame = myFrame?.frameLocator("iframe[src='innerFrame']");
    await innerFrame?.locator("input[name='email']").fill("test@123.com");

    await page.waitForTimeout(3000);
})