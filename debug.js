const board = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
];

function solution(board) {
  let N = board.length;
  let M = board[0].length;

  for (let i = 1; i < N; i++) {
    for (let j = 1; j < M; j++) {
      if (board[i][j] === 1) {
        board[i][j] =
          Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
      }
    }
  }

  return board;
}

console.log(solution(board));
