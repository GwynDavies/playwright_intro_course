const internalIframeLocator = '#IFrameContact'
const internalIframeSubscribedMessageLocator = '#subscribed_mesg'
const internalIframeEmailLocator = '#email'
const internalIframeSubscribeButtonLocator = '#subscribeBtn'

const externalIframeLocator = '#IFrameYouTube'
const externalIframeInitialPlayButtonLocator = '.ytp-large-play-button'
const externalIframePauseButtonLocator = '[title="Pause (k)"]'

exports.IframePage = class IframePage {

 url() {
  return "/iframe"
}

/*
 * Internal IFrame
 */

 internalIframe() {
  return internalIframeLocator
}

 internalIframeSubscribedMessage() {
  return internalIframeSubscribedMessageLocator
}

 internalIframeEmailField() {
  return internalIframeEmailLocator
}

 internalIframeSubscribeButton() {
  return internalIframeSubscribeButtonLocator
}

/*
 * External IFrame
 */

 externalIframe() {
  return externalIframeLocator
}

 externalIframeInitialPlayButton() {
  return externalIframeInitialPlayButtonLocator
}

 externalIframePauseButton() {
  return externalIframePauseButtonLocator
}
}

// export {
//   url,
//   internalIframe,
//   internalIframeSubscribedMessage,
//   internalIframeEmailField,
//   internalIframeSubscribeButton,
//   externalIframe,
//   externalIframeInitialPlayButton,
//   externalIframePauseButton
// }