/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let ans = []
  for (let i = 0; i < numRows; i++) {
    let row = Array(i + 1).fill(null)
    row = row.map((_, j) => {
      if (j === 0 || j === row.length - 1) {
        return 1
      } else {
        let prevRow = ans[i - 1]
        return prevRow[j - 1] + prevRow[j]
      }
    })
    ans.push(row)
  }

  return ans
};
// @lc code=end

// local test
console.log(
  generate(4)
)