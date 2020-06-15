/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  let i = 0
  let ans = []
  let letter = []
  let letterCount = 0
  while (i < words.length) {
    let w = words[i]
    if (letterCount + letter.length - 1 + w.length < maxWidth) {
      letter.push(w)
      letterCount += w.length
      i++
    } else {
      let diff = maxWidth - letterCount
      let leftedCount = diff % (letter.length - 1)
      if (leftedCount === 0) {
        let space = Array(diff / (letter.length - 1)).fill(' ').join('')
        ans.push(
          letter.join(space)
        )
      } else {
        let spaceCount = (diff - leftedCount) / (letter.length - 1)
        ans.push(
          letter.reduce((acc, v, i) => {
            if (i < letter.length - 1) {
              let space = Array(leftedCount-- > 0 ? spaceCount + 1 : spaceCount).fill(' ').join('')
              acc += (v + space)
            } else {
              acc += v + Array(maxWidth - v.length - acc.length).fill(' ').join('')
            }
            return acc
          }, '')
        )
      }
      letter = []
      letterCount = 0
    }
  }
  let lefted = letter.join(' ')
  ans.push(lefted + Array(maxWidth - lefted.length).fill(' ').join(''))
  return ans
};
// @lc code=end

// local test
console.log(
  // fullJustify(
  //   ["This", "is", "an", "example", "of", "text", "just", "fica."], 16
  // )
  fullJustify(
    ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"],
    20
  )
)

//["Science   is what we","understand      well","enough to explain to","a   computer. Art is","everything  else  we","do                  "]
//["Science  is  what we","understand      well","enough to explain to","a  computer.  Art is","everything  else  we","do                  "]