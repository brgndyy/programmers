const m = 4;
const n = 5;
const board = ["CCBDE", "AAADE", "AAABF", "CCBBF"];

function solution(m, n, board) {
  let gameBoard = board.map((str) => str.split(""));

  let answer = 0;

  while (true) {
    let founded = [];

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (
          gameBoard[i][j] !== 0 &&
          gameBoard[i][j] === gameBoard[i][j + 1] &&
          gameBoard[i][j] === gameBoard[i + 1][j] &&
          gameBoard[i][j] === gameBoard[i + 1][j + 1]
        ) {
          founded.push([i, j]);
        }
      }
    }

    if (!founded.length) {
      break;
    }

    founded.forEach((arr) => {
      if (gameBoard[arr[0]][arr[1]] !== 0) {
        answer++;
      }
      if (gameBoard[arr[0]][arr[1] + 1] !== 0) {
        answer++;
      }
      if (gameBoard[arr[0] + 1][arr[1]] !== 0) {
        answer++;
      }

      if (gameBoard[arr[0] + 1][arr[1] + 1]) {
        answer++;
      }

      gameBoard[arr[0]][arr[1]] = 0;
      gameBoard[arr[0]][arr[1] + 1] = 0;
      gameBoard[arr[0] + 1][arr[1]] = 0;
      gameBoard[arr[0] + 1][arr[1] + 1] = 0;
    });

    for (let i = 0; i < n; i++) {
      for (let j = m - 1; j >= 0; j--) {
        if (gameBoard[j][i] === 0) {
          for (let k = j - 1; k >= 0; k--) {
            if (gameBoard[k][i] !== 0) {
              gameBoard[j][i] = gameBoard[k][i];
              gameBoard[k][i] = 0;
              break;
            }
          }
        }
      }
    }
  }

  return answer;
}

console.log(solution(m, n, board));
