/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  let opt = false
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i]

    let start = i + 1
    while (start <= Math.min(i + k , nums.length - 1)) {
      let diff = n - nums[start]
      if (Math.abs(diff) <= t) {
        opt = true
        break
      }
      start++
    }
    if (opt) {
      break
    }
  }

  return opt
};
// @lc code=end

// local test
// console.log(
//   containsNearbyAlmostDuplicate(
//     [1,2,3,1], 3, 0
//   )
// )