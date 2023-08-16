const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

function solution(maps) {
  let n = maps.length;
  let m = maps[0].length;

  let dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  // 행, 렬, 움직인 횟수 배열에 담아주기
  let moveAndPos = [0, 0, 1];

  let queue = [];

  queue.push(moveAndPos);

  while (queue.length) {
    let [x, y, move] = queue.shift();

    // 행과 렬이 게임 맵의 끝 위치와 같다면 move 값 리턴
    if (x === n - 1 && y === m - 1) {
      return move;
    }

    for (let i = 0; i < 4; i++) {
      let nx = x + dir[i][0];
      let ny = y + dir[i][1];

      if (nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] !== 0) {
        // 방문 표시를 해줌으로써 효율성을 높임
        maps[nx][ny] = 0;

        // move 값을 높여서 queue 에 담아줌
        queue.push([nx, ny, move + 1]);
      }
    }
  }

  return -1;
}

console.log(solution(maps));
