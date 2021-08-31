const sliderHandleLocator = "#pass-rate-slider";
const sliderValueLocator = "#pass_rate";

exports.MousePage = class MousPagee {
  constructor(page) {
    this.page = page;
  }

  // Navigate

  async goto() {
    await this.page.goto("http://localhost:8080/mouse-slider");
  }

  // Slider bar

  async getSliderElementHandle() {
    return await this.page.$(sliderHandleLocator);
  }

  // Slider value

  async getSliderValue() {
    return await this.page.$eval(sliderValueLocator, (e) => e.innerHTML);
  }
};
