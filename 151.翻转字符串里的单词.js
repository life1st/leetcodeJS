/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let split = true
  let i = 0
  let words = []
  while (i < s.length) {

    if (s[i] === ' ') {
      split = true
    } else {
      if (split) {
        words.unshift(s[i])
        split = false
      } else {
        words[0] += s[i]
      }
    }
    i++
  }

  return words.join(' ')
};
// @lc code=end

//local test
console.log(
  reverseWords("the sky is blue")
)