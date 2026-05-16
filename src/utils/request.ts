import { YiffConfig, YiffRequestSites } from "./types.ts";
import c from "./constants.ts";

export type RequestOptions = {
  that: YiffConfig;
  site: YiffRequestSites;
  tags?: string;
  page?: number;
  limit?: number;
  category?: string;
};

function headers(ua: string, auth?: string): Record<string, string> {
  const h: Record<string, string> = { "User-Agent": ua };
  if (auth) h["Authorization"] = auth;
  return h;
}

async function get(url: string, h: Record<string, string>): Promise<unknown> {
  const res = await fetch(url, { headers: h });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
  return res.json();
}

export default function request(opts: RequestOptions): Promise<unknown> {
  const { that, site, tags, page = 1, limit = 1, category } = opts;
  const ks = that.killswitch;
  const useKs = !!(ks?.enabled && ks?.instance);
  const instance = ks?.instance ?? "https://yiff.click";
  const ua = that.useragent;

  switch (site) {
    case YiffRequestSites.E621:
    case YiffRequestSites.E926: {
      if (!tags) throw new Error("tags are required for e621/e926");
      if (page > 750) throw new Error("page cannot exceed 750");
      const isSfw = site === YiffRequestSites.E926;
      const key = isSfw ? that.apiKeys?.e926 : that.apiKeys?.e621;
      const auth = key ? `Basic ${btoa(key)}` : undefined;
      if (useKs) {
        const path = isSfw ? c.killswitch.e926 : c.killswitch.e621;
        return get(`${instance}${path}?limit=${limit}&page=${page}&tags=${encodeURIComponent(tags)}`, headers(ua, auth));
      }
      const base = isSfw ? c.direct.e926 : c.direct.e621;
      return get(`${base}?page=${page}&tags=${encodeURIComponent(`-young ${tags}`)}&limit=${limit}&random=true`, headers(ua, auth));
    }

    case YiffRequestSites.DANBOORU: {
      if (!tags) throw new Error("tags are required for danbooru");
      const key = that.apiKeys?.danbooru;
      const auth = key ? `Basic ${btoa(key)}` : undefined;
      if (useKs) {
        return get(`${instance}${c.killswitch.danbooru}?limit=${limit}&page=${page}&tags=${encodeURIComponent(tags)}`, headers(ua, auth));
      }
      // /posts/random.json returns random results without requiring a Gold account
      return get(`${c.direct.danbooru}?tags=${encodeURIComponent(tags)}&limit=${limit}`, headers(ua, auth));
    }

    case YiffRequestSites.GELBOORU: {
      if (!tags) throw new Error("tags are required for gelbooru");
      const creds = that.apiKeys?.gelbooru;
      if (!creds) throw new Error("Gelbooru requires apiKeys.gelbooru ({ key, userId }) — generate credentials at https://gelbooru.com/index.php?page=account&s=options");
      const authParams = `&api_key=${creds.key}&user_id=${creds.userId}`;
      if (useKs) {
        return get(`${instance}${c.killswitch.gelbooru}?limit=${limit}&tags=${encodeURIComponent(tags)}${authParams}`, headers(ua));
      }
      const tagStr = tags.trim().split(/\s+/).join("+");
      return get(`${c.direct.gelbooru}index.php?page=dapi&s=post&q=index&json=1&limit=${limit}&tags=${tagStr}${authParams}`, headers(ua));
    }

    case YiffRequestSites.YIFFREST: {
      if (!category) throw new Error("category is required for yiffrest");
      const auth = that.apiKeys?.yiffrest;
      if (useKs) {
        return get(`${instance}${c.killswitch.yiffrest}/${category}?amount=${limit}`, headers(ua, auth));
      }
      return get(`${c.direct.yiffrest}${category}?amount=${limit}`, headers(ua, auth));
    }

    case YiffRequestSites.FOX: {
      const url = useKs ? `${instance}${c.killswitch.fox}` : c.direct.fox;
      return get(url, headers(ua));
    }

    default:
      throw new Error(`unsupported site: ${site}`);
  }
}
