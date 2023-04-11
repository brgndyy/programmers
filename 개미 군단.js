const hp = 999;

function solution(hp) {
  var answer = 0;

  const general = 5;
  const soldier = 3;
  const worker = 1;

  while (hp < 5) {
    answer += Math.floor(hp / general);
    hp = hp - Math.floor(hp / general);
  }

  return hp;
}

console.log(solution(hp));
