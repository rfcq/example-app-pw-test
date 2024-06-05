// @ts-check
const { test, expect } = require('@playwright/test');
const { beforeEach } = require('node:test');
const { CommonPage } = require('../../pageobjects/common.po.js');
const { AddUser } = require('../../pageobjects/addUser.po.js');

test.describe('Register User - Test Suite', () => {

  test.beforeEach(async ({ page }) => {
    const commonPage = new CommonPage(page);
    await page.goto('/');
    await expect(commonPage.appNavbar).toBeVisible();
    await commonPage.gotoAddUser();
  })
  
  test('Register successfully using UI', async ({ page }) => {
    const addUser = new AddUser(page);
    await addUser.fillNameField("John");
    await addUser.fillSurnameField("Doe");
  });
  
})

