const p = require("phin");
let Base = require("./Base");
class E926 extends Base {
  constructor(options) {
    super(options);
  }

  async request(tags, cb) {
    if (!tags) throw new Error("No Tags defined");
    let res = await p({
      parse: "json",
      url: `https://e926.net/posts.json?limit=1&tags=order:random  rating:s type:png type:jpg ${tags}`,
      method: "GET",
      headers: { "User-Agent": this.ua },
    });

    let post = res.body.posts[0];
    let artists;
    let sources;

    if (!post)
      throw new Error(
        "There was no Image found with those Tags, please try again."
      );

    if (post.tags.artist.length === 0) artists = ["unknown_artist"];
    else artists = post.tags.artist;

    if (post.sources.length === 0) sources = ["unknown_source"];
    else sources = post.souces;

    return {
      id: post.id,
      page: `https://e926.net/posts/${post.id}`,
      tags: post.tags,
      sources: post.sources,
      score: post.score,
      fav_count: post.fav_count,
      artist: artists,
      image: post.file.url,
      md5: post.file.md5,
      useragent: this.ua,
    };
  }
  async get(tags) {
    return await this.request(tags);
  }
}

module.exports = E926;
