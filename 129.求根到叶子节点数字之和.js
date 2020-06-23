/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
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
var sumNumbers = function(root) {
  if (!root) {
    return 0
  }
  let stack = [[root, root.val]]
  let ans = 0
  while (stack.length > 0) {
    let [node, count] = stack.pop()
    if (node.left) {
      stack.push([node.left, count * 10 + node.left.val])
    }
    if (node.right) {
      stack.push([node.right, count * 10 + node.right.val])
    }
    if (!node.left && !node.right) {
      ans += count
    }
  }

  return ans
};
// @lc code=end

