const dots = [
  [1, 1],
  [2, 1],
  [2, 2],
  [1, 2],
];

function solution(dots) {
  let oneVertex = [];
  // 일단 무조건 첫번째 꼭지점은 oneVertex 에 넣어주기
  oneVertex.push(dots.splice(0, 1)); // [[1, 1]];

  // dots 의 나머지 요소들중에서 oneVertex 배열과 x축 위치가 같은 요소를 추출
  const sameDot = dots.filter((dot) => dot[0] === oneVertex[0][0][0]); // [1, 2];

  oneVertex.push(sameDot); // [[1, 1], [1, 2]];

  dots.splice(sameDot[0], 1); // [[2,2], [1,2]];

  const oneVertexWidth = Math.abs(oneVertex[0][0][1] - oneVertex[1][0][1]);
  const twoVertexWidth = Math.abs(dots[0][0] - dots[1][0]);

  return oneVertexWidth * twoVertexWidth;
}

console.log(solution(dots));
