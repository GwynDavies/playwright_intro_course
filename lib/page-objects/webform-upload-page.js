const nameLocator = "#text";
const emailLocator = "#email";
const passwordLocator = "#password";
const searchLocator = "#search"
const numberLocator = "#number";
const phoneLocator = "#phone";
const dateLocator = "#date";
const timeLocator = "#time";
const checkBox1Locator = "#checkbox1"
const checkBox2Locator = "#checkbox2"
const radioButton1Locator = "#radiobutton1"
const radioButton2Locator = "#radiobutton2"
const selectLocator = "#select"
const textAreaLocator = "#textarea"
const urlLocator = "#url";
const colorLocator = "#color";
const rangeLocator = "#range"

const resetLocator = 'button[type="reset"]';
const submitLocator = 'button[type="submit"]';

exports.TestPage = class TestPage {
  constructor(page) {
    this.page = page;
  }

  // Page

  async goto() {
    await this.page.goto('/webform-upload');
  }

  // Text
  
  async setText(value) {
    await this.page.type(nameLocator, value);
  }

  async getText() {
    return await this.page.$eval(nameLocator, (el) => el.value);
  }

  // Submit button

  async clickSubmit() {
    await this.page.click(submitLocator);
  }
}
