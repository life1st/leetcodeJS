
var RecentCounter = function() {
    this.pings = []
    this.startIndex = 0
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.pings.push(t)

    const DEAD_LINE = 3000 // ms
    let startTime = t - DEAD_LINE
    let pingsCount = this.pings.length

    let startIndex = this.startIndex
    for (; i < pingsCount; startIndex++) {
        if (this.pings[startIndex] >= startTime) {
            break
        }
    }
    return pingsCount - startTime
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = Object.create(RecentCounter).createNew()
 * var param_1 = obj.ping(t)
 */