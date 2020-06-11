/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
var zigzagLevelOrder = function(root) {
  if (!root) {
    return []
  }
  let stack = [root]
  let ans = []
  let direction = 1
  while (stack.length > 0) {
    let tmp = []
    let val = []
    stack.forEach(node => {
      val.push(node.val)
      if (node.left) {
        tmp.push(node.left)
      }
      if (node.right) {
        tmp.push(node.right)
      }
    })
    if (direction === -1) {
      val.reverse()
      direction = 1
    } else {
      direction = -1
    }
    ans.push(val)
    stack = tmp
  }

  return ans
};
// @lc code=end

//[1,2,3,4,null,null,5]
