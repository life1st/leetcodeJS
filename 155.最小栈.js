/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.data = []
  this.mins = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.data.push(x)
  if (this.mins.length === 0 || x <= this.mins[this.mins.length - 1]) {
    this.mins.push(x)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let n = this.data.pop()
  if (n === this.mins[this.mins.length - 1]) {
    this.mins.pop()
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.data[this.data.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.mins[this.mins.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

