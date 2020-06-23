/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) {
      return null
    }
    let stack = [root]
    while (stack.length > 0) {
      let tmp = []
      stack.forEach(node => {
        if (node.left) {
          tmp.push(node.left)
        }
        if (node.right) {
          tmp.push(node.right)
        }
      })
      let len = tmp.length
      tmp.forEach((node, i) => {
        if (i < len - 1) {
          node.next = tmp[i + 1]
        }
      })
      stack = tmp
    }
    return root
};
// @lc code=end

