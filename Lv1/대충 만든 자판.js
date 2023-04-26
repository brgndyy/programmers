const keymap = ["ABACD", "BCEFD"];
const targets = ["ABCD", "AABB"];

function solution(keymap, targets) {
  var answer = [];

  for (let i = 0; i < targets.length; i++) {
    let count = 0;
    let splitTargets = targets[i].split(""); // ["A", "B", "C", "D"];

    for (let j = 0; j < splitTargets.length; j++) {
      for (let k = 0; k < targets.length; k++) {
        let minInputNum = targets[k].indexOf(splitTargets[j]);

        if (minInputNum === -1) {
          continue;
        }

        count += minInputNum + 1;
      }
    }
    answer.push(count);
  }

  return answer;
}

console.log(solution(keymap, targets));
