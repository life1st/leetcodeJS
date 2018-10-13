/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  const len = digits.length

  let position = len - 1
  while(position >= 0) {
    digits[position] += 1
    if (digits[position] < 10) {
      position = -1
    } else {
      digits[position] = 0
      position--
    }

    if (digits[0] === 0) {
      digits.unshift(1)
    }
  }

  return digits
};

module.exports = plusOne