/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsMap = {}
    for (let i = 0; i < nums.length; i++) {
      let k = target - nums[i]
      if (numsMap[k] !== undefined && i !== numsMap[k]) {
        return [i, numsMap[k]]
      }
      numsMap[nums[i]] = i
    }
};
// @lc code=end

// local test 
console.log(
  twoSum([3, 3], 6)
)