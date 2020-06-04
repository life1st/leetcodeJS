function ListNode(val){
    this.val = val
    this.next = null
}

ListNode.prototype.append = function(num){
    var newNode = new ListNode(num),
        current = this
    while (current.next) {
        current = current.next
    }
    current.next = newNode

    return this
}
ListNode.prototype.trans2Arr = function(list){
    var arr = [],
        current = list || this
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

const buildListFromArray = (arr) => {
    let list = new ListNode()
    let curr = list
    arr.forEach((n, i) => {
        curr.val = n
        if (i < arr.length - 1) {
            curr.next = new ListNode()
            curr = curr.next
        }
    })

    return list
}

module.exports = {ListNode, buildListFromArray}