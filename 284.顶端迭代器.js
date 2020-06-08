/*
 * @lc app=leetcode.cn id=284 lang=javascript
 *
 * [284] 顶端迭代器
 */

// @lc code=start
/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function(iterator) {
    this.iterator = iterator
    this.peekCache = null
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
    if (!this.peekCache) {
      this.peekCache = this.iterator.next()
    }
    return this.peekCache
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
    if (this.peekCache) {
      let res = this.peekCache
      this.peekCache = null
      return res
    } else {
      return this.iterator.next()
    }
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
    return this.iterator.hasNext() || !!this.peekCache
};

/** 
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
// @lc code=end

