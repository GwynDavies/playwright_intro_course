const {expect} = require('@playwright/test');

const nameLocator = "#text";
const emailLocator = "#email";
const passwordLocator = "#password";
const searchLocator = "#search";
const numberLocator = "#number";
const phoneLocator = "#phone";
const dateLocator = "#date";
const timeLocator = "#time";
const checkBox1Locator = "#checkbox1";
const checkBox2Locator = "#checkbox2";
const radioButton1Locator = "#radiobutton1";
const radioButton2Locator = "#radiobutton2";
const selectLocator = "#select";
const textAreaLocator = "#textarea";
const urlLocator = "#url";
const colorLocator = "#color";
const rangeLocator = "#range";
const resetLocator = 'button[type="reset"]';
const submitLocator = 'button[type="submit"]';

exports.TestPage = class TestPage {
  constructor(page) {
    this.page = page;
  }

  // Page

  async goto() {
    await this.page.goto('/webform-get');
  }

  // Keyboard

  async pressTab() {
    await this.page.keyboard.press('Tab');
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

  // Search
  
  async setSearch(value) {
    await this.page.type(searchLocator, value);
  }

  async getSearch() {
    return await this.page.$eval(searchLocator, (el) => el.value);
  }

  async checkSearch(value) {
    return await this.checkValue(searchLocator, value);
  }

  // Number

  async setNumber(value) {
    await this.page.type(numberLocator, value);
  }

  async getNumber() {
    return await this.page.$eval(numberLocator, (el) => el.value);
  }

  async checkNumber(value) {
    return await this.checkValue(numberLocator, value);
  }

  // Phone

  async setPhone(value) {
    await this.page.type(phoneLocator, value);
  }

  async getPhone() {
    return await this.page.$eval(phoneLocator, (el) => el.value);
  }

  async checkPhone(value) {
    return await this.checkValue(phoneLocator, value);
  }

  // Date

  async setDate(value) {
    await this.page.type(dateLocator, value);
  }

  async getDate() {
    return await this.page.$eval(dateLocator, (el) => el.value);
  }

  async checkDate(value) {
    return await this.checkValue(dateLocator, value);
  }

  // Time

  async setTime(hour, min, amPm) {
    await this.page.type(timeLocator, hour);
    await this.page.type(timeLocator, min);
    await this.page.type(timeLocator, amPm);
  }

  async getTime() {
    return await this.page.$eval(timeLocator, (el) => el.value);
  }

  async checkTime(value) {
    return await this.checkValue(timeLocator, value);
  }

  // Checkboxes

  async checkCheckBox1() {
    await this.page.check(checkBox1Locator);
  }

  async checkCheckBox2() {
    await this.page.check(checkBox2Locator);
  }

  async checkBox1IsChecked() {
    await expect( this.page.locator(checkBox1Locator)).toBeChecked();
  }

  async checkBox2IsChecked() {
    await expect( this.page.locator(checkBox2Locator)).toBeChecked();
  }


  // Radio buttons

  async checkRadioButton1() {
    await this.page.check(radioButton1Locator);
  }

  async checkRadioButton2() {
    await this.page.check(radioButton2Locator);
  }

  async radioButton1IsChecked() {
    await expect( this.page.locator(radioButton1Locator)).toBeChecked();
  }
  
  async radioButton1IsNotChecked() {
    await expect( this.page.locator(radioButton1Locator)).not.toBeChecked();
  }

  async radioButton2IsChecked() {
    await expect( this.page.locator(radioButton2Locator)).toBeChecked();
  }

  // Select

  async setSelect(value) {
    await this.page.selectOption(selectLocator, value);
  }

  async getSelect() {
    return await this.page.$eval(selectLocator, (el) => el.value);
  }

  async checkSelect(value) {
    return await this.checkValue(selectLocator, value);
  }

  // TextArea

  async setTextArea(value) {
    await this.page.type(textAreaLocator, value);
  }

  async getTextArea() {
    return await this.page.$eval(textAreaLocator, (el) => el.value);
  }

  async checkTextArea(value) {
    return await this.checkValue(textAreaLocator, value);
  }

  // URL

  async setUrl(value) {
    await this.page.type(urlLocator, value);
  }

  async getUrl() {
    return await this.page.$eval(urlLocator, (el) => el.value);
  }

  async checkUrl(value) {
    return await this.checkValue(urlLocator, value);
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
