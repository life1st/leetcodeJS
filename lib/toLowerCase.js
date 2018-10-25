/**
 * @param {string} str
 * @return {string}
 */
let toLowerCase = function(str) {
  const UPPER2LOWER_MAP = {
    'A': 'a', 'B': 'b', 'C': 'c', 'D': 'd', 'E': 'e', 'F': 'f', 'G': 'g', 'H': 'h', 'I': 'i', 'J': 'j', 'K': 'k', 'L': 'l', 'M': 'm', 'N': 'n', 'O': 'o', 'P': 'p', 'Q': 'q', 'R': 'r', 'S': 's', 'T': 't', 'U': 'u', 'V': 'v', 'W': 'w', 'X': 'x', 'Y': 'y', 'Z': 'z',
  }

  // const len = str.length
  // let res = ''
  // for (let i = 0; i < len; i++) {
  //   let char = str[i]
  //   if (UPPER2LOWER_MAP[char]) {
  //     res += UPPER2LOWER_MAP[char]
  //   } else {
  //     res += char
  //   }
  // }

  return str.toLowerCase()
};

console.log(toLowerCase("Hello"), 'hello')