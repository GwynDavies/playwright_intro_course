const { expect } = require('@playwright/test');

const nameLocator = "#text";
const emailLocator = "#email";
const passwordLocator = "#password";
const colorLocator = "#color";
const rangeLocator = "#range";
const submitLocator = 'button[type="submit"]';

exports.TestPage = class TestPage {
  constructor(page) {
    this.page = page;
  }

  // Page

  async goto() {
    await this.page.goto('/webform-post');
  }
 
  // Check field value

  async checkValue(locator, value) {
    await expect( this.page.locator(locator)).toHaveValue(value);
  }

  // Text
  
  async setText(value) {
    await this.page.type(nameLocator, value);
  }

  async getText() {
    return await this.page.$eval(nameLocator, (el) => el.value);
  }

  async checkText(value) {
    return await this.checkValue(nameLocator, value);
  }

  // Email

  async setEmail(value) {
    await this.page.type(emailLocator, value);
  }

  async getEmail() {
    return await this.page.$eval(emailLocator, (el) => el.value);
  }

  async checkEmail(value) {
    return await this.checkValue(emailLocator, value);
  }

  // Password

  async setPassword(value) {
    await this.page.type(passwordLocator, value);
  }

  async getPassword() {
    return await this.page.$eval(passwordLocator, (el) => el.value);
  }

  async checkPassword(value) {
    return await this.checkValue(passwordLocator, value);
  }

  // Color

  async setColor(value) {
    await this.page.$eval("#color", (e, v) => (e.value = v), value);
  }

  async getColor() {
    return await this.page.$eval(colorLocator, (el) => el.value);
  }

  async checkColor(value) {
    return await this.checkValue(colorLocator, value);
  }

  // Range

  async setRange(value) {
    return await this.page.$eval(
      rangeLocator,
      (el,v) => {
        el.value = v.toString(); 
        el.dispatchEvent(new Event("change"));
      }, value
    )
  }
  
  async getRange() {
    return await this.page.$eval(rangeLocator, (el) => el.value);
  }

  async checkRange(value) {
    return await this.checkValue(rangeLocator, value.toString());
  }

  // Submit button

  async clickSubmit() {
    await this.page.click(submitLocator);
  }
}
