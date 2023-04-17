let board = [
  [1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

function solution(board) {
  let boardNum = 25;

  const dx = [1, 0, -1, 0, 1, 1, -1, -1];
  const dy = [0, 1, 0, -1, -1, 1, 1, -1];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        for (let k = 0; k < dx.length; k++) {
          let cx = i + dx[k]; // 3
          let cy = j + dy[k]; // 2
          board[cx][cy] += 1;
        }
      }
    }
  }

  return board;
}

console.log(solution(board));
