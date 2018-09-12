/**
 * @param {number[]} nums
 * @return {number[][]}
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
 * 使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
 *
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

 满足要求的三元组集合为：
 [
 [-1, 0, 1],
 [-1, -1, 2]
 ]
 */
var threeSum0 = function(nums) {
  let start = Date.now()
  let len = nums.length
  if (len < 3) return []
  let res = []
  let resSort = []
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let select = [nums[i], nums[j], nums[k]]
          let sBySort = select.sort().toString()
          if (resSort.includes(sBySort)) {
            continue
          }
          res.push(select)
          resSort.push(sBySort)
        }
      }
    }
  }
  console.log(Date.now() - start)
  return res
};
var threeSum1 = function(nums) {
  let start = Date.now()
  let res = []
  nums.sort((a, b) => (a - b))
  let len = nums.length
  console.log(nums)
  for (let i = 0; i < len; i++) {
    let current = nums[i]
    // 只需要对 < 0 的部分循环
    if (current > 0) break // fuck it. sort wrong.
    let leftIndex = i + 1
    let rightIndex = len - 1
    while(leftIndex < rightIndex) {
      let sum = current + nums[leftIndex] + nums[rightIndex]
      if (sum === 0) {
        res.push([current, nums[leftIndex], nums[rightIndex]])
        // console.log(nums[leftIndex], nums[leftIndex + 1], nums[rightIndex], nums[rightIndex - 1], '===')
        while(leftIndex < rightIndex && nums[leftIndex] === nums[leftIndex + 1]) {
          leftIndex++
        }
        while(leftIndex < rightIndex && nums[rightIndex] === nums[rightIndex - 1]) {
          rightIndex--
        }
        rightIndex--
        leftIndex++
      } else if (sum > 0) {
        rightIndex--
      } else {
        leftIndex++
      }
    }
  }

  console.log(Date.now() - start)
  return res
}

module.exports = {
  threeSum0, threeSum1
}