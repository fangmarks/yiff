const axios = require('axios')

module.exports = async function () {
        const response = await axios.get('https://randomfox.ca/floof');
        const data = response.data;
        return data.image;
}
