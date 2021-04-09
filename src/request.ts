import axios from "axios"
import c from "./consts";
export default async function request(options:
    {
        site: "e621" | "e926" | "gelbooru" | "furrybot" | "yiffrest" | "floofy" | "sheri" | "fox" | "shibe",
        killswitch?: {
            enabled?: boolean,
            instance?: string
        },
        tags?: string | string[],
        apikey?: {
            sheri?: string;
            yiffrest?: string;
            e621?: string;
            e926?: string;
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
                url: options.killswitch?.enabled ? `${options.killswitch.instance}${c.killswitch.e621}?limit=${options.limit || 1}&tags=${options.tags}&useragent=${options.useragent}` :
                    `${c.direct.e621}?tags=limit:${options.limit || 1} order:random -young ${options.tags.toString()}`,
                headers: {
                    "User-Agent": options.useragent,
                    // @ts-ignore
                    ...(options?.apikey?.e621 ? {
                        // @ts-ignore
                        "Authorization": options?.apikey?.e621
                    } : {})
                }
            })

            return e6request.data.posts
        case 'e926':
            if (!options.tags) throw Error("No Tags provided")
            let e9request = await axios({

                method: 'get',
                url: options.killswitch?.enabled ? `${options.killswitch.instance}${c.killswitch.e926}?limit=${options.limit || 1}&tags=${options.tags}&useragent=${options.useragent}` :
                    `${c.direct.e926}?tags=limit:${options.limit || 1} order:random -young ${options.tags.toString()}`,
                headers: {
                    "User-Agent": options.useragent,
                    // @ts-ignore
                    ...(options?.apikey?.e926 ? {
                        // @ts-ignore
                        "Authorization": options?.apikey?.e926
                    } : {})
                }
            })
            return e9request.data.posts
        case 'gelbooru':
            if (!options.tags) throw Error("No Tags provided")
            let gelboorureq = await axios({
                method: 'get',
                url: options.killswitch?.enabled ? `${options.killswitch.instance}${c.killswitch.gelbooru}?limit=${options.limit || 1}&tags=${options.tags}&useragent=${options.useragent}` :
                    `${c.direct.gelbooru}/index.php?page=dapi&s=post&json=1&q=index&limit=${Number(options.limit) || 1}&tags=sort:random+${options.tags.toString().split(' ').join("+")}`,
                headers: {
                    "User-Agent": options.useragent,
                    // @ts-ignore
                    // ...(options?.apikey?.e926 ? {
                    //     // @ts-ignore
                    //     "Authorization": options?.apikey?.e926
                    // } : {})
                }
            })
            return gelboorureq.data


        case 'furrybot':
        case 'yiffrest':
            let customMethod: any;
            if (options.killswitch?.enabled) {
                customMethod = "POST"
            } else {
                customMethod = "GET"
            }

            let yiffreq = await axios({
                method: customMethod,
                url: options.killswitch?.enabled ? `${options.killswitch.instance}${c.killswitch.yiffrest}` : `${c.direct.yiffrest}/${options.category}/${options.endpoint}`,
                data: {
                    category: options.category,
                    endpoint: options.endpoint,
                    apikey: options.apikey,
                    useragent: options.useragent
                },
                headers: {
                    "User-Agent": options.useragent,
                    // @ts-ignore
                    ...(options.apikey?.yiffrest ? {
                        // @ts-ignore
                        "Authorization": options?.apikey?.yiffrest
                    } : {})
                }
            })
            return yiffreq.data
        case 'sheri':
            if (options.apikey) {
                // @ts-ignore
                if (!options.apikey.startsWith('Token')) {
                    // @ts-ignore
                    options.apikey = `Token ${options.apikey}`
                }
            }
            let sherireq = await axios({
                method: 'get',
                url: options.killswitch?.enabled ? `${options.killswitch.instance}${c.killswitch.sheri}?endpoint=${options.endpoint}${options.apikey ? `&apikey=${options.apikey}` : ""}` : `${c.direct.sheri}/${options.endpoint}?format=json`,
                headers: {
                    "User-Agent": options.useragent,
                    // @ts-ignore
                    ...(options.apikey ? {
                        // @ts-ignore
                        "Authorization": options.apikey
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
                url: options.killswitch?.enabled ? `${options.killswitch.instance}${c.killswitch.shibe}?animal=${options.animal}&limit=${options.limit}` :
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