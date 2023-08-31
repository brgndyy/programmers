const m = 4;
const n = 4;
const board = ["CCBDE", "AAADE", "AAABF", "CCBBF"];

function solution(m, n, board) {
  let answer = 0;

  let gameBoard = board.map((str) => str.split(""));

  while (true) {
    let founded = [];

    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (
          gameBoard[i][j] !== 0 &&
          gameBoard[i][j] === gameBoard[i][j - 1] &&
          gameBoard[i][j] === gameBoard[i - 1][j] &&
          gameBoard[i][j] === gameBoard[i - 1][j - 1]
        ) {
          founded.push([i, j]);
        }
      }
    }

    if (!founded.length) {
      break;
    }

    for (let i = 0; i < founded.length; i++) {
      let x = founded[i][0];
      let y = founded[i][1];

      if (gameBoard[x][y] !== 0) {
        answer++;
      }
      if (gameBoard[x - 1][y] !== 0) {
        answer++;
      }
      if (gameBoard[x][y - 1] !== 0) {
        answer++;
      }
      if (gameBoard[x - 1][y - 1] !== 0) {
        answer++;
      }

      gameBoard[x][y] = 0;
      gameBoard[x - 1][y] = 0;
      gameBoard[x][y - 1] = 0;
      gameBoard[x - 1][y - 1] = 0;
    }

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
