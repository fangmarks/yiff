const p = require("phin");
let Base = require("./Base");
const version = "V2";
class FurryBot extends Base {
  constructor(options) {
    super(options);
    this.API = `https://api.furry.bot/${version}`;
  }
  async request(endpoint, kind, nsfw, headers, body) {
    if (!endpoint) throw new Error("Endpoint not defined");
    let url;
    let NSFW = nsfw ? "nsfw" : "sfw";
    switch (kind) {
      case "furry":
        url = `${this.API}/furry/${NSFW}/${endpoint}/`;
        break;
      case "animal":
        url = `${this.API}/animal/${endpoint}/`;
        break;

      default:
        break;
    }
    let res = await p({
      parse: "json",
      url,
      method: "GET",
      headers: { "User-Agent": this.ua },
      ...(!!body ? { data: body } : {}),
    });
    return res.body;
  }
  // ! Animals
  get birb() {
    return this.request("birb", "animals");
  }
  get blep() {
    return this.request("blep", "animals");
  }
  get chee() {
    return this.request("cheeta", "animals");
  }
  get lynx() {
    return this.request("lynx", "animals");
  }
  get wolf() {
    return this.request("wolf", "animals");
  }

  // ! SFW Furry

  get cuddle() {
    return this.request("cuddle", "furry");
  }
  get flop() {
    return this.request("flop", "furry");
  }
  get boop() {
    return this.request("boop", "furry");
  }
  get fursuit() {
    return this.request("fursuit", "furry");
  }
  get hold() {
    return this.request("hold", "furry");
  }
  get howl() {
    return this.request("howl", "furry");
  }
  get hug() {
    return this.request("hug", "furry");
  }
  get kiss() {
    return this.request("kiss", "furry");
  }
  get lick() {
    return this.request("lick", "furry");
  }
  get propose() {
    return this.request("propose", "furry");
  }

  // ! NSFW FURRY
  get nbang() {
    return this.request("bang", "furry", true);
  }
  get nbulge() {
    return this.request("bulge", "furry", true);
  }
  get ncuddle() {
    return this.request("cuddle", "furry", true);
  }
  get ngroup() {
    return this.request("group", "furry", true);
  }
  get nhug() {
    return this.request("hug", "furry", true);
  }
  get nkiss() {
    return this.request("kiss", "furry", true);
  }
  get nlick() {
    return this.request("lick", "furry", true);
  }
  get nsuck() {
    return this.request("suck", "furry", true);
  }
  get ngayyiff() {
    return this.request("yiff/gay", "furry", true);
  }
  get nstraightyiff() {
    return this.request("yiff/straight", "furry", true);
  }
  get nlesbianyiff() {
    return this.request("yiff/lesbian", "furry", true);
  }
  get ndickgirlyiff() {
    return this.request("yiff/dickgirl", "furry", true);
  }
}

module.exports = FurryBot;
