/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let stack = []
  while (head) {
    stack.push(head.val)
    head = head.next
  }

  for (let i = 0; i < stack.length / 2; i++) {
    let top = stack[i]
    let bottom = stack[stack.length - 1 - i]
    if (top !== bottom) {
      return false
    }
  }
  return true  
};
// @lc code=end

