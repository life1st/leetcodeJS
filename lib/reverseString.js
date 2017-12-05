/**
 * @param {string} s
 * @return {string}
 */

//  344. Reverse String https://leetcode.com/problems/reverse-string/description/
var reverseString = function(s) {
    var arr = s.split('')
    var newArr = []
    for (var i = arr.length-1;i>=0;i--){
        newArr.push(arr[i])
    }
    return newArr.join('')
};

module.exports = reverseString