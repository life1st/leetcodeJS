/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) {
    return 0
  }
  let stack = [root]
  let level = 0
  while (stack.length > 0) {
    let tmp = []
    level++
    for (let node of stack) {
      if (node.left) {
        tmp.push(node.left)
      }
      if (node.right) {
        tmp.push(node.right)
      }
      if (!node.left && !node.right) {
        return level
      }
    }
    stack = tmp
  }
};
// @lc code=end

