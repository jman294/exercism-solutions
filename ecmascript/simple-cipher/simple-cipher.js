class Cipher {
  constructor (key_) {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'
    if (key_ === undefined) {
      this.key = 'asdfasdfasdfasdf'
    } else {
      if (key_.match(/[A-Z]+/)) {
        throw new Error('Bad key')
      } else if (key_.match(/[0-9]+/)) {
        throw new Error('Bad key')
      } else if (key_ === '') {
        throw new Error('Bad key')
      } else {
        this.key = key_
      }
    }
  }

  encode (str) {
    let result = ''
    for (let i=0; i<str.length; i++) {
      let c = str.charAt(i)
      result = result.concat(this.alphabet.charAt(
                             (this.alphabet.indexOf(this.key.charAt(i%this.key.length))+
                             this.posInAlphabet(c))%this.alphabet.length))
    }
    return result
  }

  decode (str) {
    let result = ''
    for (let i=0; i<str.length; i++) {
      let c = str.charAt(i)
      let keyCharPosInAlphabet = this.posInAlphabet(this.key.charAt(i))
      let decodedPos = (this.posInAlphabet(c)+(this.alphabet.length-keyCharPosInAlphabet))%this.alphabet.length
      result = result.concat(this.alphabet.charAt(decodedPos))
    }
    return result
  }

  posInAlphabet(letter) {
    return this.alphabet.indexOf(letter)
  }
}

module.exports = Cipher
