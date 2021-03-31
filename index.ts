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
    async yiffy(category:string, endpoint:string) {
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
    async floofy() {
        try {
            let res = await request({
                site: "floofy",
                useragent: this.useragent,
                killswitch: this.killswitch,
                // apikey: this.config?.apikey?.yiffrest
            })
            return res
        } catch (error) {
            console.error(error)
        }
    }



}

