/*
    API Wrapper written by codepupper
*/
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