// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/* 
function ListNode(val){
    this.val = val
    this.next = null
} */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 //2. Add Two Numbers  https://leetcode.com/problems/add-two-numbers/description/

 var ListNode = require('./listNode')

//这是自己写的ListNode的方法，在leetcode做题的时候要添加进去，主要还是算法设计得不够精巧，不过重构的事，以后再说
ListNode.prototype.append = function(num){
    var newNode = new ListNode(num),
        current = this
    while (current.next) {
        current = current.next
    }
    current.next = newNode

    return this
}
ListNode.prototype.trans2Arr = function(){
    var arr = [],
        current = this
    while(current.next){
        arr.push(current.val)
        current = current.next
    }
    arr.push(current.val)
    return arr
}
ListNode.prototype.setVal = function(arr){
    var res = this
    while(arr[arr.length-1] === 0 && arr.length>1) {
        arr.pop()
    }
    arr.forEach((num, i) => {
        if (i === 0){
            res.val = num
        }else {
            res.append(num)
        }
    })
    return res
}

// 妈的批，leetcode的测试用例，被坑了好多次了。
// 一次是[0],[0] 一次是[1],[9, 9]
// 做的最差的一道。只超过22%的人运行时间。
// 而且这个解法非常取巧，我强行转换为数组来操作，在链表 -> 数组，数组 -> 链表 上浪费了不少时间，当然换个角度想，有很大的优化空间呐。
var addTwoNumbers = function(l1, l2) {

    var arr = [],
        arr1 = l1.trans2Arr(),
        arr2 = l2.trans2Arr()
    var length = arr1.length > arr2.length ?
                arr1.length : arr2.length
    arr.push(0)
    for (var i = 0; i<length; i++){
        arr.push(0)
        var num1 = arr1[i] || 0,
            num2 = arr2[i] || 0
        var num = num1 + num2
        arr[i] += num
        if (arr[i] >= 10){
            arr[i] -= 10
            arr[i+1] += 1
        }
        console.log(i, num, arr, 'test')
        
    }
    var res = new ListNode().setVal(arr)
    return res
}

module.exports = addTwoNumbers