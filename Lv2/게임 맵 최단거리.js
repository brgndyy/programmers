const maps = [
  [1, 0, 1, 1, 1],
  [1, 1, 0, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
];

function solution(maps) {
  let queue = [];

  // 동 서  남 북  방향
  let xPos = [1, -1, 0, 0];
  let yPos = [0, 0, 1, -1];

  let curPos = [0, 0, 1];
  queue.push(curPos);

  while (queue.length) {
    let [x, y, move] = queue.shift();

    if (x === 4 && y === 4) {
      return move;
    }

    for (let i = 0; i < 4; i++) {
      let newX = xPos[i] + x;
      let newY = yPos[i] + y;

      if (
        newX >= 0 &&
        newY >= 0 &&
        newX < maps[i].length &&
        newY < maps.length &&
        maps[newX][newY] === 1
      ) {
        queue.push([newX, newY, move++]);
        maps[(newX, newY)] = 0;
      }
    }
  }

  return -1;
}

console.log(solution(maps));
