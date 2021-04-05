# yiff by [Lio](https://wrwlf.co "my homepage")

[![NPM](https://nodei.co/npm/yiff.png)](https://nodei.co/npm/yiff/)

## **VERSION 3 IS A BREAKING CHANGE**

### **\*Do not** update from v2 if your current code is still based on v2\*

If you need Support or want more Information, join [my discord server](https://discord.gg/He2822y "a link to my discord server")

## ⭐️ Supported APIs

- e621.net
- e926.net
- [yiff.rest](https://yiff.rest)
- [sheri.bot](https://sheri.bot)
- [shibe.online](https://shibe.online)
- randomfox.ca
- [api.floofy.dev](https://floofy.dev)
- [gelbooru.com](https://gelbooru.com)

**Yiff, by default, uses the main [Killswitch Instance](https://yiff.click) as a Proxy for any Requests.**

# Usage

```ts
import Yiff from "yiff";

// every object in the config is optional
let config = {
  useragent: `Project/version (website)`;
    killswitch: {
        enabled: true
        instance: "https://yiff.click"
    }
    apikey: {
        sheri: "<Your Token>";
        yiffrest: "<Your Token>";
        e621: "<Your Token>";
        e926: "<Your Token>";
    }
}
const yiff = new Yiff(config);

let tags = "werewolf male/male"
let limit = 1
// Basically:

yiff.e621(tags, limit).then((r) => {console.log("e621", r)})
// => Unfiltered E621 Response

yiff.e926(tags, limit).then((r) => {console.log("e926", r)})
// => Unfiltered E926 Response

yiff.yiffy('animals', 'birb').then((r) => {console.log("yiffy", r)})
// => Unfiltered yiff.rest Response

yiff.floofy().then((r) => {console.log("floofy", r)})
// => Unfiltered api.floofy.dev Response

yiff.sheri('paws').then((r) => {console.log("sheri", r)})
// => Unfiltered sheri.bot Response

yiff.shibe("shibes", 2).then((r) => {console.log("shibes", r)})
// => Unfiltered shibe.online Response

yiff.fox().then((r) => {console.log("fox", r)})
// => Unfiltered randomfox.ca Response

```

## ❓ FAQ

> **Q:** Will you add other APIs as well?\
> **A:** Depends on if they're either free or I get an all-access token, as well as if there's proper documentation for the API

## Contributing & Issues

Feel free to make a Pull request and fix some things, otherwise just open a Issue or join [my discord server](https://discord.gg/He2822y) and let me know what you want added!
