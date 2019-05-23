let yiff = require('./index')

async function test() {
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].forEach(r => {
        yiff.furrybot.nsfw.bulge().then(r => {
            console.log(r)
        }).catch(error => {
            console.error(error)
        })
    })
}


test()