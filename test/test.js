var assert = require('assert')
var getEmbeddedStyles = require('..')

describe('get-embedded-styles', function () {

  it('should return embedded styling', function () {
    assert.equal(getEmbeddedStyles('<style>.foo { color: tomato; }</style><h1 class="foo">Hello, world!</h1>'), '.foo { color: tomato; }')
  })

  it('should concatenate multiple style tags', function () {
    assert.equal(getEmbeddedStyles('<style>.foo { color: tomato; }</style><br><style>.bar { color: green; }</style>'), '.foo { color: tomato; }.bar { color: green; }')
  })

  it('should return an empty string if there is no embedded styling', function () {
    assert.equal(getEmbeddedStyles('ohai'), '')
  })
})
