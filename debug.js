const input = `4 6
0 0 0 0 0 0
0 0 0 0 0 0
0 0 1 0 6 0
0 0 0 0 0 0`.split("\n");

let [N, M] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));

let board = input.map((str) => str.split(" ").map((str) => Number(str)));

function solution(N, M, board) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 1) {
        let maxDirAndCount = new Map();
        let maxCount = 0;
        let count = 0;

        // 북쪽
        let nx = i - 1;
        let ny = j;
        while (nx >= 0) {
          if (board[nx][ny] === 0) {
            nx--;
            count++;
          } else if (board[nx][ny] === 6) {
            break;
          }
        }

        if (count > maxCount) {
          maxCount = count;
          maxDirAndCount.clear();
          maxDirAndCount.set("N", maxCount);
        }
        count = 0;

        // 동쪽
        let ex = i;
        let ey = j + 1;

        while (ey < M) {
          if (board[ex][ey] === 0) {
            ey++;
            count++;
          } else if (board[ex][ey] === 6) {
            break;
          }
        }

        if (count > maxCount) {
          maxCount = count;
          maxDirAndCount.clear();
          maxDirAndCount.set("E", maxCount);
        }
        count = 0;

        // 남쪽

        let sx = i + 1;
        let sy = j;

        while (sx < N) {
          if (board[sx][sy] === 0) {
            sx++;
            count++;
          } else if (board[sx][sy] === 6) {
            break;
          }
        }

        if (count > maxCount) {
          maxCount = count;
          maxDirAndCount.clear();
          maxDirAndCount.set("S", maxCount);
        }
        count = 0;

        // 서쪽

        let wx = i;
        let wy = j - 1;

        while (wy >= 0) {
          if (board[wx][wy] === 0) {
            count++;
            wy--;
          } else if (board[wx][wy] === 6) {
            break;
          }
        }

        if (count > maxCount) {
          maxCount = count;
          maxDirAndCount.clear();
          maxDirAndCount.set("W", maxCount);
        }
        count = 0;

        maxDirAndCount.forEach((value, key) => {
          if (key === "N") {
          }
        });
      } else if (board[i][j] === 2) {
      } else if (board[i][j] === 3) {
      } else if (board[i][j] === 4) {
      } else if (board[i][j] === 5) {
      }
    }
  }
}

console.log(solution(N, M, board));
