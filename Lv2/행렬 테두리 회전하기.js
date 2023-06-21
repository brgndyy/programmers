const rows = 3;
const columns = 3;
const queries = [
  [1, 1, 2, 2],
  [1, 2, 2, 3],
  [2, 1, 3, 2],
  [2, 2, 3, 3],
];

function solution(rows, columns, queries) {
  var answer = [];
  let count = 0;

  let board = Array.from({ length: rows }, (_, i) =>
    Array.from({ length: columns }, (_, j) => i * columns + j + 1)
  );

  // 0일때 서쪽라인이 위쪽방향으로 한칸씩
  // 1일때 맨밑라인이 서쪽방향으로 한칸씩
  // 2일때 동쪽라인이 맨밑방향으로 한칸씩
  // 3일때 맨윗라인이 동쪽방향으로 한칸씩

  for (let i = 0; i < queries.length; i++) {
    let pos1 = [queries[i][0] - 1, queries[i][1] - 1];
    let pos2 = [queries[i][2] - 1, queries[i][3] - 1];

    let xStart = pos1[0]; // 2
    let yStart = pos1[1]; // 2
    let xEnd = pos2[0]; // 5
    let yEnd = pos2[1]; // 5
    let numArr = [];

    let tmp = board[xStart][yStart];

    while (count < 4) {
      if (count === 0) {
        for (let i = xStart; i < xEnd; i++) {
          board[i][yStart] = board[i + 1][yStart];
          numArr.push(board[i + 1][yStart]);
        }
        count++;
      } else if (count === 1) {
        for (let j = yStart; j < yEnd; j++) {
          board[xEnd][j] = board[xEnd][j + 1];
          numArr.push(board[xEnd][j + 1]);
        }
        count++;
      } else if (count === 2) {
        for (let k = xEnd; k > xStart; k--) {
          board[k][yEnd] = board[k - 1][yEnd];
          numArr.push(board[k - 1][yEnd]);
        }
        count++;
      } else if (count === 3) {
        for (let m = yEnd; m > yStart + 1; m--) {
          board[xStart][m] = board[xStart][m - 1];
          numArr.push(board[xStart][m - 1]);
        }
        board[xStart][yStart + 1] = tmp;
        numArr.push(board[xStart][yStart + 1]);
        count++;
      }
    }

    if (count === 4) {
      count = 0;
    }
    let minNum = Math.min(...numArr);

    answer.push(minNum);
  }

  return answer;
}

console.log(solution(rows, columns, queries));
