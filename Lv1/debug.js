const a = 2;
const b = 1;
const n = 20;

function solution(a, b, n) {
  let emptyBottles = n;

  var answer = 0;

  while (emptyBottles >= a) {
    let getColas = Math.floor(emptyBottles / a); // 2

    answer += getColas; // 15

    emptyBottles = emptyBottles - a * getColas + getColas;
  }

  return answer;
}

console.log(solution(a, b, n));
