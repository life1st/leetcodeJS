/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  if (version1 === version2) {
    return 0
  }

  let v1 = version1.split('.')
  let v2 = version2.split('.')

  let opt = 0
  let index = 0
  while(index < v1.length || index < v2.length) {
    let n1 = Number(v1[index]) || 0
    let n2 = Number(v2[index]) || 0
    if (n1 > n2) {
      opt = 1
      break
    } else if (n1 < n2) {
      opt = -1
      break
    } else {
      index++
    }
  }

  return opt
};
// @lc code=end


// local test

// console.log(
//   compareVersion(
//     '1.002.3',
//     '1.02.003'
//   )
// )
