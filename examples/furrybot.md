# Furry Bot API

First you need to require the Module

```js
let yiff = require('yiff')
```

After doing that you have 3 Different Choices when it comes to what you want

- yiff.furrybot.sfw
- yiff.furrybot.animals
- yiff.furrybot.nsfw

All of those function the same, they're just there to differentiate the Endpoints.

I suggest writing everything, that uses this Module actively, in async. That way you don't have to do everything in the `.then()` of the Request.

```js
let yiff = require('yiff')
yiff.furrybot.
```