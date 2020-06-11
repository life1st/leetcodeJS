/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) {
    return 1
  }
  if (n === 1) {
    return x
  }

  let ans = x
  let i = 1
  while (Math.abs(n) - i > i) {
    ans *= ans
    i += i
  }
  while (Math.abs(n) - i > 0) {
    ans *= x
    i++
  }
  if (n < 0) {
    return 1 / ans
  } else {
    return ans
  }
};
// @lc code=end

// local test
console.log(
  myPow(2.1, 3)
)