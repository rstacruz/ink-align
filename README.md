<p align='center'>
<br><img src='https://user-images.githubusercontent.com/74385/47445092-a0821980-d7ea-11e8-8771-6014894d4b49.png' width='160'><br>
</p>

<h1 align='center'>ink-align</h1>

<p align='center'>
<em>Align CLI text using Ink components</em>
</p>

<br>

:warning: Work in progress! This allows you to align text in [Ink][ink] (React for command-line apps). Supports colors and everything.

## Basic examples

You can align horizontally using the `Left`, `Center` and `Right` components.

```js
import { render, h } from 'ink'
import { Left, Center, Right } from 'ink-align'

render(
  <div>
    <Left>I am left aligned</Left>
    <Right>I am right aligned</Right>
    <Center>I am center aligned</Center>
  </div>
)
```

You can align vertically using the `Middle` component. (Tip: you can combine this with _Center_!)

```js
import { render, h } from 'ink'
import { Center, Middle } from 'ink-align'

render(
  <Middle>
    <Center>Hello there.</Center>
  </Middle>
)
```

[ink]: https://yarnpkg.com/en/package/ink

## Thanks

**ink-align** © 2018+, Rico Sta. Cruz. Released under the [MIT] License. <br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]). <br>
_(Thanks Alina Oleynik for the [icon](https://thenounproject.com/term/alignment/880191)!)_

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[![](https://img.shields.io/github/followers/rstacruz.svg?style=social&label=@rstacruz)](https://github.com/rstacruz) &nbsp;
[![](https://img.shields.io/twitter/follow/rstacruz.svg?style=social&label=@rstacruz)](https://twitter.com/rstacruz)

[mit]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/ink-align/contributors
