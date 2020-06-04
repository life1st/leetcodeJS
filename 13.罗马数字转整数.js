/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let numberMap = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'L': 50,
    'XL': 40,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000
  }
  
  let opt = 0
  let index = s.length
  let keys = Object.keys(numberMap)
  while(index > 0) {
    let word = s.slice(index - 2, index)
    let if2nIndex = keys.indexOf(word)
    if (if2nIndex > -1) {
      index -= 2
    } else {
      word = s.slice(index - 1, index)
      index -= 1
    }
    opt += numberMap[word]
  }


  return opt
};
// @lc code=end

// local test
// console.log(
//   romanToInt('III')
// )