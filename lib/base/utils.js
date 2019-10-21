function randomNumber(from, to, precision = 0) {
  if (from > to) {
    [from, to] = [to, from]
  }
  return Number((Math.random() * (to - from) + from).toFixed(precision))
}

function range(from , to) {
  if (from > to) {
    throw 'fuck yoou.'
  }
  return Array(to - from).fill(null).map((_, i) => (from + i))
}

module.exports = {
  randomNumber, range
}