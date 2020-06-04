/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let n_showed = {}
  while (n !== 1 && !n_showed[n]) {
    n_showed[n] = true
    
    let ns = String(n).split('')
    let round_n = 0
    ns.forEach(a => {
      round_n += a * a
    })

    n = round_n
  }
  
  return n === 1
};
// @lc code=end


// local test
// console.log(
//   isHappy(19)
// )
