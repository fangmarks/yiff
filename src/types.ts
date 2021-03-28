export type config = {
    useragent?: string | undefined;
    killswitch?: {
        enabled?: boolean
        instance?: string
    }
    apikey?: {
        sheri?: string | undefined;
        yiffrest?: string | undefined;
        e621?: string | undefined;
        e926?: string | undefined;
    }
    | undefined;
};