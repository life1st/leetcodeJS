/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) {
      return true
    }
    let stack = [root]
    while (stack.length > 0) {
      let tmp = []
      stack.forEach(node => {
        if (node) {
          tmp.push(node.left ? node.left : null)
          tmp.push(node.right ? node.right : null)
        }
      })
      
      for (let i = 0; i < tmp.length / 2; i++) {
        let start = tmp[i]
        let end = tmp[tmp.length - i - 1]
        if (!((start && end && start.val === end.val) || (!start && !end))) {
          console.log(start, end)
          return false
        }
      }
      stack = tmp
    }

    return true
};
// @lc code=end

