const n = 2;

function solution(n) {
  let answer = [];

  function hanoi(n, from, to, by) {
    if (n === 1) {
      answer.push([from, to]);
      return;
    }

    hanoi(n - 1, from, by, to);
    answer.push([from, to]);
    hanoi(n - 1, by, to, from);
  }

  hanoi(n, 1, 3, 2);

  return answer;
}

console.log(solution(n));
