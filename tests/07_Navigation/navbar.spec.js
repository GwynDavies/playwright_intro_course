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

    // NavBar - 'Home'

    test("I can navigate with the navbar into 'Home'", async ({ page }) => {
        await page.click('text=Home');

        // Check the page URL is the correct one for the home page

        const urlIsHomePage = homePage.isHomePageUrl(page.url());
        expect(urlIsHomePage).toBe(true);
    })

    // NavBar - 'Selectors'

    test("I can navigate with the navbar into 'Selectors'", async ({ page }) => {
        await page.click('text=Selectors');
        expect(page.url().includes('selectors')).toBe(true);
    })

    // NavBar - 'Web forms' dropdown

    test("I can navigate with the navbar into Web Forms dropdown - into 'Web form - GET'", async ({ page }) => {
        await page.click('text=Web forms');
        await page.click('text=Web form - GET');
        expect(page.url().includes('webform-get')).toBe(true);
    })

    test("I can navigate with the navbar into Web Forms dropdown - into 'Web form - POST'", async ({ page }) => {
        await page.click('text=Web forms');
        await page.click('text=Web form - POST');
        expect(page.url().includes('webform-post')).toBe(true);
    })

    test("I can navigate with the navbar into Web Forms dropdown - into 'Web form - File UPLOAD'", async ({ page }) => {
        await page.click('text=Web forms');
        await page.click('text=Web form - File UPLOAD');
        expect(page.url().includes('webform-upload')).toBe(true);
    })

    // NavBar - 'Dialogs'

    test("I can navigate with the navbar into 'Dialogs'", async ({ page }) => {
        await page.click('text=Dialogs');
        expect(page.url().includes('dialogs')).toBe(true);
    })

    // NavBar - 'IFrame'

    test("I can navigate with the navbar into 'IFrame'", async ({ page }) => {
        await page.click('text=IFrame');
        expect(page.url().includes('iframe')).toBe(true);
    })
})