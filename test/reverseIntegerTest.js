var reverse = require('../lib/reverseInteger')

var res = reverse(26500000)
console.log(res)
var start = new Date().getTime()
for (var i = 0;i<1000;i++){
    var num = parseInt(Math.random()*1000000000)
    console.log(`第${i}次:${num} `, reverse(num))
}
// 没清掉前置位0的时候都accept了...说明leetcode的测试用例不严谨。
var end = new Date().getTime()

console.log(`
开始时间：${start}
结束时间：${end}
计算时间：${end-start}`)