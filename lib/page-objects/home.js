const navBarLocator = 'nav'
const navBarAssertionsDropDownLocator = '#assertionsDropdown'
const navBarWebFormsDropDownLocator = '#webFormsDropdown'

const browserTypeButtonLocator = '#browser_type'
const browserTypesLocator = '#browser_div'
const browserChromeTrueFalseLocator = '.output-chrome'
const browserEdgeTrueFalseLocator = '.output-edge'
const browserFireFoxTrueFalseLocator = '.output-firefox'
const browserOperaTrueFalseLocator = '.output-opera'

exports.HomePage = class HomePage {

  url() {
    return "/"
  }

  navBar() {
    return navBarLocator
  }

  navBarAssertionsDropDownField() {
    return navBarAssertionsDropDownLocator
  }

  navBarWebFormsDropDownField() {
    return navBarWebFormsDropDownLocator
  }

  browserTypeButton() {
    return browserTypeButtonLocator
  }

  browserTypes() {
    return browserTypesLocator
  }

  browserNameChromium() {
    return 'chromium'
  }
  
  browserChromiumLocatorClass() {
    return '.output-chromium'
  }

  browserNameFirefox() {
    return 'firefox'
  }
  
  browserFirefoxLocatorClass() {
    return '.output-firefox'
  }

  browserNameWebkit() {
    return 'webkit'
  }
  
  browserWebkitLocatorClass() {
    return '.output-webkit'
  }


  // Are we using the given broser - true/false

  browserValueField(browserName) {
    if (browserName === 'Chrome') {
      return browserChromeValueField()
    } else if (browserName === 'Edge') {
      return browserEdgeValueField()
    } else if (browserName === 'Firefox') {
      return browserFireFoxValueField()
    } else if (browserName === 'Opera') {
      return browserOperaValueField()
    } else {
      throw new Error("Browser was not recognized =" + browserName)
    }
  }

  // Are we using Chrome - true/false

  browserChromeValueField() {
    return browserChromeTrueFalseLocator
  }

  // Are we using  Edge - true/false

  browserEdgeValueField() {
    return browserEdgeTrueFalseLocator
  }

  // Are we using  Firefox - true/false

  browserFireFoxValueField() {
    return browserFireFoxTrueFalseLocator
  }

  //  Are we using Opera - true/false

  browserOperaValueField() {
    return browserOperaTrueFalseLocator
  }
}

// export {
//   url,
//   navBar,
//   navBarAssertionsDropDownField,
//   navBarWebFormsDropDownField,
//   browserTypeButton,
//   browserTypes,
//   browserValueField,
//   browserChromeValueField,
//   browserEdgeValueField,
//   browserFireFoxValueField,
//   browserOperaValueField
// }