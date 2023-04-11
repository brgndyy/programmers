const hp = 997;

function solution(hp) {
  var answer = 0;

  const general = 5;
  const soldier = 3;
  const worker = 1;

  while (hp > 0) {
    answer += Math.floor(hp / general);
    hp = hp - Math.floor(hp / general) * general;

    if (hp >= 1 && hp < 3) {
      answer += hp / worker;
      hp = hp - hp / worker;
    }
  }

  return hp;
}

console.log(solution(hp));
