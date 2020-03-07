const axios = require("axios");
const util = require("../util");

/**
 *
 * @param {String} request - The tags you want to search for
 * @param {Object} options -
 */
const request = async function(requestTags, { isCubAllowed = false }) {
  let response = await axios
    .get(`https://e621.net/posts.json`, {
      headers: {
        "user-agent": this.useragent || util.useragent()
      },
      params: {
        limit: "1",
        tags: requestTags + " order:random" + (isCubAllowed ? "" : " -young")
      }
    })
    .catch(error => {
      console.log(error.response);
    });

  let posts = response.data["posts"][0];

  //console.log(posts);

  if (!posts) throw new Error("There was no Image found with those tags");
  let artists;
  if (posts.tags.artist.length === 0) artists = ["unknown_artist"];
  else artists = posts.tags.artists;

  return {
    postID: posts.id,
    page: `https://e621.net/posts/${posts.id}`,
    tags: "Deprecated, see e621 Page for details.",
    sources: posts.sources,
    score: posts.score,
    fav_count: posts.fav_count,
    artist: posts.tags.artist,
    image: posts.file.url,
    md5: posts.file.md5,
    UA: util.useragent()

    // image: file_url
  };
};

module.exports = async = {
  setUserAgent: function(software) {
    this.useragent = util.useragent(software);
  },
  /**
   *
   * @param {string} tags - The tags you want to search for | max 4
   */
  noCubFilter: async function(tags) {
    return await request(tags, { isCubAllowed: true });
  },

  /**
   *
   * @param {string} tags - The tags you want to search for | max 3
   */
  CubFilter: async function(tags) {
    return await request(tags, { isCubAllowed: false });
  }
};

/*
    API Wrapper written by @codepupper
*/
