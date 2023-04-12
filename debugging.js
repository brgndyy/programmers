const hp = 24;

function solution(hp) {
  var answer = 0;

  const general = 5;
  const soldier = 3;
  const worker = 1;

  answer += Math.floor(hp / general);
  hp = hp - Math.floor(hp / general) * general;

  while (hp > 0) {
    if (hp >= 1 && hp < 3) {
      answer += hp / worker;
      hp = hp - hp / worker;
    } else if (hp >= 3 && hp < 5) {
      answer += Math.floor(hp / soldier);
      hp = hp - Math.floor(hp / soldier) * soldier;
    }
  }

  return answer;
}

console.log(solution(hp));
