// ! THIS FILE BY ITSELF WILL NOT WORK, IT IS ONLY HERE TO GIVE YOU EXAMPLES


let yiff = require('yiff')
yiff.sheri.setApiKey('YOUR_API_KEY') // ! Set your API Key



yiff.sheri.getCategories().then(r => { // ! This will show you all the to you available Endpoints, if Intellisense is available in your 
    /* console.log(r) */                    // ! Editor/IDE then you can see all available Endpoints by just typing 
})                                     // ! <module>.sheri.


// ! Since this was made with Discord Bots in mind, I suggest writing the entire Bot or at least this file
//! entirely in Async, that way you can simply do:

await yiff.sheri.getFox().then(r => {
    image = r
})

// ! and then use it within the same file later.