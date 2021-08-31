const { TestPage } = require("../lib/page-objects/webform-upload-page");
const { test, expect } = require('@playwright/test');
const fs = require("fs");

("use strict");


test.beforeAll(async () => {
});


test.afterEach(async ({page}, testInfo, browserContext) => {
});

test.afterAll( () => {
});

test("Name field is settable and gettable", async ({page}) => {
  const testPage = new TestPage(page);
  await page.goto("http://localhost:8080/webform-upload");

  // Text

  const testValue = "fname lname";
  await testPage.setName(testValue);
  expect(await testPage.getName()).toBe(testValue);

  // File

  await page.setInputFiles('input[type="file"]', './lib/fixtures/forupload.txt');

  // Wait 5 seconds so we can see the result of the GET
  await page.waitForTimeout(5000)

  await testPage.clickSubmit()

  // Wait 5 seconds so we can see the result of the GET
  await page.waitForTimeout(5000)
});

