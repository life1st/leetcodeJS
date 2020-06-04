/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minPrice = Infinity
  let max = 0
  for (let i = 0; i < prices.length; i++) {
    let currPrice = prices[i]
    if (currPrice < minPrice) {
      minPrice = currPrice
    } else if (currPrice - minPrice > max) {
      max = currPrice - minPrice
    }
  }

  return max
};

// @lc code=end

//local test
console.log(
  maxProfit([7,1,5,3,6,4])
)