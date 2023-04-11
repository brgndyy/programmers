const hp = 999;

function solution(hp) {
  var answer = 0;

  const general = 5;
  const soldier = 3;
  const worker = 1;

  while (hp > 1) {
    answer += Math.floor(hpp / general); //199;

    hp = hp - generalNum * general;
  }

  return hpp;
}

console.log(solution(hp));
