const maps = [
  [1, 0, 1, 1, 1],
  [1, 1, 0, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
];

function solution(maps) {
  let startPos = [0, 0];
  let count = 0;
  let enemyPos = [maps[0].length - 1, maps.length - 1];

  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, 1, -1];

  let queue = [0, 0, 1];

  while (queue.length) {
    let [xPos, yPos] = [startPos[0], startPos[1]];

    if (xPos === enemyPos[0] && yPos === enemyPos[1]) {
      return count;
    }

    for (let i = 0; i < 4; i++) {
      const nx = xPos + dx[i];
      const ny = yPos + dy[i];

      if (
        ny >= 0 &&
        nx >= 0 &&
        nx <= enemyPos[0] &&
        ny <= enemyPos[1] &&
        maps[nx][ny] === 1
      ) {
        count++;
        maps[nx][ny] = 0;
      }
    }
  }

  return -1;
}

console.log(solution(maps));
