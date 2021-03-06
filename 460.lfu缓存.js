/*
 * @lc app=leetcode.cn id=460 lang=javascript
 *
 * [460] LFU缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
  this.caches = new Map()
  this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
  let {v, count} = this.caches.get(key) || {}
  if (v !== undefined) {
    this.caches.delete(key)
    this.caches.set(key, {v, count: count+1})
    return v
  }
  return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
  let {v, count} = this.caches.get(key) || {}
  if (v !== undefined) {
    this.caches.delete(key)
    v = value
    count += 1
  } else {
    v = value
    count = 0
    if (this.caches.size >= this.capacity) {
      let min = Infinity
      let hadDelete = null
      for (let item of this.caches) {
        if (item[1].count < min) {
          min = item[1].count
          hadDelete = item
        }
      }
      if (hadDelete) {
        this.caches.delete(hadDelete[0])
      }
    }
  }

  if (this.caches.size < this.capacity) {
    this.caches.set(key, {v, count})
  }
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

let cc
let options = ["LFUCache","put","put","get","put","get","get","put","get","get","get"]
let data = [[2],[1,1],[2,2],[1],[3,3],[2],[3],[4,4],[1],[3],[4]]
options.forEach((op, i) => {
  if (op === 'LFUCache') {
    cc =  new LFUCache(data[i])
  } else {
    console.log(cc[op](...data[i]))
    console.log(op, data[i], cc.caches)
  }
})