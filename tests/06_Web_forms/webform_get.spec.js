/**
 * MIT License
 *
 * Copyright (c) 2021 Gwyn M. Davies
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
const { TestPage } = require("../../lib/page-objects/webform-get-page");
const { test, expect } = require('@playwright/test');
const ONE_SEC_IN_MILLI_SECS = 1000;

("use strict");

let testPage

test.beforeEach(async ({ page }) => {
  testPage = new TestPage(page);
  await testPage.goto();
})

test("Text field", async () => {
  const testValue = "fname lname";
  await testPage.setText(testValue);
  await testPage.checkText(testValue);
})

test("Email field", async () => {
  const testValue = "fname.lname@domain.com";
  await testPage.setEmail(testValue);
  await testPage.checkEmail(testValue);
})

test("Password field", async () => {
  const testValue = "secret";
  await testPage.setPassword(testValue);
  await testPage.checkPassword(testValue);
})

test("Search field", async () => {
  const testValue = "search me";
  await testPage.setSearch(testValue);
  await testPage.checkSearch(testValue);
})

test("Number field", async () => {
  const testValue = "60";
  await testPage.setNumber(testValue);
  await testPage.checkNumber(testValue);
})

test("Phone field", async () => {
  const testValue = "111-111-1111";
  await testPage.setPhone(testValue);
  await testPage.checkPhone(testValue);
})

test("Date field", async () => {
  const setValue = "01/06/2021";
  const expectedValue = "2021-01-06";
  await testPage.setDate(setValue);
  await testPage.checkDate(expectedValue);
})

test("Time field is", async ({page}) => {
  await testPage.setTime("10","11","PM");
  await testPage.checkTime("22:11");
})

test("Checkbox fields", async () => {
  await testPage.checkCheckBox1();
  await testPage.checkBox1IsChecked();

  await testPage.checkCheckBox2();
  await testPage.checkBox2IsChecked();
})

test("Radio buttons", async () => {
  await testPage.checkRadioButton1();
  await testPage.radioButton1IsChecked();

  await testPage.checkRadioButton2();
  await testPage.radioButton1IsNotChecked();
  await testPage.radioButton2IsChecked();
})

test("Select field", async () => {
  const testValue = "option2";

  // Initially not set

  expect(await testPage.getSelect()).toBeFalsy();
  expect(await testPage.getSelect()).toHaveLength(0);

  // Set and check value

  await testPage.setSelect(testValue);
  await testPage.checkSelect(testValue);
})

test("Textarea field", async () => {
  const testValue = "This is me.\nI am a programmer";
  await testPage.setTextArea(testValue);
  await testPage.checkTextArea(testValue);
})

test("Url field", async () => {
  const testValue = "https://www.wikipedia.org";
  await testPage.setUrl(testValue);
  await testPage.checkUrl(testValue);
})

test("Color field", async () => {
  const testValue = "#ff0000";
  await testPage.setColor(testValue);
  await testPage.checkColor(testValue);
})

test("Range field", async () => {
  const testValue = 75;
  await testPage.setRange(testValue);
  await testPage.checkRange(testValue);
})

test("Webform with HTTP GET", async ({page}) => {
  await testPage.setText("fname lname");
  await testPage.setEmail("fname.lname@domain.com");
  await testPage.setPassword("secret");
  await testPage.setSearch("search me");
  await testPage.setNumber("60");
  await testPage.setPhone("111-111-1111");
  await testPage.setDate("01/06/2021");
  await testPage.setTime("10","11","PM");
  await testPage.checkCheckBox1();
  await testPage.checkCheckBox2();
  await testPage.checkRadioButton1();
  await testPage.setSelect("option1");
  await testPage.setTextArea("This is me.\nI am a programmer");
  await testPage.setUrl( "https://www.wikipedia.org");
  await testPage.setColor("#ff0000");
  await testPage.setRange(50);

  // Submit the form
  
  await testPage.clickSubmit();

  // Pause so we can see the result of the GET

  await page.waitForTimeout(ONE_SEC_IN_MILLI_SECS);
})