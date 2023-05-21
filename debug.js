const maps = [
  [1, 0, 1, 1, 1],
  [1, 1, 0, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
];

function solution(maps) {
  let queue = [];
  //서, 동, 남, 북 방향
  let dy = [0, 0, 1, -1];
  let dx = [-1, 1, 0, 0];

  let curPos = [0, 0, 1];
  queue.push(curPos);

  while (queue.length) {
    let [curY, curX, move] = queue.shift();

    if (curY === maps.length - 1 && curX === maps[0].length - 1) {
      return move;
    }

    for (let i = 0; i < 4; i++) {
      let newY = dy[i] + curY;
      let newX = dx[i] + curX;

      if (
        newX >= 0 &&
        newY >= 0 &&
        newX < maps[i].length &&
        newY < maps.length &&
        maps[newY][newX] === 1
      ) {
        queue.push([newY, newX, move + 1]);
        maps[newY][newX] = 0;
      }
    }
  }

  return -1;
}

console.log(solution(maps));
