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

test.describe('Test framework (Basic test commands) - ', () => {

  test("Using different ways to get a DOM object value", async ({page, browserName}) => {
    const homePage = new HomePage()

    // Navigate to page
    await page.goto("/")

    // Click button
    await page.click(homePage.browserTypeButton())

    // Calculate required locator
    const spanLocator = calculateSpanLocator(browserName, homePage)

    /*
     * Get the span for the currently selected browser in different ways
     */

    // First way to check - using 'text content'
    let content = await page.textContent(spanLocator)
    await expect(content).toBe('true')

    // Second way to check - using 'innerText'
    content = await page.innerText(spanLocator)
    await expect(content).toBe('true')

    // Third way to check - using 'attribute'
    content = await page.getAttribute(spanLocator, 'class')
    let expectedClass  = spanLocator.substring(1)
    await expect(content).toBe(expectedClass)
  })
})

// DOM span objecdt locator differs by browser 
function calculateSpanLocator(browserName, homePage){
  let spanSelector
  
  switch(browserName){
  case  homePage.browserNameChromium():
    spanSelector = homePage.browserChromiumLocatorClass()
    break;
  case homePage.browserNameFirefox():
    spanSelector = homePage.browserFirefoxLocatorClass()
    break;
  case homePage.browserNameWebkit():
    spanSelector = homePage.browserWebkitLocatorClass()
    break;
  default:
    throw "Browser not recognized"
  }

  return spanSelector
}
