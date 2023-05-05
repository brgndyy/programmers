const park = ["OSO", "OOO", "OXO", "OOO"];
const routes = ["E 2", "S 3", "W 1"];

function solution(park, routes) {
  // 시작점 구하기
  let answer = [];
  let newPark = park.map((arr) => arr.split(""));
  let wLength = newPark[0].length;
  let hLength = newPark.length;
  let startPos = []; // [0, 1];
  newPark.forEach((pos, index) => {
    if (pos.includes("S")) {
      startPos.push(index, pos.indexOf("S"));
    }
  });

  let direction = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };

  let movePos = [...routes].map((route) => route.split(" "));

  for (let i = 0; i < movePos.length; i++) {
    let direc = movePos[i][0];
    let direcNum = Number(movePos[i][1]);
    let [nx, ny] = startPos;

    for (let j = 1; j <= direcNum; j++) {
      nx += direction[direc][0];
      ny += direction[direc][0];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < wLength &&
        ny < hLength &&
        newPark[nx][ny] !== "X"
      ) {
        answer = [nx, ny];
      }
    }
  }

  return answer;
}

console.log(solution(park, routes));
