/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  let smap = {}
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (smap[char]) {
      smap[char] += 1
    } else {
      smap[char] = 1
    }
  }

  return Object.keys(smap)
  .map(k => ([k, smap[k]]))
  .sort((a, b) => b[1] - a[1])
  .reduce((acc, val) => acc + val[0].repeat(val[1]), '')
};
// @lc code=end

