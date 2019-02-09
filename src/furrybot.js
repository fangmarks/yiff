const axios = require('axios')
const chalk = require('chalk')
const util = require('../util')
let sfwURL = 'https://api.furry.bot/furry/sfw/'
let nsfwURL = 'https://api.furry.bot/furry/nsfw/'
let animalURL = 'https://api.furry.bot/animals/'
module.exports = async = {

    /**
     * SFW Endpoints of furry.bot
     */
    
    sfw: {
        /**
         * @returns {Promise.<string>} The Link to the Image
         */
        boop: async function(){
                    sfwRequest = sfwURL + 'boop'
                    let x = await axios.get(sfwRequest)
                    let data = x.data.response
                    return data.image
                },
        /**
         * @returns {Promise.<string>} The Link to the Image
         */
        cuddle: async function(){
                    sfwRequest = sfwURL + 'cuddle'
                    let x = await axios.get(sfwRequest)
                    let data = x.data.response
                    return data.image
                },
        /**
         * @returns {Promise.<string>} The Link to the Image
         */
        fursuit: async function(){
                    sfwRequest = sfwURL + 'fursuit'
                    let x = await axios.get(sfwRequest)
                    let data = x.data.response
                    return data.image
                },
        /**
         * @returns {Promise.<string>} The Link to the Image
         */
        hold: async function(){
                    sfwRequest = sfwURL + 'hold'
                    let x = await axios.get(sfwRequest)
                    let data = x.data.response
                    return data.image
                },
        /**
         * @returns {Promise.<string>} The Link to the Image
         */
        hug: async function(){
                    sfwRequest = sfwURL + 'hug'
                    let x = await axios.get(sfwRequest)
                    let data = x.data.response
                    return data.image
                        },
        /**
         * @returns {Promise.<string>} The Link to the Image
         */
        kiss: async function(){
                    sfwRequest = sfwURL + 'kiss'
                    let x = await axios.get(sfwRequest)
                    let data = x.data.response
                    return data.image
        },
        /**
         * @returns {Promise.<string>} The Link to the Image
         */
        lick: async function(){
                    sfwRequest = sfwURL + 'lick'
                    let x = await axios.get(sfwRequest)
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
                    nsfwRequest = nsfwURL + 'bang'
                    let x = await axios.get(nsfwRequest)
                    let data = x.data.response
                    return data.image
                },
        /**
         * @returns {Promise.<string>} The Link to the Image
         */
        cuddle: async function(){
                    nsfwRequest = nsfwURL + 'cuddle'
                    let x = await axios.get(nsfwRequest)
                    let data = x.data.response
                    return data.image
                },
        /**
         * @returns {Promise.<string>} The Link to the Image
         * @param {string=} endpoint [`Default: Gay`]  - gay or straight
         */

        yiff: async function(endpoint){
            if(endpoint === undefined){
                endpoint = 'gay'
                util.log('Nothing was given, using the Gay Endpoint')
            }
            else if(endpoint.toLowerCase() === 'straight' || endpoint.toLowerCase() === 'het'){
                endpoint = 'straight'
            } 
                    nsfwRequest = nsfwURL + 'yiff/' + endpoint
                    let x = await axios.get(nsfwRequest)
                    let data = x.data.response
                    return data.image
                },
        /**
         * @returns {Promise.<string>} The Link to the Image
         */
        hug: async function(){
                    nsfwRequest = nsfwURL + 'hug'
                    let x = await axios.get(nsfwRequest)
                    let data = x.data.response
                    return data.image
                        },
        /**
         * @returns {Promise.<string>} The Link to the Image
         */
        kiss: async function(){
                    nsfwRequest = nsfwURL + 'kiss'
                    let x = await axios.get(nsfwRequest)
                    let data = x.data.response
                    return data.image
        },
        /**
         * @returns {Promise.<string>} The Link to the Image
         */
        lick: async function(){
                    nsfwRequest = nsfwURL + 'lick'
                    let x = await axios.get(nsfwRequest)
                    let data = x.data.response
                    return data.image
                },

         /**
         * @returns {Promise.<string>} The Link to the Image
         */
        suck: async function(){
            nsfwRequest = nsfwURL + 'suck'
            let x = await axios.get(nsfwRequest)
            let data = x.data.response
            return data.image
        }
    },

    animals: {
        bird: async function(){
            requestAnimal = animalURL + 'birb'
            let x = await axios.get(requestAnimal)
            let data = x.data.response
            return data.image
        },
        fox: async function(){
            requestAnimal = animalURL + 'fox'
            let x = await axios.get(requestAnimal)
            let data = x.data.response
            return data.image
        }
    }
}

/*
    API Wrapper written by codepupper
*/