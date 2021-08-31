const textLocator = "#text"
const emailLocator = "#email"
const passwordLocator = "#password"
const searchLocator = "#search"
const numberLocator = "#number"
const phoneLocator = "#phone"
const dateLocator = "#date"
const timeLocator = "#time"
const checkBox1Locator = "#checkbox1"
const checkBox2Locator = "#checkbox2"
const radioButton1Locator = "#radiobutton1"
const radioButton2Locator = "#radiobutton2"
const selectLocator = "#select"
const textAreaLocator = "#textarea"
const urlLocator = "#url"
const colorLocator = "#color"
const rangeLocator = "#range"
const submitLocator = 'button[type="submit"]'

function url() {
  return "/webform-get"
}

function textField() {
  return textLocator
}

function emailField() {
  return emailLocator
}

function passwordField() {
  return passwordLocator
}

function searchField() {
  return searchLocator
}

function numberField() {
  return numberLocator
}

function phoneField() {
  return phoneLocator
}

function dateField() {
  return dateLocator
}

function timeField() {
  return timeLocator
}

function checkBox1Field() {
  return checkBox1Locator
}

function checkBox2Field() {
  return checkBox2Locator
}

function radioButton1Field() {
  return radioButton1Locator
}

function radioButton2Field() {
  return radioButton2Locator
}

function selectField() {
  return selectLocator
}

function textAreaField() {
  return textAreaLocator
}

function urlField() {
  return urlLocator
}

function colorField() {
  return colorLocator
}

function rangeField() {
  return rangeLocator
}

function submitButton() {
  return submitLocator
}

export {
  url,
  textField,
  emailField,
  passwordField,
  searchField,
  numberField,
  phoneField,
  dateField,
  timeField,
  checkBox1Field,
  checkBox2Field,
  radioButton1Field,
  radioButton2Field,
  selectField,
  textAreaField,
  urlField,
  colorField,
  rangeField,
  submitButton
}