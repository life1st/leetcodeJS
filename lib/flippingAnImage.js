/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    let reversedMatrix = A.map(line => (
        line.reverse()
    ))
    let invertMatrix = reversedMatrix.map(line => (
        line.map(item => item === 1 ? 0 : 1)
    ))

    return invertMatrix
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))