/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0, right = nums.length
  if (nums[right] < target) {
    return right + 1
  }
  while (left < right) {
    let i = Math.floor((right + left) / 2)
    let n = nums[i]
    if (n === target) {
      return i
    } else if (n > target) {
      right = i
    } else {
      left = i + 1
    }
  }
  return left
};
// @lc code=end

// local test
console.log(
  // searchInsert([1,3,5,6], 2),
  // searchInsert([1,3,5,6], 7),
  searchInsert([1,3,5,6], 7)
)