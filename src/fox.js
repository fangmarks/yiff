const axios = require('axios')

module.exports = async = {

    fox: async function(){
        let response = await axios.get('https://randomfox.ca/floof')
        let data = response.data
        return data.image
    }

}