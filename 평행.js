const dots = [
  [1, 4],
  [9, 2],
  [3, 8],
  [11, 6],
];

function solution(dots) {
  //1번째 케이스
  let answer = 0;

  function caculateParallel(a, b, c, d) {
    let abDiff = (b[1] - a[1]) / (b[0] - a[0]);
    let cdDiff = (d[1] - c[1]) / (d[0] - c[0]);

    if (abDiff === cdDiff) {
      answer++;
    }

    return answer;
  }

  caculateParallel(dots[0], dots[1], dots[2], dots[3]);
  caculateParallel(dots[0], dots[2], dots[1], dots[3]);
  caculateParallel(dots[0], dots[3], dots[1], dots[2]);

  return answer > 0 ? 1 : 0;
}

console.log(solution(dots));
