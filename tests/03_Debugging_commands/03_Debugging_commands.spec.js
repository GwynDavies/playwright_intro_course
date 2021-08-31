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

test.describe('03 Debugging commands', () => {

  test("Demonstrating I can debug test spec files in different ways", async ({page, browserName}, testInfo) => {
    const homePage = new HomePage()
  
    // Navigate to page
    await page.goto(homePage.url())

    // Click button
    await page.click(homePage.browserTypeButton())

    // Check button was located
    checkBowserName(homePage, browserName, page)
  })
})

async function checkBowserName(homePage, browserName, page){
  let content
  if (browserName === homePage.browserNameChromium()) {
    content = await page.textContent('.output-chromium')
    await expect(content).toBe('true')
  } else if (browserName ===  homePage.browserNameFirefox()) {
    content = await page.textContent('.output-firefox')
    await expect(content).toBe('true')
  } else if (browserName ===  homePage.browserNameWebkit()) {
    content = await page.textContent('.output-webkit')
    await expect(content).toBe('true')
  } else {
    throw ("Browser not recognized")
  }
}
