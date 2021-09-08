const { TestPage } = require("../../lib/page-objects/webform-upload-page");
const { test, expect } = require('@playwright/test');
const fs = require("fs");

("use strict");

test("Name field is settable and gettable", async ({page}) => {
  const testPage = new TestPage(page);
  await page.goto("webform-upload");

  // Text

  const testValue = "fname lname";
  await testPage.setName(testValue);
  expect(await testPage.getName()).toBe(testValue);

  // File

  await page.setInputFiles('input[type="file"]', './lib/fixtures/forupload.txt');

  // Pause so we can see the file was attached for upload
  await page.waitForTimeout(1000)


  await testPage.clickSubmit()

  // Pause so we can see the result of the GET
  await page.waitForTimeout(1000)
});

