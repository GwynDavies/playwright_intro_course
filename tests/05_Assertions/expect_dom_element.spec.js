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

test.describe('Assertions - ', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/')
  })
  
  test('DOM element attribute value and visibility', async ({ page }) => {  

    // Expect DOM element's href attribute to have expected value

    await expect(page.locator('text=Get Started')).toHaveAttribute('href', '/docs/intro')
  
    // Expect DOM element to be visible
    
    await expect(page.locator('text=Get Started')).toBeVisible()
  })

  test('DOM element text value and image src', async ({ page }) => {  
    // Put locator in variable so it could be re-used

    const titleLocator = page.locator('.navbar__inner .navbar__title')

    // Expect DOM element to have expected test

    await expect(titleLocator).toHaveText('Playwright')

    // Expect image to have expected src value

    const imageLocator = page.locator('.navbar__inner img')
    await expect(imageLocator).toHaveAttribute('src', '/img/playwright-logo.svg')
  })
})