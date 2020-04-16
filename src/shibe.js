const p = require("phin");
let Base = require("./Base");
const version = "V2";
class Shibe extends Base {
  constructor(options) {
    super(options);
    this.API = `https://shibe.online/api/ANIMAL?count=1&urls=true&httpsUrls=true`;
  }
  async request(animal) {
    if (!animal) throw new Error("Animal not defined");

    let res = await p({
      parse: "json",
      url: `https://shibe.online/api/${animal}?count=1&urls=true&httpsUrls=true`,
      method: "GET",
      headers: { "User-Agent": this.ua },
    });
    return res.body[0];
  }

  get shibe() {
    return this.request("shibes");
  }
  get cat() {
    return this.request("cats");
  }
  get bird() {
    return this.request("birds");
  }
}
module.exports = Shibe;
