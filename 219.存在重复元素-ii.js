/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let opt = false
  
  let numsInk = {}
  let numsInkSorted = []
  if (new Set(nums).size === nums.length) {
    return false
  }
  for (let i = 0; i < nums.length; i++) {
    if (numsInkSorted.length > k) {
      let firstN = numsInkSorted.shift()
      delete numsInk[firstN]
    }

    let n = nums[i]
    if (!numsInk[n]) {
      numsInk[n] = true
      numsInkSorted.push(n)
    } else {
      opt = true
      break
    }
  }
  return opt
};
// @lc code=end

// local test
// console.log(
//   containsNearbyDuplicate(
//     [1,2,3,1,4,3], 2
//   )
// )