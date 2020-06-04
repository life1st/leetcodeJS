/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let start = 0
  let end = height.length - 1
  let area = 0
  while (start < end) {
    let h1 = height[start]
    let h2 = height[end]
    area = Math.max(area, Math.min(h1, h2) * (end - start))
    if (h1 < h2) {
      start++
    } else {
      end--
    }
  }

  return area
};
// @lc code=end

//local test
console.log(
  maxArea([1,8,6,2,5,4,8,3,7])
)