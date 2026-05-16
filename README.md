# yiff

API wrapper for various furry image APIs.

## Install

**Deno / JSR**
```ts
import Yiff from "jsr:@yiff/apis";
```

**Node / NPM**
```sh
npm install yiff
```

## Usage

```ts
import Yiff from "jsr:@yiff/apis";

const client = new Yiff({
  useragent: "MyApp/1.0",
  apiKeys: {
    e621: "username:apikey",
    e926: "username:apikey",
    yiffrest: "token",
  },
});

// e621 / e926
const posts = await client.e621("canine solo", { limit: 5 });
const safePosts = await client.e926("canine solo", { limit: 5 });

// Danbooru
const dPosts = await client.danbooru("cat_ears", { limit: 5 });

// Gelbooru
const gPosts = await client.gelbooru("fox_girl", { limit: 5 });

// yiff.rest — see https://v2.yiff.rest/categories for valid category names
const yiffPosts = await client.yiffrest("furry.boop", { limit: 1 });

// Random fox
const fox = await client.fox();
```

## Configuration

```ts
type YiffConfig = {
  useragent: string;
  apiKeys?: {
    yiffrest?: string;
    e621?: string;   // "username:apikey"
    e926?: string;   // "username:apikey"
  };
  killswitch?: {
    enabled?: boolean;
    instance?: string; // default: https://yiff.click
  };
};
```

### Killswitch

When `killswitch.enabled` is `true`, all requests are routed through the configured proxy instance instead of hitting APIs directly.

## License

MIT
