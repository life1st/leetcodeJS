/*
 * @lc app=leetcode.cn id=537 lang=javascript
 *
 * [537] 复数乘法
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
  let numsa = a.split('+'), numsb = b.split('+')
  numsa[1] = numsa[1].replace('i', '')
  numsb[1] = numsb[1].replace('i', '')
  let resa = numsa[0] * numsb[0] - numsa[1] * numsb[1]
  let resb = numsa[1] * numsb[0] + numsa[0] * numsb[1]

  let res = resa + '+' + String(resb) + 'i'

  return res
};
// @lc code=end

//local test
console.log(
  complexNumberMultiply('1+-1i', '1+-1i')
)