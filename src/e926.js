const axios = require("axios");
const util = require("../util");

/**
 *
 * @param {String} request - The tags you want to search for
 * @param {Object} options -
 */
const requests = async function(requestTags, { isCubAllowed = false }) {
  let response = await axios
    .get(`https://e926.net/posts.json`, {
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
    page: `https://e926.net/posts/${posts.id}`,
    tags: posts.tags,
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
  request: async function(tags) {
    return await requests(tags, { isCubAllowed: true });
  }
};

/*
    API Wrapper written by @codepupper
*/
