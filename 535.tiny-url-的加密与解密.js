/*
 * @lc app=leetcode.cn id=535 lang=javascript
 *
 * [535] TinyURL 的加密与解密
 */

// @lc code=start
const Urls = function() {
  this.map = {}
}
const urls = new Urls()
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    let k = Date.now() + String(Math.random()).slice(2)

    urls.map[k] = longUrl
    return k
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return urls.map[shortUrl]
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
// @lc code=end

