/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var findMinListVal = function(lists) {
  let n = Infinity
  let minIndex
  for (let i = 0; i < lists.length; i++) {
    if (lists[i] && lists[i].val < n) {
      minIndex = i
      n = lists[i].val
    }
  }

  return minIndex
}
var mergeKLists = function(lists) {
  let opt = new ListNode(-1)
  let tmp = opt
  while (lists.length > 0) {
    let i = findMinListVal(lists)
    if (i) {
      tmp.next = new ListNode(lists[i].val)
      tmp = tmp.next
    }
    if (!lists[i] || !lists[i].next) {
      lists.splice(i, 1)
    } else {
      lists[i] = lists[i].next
    }
  }
  return opt.next
};
// @lc code=end

//local test
const {ListNode, buildListFromArray} = require('./lib/base/listNode')
console.log(
  new ListNode().trans2Arr(
    mergeKLists(
      [
        buildListFromArray([1,4,5]),
        buildListFromArray([1,3,4]),
        buildListFromArray([2, 6]),
      ]
    )
  )
)