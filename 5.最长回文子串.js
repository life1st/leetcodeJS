/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
const expandAround = (s, left, right) => {
  let opt = ''
  while (left >= 0 && right < s.length + 1) {
    if (s[left] === s[right]) {
      opt = s.slice(left, right + 1)
      left--
      right++
    } else {
      break
    }
  }
  return opt
}
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let len = s.length
  let ans = ''
  for (let i = 0; i < len; i++) {
    let str1 = expandAround(s, i, i)
    let str2 = expandAround(s, i, i + 1)
    let curr_s = str1.length < str2.length ? str2 : str1
    if (curr_s.length > ans.length) {
      ans = curr_s
    }
  }
  return ans
};
// @lc code=end

//local test
console.log(
  longestPalindrome("a"),
  // longestPalindrome("babad"),
  // longestPalindrome("cbbd"),
  // longestPalindrome("bb"),
  // longestPalindrome("ccd"),
  // longestPalindrome("ccc"),
  // longestPalindrome("222020221"),
  // longestPalindrome("aaababaad"),
)