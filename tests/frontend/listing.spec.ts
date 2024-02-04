import { test, expect } from '@playwright/test';

test('Found X items yazisinda X sayisi ile listelenen ucus sayisinin ayni oldugunu test et', async ({ page }) => {

  await page.goto('https://flights-app.pages.dev/');

  let fromLocator = page.locator("[id='headlessui-combobox-input-:Rq9lla:']");
  let toLocator = page.locator("[id='headlessui-combobox-input-:Rqhlla:']");


  await fromLocator.fill('Istanbul');
  await page.keyboard.press('Enter');

  await toLocator.fill('Los Angeles');
  await page.keyboard.press('Enter');

  
  await expect(fromLocator).toHaveValue('Istanbul');
  await expect(toLocator).toHaveValue('Los Angeles');


  let listedFlightNum = await page.locator("//ul/li").count(); 
  console.log(await listedFlightNum);
  
  let foundItems = await page.locator("//p[@class='mb-10']").textContent();
  console.log(await foundItems);

  await expect(foundItems).toContain(listedFlightNum.toString());



});

