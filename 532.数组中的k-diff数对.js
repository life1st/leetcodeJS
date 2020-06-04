/*
 * @lc app=leetcode.cn id=532 lang=javascript
 *
 * [532] 数组中的K-diff数对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  let nm = new Map()
  if (k < 0) return 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let n1 = nums[i]
      let n2 = nums[j]
      if (n1 > n2) {
        [n1, n2] = [n2, n1]
      }

      if (n2 - n1 === k) {
        nm.set(`${n1}${n2}`, true)
      }
    }
  }
  
  return nm.size
};
// @lc code=end

console.log(
  findPairs(
    [1,1,1,2,1], 1
  )
)