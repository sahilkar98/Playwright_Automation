import { test, expect } from "@playwright/test";

test ("Flipkart Homepage", async ({page, baseURL}) => {
test.setTimeout(3000000);
    
  await page.goto(`${baseURL}`);
  const title = await page.title();
  expect(title).toBe('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');

  // Search for a product
  await page.getByPlaceholder('Search for Products, Brands and More').fill("iphone 12");
  await page.getByPlaceholder('Search for Products, Brands and More').press("Enter");
  

  // Wait for the search results to load
  await page.waitForSelector('div._75nlfW');

  //click on Apple filter
  await page.click("div.QCKZip.hpLdC3");
  await expect(page.waitForSelector("div.QCKZip.hpLdC3")).toBeTruthy();

  //click on customer ratings filter
  await page.click("//div[contains(text(),'4★ & above')]");
  await expect(page.waitForSelector("//div[contains(text(),'4★ & above')]")).toBeTruthy();


  //clear all the applied filters
  await  page.click("div.aOfogh");
  const loc2 = page.locator("div.aOfogh");
  await expect(loc2).toBeHidden();
  
  //Sort By 
  await expect(page.locator("//span[contains(text(),'Sort By')]")).toHaveText('Sort By');

  //Relevance
  await expect(page.locator('div.zg-M3Z._0H7xSG')).toHaveText('Relevance');

  //Popularity
  await page.locator("//div[contains(text(),'Popularity')]").click();
  await expect(page.locator("//div[contains(text(),'Popularity')]")).toHaveText('Popularity');


  //Price -- Low to High
  await page.locator("//div[contains(text(),'Price -- Low to High')]").click();
  await expect(page.locator("//div[contains(text(),'Price -- Low to High')]")).toHaveText('Price -- Low to High');

  //Price -- High to Low
  await page.locator("//div[contains(text(),'Price -- High to Low')]").click();
  await expect(page.locator("//div[contains(text(),'Price -- High to Low')]")).toHaveText('Price -- High to Low');

  //Newest First
  await page.locator("//div[contains(text(),'Newest First')]").click();
  await expect(page.locator("//div[contains(text(),'Newest First')]")).toHaveText('Newest First');

  
  await page.waitForTimeout(3000);


});