const axios = require('axios')
let API = 'https://randomfox.ca/floof/'
module.exports = async = {

    fox: async function(){
        let response = await axios.get(API)
        let data = response.data
        console.log(data)
    }

}