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
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const pug = require('pug')
const config = require('./test_web_app_config')

// ----------------------------------------------------------------------
// Express server
// ----------------------------------------------------------------------

const app = express()
app.listen(config.port)
console.log('HTTP server listening on port ', config.port)

app.set('view engine', 'pug')

app.use(bodyParser.text({
  type: function (req) {
    return 'text'
  }
}))

// ----------------------------------------------------------------------
// Index 
// ----------------------------------------------------------------------

app.get('/', function (req, res) {
  res = res.status(200)
  res.render('index')
})

// ----------------------------------------------------------------------
// Locators
// ----------------------------------------------------------------------

app.get('/locators', function (req, res) {
  res = res.status(200)
  res.render('locators')
})

// ----------------------------------------------------------------------
// Assertions - Should
// ----------------------------------------------------------------------

app.get('/should-be', function (req, res) {
  res = res.status(200)
  res.render('should_be')
})

app.get('/should-have', function (req, res) {
  res = res.status(200)
  res.render('should_have')
})

app.get('/should-include', function (req, res) {
  res = res.status(200)
  res.render('should_include')
})

app.get('/should-contain', function (req, res) {
  res = res.status(200)
  res.render('should_contain')
})

app.get('/should-match', function (req, res) {
  res = res.status(200)
  res.render('should_match')
})

app.get('/should-exist', function (req, res) {
  res = res.status(200)
  res.render('should_exist')
})

app.get('/should-equal', function (req, res) {
  res = res.status(200)
  res.render('should_equal')
})

// ----------------------------------------------------------------------
// Web forms
// ----------------------------------------------------------------------

app.get('/webform-get', function (req, res) {
  res = res.status(200)
  res.render('webform-get')
})

app.get('/webform-post', function (req, res) {
  res = res.status(200)
  res.render('webform-post')
})

app.get('/webform-upload', function (req, res) {
  res = res.status(200)
  res.render('webform-upload')
})

// ----------------------------------------------------------------------
// Dialogs
// ----------------------------------------------------------------------

app.get('/dialogs', function (req, res) {
  res = res.status(200)
  res.render('dialogs')
})

// ----------------------------------------------------------------------
// IFrame
// ----------------------------------------------------------------------

app.get('/iframe', function (req, res) {
  res = res.status(200)
  res.render('iframe')
})

app.get('/iframe_email_subscribe', function (req, res) {
  res = res.status(200)
  res.render('iframe_email_subscribe')
})

// ----------------------------------------------------------------------
// Echo form data
// ----------------------------------------------------------------------

app.get('/echo-webform-get', function (req, res) {
  res = res.status(200)
  res.render('echo-get', {
    layout: 'layout',
    json: req.query
  })
})

app.post('/echo-webform-post', function (req, res) {
  res = res.status(200)
  let formValues = req.body.split("&")
  res.render('echo-post', {
    layout: 'layout',
    json: formValues
  })
})

app.post('/echo-webform-file-upload', function (req, res) {
  res = res.status(200)

  let formValues = req.body.split("\r\n")
  res.render('echo-upload', {
    layout: 'layout',
    contents: formValues
  })
})