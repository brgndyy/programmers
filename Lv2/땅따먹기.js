const land = [
  [1, 2, 3, 5],
  [5, 6, 8, 8],
  [4, 3, 2, 1],
];

function solution(land) {
  let maxNum = 0;

  let N = land.length;

  for (let i = 1; i < N; i++) {
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);

    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);

    land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);

    land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
  }

  return Math.max(...land[land.length - 1]);
}

console.log(solution(land));
