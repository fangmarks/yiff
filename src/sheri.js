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
let setToken = function(apiKey) {
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
	murr: async function() {
		return new Promise((resolve, reject) => {
			axios
				.get(`${baseUrl}/mur`)
				.then(function(res) {
					return resolve(res.data);
				})
				.catch(function(err) {
					return reject(err);
				});
		});
	},
	yiff: async function() {
		return new Promise((resolve, reject) => {
			axios
				.get(`${baseUrl}/yiff`)
				.then(function({ data }) {
					return resolve({
						...data,
						category: 'yiff'
					});
				})
				.catch(function(err) {
					return reject(err);
				});
		});
	}
};
let sfw = {
	boop: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/boop`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	ban: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/ban`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	cuddle: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/cuddle`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	hold: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/hold`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	hug: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/hug`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	kick: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/kick`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	kiss: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/kiss`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	lick: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/lick`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	nature: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/nature`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	pat: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/pat`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	pokemon: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/pokemon`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	proposal: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/proposal`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	}
};
let animals = {
	wolf: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/wolves`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	pig: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/pig`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	fox: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/fox`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	bunny: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/bunny`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	snep: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/snep`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	}
};
let nsfw = {
	bang: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/bang`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	bisexual: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/bisexual`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	christmas: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/christmas`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	cuntboy: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/cuntboy`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	dick: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/dick`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	dp: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/dp`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	fcreampie: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/fcreampie`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	finger: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/finger`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	gay: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/gay`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	gif: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/gif`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	lesbian: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/lesbian`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	mcreampie: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/mcreampie`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	boop: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/nboop`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	bound: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/nbound`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	brony: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/nbrony`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	bulge: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/nbulge`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	comics: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/ncomics`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	cuddle: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/ncuddle`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	femboy: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/nfemboy`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	futa: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/nfuta`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	group: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/ngroup`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	hold: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/nhold`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	hug: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/nhug`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	kiss: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/nkiss`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	lick: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/nlick`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	pokemon: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/npokemon`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	seduce: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/nseduce`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	solo: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/nsolo`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	tease: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/ntease`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	trap: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/ntrap`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	pussy: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/pussy`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	},
	suck: async function() {
		return new Promise((resolve, reject) => {
			if (APIKey) {
				axios
					.get(`${baseUrl}/suck`, {
						headers: {
							Authorization: APIKey
						}
					})
					.then(function(res) {
						return resolve(res.data);
					})
					.catch(function(err) {
						console.error(err);
						return reject(err);
					});
			}
		});
	}
};

module.exports = {
	setToken,
	public,
	sfw,
	nsfw,
	animals
};
