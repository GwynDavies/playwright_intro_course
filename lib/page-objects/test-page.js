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
    await this.page.goto("http://localhost:8080/webform-get");
  }

  // Keyboard

  async pressTab() {
    await this.page.keyboard.press("Tab");
  }

  // Text
  
  async setName(value) {
    await this.page.type(nameLocator, value);
  }

  
  async getName() {
    return await this.page.$eval(nameLocator, (el) => el.value);
  }

  async nameIsFocused() {
    return await this.page.$eval(
      nameLocator,
      (el) => el === document.activeElement
    );
  }

  // Email

  async setEmail(value) {
    await this.page.type(emailLocator, value);
  }

  async getEmail() {
    return await this.page.$eval(emailLocator, (el) => el.value);
  }

  async emailIsFocused() {
    return await this.page.$eval(
      emailLocator,
      (el) => el === document.activeElement
    );
  }

  // Password

  async passwordIsFocused() {
    return await this.page.$eval(
      passwordLocator,
      (el) => el === document.activeElement
    );
  }

  async setPassword(value) {
    await this.page.type(passwordLocator, value);
  }

  async getPassword() {
    return await this.page.$eval(passwordLocator, (el) => el.value);
  }

  // Search
  
  async setSearch(value) {
    await this.page.type(searchLocator, value);
  }

  async getSearch() {
    return await this.page.$eval(searchLocator, (el) => el.value);
  }

  // Number

  async setNumber(value) {
    await this.page.type(numberLocator, value);
  }

  async getNumber() {
    return await this.page.$eval(numberLocator, (el) => el.value);
  }

  async numberIsFocused() {
    return await this.page.$eval(
      numberLocator,
      (el) => el === document.activeElement
    );
  }

  // Phone

  async setPhone(value) {
    await this.page.type(phoneLocator, value);
  }

  async getPhone() {
    return await this.page.$eval(phoneLocator, (el) => el.value);
  }

  async phoneIsFocused() {
    return await this.page.$eval(
      phoneLocator,
      (el) => el === document.activeElement
    );
  }

  // Date

  async setDate(value) {
    await this.page.type(dateLocator, value);
  }

  async getDate() {
    return await this.page.$eval(dateLocator, (el) => el.value);
  }

  async dateIsFocused() {
    return await this.page.$eval(
      dateLocator,
      (el) => el === document.activeElement
    );
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

  async timeIsFocused() {
    return await this.page.$eval(
      timeLocator,
      (el) => el === document.activeElement
    );
  }

  // Checkboxes

  async checkCheckBox1() {
    await this.page.check(checkBox1Locator);
  }

  async checkCheckBox2() {
    await this.page.check(checkBox2Locator);
  }

  async checkBox1IsChecked() {
    return await this.page.isChecked(checkBox1Locator);
  }

  async checkBox2IsChecked() {
    return await this.page.isChecked(checkBox2Locator);
  }

  // async favoriteFoodBananaIsFocused() {
  //   return await this.page.$eval(
  //     favoriteFoodBananaLocator,
  //     (el) => el === document.activeElement
  //   );
  // }

  // async favoriteFoodAppleIsFocused() {
  //   return await this.page.$eval(
  //     favoriteFoodAppleLocator,
  //     (el) => el === document.activeElement
  //   );
  // }

  // Radio buttons

  async checkRadioButton1() {
    await this.page.check(radioButton1Locator);
  }

  async checkRadioButton2() {
    await this.page.check(radioButton2Locator);
  }

  async radioButton1IsChecked() {
    return await this.page.isChecked(radioButton1Locator);
  }

  async radioButton2IsChecked() {
    return await this.page.isChecked(radioButton2Locator);
  }

  // async genderMaleIsFocused() {
  //   return await this.page.$eval(
  //     genderMaleLocator,
  //     (el) => el === document.activeElement
  //   );
  // }

  // async genderFemaleIsFocused() {
  //   return await this.page.$eval(
  //     genderFemaleLocator,
  //     (el) => el === document.activeElement
  //   );
  // }

  // Selector

  async setSelector(value) {
    await this.page.type(selectLocator, value);
  }

  async getSelector() {
    return await this.page.$eval(selectLocator, (el) => el.value);
  }

  async selectorIsFocused() {
    return await this.page.$eval(
      selectLocator,
      (el) => el === document.activeElement
    );
  }

  // TextArea

  async setTextArea(value) {
    await this.page.type(textAreaLocator, value);
  }

  async getTextArea() {
    return await this.page.$eval(textAreaLocator, (el) => el.value);
  }

  async textAreaIsFocused() {
    return await this.page.$eval(
      textAreaLocator,
      (el) => el === document.activeElement
    );
  }

  // URL

  async setUrl(value) {
    await this.page.type(urlLocator, value);
  }

  async getUrl() {
    return await this.page.$eval(urlLocator, (el) => el.value);
  }

  async urlIsFocused() {
    return await this.page.$eval(
      urlLocator,
      (el) => el === document.activeElement
    );
  }

  // Color

  async setColor(value) {
    await this.page.$eval("#color", (e, value) => (e.value = value), value);
  }

  async getColor() {
    return await this.page.$eval(colorLocator, (el) => el.value);
  }

  async colorIsFocused() {
    return await this.page.$eval(
      colorLocator,
      (el) => el === document.activeElement
    );
  }

  // Range

  async setRange75() {
    return await this.page.$eval(
      rangeLocator,
      (el) => {el.value = "75"; el.dispatchEvent(new Event("change"))}
      //(el) => el.value = "75"
    );
  }
  
  async getRange() {
    return await this.page.$eval(rangeLocator, (el) => el.value);
  }

  // Reset button

  async resetButtonIsFocused() {
    return await this.page.$eval(
      resetLocator,
      (el) => el === document.activeElement
    );
  }

  // Submit button

  async clickSubmit() {
    await this.page.click(submitLocator);
  }

  async submitButtonIsFocused() {
    return await this.page.$eval(
      submitLocator,
      (el) => el === document.activeElement
    );
  }
};
