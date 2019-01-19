/*
    API Wrapper written by codepupper
*/


module.exports = async = {

    version: require('./package.json').version,
    e621: require('./src/e621'),
    e926: require('./src/e926') ,
    furrybot: require('./src/furrybot'),



   /* Coming Soon: 
    
     sheri: require('./src/sheri'),
     shibe: require('./src/shibe')
     fox: require('./src/fox')
     center: require('./src/center')
     */

}