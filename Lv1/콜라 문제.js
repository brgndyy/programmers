const a = 2;
const b = 1;
const n = 20;

function solution(a, b, n) {
  let emptyBottles = n;

  var answer = 0;

  while (emptyBottles >= a) {
    let getColas = Math.floor(emptyBottles / a) * b; // 10 5 2 1

    answer += getColas; // 10 15 17 18

    emptyBottles = emptyBottles - a * Math.floor(emptyBottles / a) + getColas; // 10
  }

  return answer;
}

console.log(solution(a, b, n));
