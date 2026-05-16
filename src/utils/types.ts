/** Configuration passed to the {@link Yiff} constructor. */
export type YiffConfig = {
  /**
   * Identifies your application to API operators.
   * Prepended to the library's own UA string: `"YourApp/1.0 yiff/v4.0.0 (lio.to/yiff)"`.
   */
  useragent: string;
  /**
   * Route all requests through a [Killswitch](https://lio.to/killswitch) proxy
   * instance instead of hitting upstream APIs directly. Useful when direct
   * access is blocked or you want to centralise outbound traffic.
   */
  killswitch?: {
    /**
     * Enable killswitch routing.
     * @default false
     */
    enabled?: boolean;
    /**
     * Base URL of the proxy instance.
     * @default "https://yiff.click"
     */
    instance?: string;
  };
  /** API credentials for services that require authentication. */
  apiKeys?: {
    /** [yiff.rest](https://yiff.rest) API token. Required only for the bulk endpoint. */
    yiffrest?: string;
    /**
     * e621 credentials formatted as `"username:apikey"`.
     * Generate a key at https://e621.net/users/home.
     */
    e621?: string;
    /**
     * e926 credentials formatted as `"username:apikey"`.
     * Uses the same account as e621.
     */
    e926?: string;
    /**
     * Danbooru credentials formatted as `"username:apikey"`.
     * Generate a key at https://danbooru.donmai.us/profile.
     */
    danbooru?: string;
    /**
     * Gelbooru API credentials. Required for JSON API access.
     * Generate at https://gelbooru.com/index.php?page=account&s=options.
     */
    gelbooru?: { key: string; userId: string };
  };
};

/** @internal */
export type YiffOptions = {
  config: YiffConfig;
};

/** Supported image board / API backends. */
export enum YiffRequestSites {
  YIFFREST = "yiffrest",
  E621 = "e621",
  E926 = "e926",
  GELBOORU = "gelbooru",
  DANBOORU = "danbooru",
  FOX = "fox",
}

export type YiffRequestSiteType = typeof YiffRequestSites[keyof typeof YiffRequestSites];
