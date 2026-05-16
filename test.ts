import Yiff from "./src/mod.ts";

const gelbooruKey = Deno.env.get("GELBOORU_API_KEY");
const gelbooruUserId = Deno.env.get("GELBOORU_USER_ID");

const yiff = new Yiff({
  useragent: "Yiff-DEV/4.0",
  apiKeys: {
    e621: Deno.env.get("E621_API_KEY"),
    e926: Deno.env.get("E926_API_KEY"),
    danbooru: Deno.env.get("DANBOORU_API_KEY"),
    yiffrest: Deno.env.get("YIFFREST_API_KEY"),
    gelbooru: gelbooruKey && gelbooruUserId
      ? { key: gelbooruKey, userId: gelbooruUserId }
      : undefined,
  },
});

Deno.test("fox", async () => {
  const res = await yiff.fox();
  console.log(res);
});

Deno.test("e621", async () => {
  const res = await yiff.e621("canine solo", { limit: 1 });
  console.log(res);
});

Deno.test("e926", async () => {
  const res = await yiff.e926("canine solo", { limit: 1 });
  console.log(res);
});

Deno.test("danbooru", async () => {
  const res = await yiff.danbooru("cat_ears", { limit: 1 });
  console.log(res);
});

Deno.test("gelbooru", async () => {
  const res = await yiff.gelbooru("fox_girl", { limit: 1 });
  console.log(res);
});

Deno.test("yiffrest", async () => {
  const res = await yiff.yiffrest("furry.boop", { limit: 1 });
  console.log(res);
});
