const lines = [
  [-1, 1],
  [1, 3],
  [3, 9],
];

function solution(lines) {
  var answer = 0;

  const arr = Array.from({ length: 200 }, (_, index) => 0);

  for (let i = 0; i < lines.length; i++) {
    let startPos = lines[i][0] + 100; // 99
    let endPos = lines[i][1] + 100; // 101

    for (let j = startPos; j <= endPos - startPos; j++) {
      arr[j]++;
    }
  }

  return arr;
}

console.log(solution(lines));
