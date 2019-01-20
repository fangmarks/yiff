/*
    API Wrapper written by codepupper
*/
const axios = require('axios')

module.exports = async = {

    version: require('./package.json').version,
    e621: require('./src/e621'),
    e926: require('./src/e926') ,
    furrybot: require('./src/furrybot'),
    fox: async function(){
            let response = await axios.get('https://randomfox.ca/floof')
            let data = response.data
            return data.image
        }
    
    
    /* Coming Soon: 
    
     shibe: require('./src/shibe'),
     sheri: require('./src/sheri'),
     center: require('./src/center')
     */

}