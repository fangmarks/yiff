const axios = require('axios');
const chalk = require('chalk');
const util = require('../util');
const p = require('../package.json');
const api = 'https://api.furry.bot/';

const request = async function(url) {
	return new Promise((resolve, reject) => {
		axios
			.get(`${api}${url}`, {
				headers: {
					'User-Agent': `yiff/${p.version} by floofy.dev`
				}
			})
			.then(function(res) {
				return resolve(res.data);
			})
			.catch(function(err) {
				console.error(err);
				return reject(err);
			});
	});
};

const METHODS = {
	SFW: [ 'boop', 'cuddle', 'fursuit', 'hold', 'hug', 'kiss', 'lick' ],
	NSFW: [ 'bulge', 'bang', 'cuddle', 'yiff', 'hug', 'kiss', 'lick', 'suck' ],
	ANIMALS: [ 'bird', 'fox', 'lynx', 'wolf', 'cheeta', 'blep' ]
};

const sfw = {};
for (method of METHODS.SFW) {
	sfw[method] = () => request(`furry/sfw/${method}`);
}

const animals = {};
for (method of METHODS.ANIMALS) {
	animals[`${method}`] = () => request(`animals/${method}`);
}

const nsfw = {};
for (method of METHODS.NSFW) {
	if (method.name) {
		nsfw[method.name] = () => request(`furry/nsfw/${method.name}`);
	} else {
		nsfw[method] = () => request(`furry/nsfw/${method}`);
	}
}

module.exports = async = {
	sfw,
	nsfw,
	animals
};
