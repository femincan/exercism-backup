//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  #rows;
  #columns;

  constructor(matrix) {
    this.#rows = matrix.split("\n").map(row => row.split(" ").map(Number));
    this.#columns = this.#rows[0].map((_, i) => this.#rows.map(row => row[i]));
  }

  get rows() {
    return this.#rows;
  }

  get columns() {
    return this.#columns;
  }
}
