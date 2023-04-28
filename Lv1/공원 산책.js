const park = ["OSO", "OOO", "OXO", "OOO"];
const routes = ["E 2", "S 3", "W 1"];

function solution(park, routes) {
  let newPark = [...park].map((pos) => pos.split(""));

  let startPos = newPark.filter((pos, index) => pos.indexOf("S"));

  return startPos;
}

console.log(solution(park, routes));

// 1. 시작점 구하기
