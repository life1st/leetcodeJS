/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function(root) {
  if (!root) {
    return []
  }
  let stack = [root]
  let ans = []
  while (stack.length > 0) {
    let tmp = []
    let val = null
    stack.forEach(node => {
      if (node.left) {
        tmp.push(node.left)
      }
      if (node.right) {
        tmp.push(node.right)
      }
      val = node.val
    })
    ans.push(val)
    stack = tmp
  }

  return ans
};
// @lc code=end

