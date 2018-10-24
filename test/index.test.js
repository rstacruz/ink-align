import { Left, Right } from '../src'
import { Color, h, renderToString } from 'ink'

describe('Left', () => {
  test('works', () => {
    const el = <Left width={10}>hello</Left>
    const output = renderToString(el)
    expect(output).toEqual('hello     ')
  })

  test('supports color', () => {
    const inside = (
      <>
        <Color bold>he</Color>
        llo
      </>
    )
    const el = <Left width={10}>{inside}</Left>
    const output = renderToString(el)
    expect(output).toEqual(renderToString(inside) + '     ')
  })

  test('auto-infers width', () => {
    const el = <Left>hello</Left>
    const output = renderToString(el)
    expect(output).toMatch(/^hello *$/)
  })

  test('can exceed width', () => {
    const el = <Left width={2}>hello</Left>
    const output = renderToString(el)
    expect(output).toEqual('hello')
  })
})

describe('Right', () => {
  test('works', () => {
    const el = <Right width={10}>hello</Right>
    const output = renderToString(el)
    expect(output).toEqual('     hello')
  })

  test('supports color', () => {
    const inside = (
      <>
        <Color bold>he</Color>
        llo
      </>
    )
    const el = <Right width={10}>{inside}</Right>
    const output = renderToString(el)
    expect(output).toEqual('     ' + renderToString(inside))
  })

  test('auto-infers width', () => {
    const el = <Right>hello</Right>
    const output = renderToString(el)
    expect(output).toMatch(/^ *hello$/)
  })

  test('can exceed width', () => {
    const el = <Right width={2}>hello</Right>
    const output = renderToString(el)
    expect(output).toEqual('hello')
  })
})

describe('Right multiline', () => {
  test('works', () => {
    const el = (
      <Right multiline width={10}>
        hello
      </Right>
    )
    const output = renderToString(el)
    expect(output).toEqual('     hello')
  })
  test('works with multiline', () => {
    const el = (
      <Right multiline width={10}>
        hello
        <br />
        you
      </Right>
    )
    const output = renderToString(el)
    expect(output).toEqual('     hello\n       you')
  })

  test('supports color', () => {
    const inside = (
      <>
        <Color bold>he</Color>
        llo
      </>
    )
    const el = <Right width={10}>{inside}</Right>
    const output = renderToString(el)
    expect(output).toEqual('     ' + renderToString(inside))
  })

  test('auto-infers width', () => {
    const el = <Right>hello</Right>
    const output = renderToString(el)
    expect(output).toMatch(/^ *hello$/)
  })

  test('can exceed width', () => {
    const el = <Right width={2}>hello</Right>
    const output = renderToString(el)
    expect(output).toEqual('hello')
  })
})
