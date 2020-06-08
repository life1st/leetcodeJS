/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let stack = []
  let node = head
  while (node) {
    stack.push(node)
    node = node.next
  }

  if (stack.length === 0) {
    return head
  }
  let ans = stack.pop()
  let curr = ans
  while(stack.length > 0) {
    let n = stack.pop()
    n.next = null
    curr.next = n
    curr = curr.next
  }

  return ans
};
// @lc code=end

