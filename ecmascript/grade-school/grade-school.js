class School {
  constructor() {
    this.list = {}
  }

  roster () {
    return JSON.parse(JSON.stringify(this.list))
  }

  add (name, grade) {
    if (!this.list.hasOwnProperty(grade)) {
      this.list[grade] = []
    }
    this.list[grade].push(name)
    this.list[grade].sort()
  }

  grade (grade) {
    if (this.list[grade] === undefined) {
      return []
    } else {
      return JSON.parse(JSON.stringify(this.list[grade].sort()))
    }
  }

}

module.exports = School
