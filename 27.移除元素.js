/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let i = 0
  let count = 0
  while (i + count < nums.length) {
    let n = nums[i]
    if (n === val) {
      nums[i] = nums[nums.length - 1 - count]
      count++
    } else {
      i++
    }
  }
  return nums.length - count
};
// @lc code=end

