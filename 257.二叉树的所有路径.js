/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root) {
    return []
  }
  let stack = [[root, String(root.val)]]
  let ans = []
  while (stack.length > 0) {
    let [node, nodeVal] = stack.pop()
    if (!node.left && !node.right) {
      ans.push(nodeVal)
    }
    if (node.right) {
      stack.push([node.right, nodeVal + '->' + node.right.val])
    }
    if (node.left) {
      stack.push([node.left, nodeVal + '->' + node.left.val])
    }
  }
  return ans
};
// @lc code=end

