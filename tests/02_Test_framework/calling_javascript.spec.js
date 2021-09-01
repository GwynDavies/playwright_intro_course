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

("use strict")

const {HomePage} = require("../../lib/page-objects/home")
const {test,expect} = require('@playwright/test')

test.describe('Test framework (Calling JavaScript) - ', () => {
  let homePage

  test.beforeEach(async ({page}) => {
    homePage = new HomePage()

    await page.goto('/')
  });

  /*
   * Page.$eval
   * 
   * Finds an element matching the specified selector within the page 
   * and passes it as a first argument to the function
   * 
   * If there are multiple element matches, the first one is chosen
   */

  test("Using JavaScript to access a single object", async ({page}) => {
    // Click button
    await page.click(homePage.browserTypeButton())

    // Get object's class using JavaScript - first matching span
    let spanClass = await page.$eval('#browser_div span', e => {
        return e.getAttribute('class')
    })

    // First matching span should always have the class - for "Chromium browser"
    let spanExpectedClass  = homePage.browserChromiumLocatorClass().substring(1)
    await expect(spanClass).toBe(spanExpectedClass)
  })

  /*
   * Page.$$eval
   * 
   * Finds all elements matching the specified selector within the page,
   * and passes an array of matched elements as a first argument to the
   * function
   */

  test("Using JavaScript to access multiple objects", async ({page}) => {
    // Click button
    await page.click(homePage.browserTypeButton())

    // Get number of span objects object's
    let numberOfSpanObjects =  await page.$$eval('#browser_div span', objects => {
        return objects.length
    })

    // Check there are 3 span objects
    await expect(numberOfSpanObjects).toBe(3)
  })

  /*
   * Page.$$
   * 
   * The method finds all elements (ElementHandles) matching the specified selector 
   * within the page
   */

  test("Using JavaScript  to access matching bject  'element handles'", async ({page}) => {
    // Click button
    await page.click(homePage.browserTypeButton())

    // Get the "ElementHandles" for the span objects
    let elementHandlesForTheSpans = await page.$$('#browser_div span')

    // Expect there to be 3 "ElementHandles"
    expect(elementHandlesForTheSpans.length).toBe(3)
  })
})
