/**
 * @param {number} x
 * @return {number}
 */

// 7. Reverse Integer  https://leetcode.com/problems/reverse-integer/description/
function reverse(x) {
    var arr = [],
        res = 0,
        symbol = 1 //是否负数
    if (x<0) {
        x = -x
        symbol = 0
    }
    while (x !== 0){
        var y = x % 10
        x = parseInt(x/10)
        arr.push(y)
    }
    while (arr[0] === 0){
        arr.shift()
    }
    res  = parseInt(arr.join(''))
    if (res>Math.pow(2,31)-1){
        return 0
    }
    if (symbol === 0) {
        res = -res
    }
    return res
}

module.exports = reverse