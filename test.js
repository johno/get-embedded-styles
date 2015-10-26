import test from 'ava'
import getEmbeddedStyles from './'

test('should return embedded styling', t => {
  t.plan(1)

  t.same(getEmbeddedStyles('<style>.foo { color: tomato; }</style><h1 class="foo">Hello, world!</h1>'), '.foo { color: tomato; }')
})

test('should concatenate multiple style tags', t => {
  t.plan(1)

  t.same(getEmbeddedStyles('<style>.foo { color: tomato; }</style><br><style>.bar { color: green; }</style>'), '.foo { color: tomato; }.bar { color: green; }')
})

test('should return an empty string if there is no embedded styling', t => {
  t.plan(1)

  t.same(getEmbeddedStyles('ohai'), '')
})
