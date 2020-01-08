// ! Require Modules
const axios = require('axios'); // api requests
const c = require('chalk'); // colorful console
let util = require('../util');
// ! Set Important Variables
const baseUrl = 'https://sheri.bot/api';
let APIKey;

/**
 * @param {String} apiKey - The Token for the sheri.bot API
 */
const setToken = function (apiKey) {
	if (apiKey) {
		if (apiKey.includes('Token')) {
			APIKey = apiKey;
		} else {
			APIKey = `Token ${apiKey}`;
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

/**
 * 
 * @param {String} url - Method you want to call
 */
const request = async function (url) {
	return new Promise((resolve, reject) => {
		if (!APIKey) {
			return reject(new Error('APIKey is required for using private API.'));
		}

		axios
			.get(`${baseUrl}${url}`, {
				headers: {
					'Authorization': APIKey
				}
			})
			.then(function (res) {
				return resolve(res.data);
			})
			.catch(function (err) {
				console.error(err)
				return reject(err);
			});
	})
}

const METHODS = {
	SFW: ['boop', 'ban', 'cuddle', 'hold', 'hug', 'kick', 'kiss', 'lick', 'nature', 'pat', 'pokemon', 'proposal'],
	NSFW: [
		'bang', 'bisexual', 'christmas', 'cuntboy', 'dick', 'dp', 'fcreampie', 'finger', 'gay', 'gif', 'lesbian', 
		'mcreampie', { name: 'boop', prefix: 'n' }, { name: 'bound', prefix: 'n' }, { name: 'brony', prefix: 'n' }, 
		{ name: 'bulge', prefix: 'n' }, { name: 'comics', prefix: 'n' }, { name: 'cuddle', prefix: 'n' },
		{ name: 'femboy', prefix: 'n' }, { name: 'futa', prefix: 'n' }, { name: 'group', prefix: 'n' },
		{ name: 'hold', prefix: 'n' }, { name: 'hug', prefix: 'n' }, { name: 'kiss', prefix: 'n' },
		{ name: 'lick', prefix: 'n' }, { name: 'pokemon', prefix: 'n' }, { name: 'seduce', prefix: 'n' },
		{ name: 'solo', prefix: 'n' }, { name: 'tease', prefix: 'n' }, { name: 'trap', prefix: 'n' },
		'pussy', 'suck'
	],
	ANIMALS: ['wolves', 'pig', 'fox', 'bunny', 'snep']
}

const sfw = {};
for (method of METHODS.SFW) {
	sfw[method] = () => request(`/${method}`)
}

const animals = {};
for (method of METHODS.ANIMALS) {
	animals[method] = () => request(`/${method}`)
}

const nsfw = {};
for (method of METHODS.NSFW) {
	if (method.name) {
		nsfw[method.name] = () => request(`/${method.prefix}${method.name}`);
	} else {
		nsfw[method] = () => request(`/${method}`);
	}
}


module.exports = {
	setToken,
	public,
	sfw,
	nsfw,
	animals
};