const {missingNumber} = require('../lib/missingNumber')

const test_datas = [
  {
    input: [3,0,1],
    op: 2
  }, {
    input: [9,6,4,2,3,5,7,0,1],
    op: 8
  }, {
    input: [0],
    op: 1
  }, {
    input: [1], 
    op: 0
  }
]

test_datas.forEach(({input, op}) => {
  if (missingNumber(input) !== op) {
    console.error(`input: ${input} ERROR!, except op: ${op}, but get ${missingNumber(input)}`)
  } else {
    console.log(`pass test ${input}`)
  }
})
