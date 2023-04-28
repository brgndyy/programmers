const board = [
  [0, 1, 2],
  [1, 2, 3],
  [2, 3, 4],
  [3, 4, 5],
];
const k = 2;

function solution(board, k) {
  var answer = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i + j > k) {
        continue;
      }
      answer += board[i][j];
    }
  }

  return answer;
}

console.log(solution(board, k));
