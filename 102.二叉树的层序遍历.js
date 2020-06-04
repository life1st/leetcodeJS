/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function(root) {
  let ans = []
  let nodes = []
  if (!root) {
    return ans
  } else {
    nodes.push(root)
  }
  while (nodes.length > 0) {
    let tmp = []
    let curr = []
    nodes.forEach(node => {
      curr.push(node.val)
      if (node.left) {
        tmp.push(node.left)
      }
      if (node.right) {
        tmp.push(node.right)
      }
    })
    ans.push(curr)
    nodes = tmp
  }

  return ans
};
// @lc code=end

