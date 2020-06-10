/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  const buildTree = (tree1, tree2) => {
    let node = new TreeNode()
    let node1 = tree1 || {}
    let node2 = tree2 || {}
    let val = 0
    if (node1.val) {
      val += node1.val
    }
    if (node2.val) {
      val += node2.val
    }
    if (!tree1 && !tree2) {
      return null
    }
    node.val = val
    node.left = buildTree(node1.left, node2.left)
    node.right = buildTree(node1.right, node2.right)
    return node
  }
  
  return buildTree(t1, t2)
};
// @lc code=end

