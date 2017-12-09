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

module.exports = ListNode