/**
 * @param {number[]} A
 * @return {number[]}
 */
let sortArrayByParity = function(A) {
  let odd = []
  let even = []
  const len = A.length
  for (let i = 0; i < len; i++) {
    let currentNum = A[i]
    // 整数 正数 %2 够了
    if (currentNum % 2 === 0) {
      even.push(currentNum)
    } else {
      odd.push(currentNum)
    }
  }

  return [...even, ...odd]
};

module.exports = sortArrayByParity