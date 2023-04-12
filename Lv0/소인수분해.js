const n = 24;

function solution(n) {
  var answer = [];

  let decimal = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 39, 83, 89, 97, 101, 103, 107, 109, 113, 127,
  ];

  for (let i = 0; i < decimal.length; i++) {
    if (n % decimal[i] === 0) {
      answer.push(decimal[i]);
    }
  }

  return answer.sort((a, b) => a - b);
}

console.log(solution(n));
