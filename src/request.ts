import axios from "axios"
import defaults from "defaults";
import c from "./consts";
export default async function request(options:
    {
        site: string,
        killswitch?: {
            enabled?: boolean,
            instance?: string
        },
        tags?: string | string[],
        apikey?: {
            sheri?: string | undefined;
            yiffrest?: string | undefined;
            e621?: string | undefined;
            e926?: string | undefined;
        }
        limit?: number,
        useragent?: string,
        animal?: string
        category?: string
        endpoint?: string
    }
) {

    switch (options.site) {
        case 'e621':
            if (!options.tags) throw Error("No Tags provided")
            let e6request = await axios({
                method: 'get',
                params: {
                    limit: options.limit || 1,
                    tags: `${options.tags.toString()}`,
                },
                url: options.killswitch?.enabled ? `${options.killswitch.instance}${c.killswitch.e621}` : c.direct.e621,
                headers: {
                    "User-Agent": options.useragent,
                    // @ts-ignore
                    ...(options?.apikey?.e621 ? {
                        // @ts-ignore
                        "Authorization": options?.apikey?.e621
                    } : {})
                }
            })

            return e6request.data
        case 'e926':
            if (!options.tags) throw Error("No Tags provided")
            let e9request = await axios({
                method: 'get',
                params: {
                    limit: options.limit || 1,
                    tags: `${options.tags.toString()}`,
                },
                url: options.killswitch?.enabled ? `${options.killswitch.instance}${c.killswitch.e926}` : c.direct.e926,
                headers: {
                    "User-Agent": options.useragent,
                    // @ts-ignore
                    ...(options?.apikey?.e926 ? {
                        // @ts-ignore
                        "Authorization": options?.apikey?.e926
                    } : {})
                }
            })
            return e9request.data


        case 'furrybot':
        case 'yiffrest':
            let yiffreq = await axios({
                method: 'get',
                url: options.killswitch?.enabled ? `${options.killswitch.instance}${c.killswitch.yiffrest}?` : `${c.direct.yiffrest}/${options.category}/${options.endpoint}`,
                headers: {
                    "User-Agent": options.useragent,
                    // @ts-ignore
                    ...(options.apikey.yiffrest ? {
                        // @ts-ignore
                        "Authorization": options?.apikey?.yiffrest
                    } : {})
                }
            })
            return yiffreq.data
        case 'sheri':
            let sherireq = await axios({
                method: 'get',
                params: {
                    format: "json"
                },
                url: options.killswitch?.enabled ? `${options.killswitch.instance}${c.killswitch.sheri}` : c.direct.sheri,
                headers: {
                    "User-Agent": options.useragent,
                    // @ts-ignore
                    ...(options.apikey.sheri ? {
                        // @ts-ignore
                        "Authorization": options?.apikey?.sheri
                    } : {})
                }
            })
            return sherireq.data
        case 'floofy':
            let floofyreq = await axios({
                method: 'get',
                url: options.killswitch?.enabled ? `${options.killswitch.instance}${c.killswitch.floofy}` : `${c.direct.floofy}/yiff`,
                headers: {
                    "User-Agent": options.useragent,
                }
            })
            return floofyreq.data
        case 'shibe':
            let shibereq = await axios({
                method: 'get',
                url: options.killswitch?.enabled ? `${options.killswitch.instance}${c.killswitch.shibe}` :
                `${c.direct.shibe}/${options.animal}?count=${options.limit}&urls=true&httpsUrls=true`,
                headers: {
                    "User-Agent": options.useragent,
                }
            })
            return shibereq.data
        case 'fox':
            let randomfoxreq = await axios({
                method: 'get',
                url: options.killswitch?.enabled ? `${options.killswitch.instance}${c.killswitch.fox}` : c.direct.fox,
                headers: {
                    "User-Agent": options.useragent,
                }
            })
            return randomfoxreq.data


        default:
            return {
                success: false,
                message: "No URL provided"
            }
    }


}