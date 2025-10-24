//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  get rows() {
    return this.matrix.split("\n").map(row => row.split(" ").map(char => parseInt(char)));
  }

  get columns() {
    const rows = this.rows;
    const columns = Array.from({ length: rows[0].length }, () => []);
    rows.forEach(row => row.forEach((item, i) => columns[i].push(item)));
    return columns;
  }
}
