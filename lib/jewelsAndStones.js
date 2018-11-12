/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let jArr = J.split('')
  let count = 0

  jArr.forEach(j => {
    for (let i = 0; i < S.length; i++) {
      if (S[i] === j) {
        count++
      }
    }
  })

  return count
};

// offcial solution. better than me.
var numJewelsInStonesOffcial = function(J, S) {
  let result = 0;
  for(let i = 0; i < S.length; i++) {
    if(J.indexOf(S.charAt(i)) >= 0)
      result++;
  }
  return result;
};

module.exports = numJewelsInStones