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

  let res = 0
  while (s.length > 1) {
    let current0 = s[0] + s[1]
    if (roman2IntMap[current0]) {
      res += roman2IntMap[current0]
      s = s.slice(2)
    } else {
      current0 = s[0]
      res += roman2IntMap[current0]
      s = s.slice(1)
    }
  }

  if (s.length === 1) {
    res += roman2IntMap[s]
  }

  return res
};

module.exports = romanToInt