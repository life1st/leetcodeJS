const {solution} = require('../lib/firstBadVersion')

const createBadVersionChecker = (v) => {
  return (n) => (n > v)
}

const test_cases = [
  {input: 100, output: 7}
]

test_cases.forEach(({input, output}) => {
  const isBadVersion = createBadVersionChecker(output)

  const res = solution(isBadVersion)(input)
  if (res === output) {
    console.log('test pass. case input:', input)
  } else {
    console.log('test failed. input:', input, ' except output:', output, ' but got:', res)
  }
})