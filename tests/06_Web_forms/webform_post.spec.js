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

 const { TestPage } = require("../../lib/page-objects/webform-post-page");
 const { test, expect } = require('@playwright/test');
 const TEN_MILLI_SECS=10;
 const HALF_SEC_IN_MILLI_SECS = 500;
 const ONE_SEC_IN_MILLI_SECS = 1000;

("use strict");

test.describe('Webforms - ', () => {

  let testPage

  test.beforeEach(async ({ page }) => {
    testPage = new TestPage(page);
    await testPage.goto();
  })

  test("Webform with HTTP POST", async ({ page }) => {

    // Text field

    let testValue = "fname lname";
    await testPage.setText(testValue);
    await testPage.checkText(testValue);

    // Email field

    testValue = "fname.lname@domain.com";
    await testPage.setEmail(testValue);
    await testPage.checkEmail(testValue);

    // Password field

    testValue = "secret";
    await testPage.setPassword(testValue);
    await testPage.checkPassword(testValue);

    // Color field

    const RED     = "#ff0000";
    const GREEN   = "#00ff00";
    const BLUE    = "#0000ff";
    const YELLOW  = "#ffff00";
    const CYAN    = "#00ffff";
    const MAGENTA = "#ff00ff";

    const testValues = [RED, GREEN, BLUE, YELLOW, CYAN, MAGENTA, CYAN, YELLOW, BLUE, GREEN, RED];
    
    for (let color of testValues) {
      await page.waitForTimeout(HALF_SEC_IN_MILLI_SECS); // So we can see it change
      await testPage.setColor(color);
      await testPage.checkColor(color);
    }

    // Range field

    for (let v = 100; v >= 0; v -= 5) {
      await page.waitForTimeout(TEN_MILLI_SECS); // So we can see it change
      await testPage.setRange(v);
      await testPage.checkRange(v); 
    }  

    for (let v = 0; v <= 100; v += 5) {
      await page.waitForTimeout(TEN_MILLI_SECS); // So we can see it change
      await testPage.setRange(v);
      await testPage.checkRange(v); 
    }

    // Submit the form

    await testPage.clickSubmit();
  
    // Pause so we can see the result of the POST

    await page.waitForTimeout(ONE_SEC_IN_MILLI_SECS);
  })
})