import { build, emptyDir } from "@deno/dnt";

await emptyDir("./npm_dist");

await build({
  entryPoints: ["./src/mod.ts"],
  outDir: "./npm_dist",
  shims: {
    deno: true,
  },
  compilerOptions: {
    sourceMap: false,
  },
  package: {
    // package.json properties
    name: "yiff",
    version: Deno.args[0],
    description: "API Wrapper for various Furry Image APIs.",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/fangmarks/yiff.git",
    },
    bugs: {
      url: "https://github.com/fangmarks/yiff/issues",
    },
  },
  postBuild() {
    // steps to run after building and before running the tests
    Deno.copyFileSync("LICENSE", "npm_dist/LICENSE");
    Deno.copyFileSync("README.md", "npm_dist/README.md");
  },
});
