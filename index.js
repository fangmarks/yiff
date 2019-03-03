/*
    API Wrapper written by codepupper
*/
const axios = require('axios')

let {fox} = require('./src/fox')

module.exports = async = {
    

    version: require('./package.json').version,
    e621: require('./src/e621'),
    e926: require('./src/e926') ,
    furrybot: require('./src/furrybot'),
    fox,
    sheri: require('./src/sheri'),
    shibe: require('./src/shibe'),
    beta: require('./src/beta')
    
    /* Coming Soon: 
    
     center: require('./src/center')
     */

}