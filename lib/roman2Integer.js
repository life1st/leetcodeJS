/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const roman2IntMap = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000,
  }

  const MAX_INDEX = s.length - 1
  let index = 0
  let res = 0
  while (index < MAX_INDEX) {
    let current0 = s[index] + s[index + 1]
    if (roman2IntMap[current0]) {
      res += roman2IntMap[current0]
      index += 2
    } else {
      current0 = s[index]
      res += roman2IntMap[current0]
      index += 1
    }
  }

  if (index === MAX_INDEX) {
    res += roman2IntMap[s[index]]
  }

  return res
};

module.exports = romanToInt