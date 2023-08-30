const m = 6;
const n = 6;
const board = ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"];

function solution(m, n, board) {
  let answer = 0;

  let gameBoard = board.map((str) => str.split(""));

  let copyBoard = gameBoard.map((row) => [...row]);

  let dir = [
    [0, -1],
    [-1, 0],
    [-1, -1],
  ];

  // 4블록 있는 경우 0으로 바꾸어주기

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      let str = gameBoard[i][j];
      let count = 0;

      for (let z = 0; z < 3; z++) {
        let nx = dir[z][0];
        let ny = dir[z][1];

        if (gameBoard[i + nx][j + ny] !== str) {
          break;
        } else if (gameBoard[i + nx][j + ny] === str) {
          count++;
        }
      }

      if (count === 3) {
        answer += 4;

        copyBoard[i][j] = 0;
        for (let k = 0; k < 3; k++) {
          let nx = dir[k][0];
          let ny = dir[k][1];

          copyBoard[i + nx][j + ny] = 0;
        }
      }
    }
  }

  return copyBoard;
}

console.log(solution(m, n, board));
