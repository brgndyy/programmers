const dots = [
  [1, 4],
  [9, 2],
  [3, 8],
  [11, 6],
];

function solution(dots) {
  var answer = 0;

  function getParallel(a, b, c, d) {
    let parallelOne = b[1] - a[1] / b[0] - a[0];
    let parallelTwo = d[1] - c[1] / d[0] / c[0];

    if (parallelOne === parallelTwo) {
      answer++;
    }
  }

  getParallel(dots[0], dots[1], dots[2], dots[3]);
  getParallel(dots[0], dots[2], dots[1], dots[3]);
  getParallel(dots[0], dots[3], dots[1], dots[2]);

  return answer > 0 ? 1 : 0;
}

console.log(solution(dots));
