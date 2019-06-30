const axios = require('axios')

module.exports = async =

    async function fox() {
        let response = await axios.get('https://randomfox.ca/floof')
        let data = response.data
        return data.image
    }