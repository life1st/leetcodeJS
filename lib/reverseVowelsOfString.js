/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels1 = function(s) {
    const s_arr = s.split('')
    const vowels = ['a', 'e', 'i', 'o', 'u'].reduce((acc, v) => {
      acc.push(v, v.toUpperCase())

      return acc
    }, [])
    
    const p_need_exchange = []
    s_arr.forEach((v, i) => {
      if (vowels.includes(v)) {
        p_need_exchange.push(i)
      }
    })

    for (let i = 0; i < p_need_exchange.length / 2; i++) {
      const i1 = p_need_exchange[i]
      const i2 = p_need_exchange[p_need_exchange.length - 1 - i]

      const v1 = s_arr[i1]
      const v2 = s_arr[i2]
      s_arr[i1] = v2
      s_arr[i2] = v1
    }


    return s_arr.join('')
};

const reverseVowels = function(s) {
  let start = 0
  let end = s.length
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  const s_arr = s.split('')

  while (start < end) {
    const v1 = s_arr[start]
    if (vowels.includes(v1)) {
      const v2 = s_arr[end]
      if (vowels.includes(v2)) {
        s_arr[start] = v2
        s_arr[end] = v1
        start++
      }
      end--
    } else {
      start++
    }
  }

  return s_arr.join('')
}

module.exports = {
  reverseVowels
}