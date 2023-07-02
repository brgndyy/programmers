const n = 3;

function solution(n) {
  const answer = [];

  function hanoi(n, from, to, by) {
    if (n === 1) {
      answer.push([from, to]);
    }

    hanoi(n - 1, from, by, to);
    answer.push([from, to]);
    hanoi(n - 1, by, to, from);
  }

  hanoi(n, 1, 3, 2);

  return answer;
}

console.log(solution(n));

// hanoi(2, 1, 3, 2);
// hano(1, 1, 2, 3) => n이 1이기 때문에 answer.push([1, 2]) 후 스택에서 사리짐
// 그 후 1번 주석 라인에 있던 hanoi(2, 1, 3, 2)의 1 3 이 answer.push([1, 3]) 됨
// 13번라인 hanoi 함수가 실행되어 hanoi(1, 2, 3, 1)이 실행되고 n이 1이므로 answer에 [2, 3]이 push
