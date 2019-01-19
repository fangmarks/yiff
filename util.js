/*
    API Wrapper written by codepupper
*/
const c = require('chalk')

module.exports = {
    log: function(text){

        console.log(c.hex('#a11eff')(`[Yiff Module] `) + c.hex('#ff8d28')(text))

    }
}