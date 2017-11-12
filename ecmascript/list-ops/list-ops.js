class List {
  constructor (array) {
    this._array = array || []
  }

  append (list) {
    this._array = [...this._array, ...list._array]
    return this
  }

  concat (list) {
    return new List([...this._array, ...list._array])
  }

  filter (determinate) {
    let res = []
    for (let i=0; i<this._array.length; i++) {
      if (determinate(this._array[i])) {
        res.push(this._array[i])
      }
    }
    return new List(res)
  }

  map (transform) {
    let res = []
    for (let i=0; i<this._array.length; i++) {
      res.push(transform(this._array[i]))
    }
    return new List(res)
  }

  foldl (func, init) {
    let acc = init
    for (let i=0; i<this._array.length; i++) {
      acc = func(acc, this._array[i])
    }
    return acc
  }

  foldr (func, init) {
    let acc = init
    for (let i=this._array.length-1; i>=0; i--) {
      acc = func(acc, this._array[i])
    }
    return acc
  }

  reverse () {
    let res = new List()
    for (let i=this._array.length-1; i>=0; i--) {
      res.append(new List([this._array[i]]))
    }
    return res
  }

  length () {
    return this._array.length
  }

  get values () {
    return this._array
  }
}

module.exports = List
