/**
 * @param {number[]} A
 * @return {number[]}
 */
let sortArrayByParityII = function(A) {
  let res = []
  let evenIndex = 0
  let oddIndex = 1
  const len = A.length
  for (let i = 0; i < len; i++) {
    let currentNum = A[i]

    // 非负 整数 %2 -> 判断奇偶
    if (currentNum % 2 === 0) {
      res[evenIndex] = currentNum
      evenIndex += 2
    } else {
      res[oddIndex] = currentNum
      oddIndex += 2
    }
  }

  return res
};

module.exports = sortArrayByParityII