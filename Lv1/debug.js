const park = ["OSO", "OOO", "OXO", "OOO"];
const routes = ["E 2", "S 3", "W 1"];

function solution(park, routes) {
  let newPark = [...park].map((pos) => pos.split(""));
  let startIndex = [];

  // 시작점 구하기
  newPark.filter((pos, index) => {
    if (pos.includes("S")) {
      startIndex.push(index, pos.indexOf("S"));
    }
  });

  let directions = {
    E: [0, 1],
    S: [1, 0],
    W: [0, -1],
    N: [-1, 0],
  };

  for (let i = 0; i < routes.length; i++) {
    let [direction, directionNum] = [
      routes[i].split(" ")[0],
      Number(routes[i].split(" ")[1]),
    ];

    let [nx, ny] = startIndex;

    while (directionNum > 0) {
      nx += directions[direction][0]; // 세로 방향
      ny += directions[direction][1]; // 가로 방향

      direction--;

      if (
        nx < 0 ||
        ny < 0 ||
        newPark[nx][ny] === "X" ||
        nx > newPark.length - 1 ||
        ny > newPark[0].length - 1
      ) {
        direction++;
        continue;
      } else {
        startIndex = [nx, ny];
      }
    }
  }

  return startIndex;
}

console.log(solution(park, routes));
