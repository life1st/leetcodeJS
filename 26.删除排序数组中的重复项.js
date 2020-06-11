/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0
  let j = i + 1
  while (j < nums.length) {
    if (nums[j] === nums[i]) {
      j++
    } else {
      nums[++i] = nums[j]
    }
  }

  return i + 1
};
// @lc code=end

// local test
console.log(
  removeDuplicates([0,0,1,1,1,2,2,3,3,4]),
  removeDuplicates([1, 1, 2])
)
