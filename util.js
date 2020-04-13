/*
    API Wrapper written by codepupper
*/
const c = require("chalk");
const p = require("./package.json");
let log = console.log;

module.exports = {
  /**
   *
   * @param {string} text
   */
  log: function (text) {
    console.log(c.hex("#a11eff")(`[Yiff Module] `) + c.hex("#ff8d28")(text));
  },
  invalid: function () {
    throw new Error(
      c.hex("#a11eff")(`[Yiff Module] `) +
        c.hex("#ff8d28")("The API Key you provided is invalid.")
    );
  },
};
