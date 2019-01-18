# Contact [codepupper / ryden#3621](https://14.werewovles-yiff.me) for more Information

## To Do

- [x] e621
- [x] e926
- [ ] furry.bot
- [ ] sheri.fun
- [ ] randomfox.ca
- [ ] shibe.online

## e621

Without Filtering Cub Images out:

```js
const yiff = require('yiff')

yiff.e621.noCubFilter('kihu wolf abs') // This will not filter out Cub, thus letting you use 5 Tags
.then(r => {
    console.log(r)
    /* Example Response
 { tags:
   'abs anthro kihu muscular muscular_male nipples wolf' (+ others),
  source:
   'http://kihu.club/post/166519664866/awooooo-full-moon-commission-for-axelshep-on',
  score: 24,
  fav_count: 135,
  image:
   'https://static1.e621.net/data/e8/60/e86005c3a0adb274f3b73dc538cd4972.png',
  artist: [ 'kihu' ],
  postID: 1361959 }
        */
})
```

Filtering Cub Images out:

```js
const yiff = require('yiff')

yiff.e621.CubFilter('kihu wolf abs') // This will filter out Cub, thus letting you use 4 Tags
.then(r => {
    console.log(r)
    /* Example Response
 { tags:
   'abs anthro kihu muscular muscular_male nipples wolf' (+ others),
  source:
   'http://kihu.club/post/166519664866/awooooo-full-moon-commission-for-axelshep-on',
  score: 24,
  fav_count: 135,
  image:
   'https://static1.e621.net/data/e8/60/e86005c3a0adb274f3b73dc538cd4972.png',
  artist: [ 'kihu' ],
  postID: 1361959 }
        */
})
```

Both are technically the same, .CubFilter() just lets you automatically filter out Cubs if you so choose

## Contributing & Issues

Feel free to make a Pull request and fix some things, otherwise just open a Issue to let me know!

## Crediting

Please do not remove my Signature from the Code, other than that you can do with  this whatever you want!~

## FAQ

> **Q:** Will you add other APIs as well?\
> **A:** Depends on if they're either free or I get a all-access token\