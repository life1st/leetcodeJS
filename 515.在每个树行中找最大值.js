/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  if (!root) {
    return []
  }
  let curr = [root]
  let ans = []
  while (curr.length > 0) {
    let tmp = []
    let max = -Infinity
    curr.forEach(node => {
      if (node.val > max) {
        max = node.val
      }

      if (node.left) {
        tmp.push(node.left)
      }
      if (node.right) {
        tmp.push(node.right)
      }
    })
    curr = tmp
    ans.push(max)
  }

  return ans
};
// @lc code=end

