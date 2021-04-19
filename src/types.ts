export type config = {
    /**
     * Custom Useragent which gets sent
     * @default yiff/v{currentVersion} (wrwlf.de) 
     */
    useragent?: string;
    /**
     * [Killswitch](https://wrwlf.de/killswitch) Settings
     */
    killswitch?: {
        /**
         * Decides if requests are routed through a [Killswitch](https://wrwlf.de/killswitch) Instance or sent to the API directly
         * @default true
         */
        enabled?: boolean
        /**
         * Custom [Killswitch](https://wrwlf.de/killswitch) Instance to use
         * @default "https://yiff.click"
         */
        instance?: string
    }
    /**
     * Your API Keys
     */
    apikey?: {

        /**
         * API Key for sheri.bot
         */
        sheri?: string;
        /**
         * API Key for sheri.bot
         */
        thaldrin?: string;
        /**
         * API Key for yiff.rest
         */
        yiffrest?: string;
        /**
         * API Key for e621.net
         */
        e621?: string;
        /**
         * API Key for e926.net
         */
        e926?: string;
    }
    | undefined;
};