const dots = [
  [-1, -1], // oneVertex
  [1, 1],
  [1, -1], // oneVertex
  [-1, 1],
];

function solution(dots) {
  // 무조건 dots에서 첫번째 배열 뽑아주기
  let xVertex = [];
  xVertex.push(dots.shift()); // [[-1, -1]];

  //dots 배열에서 oneVertex[0][1]의 값과는 값지만 oneVertex[0][0]과는 값이 달라야함
  let sameDot = dots.filter(
    (dot) => dot[1] === xVertex[0][1] && dot[0] !== xVertex[0][0]
  ); // [1, -1];

  xVertex.push([...sameDot[0]]); // onVertex 에 원래 있던 배열과 묶어주기
  dots.splice(dots.indexOf(sameDot[0]), 1); // 원래 dots 배열에서도 잘라주기

  let xWidth = Math.abs(xVertex[0][0] - xVertex[1][0]);
  let yWidth = Math.abs(dots[0][1] - xVertex[1][1]);

  return xWidth * yWidth;
}

console.log(solution(dots));
