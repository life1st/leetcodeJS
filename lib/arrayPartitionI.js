/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    // const sortedNums = nums.sort((a, b) => a - b)
    // const numsLen = sortedNums.length
    //
    // let resCount = 0
    // for (let i = 0; i < numsLen; i += 2) {
    //     resCount += sortedNums[i]
    // }
    //
    // return resCount


    // fuck 空间换时间
    let arr = Array(20000).fill(0)

    const len = nums.length
    const OFFSET = 10000
    let MIN = Number.MAX_VALUE
    let MAX = Number.MIN_VALUE

    for (let i = 0; i < len; i++) {
        if (MIN > nums[i]) {
            MIN = nums[i]
        }
        if (MAX < nums[i]) {
            MAX = nums[i]
        }
        let index = nums[i] + OFFSET
        arr[index]++
    }

    let flag = true
    let resCount = 0
    for (let i = MIN + OFFSET; i <= MAX + OFFSET;) {
        if (arr[i]-- > 0) {
            if (flag) {
                resCount += i - OFFSET
            }
            flag = !flag
        } else {
            i++
        }
    }

    return resCount
};

console.log(arrayPairSum([1,4,3,2]))
console.log(arrayPairSum([1,1]))