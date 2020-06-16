/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (!p && !q) {
    return true
  }
  if (!p || !q) {
    return false
  }
  let stack1 = [p]
  let stack2 = [q]
  while (stack1.length > 0 && stack2.length > 0) {
    let node1 = stack1.pop()
    let node2 = stack2.pop()
    if (node1 && node2) {
      if (node1.val !== node2.val) {
        return false
      }
      stack1.push(node1.left ? node1.left : null)
      stack1.push(node1.right ? node1.right : null)
  
      stack2.push(node2.left ? node2.left : null)
      stack2.push(node2.right ? node2.right : null)
    } else if (!node1 && !node2) {
    } else {
      return false
    }
  }

  return true
}

// @lc code=end

