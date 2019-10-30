const {heightChecker} = require('../lib/heightChecker')
const {testHelper}  = require('./utils/base')

const test_cases = [
  {
    input: [1,1,4,2,1,3],
    op: 3
  }
]


testHelper(test_cases, heightChecker)