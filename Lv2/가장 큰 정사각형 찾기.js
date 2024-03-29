const board = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
];

function solution(board) {
  let answer = 0;

  let row = board.length;
  let col = board[0].length;

  if (row <= 1 || col <= 1) {
    return 1;
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (board[i][j] === 0) {
        continue;
      } else {
        let min = Math.min(
          board[i - 1][j],
          board[i - 1][j - 1],
          board[i][j - 1]
        );

        board[i][j] = min + 1;

        if (answer < board[i][j]) {
          answer = board[i][j];
        }
      }
    }
  }

  return answer * answer;
}

console.log(solution(board));
