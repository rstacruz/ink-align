const Align = require('../lib')
const { h, renderToString } = require('ink')

test('works', () => {
  const el = h(Align.Left, { width: 10 }, 'hello')
  const output = renderToString(el)
  expect(output).toEqual('hello     ')
})
