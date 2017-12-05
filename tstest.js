var ts = require('./lib/twoSum')

var arr = [2,4,7,9],
    target = 13

var res = ts(arr, target)
console.log(`
target是：${target}
被选中的arr位置是：${res}`)