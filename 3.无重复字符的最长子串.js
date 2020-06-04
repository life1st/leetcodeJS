/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0
  for (let i = 0; i < s.length; i++) {
    let str = ''
    let end = i
    let charMap = {}
    while (end < s.length && !charMap[s[end]]) {
      charMap[s[end]] = true
      str += s[end++]
    }

    charMap = {}
    if (max < str.length) {
      max = str.length
    }
  }

  return max
};
// @lc code=end

//local test
console.log(
  lengthOfLongestSubstring('dvdf'),
  lengthOfLongestSubstring('abcabcbb'),
  lengthOfLongestSubstring('bbbbb'),
  lengthOfLongestSubstring('pwwkew'),
)