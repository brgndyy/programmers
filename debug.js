const board = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
];

function solution(board) {
  let answer = 0;

  let n = board.length;
  let m = board[0].length;

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (board[i][j] > 0) {
        let minNum =
          Math.min(board[i - 1][j], board[i - 1][j - 1], board[i][j - 1]) + 1;

        board[i][j] = minNum;

        answer = Math.max(answer, board[i][j]);
      }
    }
  }

  return board;
}

console.log(solution(board));
