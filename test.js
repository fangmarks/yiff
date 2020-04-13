let yiff = require("./index");
let x = new yiff.e926();

async function y() {
  return await x.get("werewolf male/male");
}
y().then((r) => {
  console.log(r);
});
