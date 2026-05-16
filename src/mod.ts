import { YiffConfig, YiffRequestSites } from "./utils/types.ts";
import pkg from "../deno.json" with { type: "json" };
import request from "./utils/request.ts";

/**
 * Yiff — unified API wrapper for furry image boards and galleries.
 *
 * @example
 * ```ts
 * const client = new Yiff({
 *   useragent: "MyApp/1.0",
 *   apiKeys: { e621: "username:apikey" },
 * });
 *
 * const posts = await client.e621("canine solo", { limit: 5 });
 * ```
 */
class Yiff {
  useragent: string;
  apiKeys: YiffConfig["apiKeys"];
  killswitch: YiffConfig["killswitch"];

  /**
   * Create a new Yiff client.
   *
   * @param config - Client configuration. `useragent` is prepended to the
   *   library's own UA string so API operators can identify your app.
   *   Supply `apiKeys` for services that require authentication.
   *   Enable `killswitch` to route all traffic through a proxy instance.
   */
  constructor(config: YiffConfig) {
    this.useragent = config.useragent
      ? `${config.useragent} yiff/v${pkg.version} (lio.to/yiff)`
      : `yiff/v${pkg.version} (lio.to/yiff)`;
    this.apiKeys = config.apiKeys;
    this.killswitch = config.killswitch ?? { enabled: false, instance: "https://yiff.click" };
  }

  /**
   * Search [e621](https://e621.net) for posts matching the given tags.
   *
   * Requires an API key supplied as `"username:apikey"` in `apiKeys.e621`.
   * Without a key requests are still made but may be rate-limited.
   * Results are randomised and exclude content tagged `young`.
   *
   * @param tags - Space-separated tag query (e.g. `"canine solo rating:e"`).
   * @param opts.page - Page number, max 750.
   * @param opts.limit - Number of posts to return.
   */
  e621(tags: string, opts: { page?: number; limit?: number } = {}) {
    return request({ that: this, site: YiffRequestSites.E621, tags, ...opts });
  }

  /**
   * Search [e926](https://e926.net) for posts matching the given tags.
   *
   * e926 is the SFW mirror of e621 — explicit content is filtered server-side.
   * Accepts the same tag syntax and options as {@link e621}.
   *
   * @param tags - Space-separated tag query.
   * @param opts.page - Page number, max 750.
   * @param opts.limit - Number of posts to return.
   */
  e926(tags: string, opts: { page?: number; limit?: number } = {}) {
    return request({ that: this, site: YiffRequestSites.E926, tags, ...opts });
  }

  /**
   * Search [Danbooru](https://danbooru.donmai.us) for posts matching the given tags.
   *
   * Results are randomised. Danbooru uses a two-tag limit for anonymous requests;
   * supply `apiKeys.e621` is not used here — Danbooru has no key in the current config.
   *
   * @param tags - Space-separated tag query (e.g. `"cat_ears 1girl"`).
   * @param opts.page - Page number, max 750.
   * @param opts.limit - Number of posts to return.
   */
  danbooru(tags: string, opts: { page?: number; limit?: number } = {}) {
    return request({ that: this, site: YiffRequestSites.DANBOORU, tags, ...opts });
  }

  /**
   * Search [Gelbooru](https://gelbooru.com) for posts matching the given tags.
   *
   * Requires `apiKeys.gelbooru` — Gelbooru's JSON API returns 401 without credentials.
   * Generate a key at https://gelbooru.com/index.php?page=account&s=options.
   *
   * @param tags - Space-separated tag query (e.g. `"fox_girl solo"`).
   * @param opts.limit - Number of posts to return.
   */
  gelbooru(tags: string, opts: { limit?: number } = {}) {
    return request({ that: this, site: YiffRequestSites.GELBOORU, tags, ...opts });
  }

  /**
   * Fetch random images from [yiff.rest](https://yiff.rest) by category.
   *
   * Valid categories can be discovered via `GET https://v2.yiff.rest/categories`.
   * An API token in `apiKeys.yiffrest` is only required for the bulk endpoint,
   * not for standard category lookups.
   *
   * @param category - Category identifier (e.g. `"furry.sfw"`). See `/categories` for the full list.
   * @param opts.limit - Number of images to return (1–5).
   */
  yiffrest(category: string, opts: { limit?: number } = {}) {
    return request({ that: this, site: YiffRequestSites.YIFFREST, category, ...opts });
  }

  /**
   * Fetch a random fox image from [randomfox.ca](https://randomfox.ca).
   *
   * No authentication or parameters required.
   */
  fox() {
    return request({ that: this, site: YiffRequestSites.FOX });
  }
}

export default Yiff;
