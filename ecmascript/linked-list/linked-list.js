class LinkedList {
  constructor () {
    this.base = undefined
    this._length = 0
  }

  push (val) {
    let newNode = new Node(val)

    if (this.base === undefined) {
      this.base = newNode
      this._length = 1
    } else {
      let currentNode = this.base
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      newNode.prev = currentNode
      currentNode.next = newNode
      this._length += 1
    }
  }

  pop () {
    if (this.base.next === undefined) {
      let baseCopy = this.base
      this.base = undefined
      this._length = 0
      return baseCopy.data
    } else {
      let currentNode = this.base
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.prev.next = undefined
      this.length -= 1

      return currentNode.data
    }
  }

  shift () {
    if (this.base.next === undefined) {
      let baseCopy = this.base
      this.base = undefined
      this._length = 0
      return baseCopy.data
    } else {
      let baseCopy = this.base
      this.base = this.base.next
      this._length -= 1
      return baseCopy.data
    }
  }

  unshift (val) {
    let newNode = new Node(val)
    if (this.base === undefined) {
      this.base = newNode
      this._length = 1
    } else {
      let baseCopy = this.base
      this.base = newNode
      this._length += 1
    }
  }
}

class Node {
  constructor (data) {
    this.data = data
    this.next = undefined
    this.prev = undefined
  }
}

module.exports = LinkedList
