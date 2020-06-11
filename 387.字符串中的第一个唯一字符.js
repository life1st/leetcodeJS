/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let charMap = {}
  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    if (charMap[c]) {
      charMap[c][1] ++
    } else {
      charMap[c] = [i, 1] // index, showCount
    }
  }
  
  let n = Object.keys(charMap)
  .filter(k => charMap[k][1] === 1)
  .map(k => [k, charMap[k][0]])
  .sort((a, b) => a[1] - b[1])

  if (n.length > 0) {
    return n[0][1]
  } else {
    return -1
  }
};
// @lc code=end

// local test
console.log(
  firstUniqChar('leetcode')
)