//
// This is only a SKELETON file for the 'Conway's Game of Life' exercise. It's been provided
// as a convenience to get you started writing code faster.
//

export class GameOfLife {
  #matrix;
  constructor(matrix) {
    this.#matrix = matrix;
  }

  tick() {
    this.#matrix = this.#matrix.map((row, i) => {
      return row.map((cell, j) => {
        const liveNeighborCount = this.#getLiveNeighborCount([i, j]);

        if ((cell | liveNeighborCount) === 3) {
          return 1;
        } else {
          return 0;
        }
      })
    })
  }

  state() {
    console.log(this.#matrix);
    return this.#matrix;
  }

 #getLiveNeighborCount(cellCoordinate) {
   const [row, col] = cellCoordinate;

   let liveNeighborCount = 0;

   for (let i = row - 1; i <= row + 1; i++) {
     if (this.#matrix[i] === undefined) continue;

     for (let j = col - 1; j <= col + 1; j++) {
       if (this.#matrix[i][j] === undefined) continue;
       if (i === row && j === col) continue;
       if (this.#matrix[i][j] !== 1) continue;

       liveNeighborCount += 1;
     }
   }

   return liveNeighborCount;
 }
}
