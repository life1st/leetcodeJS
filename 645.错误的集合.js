/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  let arr = Array(nums.length + 1).fill(null)
  let ans = Array(2).fill(null)
  nums.forEach(n => {
    if (!arr[n]) {
      arr[n] = n
    } else {
      ans[0] = n
    }
  })
  arr.forEach((n, i) => {
    if (!n && i !== 0) {
      ans[1] = i
    }
  })

  return ans
};
// @lc code=end

