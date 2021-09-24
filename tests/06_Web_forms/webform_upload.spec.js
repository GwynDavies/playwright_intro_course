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
const { TestPage } = require("../../lib/page-objects/webform-upload-page");
const { test, expect } = require('@playwright/test');
const ONE_SEC_IN_MILLI_SECS = 1000;

("use strict");

test("File upload", async ({page}) => {
  const testPage = new TestPage(page);
  await page.goto("webform-upload");

  /*
   * Some text to accompany the file upload
   */

  const testValue = "fname lname";
  await testPage.setText(testValue);
  expect(await testPage.getText()).toBe(testValue);

  /*
   * File upload
   */

  await page.setInputFiles('input[type="file"]', './lib/fixtures/forupload.txt');

  // Pause so we can see the file was attached for upload
  
  await page.waitForTimeout(ONE_SEC_IN_MILLI_SECS);

  // Submit the form

  await testPage.clickSubmit();

  // Pause so we can see the result
  
  await page.waitForTimeout(ONE_SEC_IN_MILLI_SECS);
});

