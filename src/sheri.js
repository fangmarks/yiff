// ! Require Modules
const axios = require('axios'); // api requests
const c = require('chalk'); // colorful console
let util = require('../util');
// ! Set Important Variables
let baseUrl = 'http://sheri.bot/api';
let baseSFW = 'http://sheri.bot/api/sfw'

/**
 * @param {String} apiKey - The Token for the sheri.bot API
 */
let setToken = function (apiKey) {
	if (apiKey) {
		if (apiKey.includes('Token')) {
			this.apiKey = apiKey;
		} else {
			this.apiKey = `Token ${apiKey}`;
		}
	} else {
		util.invalid();
	}
};


let public = {
	murr: async function () {
		return new Promise((resolve, reject) => {
			axios
				.get(`${baseUrl}/mur`)
				.then(function (res) {
					return resolve(res.data);
				})
				.catch(function (err) {
					return reject(err);
				});
		});
	},
	yiff: async function () {
		return new Promise((resolve, reject) => {
			axios
				.get(`${baseUrl}/yiff`)
				.then(function ({
					data
				}) {
					return resolve({
						...data,
						category: 'yiff'
					});
				})
				.catch(function (err) {
					return reject(err);
				});
		});
	}
}
let sfw = {
	boop: async function () {
		return new Promise((resolve, reject) => {
			if (this.apiKey) {
				axios
					.get(`http://sheri.bot/api/boop`, {
						headers: {
							Authorization: this.apiKey
						}
					})
					.then(function (res) {
						console.log(res)
						return resolve(res.data);
					})
					.catch(function (err) {
						console.error(err)
						return reject(err);
					});
			}
			/* else {
				return reject(
					c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.')
				);
			} */
		});
	}
}
let nsfw = {}
let nature = {}


module.exports = {
	setToken,
	public,
	sfw,
	nsfw,
	nature
};