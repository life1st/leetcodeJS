/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) {
    return []
  }
  let stack = [root]
  let ans = []
  while (stack.length > 0) {
    ans.unshift(stack.map(node => node.val))
    let tmp = []
    stack.forEach(node => {
      if (node.left) {
        tmp.push(node.left)
      }
      if (node.right) {
        tmp.push(node.right)
      }
    })
    stack = tmp
  }

  return ans
};
// @lc code=end

