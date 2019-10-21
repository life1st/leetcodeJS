const {largestDivisibleSubset} = require('../lib/largestDivisibleSubset')

const test_cases = [
  {i_p: [1,2,4,8], o_p: [1,2,4,8]},
  {i_p: [1,2,3], o_p: [1,2]},
  {i_p: [1], o_p: [1]},
  {i_p: [], o_p: []},
  {i_p: [4, 8, 10, 240], o_p: [4, 8, 240]},
]


test_cases.forEach(({i_p, o_p}) => {
  const res = largestDivisibleSubset(i_p)
  
  console.log(JSON.stringify(res) === JSON.stringify(o_p), i_p, o_p, res)
})