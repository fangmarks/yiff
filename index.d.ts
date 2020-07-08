declare namespace Yiff {
	export interface Options {
		name?: string;
		version?: string;
		creator?: string;
	}

	class Base {
		constructor(options?: Options);

		readonly ua: string;
	}

	interface EPost {
		id: string;
		page: string;
		tags: {
			[k in "general" | "species" | "character" | "copyright" | "artist" | "invalid" | "lore" | "meta"]: string[];
		};
		sources: string[];
		score: number;
		fav_count: number;
		artist: string[];
		image?: string; // can technically be absent in some cases
		md5: string;
		useragent: string;
	}

	class E621 extends Base {
		constructor(options?: Options);
		request(tags: string): Promise<EPost>;
		get(tags: string): ReturnType<E621["request"]>;
	}

	class E926 extends Base {
		constructor(options?: Options);
		request(tags: string): Promise<EPost>;
		get(tags: string): ReturnType<E926["request"]>;
	}

	interface FoxResponse {
		image: string;
		link: string;
	}

	class Fox extends Base {
		private API: string;
		constructor(options?: Options);
		request(): Promise<FoxResponse>;
		readonly Fox: Promise<FoxResponse>;
	}

	interface FurryBotResponse {
		artists: string[];
		sources: string[];
		width: number;
		height: number;
		url: string;
		type: string;
		name: string;
		shorturl: string;
		ext: string;
	}

	class FurryBot extends Base {
		private API: string;
		constructor(options?: Options);
		request(endpoint: string, kind: string): Promise<FurryBotResponse>;

		readonly birb: ReturnType<FurryBot["request"]>;
		readonly blep: ReturnType<FurryBot["request"]>;
		readonly lynx: ReturnType<FurryBot["request"]>;
		readonly wolf: ReturnType<FurryBot["request"]>;
		readonly cuddle: ReturnType<FurryBot["request"]>;
		readonly flop: ReturnType<FurryBot["request"]>;
		readonly boop: ReturnType<FurryBot["request"]>;
		readonly hold: ReturnType<FurryBot["request"]>;
		readonly howl: ReturnType<FurryBot["request"]>;
		readonly hug: ReturnType<FurryBot["request"]>;
		readonly kiss: ReturnType<FurryBot["request"]>;
		readonly lick: ReturnType<FurryBot["request"]>;
		readonly propose: ReturnType<FurryBot["request"]>;
		readonly nbulge: ReturnType<FurryBot["request"]>;
		readonly ngayyiff: ReturnType<FurryBot["request"]>;
		readonly nstraightyiff: ReturnType<FurryBot["request"]>;
		readonly nlesbianyiff: ReturnType<FurryBot["request"]>;
		readonly ndickgirlyiff: ReturnType<FurryBot["request"]>;
	}

	// assuming the structure from public endpoints
	interface SheriResponse {
		url: string;
		author: {
			name: string;
			link: string;
		};
		source: string;
		report_url: string;
	}

	class Sheri extends Base {
		private API: string;
		constructor(options: Options & { apikey: string; });

		request(endpoint: string): Promise<SheriResponse>;

		readonly bunny: ReturnType<Sheri["request"]>;
		readonly cat: ReturnType<Sheri["request"]>;
		readonly fox: ReturnType<Sheri["request"]>;
		readonly husky: ReturnType<Sheri["request"]>;
		readonly mur: ReturnType<Sheri["request"]>;
		readonly nature: ReturnType<Sheri["request"]>;
		readonly pig: ReturnType<Sheri["request"]>;
		readonly snep: ReturnType<Sheri["request"]>;
		readonly turkey: ReturnType<Sheri["request"]>;
		readonly wolf: ReturnType<Sheri["request"]>;
		readonly yiff: ReturnType<Sheri["request"]>;
		readonly ban: ReturnType<Sheri["request"]>;
		readonly boop: ReturnType<Sheri["request"]>;
		readonly cuddle: ReturnType<Sheri["request"]>;
		readonly hold: ReturnType<Sheri["request"]>;
		readonly hug: ReturnType<Sheri["request"]>;
		readonly kick: ReturnType<Sheri["request"]>;
		readonly kiss: ReturnType<Sheri["request"]>;
		readonly lick: ReturnType<Sheri["request"]>;
		readonly maws: ReturnType<Sheri["request"]>;
		readonly pat: ReturnType<Sheri["request"]>;
		readonly paws: ReturnType<Sheri["request"]>;
		readonly pokemon: ReturnType<Sheri["request"]>;
		readonly proposal: ReturnType<Sheri["request"]>;
		readonly trickortreat: ReturnType<Sheri["request"]>;
		readonly sixtynine: ReturnType<Sheri["request"]>;
		readonly anal: ReturnType<Sheri["request"]>;
		readonly bang: ReturnType<Sheri["request"]>;
		readonly bisexual: ReturnType<Sheri["request"]>;
		readonly boob: ReturnType<Sheri["request"]>;
		readonly booty: ReturnType<Sheri["request"]>;
		readonly christmas: ReturnType<Sheri["request"]>;
		readonly cumflation: ReturnType<Sheri["request"]>;
		readonly cuntboy: ReturnType<Sheri["request"]>;
		readonly dick: ReturnType<Sheri["request"]>;
		readonly dp: ReturnType<Sheri["request"]>;
		readonly fbouny: ReturnType<Sheri["request"]>;
		readonly fcreampie: ReturnType<Sheri["request"]>;
		readonly finger: ReturnType<Sheri["request"]>;
		readonly fpresentation: ReturnType<Sheri["request"]>;
		readonly fseduce: ReturnType<Sheri["request"]>;
		readonly fsolo: ReturnType<Sheri["request"]>;
		readonly ftease: ReturnType<Sheri["request"]>;
		readonly gay: ReturnType<Sheri["request"]>;
		readonly gif: ReturnType<Sheri["request"]>;
		readonly lesbian: ReturnType<Sheri["request"]>;
		readonly mbound: ReturnType<Sheri["request"]>;
		readonly mcreampie: ReturnType<Sheri["request"]>;
		readonly mseduce: ReturnType<Sheri["request"]>;
		readonly msolo: ReturnType<Sheri["request"]>;
		readonly mtease: ReturnType<Sheri["request"]>;
		readonly mboop: ReturnType<Sheri["request"]>;
		readonly nbound: ReturnType<Sheri["request"]>;
		readonly nbrony: ReturnType<Sheri["request"]>;
		readonly nbulge: ReturnType<Sheri["request"]>;
		readonly ncomics: ReturnType<Sheri["request"]>;
		readonly ncuddle: ReturnType<Sheri["request"]>;
		readonly nfemboy: ReturnType<Sheri["request"]>;
		readonly nfuta: ReturnType<Sheri["request"]>;
		readonly ngroup: ReturnType<Sheri["request"]>;
		readonly nhold: ReturnType<Sheri["request"]>;
		readonly nhug: ReturnType<Sheri["request"]>;
		readonly nkiss: ReturnType<Sheri["request"]>;
		readonly nlick: ReturnType<Sheri["request"]>;
		readonly npokemon: ReturnType<Sheri["request"]>;
		readonly nseduce: ReturnType<Sheri["request"]>;
		readonly nsolo: ReturnType<Sheri["request"]>;
		readonly nspank: ReturnType<Sheri["request"]>;
		readonly ntease: ReturnType<Sheri["request"]>;
		readonly ntrap: ReturnType<Sheri["request"]>;
		readonly petplay: ReturnType<Sheri["request"]>;
		readonly pregnant: ReturnType<Sheri["request"]>;
		readonly pussy: ReturnType<Sheri["request"]>;
		readonly ride: ReturnType<Sheri["request"]>;
		readonly suck: ReturnType<Sheri["request"]>;
		readonly tentacles: ReturnType<Sheri["request"]>;
		readonly toys: ReturnType<Sheri["request"]>;
	}


	class Shibe extends Base {
		private API: string;
		constructor(options?: Options);
		request(endpoint: string, kind: string): Promise<string>;
		readonly shibe: ReturnType<Shibe["request"]>;
		readonly cat: ReturnType<Shibe["request"]>;
		readonly bird: ReturnType<Shibe["request"]>;
	}

	export { FurryBot as furrybot };
	export { E621 as e621 };
	export { E926 as e926 };
	export { Shibe as shibe };
	export { Sheri as sheri };
}

export = Yiff;
