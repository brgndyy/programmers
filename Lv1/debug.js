const park = ["OSO", "OOO", "OXO", "OOO"];
const routes = ["E 2", "S 3", "W 1"];

function solution(park, routes) {
  var answer = [];
  let startIndex = []; // 시작점 [0, 1];

  // 시작점 구하기
  park.forEach((position, index) => {
    if (position.includes("S")) {
      startIndex.push(index, position.indexOf("S"));
    }
  });

  for (let i = 0; i < routes.length; i++) {
    let splitRoute = routes[i].split(" ");
    let direction = splitRoute[0]; // E
    let directionNum = parseInt(splitRoute[1]); // 2

    if (direction === "E" || direction === "W") {
      for (let j = 1; j <= directionNum; j++) {
        if (
          startIndex[1] + directionNum < 0 ||
          startIndex[1] + directionNum > park[0].length - 1
        ) {
          continue;
        }

        startIndex[1] += directionNum;
      }
    }

    if (direction === "N" || direction === "S") {
      if (
        startIndex[0] + directionNum < 0 ||
        startIndex[0] + directionNum > park.length - 1
      ) {
        continue;
      }
      startIndex[0] += directionNum;
    }
  }

  return startIndex;
}

console.log(solution(park, routes));

// 1. 시작점 구하기
