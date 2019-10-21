function randomNumber(from, to, precision = 0) {
  if (from > to) {
    [from, to] = [to, from]
  }
  return Number((Math.random() * (to - from) + from).toFixed(precision))
}

module.exports = {
  randomNumber
}