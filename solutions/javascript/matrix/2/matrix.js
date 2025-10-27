//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  #rows;
  #columns;

  constructor(matrix) {
    this.#rows = matrix.split("\n").map(row => row.split(" ").map(Number));

    const columns = Array.from({ length: this.#rows[0].length }, () => []);
    this.#rows.forEach(row => row.forEach((item, i) => columns[i].push(item)));
    this.#columns = columns;
  }

  get rows() {
    return this.#rows;
  }

  get columns() {
    return this.#columns;
  }
}
