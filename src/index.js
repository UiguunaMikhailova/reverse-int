module.exports = function reverse (n) {
    n = String(n)
    let str = ''
    for (let i = 0; i < n.length; i++) {
      str = `${n[i]}${str}`
    }
    return str
  }