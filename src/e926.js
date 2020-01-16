const axios = require('axios');
const util = require('../util');

module.exports = async = {
	setUserAgent: function (software) {
		this.useragent = util.useragent(software);
	},

	/**
	 * 
	 * @param {String} requestTags - The tags you want to search for
	 */
	request: async function (requestTags) {
		let response = await axios.get(`https://e926.net/post/index.json`, {
			headers: {
				'user-agent': this.useragent || util.useragent()
			},
			params: {
				tags: `${requestTags} order:random`
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
};

/*
    API Wrapper written by @codepupper
*/