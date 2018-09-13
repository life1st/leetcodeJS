var rs = require('./lib/reverseString')

var arr = ['testssd', 'dssadf', 'dadoweks', 'dfadase']
var start = new Date().getTime()

arr.forEach((ctx, i) => {
    console.log(`第${i}个字符串：${ctx}`, rs(ctx))
})

var end = new Date().getTime()

console.log(`
开始时间：${start}
结束时间：${end}
计算时间：${end-start}`)

