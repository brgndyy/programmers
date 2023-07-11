const m = 6;
const n = 6;
const board = ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"];

function solution(m, n, board) {
  let answer = 0;

  // 2차원 배열로 만들어주기
  board = board.map((str) => str.split(""));

  while (true) {
    let founded = [];

    // 배열 찾아주기
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (
          board[i][j] !== 0 &&
          board[i][j] === board[i][j + 1] &&
          board[i][j] === board[i + 1][j] &&
          board[i][j] === board[i + 1][j + 1]
        ) {
          founded.push([i, j]);
        }
      }
    }

    // 조건에 부합하는 블록이 없으면 반복문을 종료합니다.
    if (!founded.length) {
      break;
    }

    // 0으로 바꿔주기
    founded.forEach((a) => {
      const [x, y] = a;
      if (board[x][y] !== 0) answer++;
      if (board[x][y + 1] !== 0) answer++;
      if (board[x + 1][y + 1] !== 0) answer++;
      if (board[x + 1][y] !== 0) answer++;

      board[x][y] = 0;
      board[x][y + 1] = 0;
      board[x + 1][y + 1] = 0;
      board[x + 1][y] = 0;
    });

    // 벽돌 재정렬 코드
    for (let i = 0; i < n; i++) {
      for (let j = m - 1; j >= 0; j--) {
        if (board[j][i] === 0) {
          for (let k = j - 1; k >= 0; k--) {
            if (board[k][i] !== 0) {
              board[j][i] = board[k][i];
              board[k][i] = 0;
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
