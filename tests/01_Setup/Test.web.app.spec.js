const { test, expect } = require('@playwright/test');

test.describe('Setup - ', () => {

  test('We can load the Test Web App', async ({ page }) => {
    // Go to the test web app page
    await page.goto('/')

    // Check the page's heading text looks okay
    const title = page.locator('#watermark')
    await expect(title).toHaveText('Test Automation Practice App')
  })

})

