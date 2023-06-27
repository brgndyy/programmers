const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

function solution(maps) {
  var answer = 0;

  // 시작점, 움직인 횟수
  let movePos = [0, 0, 1];

  let dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  let queue = [];

  queue.push(movePos);

  while (queue.length) {
    let [x, y, move] = queue.shift();

    if (x === 4 && y === 4) {
      return move;
    }

    for (let i = 0; i < 4; i++) {
      let nx = x + dir[i][0];
      let ny = y + dir[i][1];

      if (nx >= 0 && ny >= 0 && nx < 5 && ny < 5 && maps[nx][ny] === 1) {
        queue.push([nx, ny, move + 1]);
        maps[nx][ny] = 0;
      }
    }
  }

  return -1;
}

console.log(solution(maps));
