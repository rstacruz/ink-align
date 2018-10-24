import { h, renderToString, Component } from 'ink'
import strip from 'strip-ansi'
import Ansi from 'ansi-escapes'

/**
 * Aligns something to both left and right.
 *
 * @example
 *     <Side
 *       left={<span>hello</span>}
 *       right={<span>world</span>} />
 */

export const Side = ({ width, right, left }) => {
  if (!width) width = process.stdout.columns

  const leftStr = renderToString(left || '')
  const rightStr = renderToString(right || '')

  // Force an extra space in between if both left and right are given
  const minSpaces = leftStr.length && rightStr.length ? 1 : 0

  // Cap the minimum to 1 or 0 (depending on the above)
  const spaces = Math.max(
    width - strip(leftStr).length - strip(rightStr).length,
    minSpaces
  )

  return (
    <span>
      {leftStr}
      {Array(spaces + 1).join(' ')}
      {rightStr}
    </span>
  )
}

/**
 * Aligns to the left
 *
 * @example
 *     <Left width={40}>
 *       <span>hello</span>
 *     </Left>
 */

export const Left = ({ width, children }) => {
  return <Side width={width} left={<span>{children}</span>} />
}

/**
 * Aligns to the right
 *
 * @example
 *     <Right width={40}>
 *       <span>hello</span>
 *     </Right>
 */

export const Right = ({ width, children }) => {
  return <Side width={width} right={<span>{children}</span>} />
}

/**
 * Aligns stuff in the vertical-middle of the screen
 *
 * @example
 *     <Middle>
 *       <span>hello</span>
 *     </Middle>
 */

export class Middle extends Component {
  constructor(props) {
    super(props)
    process.stdout.write(Ansi.clearScreen)
  }

  render() {
    const { children, height } = this.props
    const str = renderToString(<span>{children}</span>)
    const lines = str.split('\n').length
    const padding = Math.floor(((height || process.stdout.rows) - lines) / 2)
    return (
      <span>
        {Array(padding + 1).join('\n')}
        {str}
      </span>
    )
  }
}

/**
 * Aligns something to the horizontal center of the screen.
 *
 * @example
 *     <Center>
 *       <span>hello</span>
 *     </Center>
 */

export const Center = ({ width, children }) => {
  if (!width) width = process.stdout.columns

  const str = renderToString(children)
  const spaces = Math.max(width - strip(str).length, 1)

  return (
    <span>
      {Array(Math.floor(spaces / 2) + 1).join(' ')}
      {str}
      {Array(Math.ceil(spaces / 2) + 1).join(' ')}
    </span>
  )
}
