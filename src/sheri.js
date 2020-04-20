const p = require("phin");
let Base = require("./Base");
let ch = require("chalk");
class Sheri extends Base {
  constructor(options) {
    super(options);
    if (!options) throw new Error("You need an API Key for this API.");
    this.apikey = `Token ${options.apikey}`;
    this.API = `https://sheri.bot/api/`;
  }
  async request(endpoint) {
    if (!endpoint) throw new Error("Endpoint not defined");
    let res;
    try {
      res = await p({
        parse: "json",
        url: `${this.API}${endpoint}?format=json`,
        method: "GET",
        followRedirects: true,
        headers: {
          "User-Agent": this.ua,
          Authorization: this.apikey,
        },
      });
    } catch (error) {
      console.error(ch.red(`Error in: ${endpoint}`));
    }
    let body;
    try {
      body = res.body;
    } catch (e) {
      console.error(res.body.toString()); // do some other stuff with it here
    }
    return body;
  }
  // ! Public
  get bunny() {
    return this.request("bunny");
  }
  get cat() {
    return this.request("cat");
  }
  get fox() {
    return this.request("fox");
  }
  get husky() {
    return this.request("husky");
  }
  get mur() {
    return this.request("mur");
  }
  get nature() {
    return this.request("nature");
  }
  get pig() {
    return this.request("pig");
  }
  get snep() {
    return this.request("snep");
  }
  get turkey() {
    return this.request("turkey");
  }
  get wolf() {
    return this.request("wolves");
  }
  get yiff() {
    return this.request("yiff");
  }

  // ! SFW

  get ban() {
    return this.request("ban");
  }
  get boop() {
    return this.request("boop");
  }
  get cuddle() {
    return this.request("cuddle");
  }
  get hold() {
    return this.request("hold");
  }
  get hug() {
    return this.request("hug");
  }
  get kick() {
    return this.request("kick");
  }
  get kiss() {
    return this.request("kiss");
  }
  get lick() {
    return this.request("lick");
  }
  get maws() {
    return this.request("maws");
  }
  get pat() {
    return this.request("pat");
  }
  get paws() {
    return this.request("paws");
  }
  get pokemon() {
    return this.request("pokemon");
  }
  get proposal() {
    return this.request("proposal");
  }
  /*   get raccoon() {
    return this.request("raccoon");
  } */
  get trickortreat() {
    return this.request("trickortreat");
  }

  // ! NSFW
  get sixtynine() {
    return this.request("69");
  }
  get anal() {
    return this.request("anal");
  }
  get bang() {
    return this.request("bang");
  }
  get bisexual() {
    return this.request("bisexual");
  }
  get boob() {
    return this.request("boob");
  }
  get booty() {
    return this.request("booty");
  }
  get christmas() {
    return this.request("christmas");
  }
  get cumflation() {
    return this.request("cumflation");
  }
  get cuntboy() {
    return this.request("cuntboy");
  }
  get dick() {
    return this.request("dick");
  }
  get dp() {
    return this.request("dp");
  }
  get fbound() {
    return this.request("fbound");
  }
  get fcreampie() {
    return this.request("fcreampie");
  }
  get finger() {
    return this.request("finger");
  }
  get fpresentation() {
    return this.request("fpresentation");
  }
  get fseduce() {
    return this.request("fseduce");
  }
  get fsolo() {
    return this.request("fsolo");
  }
  get ftease() {
    return this.request("ftease");
  }
  get gay() {
    return this.request("gay");
  }
  get gif() {
    return this.request("gif");
  }
  get lesbian() {
    return this.request("lesbian");
  }
  get mbound() {
    return this.request("mbound");
  }
  get mcreampie() {
    return this.request("mcreampie");
  }
  /*   get mpresentation() {
    return this.request("mpresentation");
  } */
  get mseduce() {
    return this.request("mseduce");
  }
  get msolo() {
    return this.request("msolo");
  }
  get mtease() {
    return this.request("mtease");
  }
  get nboop() {
    return this.request("nboop");
  }
  get nbound() {
    return this.request("nbound");
  }
  get nbrony() {
    return this.request("nbrony");
  }
  get nbulge() {
    return this.request("nbulge");
  }
  get ncomics() {
    return this.request("ncomics");
  }
  get ncuddle() {
    return this.request("ncuddle");
  }
  get nfemboy() {
    return this.request("nfemboy");
  }
  get nfuta() {
    return this.request("nfuta");
  }
  get ngroup() {
    return this.request("ngroup");
  }
  get nhold() {
    return this.request("nhold");
  }
  get nhug() {
    return this.request("nhug");
  }
  get nkiss() {
    return this.request("nkiss");
  }
  get nlick() {
    return this.request("nlick");
  }
  /*   get npats() {
    return this.request("npats");
  } */
  get npokemon() {
    return this.request("npokemon");
  }
  get nseduce() {
    return this.request("nseduce");
  }
  get nsolo() {
    return this.request("nsolo");
  }
  get nspank() {
    return this.request("nspank");
  }
  get ntease() {
    return this.request("ntease");
  }
  get ntrap() {
    return this.request("ntrap");
  }
  get petplay() {
    return this.request("petplay");
  }
  get pregnant() {
    return this.request("pregnant");
  }
  get pussy() {
    return this.request("pussy");
  }
  get ride() {
    return this.request("ride");
  }
  get suck() {
    return this.request("suck");
  }
  get tentacles() {
    return this.request("tentacles");
  }
  get toys() {
    return this.request("toys");
  }
}

module.exports = Sheri;
