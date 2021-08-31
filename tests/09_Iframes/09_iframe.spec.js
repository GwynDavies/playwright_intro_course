/**
 * MIT License
 *
 * Copyright (c) 2021 Gwyn M. Davies
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

("use strict");

const { IframePage } = require("../../lib/page-objects/iframe")
const { test, expect } = require('@playwright/test');

test.describe('Iframes', () => {

  test("It is possible to use an internal iframe", async ({page}) => {
    const iframePage = new IframePage()

    await page.goto("/iframe");

    await page.waitForTimeout(1000)

    // Dump all the iframes
    dumpFrameTree(page.mainFrame(), '')

    function dumpFrameTree(frame, indent){
      let u = frame.url
   
      console.log(indent + frame.url())
      for(const child of frame.childFrames()){
        dumpFrameTree(child, indent+'  ')
      }
    }

    // Scroll down so we can access the YouTube player
    //await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Get the first iframe
    let iframe = await page.mainFrame().childFrames()[0];
    console.log("IFrame URL", iframe.url())

    const content1 = await iframe.textContent('#prompt_mesg')
    await expect(content1).toBe('Send updates to my inbox ...')


    // Set email address and click 'Subscribe' button
    await iframe.type(iframePage.internalIframeEmailField(), "fname.lname@localhost.com")
    await iframe.click(iframePage.internalIframeSubscribeButton())

    // Check 'subscribed' message is now visible and has correct message
  
    const content = await iframe.textContent('#subscribed_mesg')
    await expect(content).toBe('You are now subscribed!')
    //  const messageLocator = page.locator('#subscribed_mesg')
    // await expect(messageLocator).toHaveValue('You are now subscribed!')
    // await expect(messageLocator).toEqual('You are now subscribed!')

    // Give it a chance to play some discernable content
    await page.waitForTimeout(1000)
  })

  test("It is possible to use an external iframe", async ({page}) => {
    const iframePage = new IframePage()

    await page.goto("/iframe");

    await page.waitForTimeout(1000)

    // Dump all the iframes
    dumpFrameTree(page.mainFrame(), '')

    function dumpFrameTree(frame, indent){
      let u = frame.url
   
      console.log(indent + frame.url())
      for(const child of frame.childFrames()){
        dumpFrameTree(child, indent+'  ')
      }
    }

    // Scroll down so we can access the YouTube player
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Needed for headless mode, else does not scroll down in time for play button below to be clickable
    await page.waitForTimeout(1000)

    let iframe = await page.mainFrame().childFrames()[1];
    console.log("IFrame URL", iframe.url())

    // Press large centered play button
    await iframe.click(iframePage.externalIframeInitialPlayButton(), {force:true, timeout:10000})

    // Give it a chance to play some discernable content
    await page.waitForTimeout(10000)

    // Press pause button
    await iframe.click('[title="Pause (k)"]', {timeout:5000, force:true})
  })
})

