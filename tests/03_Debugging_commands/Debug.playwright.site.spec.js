const { test, expect } = require('@playwright/test');

test.describe('Debugging - ', () => {

  test('We can load the Playwright debugging page', async ({ page }) => {
    // Go to the Playwright web page
    await page.goto('https://playwright.dev/');

    // Check the Home page's title looks okay
    const title = page.locator('.navbar__inner .navbar__title')
    await expect(title).toHaveText('Playwright')

    // Click 'Docs' on navbar
    await page.click('a[href="/docs/intro"]')

    // Click 'Debugging tools' from menu list on the left
    await page.click('a[href="/docs/debug"]')
    
    // Get text of first H2 DOM object and check it matches
    expect(await page.textContent('h2 >> nth=0'))
        .toBe('Playwright Inspector#')
  })

})

