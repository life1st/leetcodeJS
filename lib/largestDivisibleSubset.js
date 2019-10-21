/* 
Given a set of distinct positive integers, find the largest subset such that every pair (Si, Sj) of elements in this subset satisfies:

Si % Sj = 0 or Sj % Si = 0.

If there are multiple solutions, return any subset is fine.

Example 1:

Input: [1,2,3]
Output: [1,2] (of course, [1,3] will also be ok)
Example 2:

Input: [1,2,4,8]
Output: [1,2,4,8]
 */

 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  let input = [...nums]
  let res_arr = [[]]
  
  let op_index = 0
  let prev = 2 // 1 for every one.
  let hasOne = false
  
  let tervel_index = 0
  while (input.length > 0) {
    let current = input[tervel_index]
    if (current < 2) {
      hasOne = true
      input.splice(tervel_index, 1)
      continue
    } else if (current % prev === 0 || prev % current === 0) {
      prev = current
      if (!res_arr[op_index]) {
        res_arr[op_index] = []
      }
      res_arr[op_index].push(current)
      input.splice(tervel_index, 1)
    } else {
      tervel_index++
    }
    if (tervel_index >= input.length) {
      op_index++
      tervel_index = 0
      prev = current
    }
    console.log(prev)
  }
  
  let res = []
  res_arr.forEach(arr => {
    if (arr.length > res.length) {
      res = arr
    }
  })
  
  return hasOne ? [1, ...res] : res
};

module.exports = {
  largestDivisibleSubset
}