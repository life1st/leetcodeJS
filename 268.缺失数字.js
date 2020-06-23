/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let except = Array(nums.length + 1).fill(null).reduce((acc, v, i) => acc + i, 0)
  let c = nums.reduce((acc, v) => acc + v, 0)
  return except - c
};
// @lc code=end

