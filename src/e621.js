const axios = require('axios');
const util = require('../util');

/**
 * 
 * @param {String} request - The tags you want to search for
 * @param {Object} options - 
 */
const request = async function (requestTags, {
	isCubAllowed = false
}) {
	let response = await axios.get(`https://e621.net/post/index.json`, {
		headers: {
			'user-agent': this.useragent || util.useragent()
		},
		params: {
			tags: requestTags + ' order:random' + (isCubAllowed ? '' : ' -young')
		}
	}).catch(error => {
		console.log(error.response)
	});

	if (!response.data[0]) throw new Error('There was no Image found with those tags');

	let {
		tags,
		source,
		score,
		fav_count,
		file_url,
		artist,
		id
	} = response.data[0];

	return {
		tags,
		source,
		score,
		fav_count,
		artist,
		image: file_url,
		postID: id
	}
}

module.exports = async = {
	setUserAgent: function (software) {
		this.useragent = util.useragent(software);
	},
	/**
	 * 
	 * @param {string} tags - The tags you want to search for | max 4
	 */
	noCubFilter: async function (tags) {
		return await request(tags, { isCubAllowed: true })
	},

	/**
	 * 
	 * @param {string} tags - The tags you want to search for | max 3
	 */
	CubFilter: async function (tags) {
		return await request(tags, { isCubAllowed: false })
	}
};

/*
    API Wrapper written by @codepupper
*/