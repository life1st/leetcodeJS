/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function(root) {
  let stack = [root]
  while (stack.length > 0) {
    let tmp = []
    let hasChild = false
    stack.forEach(node => {
      if (node.left) {
        tmp.push(node.left)
      }
      if (node.right) {
        tmp.push(node.right)
      }
      if (node.left || node.right) {
        hasChild = true
      }
    })
    if (!hasChild) {
      return stack[0].val
    }
    stack = tmp
  }
};
// @lc code=end

