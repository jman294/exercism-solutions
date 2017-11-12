let robotNames = []

class Robot {
  constructor () {
    this.nextName = (function () {
      let nameList = ['']
      return function () {
        let newName = nameList[0]
        while (nameList.includes(newName) || robotNames.includes(newName)) {
          newName = String.fromCharCode(this.getRandomIntInclusive(65, 90))+
                    String.fromCharCode(this.getRandomIntInclusive(65, 90))+
                    String(this.getRandomIntInclusive(100, 999))
        }
        nameList.push(newName)
        return newName
      }
    })()

    this._name = this.nextName()
    robotNames.push(this._name)
  }

  reset () {
    this._name = this.nextName()
  }

  getRandomIntInclusive (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
  }

  get name () {
    return this._name
  }

  set name (x) {
    throw new Error()
  }

}

module.exports = Robot
