/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let magazineMap = {}
  for (let c of magazine) {
    if (!magazineMap[c]) {
      magazineMap[c] = 1
    } else {
      magazineMap[c]++
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    let char = ransomNote[i]
    if (magazineMap[char] > 0) {
      magazineMap[char]--
    } else {
      return false
    }
  }

  return true
};
// @lc code=end

