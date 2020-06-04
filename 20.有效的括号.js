/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const starts = ['(', '{', '[']
  const ends = [')', '}', ']']

  let startsStack = []
  let opt = true
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    
    let iStart = starts.indexOf(char)
    if (iStart > -1) {
      startsStack.push(iStart)
    } else {
      // end
      let iEnd = ends.indexOf(char)
      let prevStarti = startsStack.pop()
      if (prevStarti === iEnd) {
        continue
      } else {
        opt = false
        break
      }
    }
  }

  if (startsStack.length > 0) {
    return false
  }

  return opt
};
// @lc code=end

// local test
console.log(
  isValid("[")
)