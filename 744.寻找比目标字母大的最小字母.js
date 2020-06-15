/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  if (target >= letters[letters.length - 1]) {
    return letters[0]
  }
  for (let char of letters) {
    if (char > target) {
      return char
    }
  }
};
// @lc code=end

// local test
console.log(
  // nextGreatestLetter(['a', 'b'], 'z'),
  nextGreatestLetter(["c","f","j"], "d"),
)