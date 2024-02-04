import { test, expect } from '@playwright/test';

test('From ve To input alanlarinda ayni degerin girilemedigini test et', async ({ page }) => {

  await page.goto('https://flights-app.pages.dev/');

  let fromSelector = page.locator("[id='headlessui-combobox-input-:Rq9lla:']");
  let toSelector = page.locator("[id='headlessui-combobox-input-:Rqhlla:']");


  await fromSelector.fill('Istanbul');
  await page.keyboard.press('Enter');

  await toSelector.fill('Istanbul');
  await page.keyboard.press('Enter');

  
  await expect(fromSelector).toHaveValue('Istanbul');
  await expect(toSelector).not.toHaveValue('Istanbul');

});

