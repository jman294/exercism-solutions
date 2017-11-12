class SecretHandshake {
  constructor (number) {
    this.number = number
    if (typeof number != 'number') {
      throw new Error('Handshake must be a number')
    }
    this.key = {
      0x01: 'wink',
      0x02: 'double blink',
      0x04: 'close your eyes',
      0x08: 'jump'
    }
  }

  commands () {
    let keys = Object.keys(this.key).map(Number)
    let numCopy = this.number-16 < 0 ? this.number : this.number-16
    let result = []

    while (numCopy > 0) {
      let record = keys[0]
      for (let i=1; i<keys.length; i++) {
        if (keys[i] <= numCopy && keys[i] > record) {
          record = keys[i]
        }
      }
      result.push(this.key[record])
      numCopy -= record
    }
    
    if (this.number < 16) {
      return result.reverse()
    } else {
      return result
    }
  }
}

module.exports = SecretHandshake
