const array = [9, -1, 0];

function solution(array) {
  let sort = array.sort((a, b) => a - b);
  return sort[Math.floor(sort.length / 2)];
}

console.log(solution(array));
