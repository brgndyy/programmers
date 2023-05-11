const keymap = ["ABACD", "BCAFD"];
const targets = ["AZCD", "AABB"];

function solution(keymap, targets) {
  let answer = [];

  targets.forEach((target) => {
    let splitTarget = target.split("");
    let indexSum = 0;
    let sum = 0;

    for (let i = 0; i < splitTarget.length; i++) {
      let indexArr = [];

      for (let j = 0; j < keymap.length; j++) {
        if (keymap[j].indexOf(splitTarget[i]) === -1) {
          continue;
        } else {
          indexArr.push(keymap[j].indexOf(splitTarget[i]));
        }
      }

      sum += Math.min(...indexArr) + 1;
    }

    answer.push(sum);
  });
}

console.log(solution(keymap, targets));
