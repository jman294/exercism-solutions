class Binary {
  constructor(binstring) {
    this.binstring = binstring
  }

  toDecimal () {
    let result = 0
    for (let i=0; i<this.binstring.length; i++) {
      let c = this.binstring.charAt(i)
      if (c === '1') {
        result += 2 ** (this.binstring.length-1-i)
      } else if (c !== '0') {
        return 0
      }
    }
    return result
  }
}

module.exports = Binary
