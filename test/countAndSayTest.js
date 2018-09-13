// var cas = require('./lib/countAndSay')

var arr = [1,1,1,3,2,2,1]

var newArr = [[]]
for (var i=0; i<arr.length-1; i++){
    newArr[i][0] = 0
    newArr[i][1] = 0
    if (arr[i] === arr[i+1]){
        newArr[arr[i]][0] = arr[i]
        newArr[arr[i]][1] += 1 
    }
}
console.log(arr)
console.log('new:', newArr)