const p = require("../package.json");

class Base {
  constructor(options) {
    if (!options) options = {};

    this.name = options.name || "";
    this.version = options.version || "";
    this.creator = options.creator || "";
  }
  get ua() {
    let Software;
    if (!this.name || !this.version || !this.creator) Software = "";
    else Software = `${this.name}/${this.version} by ${this.creator} using `;

    return `${Software}${p.name}/${p.version} by ${p.author}`;
  }
}

module.exports = Base;
