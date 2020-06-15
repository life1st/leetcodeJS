/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */

// @lc code=start
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  let ans = []
  let i = S.length - 1
  let group = ''
  while (i >= 0) {
    let c = S[i--]
    if (c === '-') {
      continue
    }
    if (c >= '0' && c <= '9') {
      group = c + group
    } else {
      group = c.toUpperCase() + group
    }

    if (group.length === K) {
      ans.unshift(group)
      group = ''
    }
  }
  if (group.length > 0) {
    ans.unshift(group)
  }
  return ans.join('-')
};
// @lc code=end

// local test
console.log(
  // licenseKeyFormatting("5F3Z-2e-9-w", 2),
  licenseKeyFormatting("2-4A0r7-4k", 4),
)