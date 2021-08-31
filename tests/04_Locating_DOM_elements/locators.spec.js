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

const {test,expect} = require('@playwright/test')
const { LocatorsPage } = require("../../lib/page-objects/locators")

test.describe('Locators', () => {
  const DELAY = 250
  let locatorsPage

  test.beforeEach(async ({page}) => {
    locatorsPage = new LocatorsPage()

    await page.goto(locatorsPage.url())
  });
  
  test("Locate by 'id'", async ({page}, testInfo) => {
    // Show message for how we are going to locate the button
    await page.$eval(locatorsPage.statusField(), (o, locatorAttempt) => o.textContent = locatorAttempt, testInfo.title)

    // Pause so we can see the message 
    await page.waitForTimeout(DELAY)

    // Attempt to click the 'located' button
    await page.click('#test_button')

    // Check locator located the button
    await expect(page.locator(locatorsPage.statusField())).toHaveText('BUTTON FOUND')
    
    // Wait so we can see the dialog was handled
    await page.waitForTimeout(1000)
  })

  test("Locate by 'class'", async ({page}, testInfo) => {
    // Show message for how we are going to locate the button
    await page.$eval(locatorsPage.statusField(), (o, locatorAttempt) => o.textContent = locatorAttempt, testInfo.title)

    // Pause so we can see the message 
    await page.waitForTimeout(DELAY)

    // Attempt to click the 'located' button
    await page.click('.btn-outline-dark')

    // Check locator located the button
    await expect(page.locator(locatorsPage.statusField())).toHaveText('BUTTON FOUND')
    
    // Wait so we can see the dialog was handled
    await page.waitForTimeout(1000)
  })

  test("Locate by 'element type' (have to use additional locators as there are 2 buttons)", async ({page}, testInfo) => {
    // Show message for how we are going to locate the button
    await page.$eval(locatorsPage.statusField(), (o, locatorAttempt) => o.textContent = locatorAttempt, testInfo.title)

    // Pause so we can see the message 
    await page.waitForTimeout(DELAY)

    // Attempt to click the 'located' button
    await page.click('main div button')

    // Check locator located the button
    await expect(page.locator(locatorsPage.statusField())).toHaveText('BUTTON FOUND')
    
    // Wait so we can see the dialog was handled
    await page.waitForTimeout(1000)
  })

  test("Locate by '(direct) parent id AND element type'", async ({page}, testInfo) => {
    // Show message for how we are going to locate the button
    await page.$eval(locatorsPage.statusField(), (o, locatorAttempt) => o.textContent = locatorAttempt, testInfo.title)

    // Pause so we can see the message 
    await page.waitForTimeout(DELAY)

    // Attempt to click the 'located' button
    await page.click('#controls > button')

    // Check locator located the button
    await expect(page.locator(locatorsPage.statusField())).toHaveText('BUTTON FOUND')
    
    // Wait so we can see the dialog was handled
    await page.waitForTimeout(1000)
  })

  test("Locate by 'containing text'", async ({page}, testInfo) => {
    // Show message for how we are going to locate the button
    await page.$eval(locatorsPage.statusField(), (o, locatorAttempt) => o.textContent = locatorAttempt, testInfo.title)

    // Pause so we can see the message 
    await page.waitForTimeout(DELAY)

    // Attempt to click the 'located' button
    await page.click('text=Click Me')

    // Check locator located the button
    await expect(page.locator(locatorsPage.statusField())).toHaveText('BUTTON FOUND')
    
    // Wait so we can see the dialog was handled
    await page.waitForTimeout(1000)
  })

  test("Locate by 'data attribute'", async ({page}, testInfo) => {
    // Show message for how we are going to locate the button
    await page.$eval(locatorsPage.statusField(), (o, locatorAttempt) => o.textContent = locatorAttempt, testInfo.title)

    // Pause so we can see the message 
    await page.waitForTimeout(DELAY)

    // Attempt to click the 'located' button
    await page.click('[data-test-id="my_test_id"]')

    // Check locator located the button
    await expect(page.locator(locatorsPage.statusField())).toHaveText('BUTTON FOUND')
    
    // Wait so we can see the dialog was handled
    await page.waitForTimeout(1000)
  })

  test("Locate by 'nth-match'", async ({page}, testInfo) => {
    // Show message for how we are going to locate the button
    await page.$eval(locatorsPage.statusField(), (o, locatorAttempt) => o.textContent = locatorAttempt, testInfo.title)

    // Pause so we can see the message 
    await page.waitForTimeout(DELAY)

    // Attempt to click the 'located' button
    await page.click('button >> nth=1')

    // Check locator located the button
    await expect(page.locator(locatorsPage.statusField())).toHaveText('BUTTON FOUND')
    
    // Wait so we can see the dialog was handled
    await page.waitForTimeout(1000)
  })

  test("Locate by 'xpath'", async ({page}, testInfo) => {
    // Show message for how we are going to locate the button
    await page.$eval(locatorsPage.statusField(), (o, locatorAttempt) => o.textContent = locatorAttempt, testInfo.title)

    // Pause so we can see the message 
    await page.waitForTimeout(DELAY)

    // Attempt to click the 'located' button
    await page.click('//*[text() = "Click Me"]')

    // Check locator located the button
    await expect(page.locator(locatorsPage.statusField())).toHaveText('BUTTON FOUND')
    
    // Wait so we can see the dialog was handled
    await page.waitForTimeout(1000)
  })

})