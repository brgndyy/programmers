const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

function solution(maps) {
  let dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  let queue = [[0, 0, 1]];

  while (queue.length) {
    let [x, y, move] = queue.shift();

    if (x === n - 1 && y === m - 1) {
      return move;
      break;
    }

    for (let i = 0; i < 4; i++) {
      let nx = x + dir[i][0];
      let ny = y + dir[i][1];

      if (nx >= 0 && ny >= 0 && nx < 5 && ny < 5 && maps[nx][ny] !== 0) {
        // move += 1 이런식으로 하면 반복문을 돌면서 move 값이 누적되어서
        // 값이 정답보다 더 많이 나올수도 있음
        queue.push([nx, ny, move + 1]);

        //방문한 처리를 해주어서 효율성을 높여야함
        maps[nx][ny] = 0;
      }
    }
  }

  return -1;
}

console.log(solution(maps));
