const { test, expect } = require('@playwright/test');

test.describe('Setup - ', () => {

  test('We can load the Playwright web page', async ({ page }) => {
    // Go to the Playwright web page
    await page.goto('https://playwright.dev/');

    // Check the page's title looks okay
    const title = page.locator('.navbar__inner .navbar__title')
    await expect(title).toHaveText('Playwright')
  })

})

