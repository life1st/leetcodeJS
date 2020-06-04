/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let opt =  new ListNode(0)
  let tmp = opt
  while (l1 || l2) {
    let val
    if (l1 && l2) {
      if (l1.val < l2.val) {
        val = l1.val
        l1 = l1.next
      } else {
        val = l2.val
        l2 = l2.next
      }
    } else if (l1) {
      val = l1.val
      l1 = l1.next
    } else if (l2) {
      val = l2.val
      l2 = l2.next
    } else {
      break
    }
    tmp.next = new ListNode(val)
    tmp = tmp.next
  }

  return opt.next
};
// @lc code=end

// local test
const {ListNode, buildListFromArray} = require('./lib/base/listNode')
console.log(
  mergeTwoLists(
    buildListFromArray([1,2,4]),
    buildListFromArray([1,3,4])
  )
)