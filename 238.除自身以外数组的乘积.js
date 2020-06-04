/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  return nums.map((_, i) => {
    return nums.filter((_2, _i) => i !== _i).reduce((acc, val) => acc * val, 1)
  })
};
// @lc code=end

