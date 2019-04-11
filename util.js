/*
    API Wrapper written by codepupper
*/
<<<<<<< HEAD
const c = require('chalk');
let log = console.log;

module.exports = {
	/**
     * 
     * @param {string} text 
     */
	log     : function(text) {
		console.log(c.hex('#a11eff')(`[Yiff Module] `) + c.hex('#ff8d28')(text));
	},
	invalid : function() {
		throw new Error(c.hex('#a11eff')(`[Yiff Module] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'));
	}
};
=======
const c = require('chalk')
let log = console.log
let Primary = '#a11eff'
let Secondary = '#ff8d28'

module.exports = {
    /**
     * @param {string} text - It be Text 
     */
    log: function(text){

    console.log(c.hex(Primary)(`[Yiff Module] `) + c.hex(Secondary)(text))

    },
    invalid: function(){
        throw new Error(c.hex(Primary)(`[Yiff Module] `) + c.hex(Secondary)('The API Key you provided is invalid.'))
        
    },
    bool: function(){
        throw new Error(c.hex(Primary)(`[Yiff Module] `) + c.hex(Secondary)('The Provided Parameter is NOT Boolean.'))
        
    }
}
>>>>>>> cd5421b0602bfd607f25934b23c42360f40a2075
