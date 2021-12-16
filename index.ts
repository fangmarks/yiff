// @ts-nocheck
import pgk from "./package.json"
import defaults from "./src/defaults";
import { config } from "./src/types";
import consts from "./src/consts";
import request from "./src/request";

export default class Yiff {
    private config: config
    private useragent: string
    private killswitch: { enabled: boolean, instance: string }

    constructor(config?: config) {
        this.config = config
        this.useragent = this.config?.useragent ? `${defaults.useragent} ${this.config.useragent}` : defaults.useragent
        // console.log(config)
        this.killswitch = {
            enabled: config?.killswitch?.enabled ?? true,
            instance: config?.killswitch?.instance || defaults.killswitch

        }
    }

    /**
     * Request random posts from e621
     * @param tags The Tags your want to use for your Search
     * @param limit the amount of posts you want back
     * @returns A Unfiltered e621 Response
     */
    async e621(tags: string | string[], limit?: number) {
        try {
            let res = await request({
                site: "e621",
                limit, tags,
                useragent: this.useragent,
                killswitch: this.killswitch,
                apikey: this.config?.apikey?.e621
            })
            return res
        } catch (error) {
            console.error(error)
        }
    }
    /**
     * Request random posts from gelbooru
     * @param tags The Tags your want to use for your Search
     * @param limit the amount of posts you want back
     * @returns A Unfiltered e621 Response
     */
    async gelbooru(tags: string | string[], limit?: number) {
        try {
            let res = await request({
                site: "gelbooru",
                limit, tags,
                useragent: this.useragent,
                killswitch: this.killswitch,

            })
            return res
        } catch (error) {
            console.error(error)
        }
    }
    /**
     * Request random posts from e926
     * @param tags The Tags your want to use for your Search
     * @param limit the amount of posts you want back
     * @returns A Unfiltered e926 Response
     */

    async e926(tags: string | string[], limit?: number) {
        try {
            let res = await request({
                site: "e926",
                limit, tags,
                useragent: this.useragent,
                killswitch: this.killswitch,
                apikey: this.config?.apikey?.e926
            })
            return res
        } catch (error) {
            console.error(error)
        }
    }
    /**
     * Request an Image from yiff.rest
     * @param category the category you want an image from
     * @param endpoint a valid endpoint of the category you want an image from
     * @returns Unfiltered yiff.rest Response
     */
    async yiffy(category: string, endpoint: string) {
        try {
            let res = await request({
                site: "yiffrest",
                category, endpoint,
                useragent: this.useragent,
                killswitch: this.killswitch,
                apikey: this.config?.apikey?.yiffrest
            })
            return res
        } catch (error) {
            console.error(error)
        }
    }
    /**
     * Request an Image from the Sheri.Bot API *(most endpoints require a API Key)*
     * @param endpoint a valid endpoint you want an image from
     * @returns Unfiltered sheri.bot Response
     */
    async sheri(endpoint: string) {
        try {
            let res = await request({
                site: "sheri",
                endpoint,
                useragent: this.useragent,
                killswitch: this.killswitch,
                apikey: this.config?.apikey?.sheri
            })
            return res
        } catch (error) {
            console.error(error)
        }
    }
    /**
     * Request a random Image from api.floofy.dev (ALL NSFW)
     * @returns Unfiltered api.floofy.dev Response
     */
    async floofy() {
        try {
            let res = await request({
                site: "floofy",
                useragent: this.useragent,
                killswitch: this.killswitch,
            })
            return res
        } catch (error) {
            console.error(error)
        }
    }
    /**
     * Request a random Image from shibe.online
     * @param animal the animal you want an image of
     * @param limit the amount of images you want back
     * @returns Unfiltered shibe.online Response
     */
    async shibe(animal: string, limit: number) {
        try {
            let res = await request({
                site: "shibe",
                animal, limit,
                useragent: this.useragent,
                killswitch: this.killswitch,

            })
            return res
        } catch (error) {
            console.error(error)
        }
    }
    /**
     * Get a random fox from randomfox.ca
     * @returns Unfiltered randomfox.ca Response
     */
    async fox() {
        try {
            let res = await request({
                site: "fox",
                useragent: this.useragent,
                killswitch: this.killswitch,

            })
            return res
        } catch (error) {
            console.error(error)
        }
    }
    /**
     * Request an Image from Thaldr.in's API *(Endpoints require an API Key)*
     * @param endpoint a valid endpoint you want an image from
     * @returns Unfiltered thaldr.in/api Response
     */
    async thaldrin(endpoint: string) {
        try {
            let res = await request({
                site: "thaldrin",
                endpoint,
                useragent: this.useragent,
                killswitch: this.killswitch,
                apikey: this.config?.apikey?.thaldrin
            })
            return res
        } catch (error) {
            console.error(error)
        }
    }


}

module.exports = Yiff
