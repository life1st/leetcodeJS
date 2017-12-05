// The count-and-say sequence is the sequence of integers with the first five terms as following:

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 6.     312211
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
// Given an integer n, generate the nth term of the count-and-say sequence.

// Note: Each term of the sequence of integers will be represented as a string.

// Example 1:
// Input: 1
// Output: "1"

// Example 2:
// Input: 4
// Output: "1211"
/**
 * @param {number} 
 * @return {string}
 */

 // 38. Count and Say  https://leetcode.com/problems/count-and-say/description/
var countAndSay = function(n) {
    var res
    if (n>0) {
       res = countAndSay(n-1)
    }
    if (n = 1){
        return 1
    }else {
        var arr = []
        while (res > 0){
            arr.unshift(res%10)
            res /= 10
        }
        var newArr = []
        for (var i=0; i<arr.length-1; i++){
            if (arr[i]===arr[i+1]){
                
            }
        }
    }
    
};

module.exports = countAndSay