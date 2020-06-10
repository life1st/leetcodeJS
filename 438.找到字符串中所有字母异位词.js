/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let ans = []
  let alphabet = Array(26).fill(null).map(() => 0)
  p.split('').forEach(c => {
    let i = c.charCodeAt() - 97
    alphabet[i] += 1
  })

  // init str
  let start = 0
  let len = p.length
  for (let i = start; i < len; i++) {
    let c = s[i]
    if (!c) continue
    let index = c.charCodeAt() - 97
    alphabet[index]--
  }
  if (alphabet.every(v => v === 0)) {
    ans.push(0)
  }
  start++
  while (start + len <= s.length) {
    let c_delete = s[start - 1]
    let c_add = s[start + len - 1]
    alphabet[c_delete.charCodeAt() - 97]++
    alphabet[c_add.charCodeAt() - 97]--
    if (alphabet.every(v => v === 0)) {
      ans.push(start)
    }

    start++
  }

  return ans
};
// @lc code=end

//local test 
console.log(
  // findAnagrams("cbaebabacd", "abc"),
  findAnagrams("", "a"),
  // findAnagrams("baa", "aa")
)