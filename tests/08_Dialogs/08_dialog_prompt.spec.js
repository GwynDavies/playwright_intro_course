const { TestPage } = require("../../lib/page-objects/webform-upload-page");
const { test, expect } = require('@playwright/test');
const fs = require("fs");

("use strict");

test("Prompt dialog is auto handled", async ({page}) => {
  const testPage = new TestPage(page);
  await page.goto("http://localhost:8080/dialogs");

  // Click Alert
  await page.click('#prompt_button')

  // Wait so we can see the dialog was handled
  await page.waitForTimeout(500)
});

test("Prompt dialog can be handled with Accept", async ({page}) => {
  const testPage = new TestPage(page);
  await page.goto("http://localhost:8080/dialogs");

  page.on('dialog', dialog => {
    dialog.accept('This is my response')
    console.log("Alert dialog handled")
  })

  // Click Alert
  await page.click('#prompt_button')

  const valueOfResponse = await page.$eval("#dialogResponse", (el) => el.textContent);
  await expect(valueOfResponse).toEqual("This is my response");

  // Wait so we can see the dialog was handled
  await page.waitForTimeout(500)
});

test("Prompt dialog can be handled with Dismiss", async ({page}) => {
  const testPage = new TestPage(page);
  await page.goto("http://localhost:8080/dialogs");

  page.on('dialog', dialog => {
    dialog.dismiss()
    console.log("Alert dialog handled")
  })

  // Click Alert
  await page.click('#prompt_button')

  const valueOfResponse = await page.$eval("#dialogResponse", (el) => el.textContent);
  await expect(valueOfResponse).toEqual("");

  // Wait so we can see the dialog was handled
  await page.waitForTimeout(500)
});