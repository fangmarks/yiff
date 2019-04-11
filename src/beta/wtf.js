// ! Require Modules
const axios = require('axios') // api requests 
const c = require('chalk')  // colorful console
let util = require('../../util')
// ! Set Important Variables
let baseUrl = "https://beta.yiff.wtf/v1/images?approved=approved";
let nsfwURL = 'https://beta.yiff.wtf/v1/images?approved=approved&nsfw=true'
module.exports = async = {
    /**
     * 
     * @param {boolean} nsfw - Decide if you want a NSFW or SFW Image returned
     */
    get: async function(nsfw){
        if (typeof nsfw !== "boolean"){
            util.bool()
        } else if(nsfw === true){
        let x = axios.get(nsfwURL)
        let res = x.data.response
            if(res.credits === null || res.credits === ""){
                credits = 'None'
            } else {
                credits = res.credits
            }
            return {
                url: res.url,
                credits: credits,
                tags: res.tags

            }
        } else if(nsfw === false){
            let x = axios.get(baseUrl)
            console.log(x.data)
            // let res = x.data.response
            //     if(res.credits === null || res.credits === ""){
            //         credits = 'None'
            //     } else {
            //         credits = res.credits
            //     }
            //     return {
            //         url: res.url,
            //         credits: credits,
            //         tags: res.tags
        }
    }
}