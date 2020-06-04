/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start

const buildWord = (digit, words) => {
  const charMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }

  if (!charMap[digit]) {
    return false
  }

  let chars = charMap[digit]
  if (words.length === 0) {
    return chars
  }

  return chars.reduce((acc, char) => {
    acc.push(...words.map(w => w + char))
    return acc
  }, [])
}
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let ns = digits.split('')
  return ns.reduce((acc, n) => {
    return buildWord(n, acc)
  }, [])
};

// @lc code=end

//local test
console.log(
  letterCombinations('234523245')
)