// ! Require Modules
const axios = require('axios'); // api requests
const c = require('chalk'); // colorful console
let util = require('../util');
// ! Set Important Variables
let baseUrl = 'http://shibe.online/api/ANIMAL?count=1&urls=true&httpsUrls=true';
var exports = [];

exports.shibes = function() {
	return new Promise((resolve, reject) => {
		axios
			.get(`${baseUrl.replace('ANIMAL', 'shibes')}`)
			.then(function(res) {
				return resolve(res.data);
			})
			.catch(function(err) {
				return reject(err);
			});
	});
};
exports.cats = function() {
	return new Promise((resolve, reject) => {
		axios
			.get(`${baseUrl.replace('ANIMAL', 'cats')}`)
			.then(function(res) {
				return resolve(res.data);
			})
			.catch(function(err) {
				return reject(err);
			});
	});
};
exports.birds = function() {
	return new Promise((resolve, reject) => {
		axios
			.get(`${baseUrl.replace('ANIMAL', 'birds')}`)
			.then(function(res) {
				return resolve(res.data);
			})
			.catch(function(err) {
				return reject(err);
			});
	});
};
module.exports = exports;
