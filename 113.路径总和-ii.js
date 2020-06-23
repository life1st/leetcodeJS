/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  let ans = []
  if (!root) {
    return ans
  }

  let stack = [[root, [root.val]]]
  while (stack.length > 0) {
    let [node, path] = stack.pop()
    if (node.left) {
      stack.push([node.left, [...path, node.left.val]])
    }
    if (node.right) {
      stack.push([node.right, [...path, node.right.val]])
    }
    if (!node.left && !node.right) {
      let count = path.reduce((acc, v) => acc + v, 0)
      if (count === sum) {
        ans.push(path)
      }
    }
  }

  return ans
};
// @lc code=end

