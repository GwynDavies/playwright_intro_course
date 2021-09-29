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
 const { HomePage } = require("../../lib/page-objects/home");
 const { test,expect } = require('@playwright/test');
 
 ("use strict");
 
 let homePage;
 
 test.describe('Navigation - ', () => {
 
     test.beforeEach(async ({ page }) => {
         homePage = new HomePage(page);
         await page.goto(homePage.url());
     })


    test("I can navigate back, forward and reload", async ({ page }) => {
        /*
         * Start off on the 'Home page'
         */

        expect( homePage.isHomePageUrl(page.url()) ).toBe(true);

        /*
         * Navigate into 'Selectors' page
         */

        await page.click('text=Selectors');
        expect(page.url().includes('selectors')).toBe(true);
    
        /*
         * Go back to the 'Home' page
         */
        
        await page.goBack();
        expect( homePage.isHomePageUrl(page.url()) ).toBe(true);

        /*
         * Go forward again to 'Selectors' page
         */

        await page.goForward();

        //await page.click('text=Selectors');
        expect(page.url().includes('selectors')).toBe(true);

        /*
         * Reload the page
         */

        await page.reload();

        // Check we are still on the 'Selectors' page

        //await page.click('text=Selectors');
        expect(page.url().includes('selectors')).toBe(true);
    })
})