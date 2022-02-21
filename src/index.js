module.exports = function reverse (n) {
    let numStr = String(Math.abs(n))
    let str = ''
    for (let i = 0; i < numStr.length; i++) {
      str = `${numStr[i]}${str}`
    }
    return str
  }