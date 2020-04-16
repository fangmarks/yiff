const p = require("phin");
let Base = require("./Base");
const version = "V2";
class Sheri extends Base {
  constructor(options) {
    super(options);
    if (!options) throw new Error("You need an API Key for this API.");
    this.apikey = `Token ${options.apikey}`;
    this.API = `https://sheri.bot/api/`;
  }
  async request(endpoint) {
    if (!endpoint) throw new Error("Endpoint not defined");
    console.log(this.apikey);
    let headersKey = {
      "User-Agent": this.ua,
      // "Content-Type": "application/json",
      Authorization: this.apikey,
    };
    let headers_keyless = {
      "User-Agent": this.ua,
      //"Content-Type": "application/json",
    };
    let headers;
    if (["yiff", "murr"].includes(endpoint)) {
      headers = headers_keyless;
    } else {
      headers = headersKey;
    }
    let res = await p({
      parse: "json",
      url: `${this.API}${endpoint}?format=json`,
      method: "GET",
      headers,
    });
    return res.body;
  }
  // ! Animals
  get sixtynine() {
    return this.request("69");
  }
}

module.exports = Sheri;
