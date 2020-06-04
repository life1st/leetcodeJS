/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
var addTwoNumbers = function(l1, l2) {
  let opt = new ListNode(0)
  let curr = opt
  let s = 0
  while (l1 || l2 || s > 0) {
    if (l1) {
      s += l1.val
      l1 = l1.next
    }
    if (l2) {
      s += l2.val
      l2 = l2.next
    }
    curr.next = new ListNode( s % 10 )
    s = Math.floor(s / 10)
    curr = curr.next
  }

  return opt.next
};
// @lc code=end

// local test
// const {ListNode, buildListFromArray} = require('./lib/base/listNode')

// let opt = new ListNode

// console.log(
//   opt.trans2Arr(addTwoNumbers(
//     buildListFromArray([9, 9]),
//     buildListFromArray([9, 9])
//   ))
// )