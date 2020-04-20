const p = require("phin");
let Base = require("./Base");
let ch = require("chalk");
const version = "V1";
class FurryBot extends Base {
  constructor(options) {
    super(options);
    this.API = `https://api.furry.bot/${version}`;
  }
  async request(endpoint, kind, nsfw) {
    if (!endpoint) throw new Error("Endpoint not defined");
    let url;
    let NSFW = nsfw ? "nsfw" : "sfw";
    switch (kind) {
      case "furry":
        url = `${this.API}/furry/${NSFW}/${endpoint}/`;
        break;
      case "animal":
        url = `${this.API}/animals/${endpoint}/`;
        break;

      default:
        break;
    }
    let res;
    try {
      res = await p({
        url,
        method: "GET",
        followRedirects: true,
        headers: {
          "User-Agent": this.ua,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
    let body;
    try {
      body = JSON.parse(res.body.toString());
      //    console.log(body.response);
    } catch (e) {
      console.error(res.body.toString()); // do some other stuff with it here
    }
    return body.response;
  }
  // ! Animals ( )
  get birb() {
    return this.request("birb", "animal");
  }
  get blep() {
    return this.request("blep", "animal");
  }
  /*   get chee() {
    return this.request("cheeta", "animal");
  } */
  get lynx() {
    return this.request("lynx", "animal");
  }
  get wolf() {
    return this.request("wolf", "animal");
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
