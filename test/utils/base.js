function testHelper(test_cases, solutionFunc, {
  isDebug = false
} = {}) {
  test_cases.forEach(({input, op}) => {
    const res = solutionFunc(input)
    if (JSON.stringify(res) === JSON.stringify(op)) {
      !isDebug && console.log('case pass:', input)
    } else {
      !isDebug && console.error('Error:', input, 'except:', op, 'but got:', res)
    }
  })
}

module.exports = {
  testHelper
}