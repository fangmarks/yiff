/*
    API Wrapper written by codepupper
*/
const c = require('chalk');
let log = console.log;
let p = require('./package.json')



module.exports = {
	/**
	 * 
	 * @param {string} text 
	 */
	log: function (text) {
		console.log(c.hex('#a11eff')(`[Yiff Module] `) + c.hex('#ff8d28')(text));
	},
	invalid: function () {
		throw new Error(c.hex('#a11eff')(`[Yiff Module] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'));
	},
	get useragent() {
		return `yiff/${p.version} (codepupper)`;
	}
};