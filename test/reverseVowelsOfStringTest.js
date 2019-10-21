const {reverseVowels} = require('../lib/reverseVowelsOfString')

const test_cases = [
  {in_p: 'leetcode', o_p: 'leotcede'},
  {in_p: 'hello', o_p: 'holle'},
]

test_cases.forEach(({in_p, o_p}) => {

  const res =  reverseVowels(in_p)
  if(res === o_p) {
    console.log('pass')
  } else {
    console.log('failed, except op:', o_p, 'but got', res)
  }
})