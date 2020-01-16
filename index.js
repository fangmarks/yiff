/*
    API Wrapper written by codepupper
*/

module.exports = async = {
	version: require('./package.json').version,
	e621: require('./src/e621'),
	e926: require('./src/e926'),
	furrybot: require('./src/furrybot'),
	fox: require('./src/fox'),
	sheri: require('./src/sheri'),
	shibe: require('./src/shibe')
};
