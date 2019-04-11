/*
    API Wrapper written by codepupper
*/
const axios = require('axios');

let {fox} = require('./src/fox')

module.exports = async = {
<<<<<<< HEAD
	version  : require('./package.json').version,
	e621     : require('./src/e621'),
	e926     : require('./src/e926'),
	furrybot : require('./src/furrybot'),
	/**
     * @returns {Promise<string>} The Link to the Image
     */
	fox      : async function() {
		let response = await axios.get('https://randomfox.ca/floof');
		let data = response.data;
		return data.image;
	},
	sheri    : require('./src/sheri'),
	shibe    : require('./src/shibe')

	/* Coming Soon: 
=======
    

    version: require('./package.json').version,
    e621: require('./src/e621'),
    e926: require('./src/e926') ,
    furrybot: require('./src/furrybot'),
    fox,
    sheri: require('./src/sheri'),
    shibe: require('./src/shibe'),
    beta: require('./src/beta')
    
    /* Coming Soon: 
>>>>>>> cd5421b0602bfd607f25934b23c42360f40a2075
    
     center: require('./src/center')
     */
};
