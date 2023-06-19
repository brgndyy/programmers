const park = ["OSO", "OOO", "OXO", "OOO"];
const routes = ["E 2", "S 3", "W 1"];

function solution(park, routes) {
  let answer = [];
  let map = park.map((dir) => dir.split(""));
  let startPos = [];

  let dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  // 시작점 구하기
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j] === "S") {
        startPos.push(i, j);
        break;
      }
    }
  }
  // 시작점 = [0, 1];

  for (let i = 0; i < routes.length; i++) {
    let [direction, dirNum] = [
      routes[i].split(" ")[0],
      Number(routes[i].split(" ")[1]),
    ];
    let count = 0;

    if (direction === "E") {
      while (dirNum !== 0) {
        let nx = startPos[0] + dir[1][0];
        let ny = startPos[1] + dir[1][1];

        if (
          nx < 0 ||
          ny < 0 ||
          nx >= map.length ||
          ny >= map[0].length ||
          map[nx][ny] === "X"
        ) {
          startPos[0] = startPos[0];
          startPos[1] = startPos[1] + count * -1;
          count = 0;
          break;
        } else {
          startPos = [nx, ny];
          count++;
          dirNum--;
        }
      }
    } else if (direction === "S") {
      while (dirNum !== 0) {
        let nx = startPos[0] + dir[2][0];
        let ny = startPos[1] + dir[2][1];

        if (
          nx < 0 ||
          ny < 0 ||
          nx >= map.length ||
          ny >= map[0].length ||
          map[nx][ny] === "X"
        ) {
          startPos[0] = startPos[0] + count * -1;
          startPos[1] = startPos[1];
          count = 0;
          break;
        } else {
          startPos = [nx, ny];
          count++;
          dirNum--;
        }
      }
    } else if (direction === "W") {
      while (dirNum !== 0) {
        let nx = startPos[0] + dir[3][0];
        let ny = startPos[1] + dir[3][1];

        if (
          nx < 0 ||
          ny < 0 ||
          nx >= map.length ||
          ny >= map[0].length ||
          map[nx][ny] === "X"
        ) {
          startPos[0] = startPos[0];
          startPos[1] = startPos[1] + count;
          count = 0;
          break;
        } else {
          startPos = [nx, ny];
          count++;
          dirNum--;
        }
      }
    } else if (direction === "N") {
      while (dirNum !== 0) {
        let nx = startPos[0] + dir[0][0];
        let ny = startPos[1] + dir[0][1];

        if (
          nx < 0 ||
          ny < 0 ||
          nx >= map.length ||
          ny >= map[0].length ||
          map[nx][ny] === "X"
        ) {
          startPos[0] = startPos[0] + count;
          startPos[1] = startPos[1];
          count = 0;
          break;
        } else {
          startPos = [nx, ny];
          count++;
          dirNum--;
        }
      }
    }
  }

  return startPos;
}

console.log(solution(park, routes));
