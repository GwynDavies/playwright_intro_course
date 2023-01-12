// playwright.config.js
// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  // Look for test files in the "tests" directory, relative to this configuration file
  testDir: 'tests',

  // Forbid test.only on CI
  forbidOnly: !!process.env.CI,

  // Limit the number of workers on CI, use default locally
  workers: process.env.CI ? 2 : undefined,

  use: {
    browserName: 'chromium',
    //browserName: 'firefox',
    //browserName: 'webkit',

    baseURL: "http://localhost:8080",
    actionTimeout:20000,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
};

module.exports = config;
