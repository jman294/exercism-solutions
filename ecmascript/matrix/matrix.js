class Matrix {
  constructor(str) {
    this.str = str
    this.constructMatrix()
  }

  constructMatrix () {
    this.rows =
    this.str.split('\n')
      .reduce((acc, val) => {
        acc.push(val.split(' ').map(Number))
        return acc
      }, [])

    this.columns = []
    this.rows.map((val) => {
      val.map((val, index) => {
        if (this.columns[index] === undefined) {
          this.columns[index] = []
        }
        this.columns[index].push(val)
      })
    })
  }
}

module.exports = Matrix
