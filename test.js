const Yiff = require("./build/index")

// let yiff = new Yiff({ killswitch: { enabled: false } })
let yiff = new Yiff({
    killswitch: {
        enabled: true,
        instance: "https://yiff.click"
    },
    apikey: {
        sheri: "***REMOVED***",
        thaldrin: "***REMOVED***"
    }
})

yiff.thaldrin("wolves").then(r => { console.log("thaldrin", [r].length) })
yiff.e621('werewolf male/male', 1).then((r) => { console.log("e621", r.length) })
yiff.e926('werewolf male/male', 4).then((r) => { console.log("e926", r.length) })
yiff.floofy().then((r) => { console.log("floofy", [r].length) })
yiff.sheri('paws').then((r) => { console.log("sheri", [r].length) })
yiff.shibe("cats", 2).then((r) => { console.log("cats", r.length) })
yiff.fox().then((r) => { console.log("fox", [r].length) })
yiff.gelbooru("werewolf 2boys", 1).then((r) => console.log("gelbooru", r.length))
yiff.yiffy('animals', 'birb').then((r) => { console.log("yiffy", [r].length) })