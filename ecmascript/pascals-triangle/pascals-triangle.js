class Triangle {
  constructor (height) {
    this.rows = this.constructRows(height)
    this.lastRow = this.rows.slice(-1)[0]
  }

  constructRows (height) {
    let rows = []
    rows.push([1])
    for (let i=0; i<height-1; i++) {
      rows.push(this.nextRowFromPrev(rows[i]))
    }
    return rows
  }

  nextRowFromPrev (row) {
    let result = []
    for (let i=-1; i<row.length; i++) {
      let a1 = row[i] || 0
      let a2 = row[i+1] || 0
      result.push(a1 + a2)
    }
    return result
  }
}

module.exports = Triangle
