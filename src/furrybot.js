const axios = require('axios')
const chalk = require('chalk')
const util = require('../util')
let sfwURL = 'https://api.furry.bot/sfw/'
let nsfwURL = 'https://api.furry.bot/nsfw/'
module.exports = async = {

    /**
     * SFW Endpoints of furry.bot
     */
    
    sfw: {
        /**
         * @returns {Promise.<string>} The Link to the Image
         */
        boop: async function(){
                    sfwURL = sfwURL + 'boop'
                    let x = await axios.get(sfwURL)
                    let data = x.data.response
                    return data.image
                },
        /**
         * @returns {Promise.<string>} The Link to the Image
         */
        cuddle: async function(){
                    sfwURL = sfwURL + 'cuddle'
                    let x = await axios.get(sfwURL)
                    let data = x.data.response
                    return data.image
                },
        /**
         * @returns {Promise.<string>} The Link to the Image
         */
        fursuit: async function(){
                    sfwURL = sfwURL + 'fursuit'
                    let x = await axios.get(sfwURL)
                    let data = x.data.response
                    return data.image
                },
        /**
         * @returns {Promise.<string>} The Link to the Image
         */
        hold: async function(){
                    sfwURL = sfwURL + 'hold'
                    let x = await axios.get(sfwURL)
                    let data = x.data.response
                    return data.image
                },
        /**
         * @returns {Promise.<string>} The Link to the Image
         */
        hug: async function(){
                    sfwURL = sfwURL + 'hug'
                    let x = await axios.get(sfwURL)
                    let data = x.data.response
                    return data.image
                        },
        /**
         * @returns {Promise.<string>} The Link to the Image
         */
        kiss: async function(){
                    sfwURL = sfwURL + 'kiss'
                    let x = await axios.get(sfwURL)
                    let data = x.data.response
                    return data.image
        },
        /**
         * @returns {Promise.<string>} The Link to the Image
         */
        lick: async function(){
                    sfwURL = sfwURL + 'lick'
                    let x = await axios.get(sfwURL)
                    let data = x.data.response
                    return data.image
                }
    },
    /** 
     * NSFW Endpoints of furry.bot
     */
    nsfw: {
        /**
         * @returns {Promise.<string>} The Link to the Image
         */
        bulge: async function(){
                    nsfwURL = nsfwURL + 'bulge'
                    let x = await axios.get(nsfwURL)
                    let data = x.data.response
                    return data.image
                },
        /**
         * @returns {Promise.<string>} The Link to the Image
         */
        bang: async function(){
                    nsfwURL = nsfwURL + 'bang'
                    let x = await axios.get(nsfwURL)
                    let data = x.data.response
                    return data.image
                },
        /**
         * @returns {Promise.<string>} The Link to the Image
         */
        cuddle: async function(){
                    nsfwURL = nsfwURL + 'cuddle'
                    let x = await axios.get(nsfwURL)
                    let data = x.data.response
                    return data.image
                },
        /**
         * @returns {Promise.<string>} The Link to the Image
         * @param {string=} endpoint [`Default: Gay`]  - gay or straight
         */

        yiff: async function(endpoint){
            if(endpoint.toLowerCase() === 'straight' ||endpoint.toLowerCase() === 'het'){
                endpoint = 'straight'
            } else {
                endpoint = 'gay'
                util.log('Nothing was given, using the Gay Endpoint')
            }
                    nsfwURL = nsfwURL + 'yiff/' + endpoint
                    let x = await axios.get(nsfwURL)
                    let data = x.data.response
                    return data
                },
        /**
         * @returns {Promise.<string>} The Link to the Image
         */
        hug: async function(){
                    nsfwURL = nsfwURL + 'hug'
                    let x = await axios.get(nsfwURL)
                    let data = x.data.response
                    return data.image
                        },
        /**
         * @returns {Promise.<string>} The Link to the Image
         */
        kiss: async function(){
                    nsfwURL = nsfwURL + 'kiss'
                    let x = await axios.get(nsfwURL)
                    let data = x.data.response
                    return data.image
        },
        /**
         * @returns {Promise.<string>} The Link to the Image
         */
        lick: async function(){
                    nsfwURL = nsfwURL + 'lick'
                    let x = await axios.get(nsfwURL)
                    let data = x.data.response
                    return data.image
                },

         /**
         * @returns {Promise.<string>} The Link to the Image
         */
        suck: async function(){
            nsfwURL = nsfwURL + 'suck'
            let x = await axios.get(nsfwURL)
            let data = x.data.response
            return data.image
        }
    }
}

/*
    API Wrapper written by codepupper
*/