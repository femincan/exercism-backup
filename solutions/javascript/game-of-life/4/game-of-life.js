//
// This is only a SKELETON file for the 'Conway's Game of Life' exercise. It's been provided
// as a convenience to get you started writing code faster.
//

export class GameOfLife {
  #matrix;
  #around = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  
  constructor(matrix) {
    this.#matrix = matrix;
  }

  tick() {
    this.#matrix = this.#matrix.map((row, i) => {
      return row.map((cell, j) => {
        const liveNeighborCount = this.#around.reduce((count, [row, col]) => count + (this.#matrix[i + row]?.[j + col] ? 1 : 0), 0);

        if ((cell | liveNeighborCount) === 3) {
          return 1;
        } else {
          return 0;
        }
      })
    })
  }

  state() {
    return this.#matrix;
  }
}
