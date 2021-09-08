const { TestPage } = require("../../lib/page-objects/test-page");
const { test, expect } = require('@playwright/test');
const fs = require("fs");

("use strict");

let testPage;

test.beforeEach(async ({page}) => {
  testPage = new TestPage(page);
  await testPage.goto();
});

test("Name field is settable and gettable", async ({page}) => {
  const testValue = "fname lname";

  await testPage.setName(testValue);
  expect(await testPage.getName()).toBe(testValue);

  // Using Page to retrieve handle

  const valueViaPage2 = await page.$eval("#text", (el) => el.value);
  expect(valueViaPage2).toBe(testValue);

  // Using ElementHandle to retrieve handle

  const elementHandle = await page.$("#text");
  const valueViaElementHandle = await page.evaluate(
    (el) => el.value,
    elementHandle
  );
  expect(valueViaElementHandle).toBe(testValue);

  // Checking attributes

  const isEnabled = await page.isEnabled("#text");
  expect(isEnabled).toBe(true);

  const isEditable = await page.isEditable("#text");
  expect(isEditable).toBe(true);;
});

test("Email field is settable and gettable", async   ({page}) => {
  const testValue = "fname.lname@domain.com";
  await testPage.setEmail(testValue);
  expect(await testPage.getEmail()).toBe(testValue);
});

test("Password field is settable and gettable", async   ({page}) => {
  const testValue = "secret";
  await testPage.setPassword(testValue);
  expect(await testPage.getPassword()).toBe(testValue);
});

test("Search field is settable and gettable", async   ({page}) => {
  const testValue = "search me";
  await testPage.setSearch(testValue);
  expect(await testPage.getSearch()).toBe(testValue);
});

test("Number field is settable and gettable", async   ({page}) => {
  const testValue = "60";
  await testPage.setNumber(testValue);
  expect(await testPage.getNumber()).toBe(testValue);
});

 test("Phone field is settable and gettable", async   ({page}) => {
   const testValue = "111-111-1111";
   await testPage.setPhone(testValue);
   expect(await testPage.getPhone()).toBe(testValue);
 });

test("Date field is settable and gettable",  async ({page}) => {
  const setValue = "01/06/2021";
  const expectedValue = "2021-01-06";

  await testPage.setDate(setValue);
  expect(await testPage.getDate()).toBe(expectedValue);
});
 
test("Time field is settable and gettable",  async ({page}) => {
  await testPage.setTime("10","11","PM");
  expect(await testPage.getTime()).toBe("22:11");
});

test("Checkbox fields are settable and gettable",  async ({page}) => {
  await testPage.checkCheckBox1();
  expect(await testPage.checkBox1IsChecked()).toBe(true);

  await testPage.checkCheckBox2();
  expect(await testPage.checkBox2IsChecked()).toBe(true);
});

test("Radio buttons are settable and gettable",  async ({page}) => {
  await testPage.checkRadioButton1();
  expect(await testPage.radioButton1IsChecked()).toBe(true);

  await testPage.checkRadioButton2();
  expect(await testPage.radioButton1IsChecked()).toBe(false);
  expect(await testPage.radioButton2IsChecked()).toBe(true);
});

test("Selector to be settable and gettable",  async ({page}) => {
  const testValue = "Option 1";

  // Initially not set

  expect(await testPage.getSelector()).toBeFalsy();
  expect(await testPage.getSelector()).toHaveLength(0);

  // Set and check value

  await testPage.setSelector(testValue);
  expect(await testPage.getSelector()).toBe("option1");
});

test("Textarea field to be settable and gettable",  async ({page}) => {
  const testValue = "This is me.\nI am a programmer";

  await testPage.setTextArea(testValue);
  expect(await testPage.getTextArea()).toBe(testValue);
});

test("Url field to be settable and gettable", async ({page}) => {
  const testValue = "https://www.wikipedia.org";

  await testPage.setUrl(testValue);
  expect(await testPage.getUrl()).toBe(testValue);
});

test("Color field to be settable and gettable via JavaScript", async ({page}) => {
  const testValue = "#ff0000";

  await testPage.setColor(testValue);
  expect(await testPage.getColor()).toBe(testValue);
})

test("Range field to be settable and gettable via JavaScript", async ({page}) => {
  const testValue = "75";

  await testPage.setRange75();
  expect(await testPage.getRange()).toBe(testValue);
})

test("All fields are settable", async ({page}) => {
  await testPage.setName( "fname lname")
  await testPage.setEmail("fname.lname@domain.com")
  await testPage.setPassword("secret")
  await testPage.setSearch("search me")
  await testPage.setNumber("60")
  await testPage.setPhone("111-111-1111")
  await testPage.setDate("01/06/2021")
  await testPage.setTime("10","11","PM")
  await testPage.checkCheckBox1()
  await testPage.checkCheckBox2()
  await testPage.checkRadioButton1()
  await testPage.setSelector("Option 1")
  await testPage.setTextArea("This is me.\nI am a programmer")
  await testPage.setUrl( "https://www.wikipedia.org")
  await testPage.setColor("#ff0000");
  await testPage.setRange75();

  await page.waitForTimeout(2000)

  await testPage.clickSubmit()

  // Pause so we can see the result of the GET
  await page.waitForTimeout(1000)
})