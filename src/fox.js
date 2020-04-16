const p = require("phin");
let Base = require("./Base");
const version = "V2";
class Fox extends Base {
  constructor(options) {
    super(options);
    this.API = `https://randomfox.ca/floof`;
  }
  async request() {
    let res = await p({
      parse: "json",
      url: this.API,
      method: "GET",
      headers: { "User-Agent": this.ua },
    });
    return res.body;
  }

  get Fox() {
    return this.request();
  }
}
module.exports = Fox;
