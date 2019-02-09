/*
    API Wrapper written by codepupper
*/
const axios = require('axios')

module.exports = async = {
    

    version: require('./package.json').version,
    e621: require('./src/e621'),
    e926: require('./src/e926') ,
    furrybot: require('./src/furrybot'),
    /**
     * @returns {Promise<string>} The Link to the Image
     */
    fox: async function(){
            let response = await axios.get('https://randomfox.ca/floof')
            let data = response.data
            return data.image
        },
    sheri: require('./src/sheri'),
    shibe: require('./src/shibe'),
    beta: require('./src/beta')
    
    /* Coming Soon: 
    
     center: require('./src/center')
     */

}