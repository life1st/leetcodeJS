/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let res = ''
  let n1 = num1, n2 = num2
  let s = 0
  let i1 = n1.length - 1, i2 = n2.length - 1
  while(i1 >= 0 || i2 >= 0 || s > 0) {
    let n1_ = n1[i1--]
    if (n1_ > 0) {
      s += n1_ * 1
    }
    let n2_ = n2[i2--]
    if (n2_ > 0) {
      s += n2_ * 1
    }
    res = (s % 10) + res
    s = Math.floor(s / 10)
  }

  return res
};
// @lc code=end

// local test
// console.log(
//   addStrings(
//     '2344', '213'
//   )
// )