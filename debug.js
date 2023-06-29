const board = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
];

function solution(board) {
  const row = board.length;
  const col = board[0].length;

  if (row < 2 || col < 2) return 1;

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (board[i][j] === 1) {
        board[i][j] =
          Math.min(board[i][j - 1], board[i - 1][j], board[i - 1][j - 1]) + 1;
      }
    }
  }
  return Math.max(...board.reduce((ac, v) => [...ac, Math.max(...v)], [])) ** 2;
}

console.log(solution(board));
