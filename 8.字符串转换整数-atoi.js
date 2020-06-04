/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let n = parseInt(str)

  if (Number.isNaN(n)) {
    return 0
  }
  const MAX_N = Math.pow(2, 31) - 1
  if (n > MAX_N) {
    return MAX_N
  }
  const MIN_N = Math.pow(-2, 31)
  if (n < MIN_N) {
    return MIN_N
  }
  return n
};
// @lc code=end

