/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let ans = ''
  if (strs.length === 0) {
    return ans
  }
  let baseStr = strs[0]
  for (let i = 0; i < baseStr.length; i++) {
    let baseChar = baseStr[i]
    if (strs.every(char => char[i] === baseChar)) {
      ans += baseChar
    } else {
      break
    }
  }
  return ans
};
// @lc code=end

// local test
console.log(
  longestCommonPrefix(["flower","flow","flight"]),
  // longestCommonPrefix(["dog","racecar","car"]),
)