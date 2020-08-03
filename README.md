# yiff | made by [hokkqi](https://wrwlf.co "my homepage")

[![NPM](https://nodei.co/npm/yiff.png)](https://nodei.co/npm/yiff/)

If you need Support or want more Information, join [my discord server](https://discord.gg/He2822y "a link to my discord server")

## ⭐️ Supported APIs

- [x] furry.bot
- [x] e621
- [x] e926
- [x] shibe.online
- [x] sheri.bot
- [ ] randomfox.ca

## ❗️ Requirements

▶️ [nodejs latest](https://nodejs.org/en/ "A link to the node.js website")

`Optional/Paid`

- [sheri.bot](https://sheri.bot/ "A link to the sheri.bot website") API Key

## 📦 Installing

1. `cd path/to/your/project`
2. Run `npm i yiff`

This Module relies on [phin](https://npmjs.org/package/phin "A link to the phin package on npm") and [chalk](https://npmjs.org/package/chalk "A link to the chalk package on npm"), so if it doesn't work try to install them using `npm i phin && npm i chalk`

# Usage
```js
let yiff = require("yiff") // JS
import yiff from "yiff" // TS

// Initializing each API works the same.
// Some, like Sheri, might require a API Key.

// Each API can also customize your User-Agent 
// if you follow the example below
// but this is not required

// the Default User-Agent is
// yiff/<version> by hokkqi

let config = { 
  creator: "<Your Username>", 
  name: "<Name of your Project>",
  version: "<Version of your Project>"
}
let e9 = new yiff.e926(config)

// After that, you can use async/await or .then() to request Images

e9.request("<Your Tags>").then(r => console.log(r))

```



## ❓ FAQ

> **Q:** Will you add other APIs as well?\
> **A:** Depends on if they're either free or I get an all-access token

## Contributing & Issues

Feel free to make a Pull request and fix some things, otherwise just open a Issue or join [my discord server](https://discord.gg/He2822y) and let me know what you want added!
