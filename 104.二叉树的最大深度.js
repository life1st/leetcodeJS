/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
  if (!root) {
    return 0
  }
  let nodes = [root]
  let ans = 0
  
  while (nodes.length > 0) {
    let tmp = []
    nodes.forEach(node => {
      if (node.left) {
        tmp.push(node.left)
      }
      if (node.right) {
        tmp.push(node.right)
      }
    })
    nodes = tmp
    ans++
  }

  return ans
};
// @lc code=end

