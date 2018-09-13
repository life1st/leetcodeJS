var addTwoNumbers = require('../lib/addTwoNumbers')

var ListNode = require('../lib/base/listNode')
/* function ListNode(val){
    this.val = val
    this.next = null
} */

// var l1 = new ListNode(2)
// l1.append(4).append(3).append(5).append(2).append(0)
var l1 = new ListNode()
l1.setVal([1])
var l2 = new ListNode()
l2.setVal([9, 9])

var result = addTwoNumbers(l1,l2)
console.log(result)
console.log(result.trans2Arr())