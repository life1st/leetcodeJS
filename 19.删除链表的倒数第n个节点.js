/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */
const {ListNode, buildListFromArray, trans2Array} = require('./lib/base/listNode')
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // let node = head
  // let stack = []
  // while (node) {
  //   if (node) {
  //     stack.push(node)
  //   }
  //   node = node.next
  // }
  // if (stack.length - n <= 0) {
  //   if (stack.length > 1) {
  //     return stack[1]
  //   }
  //   return null
  // }
  // let prev = stack[stack.length - n - 1]
  // let next = stack[stack.length - n + 1]
  // prev.next = next
  // return stack[0]
  let dummy = new ListNode(0)
  dummy.next = head
  let fastId = 0
  let slowId = 0
  let fastNode = dummy
  let slowNode = dummy
  while (fastNode) {
    if (fastId - slowId <= n) {
      fastNode = fastNode.next
      fastId++
    } else {
      fastNode = fastNode.next
      slowNode = slowNode.next
      fastId++
      slowId++
    }
  }
  slowNode.next = slowNode.next.next
  return dummy.next
};
// @lc code=end

console.log(
  trans2Array(
    removeNthFromEnd(
      buildListFromArray([1]), 1
    )
  )
)