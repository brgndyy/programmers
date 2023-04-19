const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];

function solution(N, stages) {
  var answer = [];

  let hash = new Map();

  hash.set(1, 0.125);
  hash.set(2, 0.5);
  hash.set(3, 0.5);
  hash.set(4, 0.1);
  hash.set(5, 0);

  return hash;
}

console.log(solution(N, stages));
