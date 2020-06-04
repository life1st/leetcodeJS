/*
 * @lc app=leetcode.cn id=336 lang=javascript
 *
 * [336] 回文对
 */

// @lc code=start

let isPalindromeStr = (str) => {
  let start = 0
  let end = str.length - 1
  while (start < end) {
    if (str[start] !== str[end]) {
      return false
    } else {
      start++
      end--
    }
  }
  return true
}
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
  let ans = []
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      let str1 = words[i] + words[j]
      let str2 = words[j] + words[i]
      if (isPalindromeStr(str1)) {
        ans.push([i, j])
      }
      if (isPalindromeStr(str2)) {
        ans.push([j, i])
      }
    }
  }

  return ans
};
// @lc code=end

// local test
console.log(
  palindromePairs(["bat","tab","cat"])
)