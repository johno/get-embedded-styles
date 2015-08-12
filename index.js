'use strict'
var cheerio = require('cheerio')
var isPresent = require('is-present')

module.exports = function getEmbeddedStyles (html) {
  if (typeof html !== 'string') {
    throw new TypeError('get-embedded-styles expected a string')
  }

  var embeddedStyles = []
  cheerio.load(html)('style').each(function (i, element) {
    element.children.forEach(function (child) {
      embeddedStyles.push(child.data)
    })
  })


  return embeddedStyles.join('') || ''
}
