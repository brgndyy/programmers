const keymap = ["ABACD", "BCEFD"];
const targets = ["ABCD", "AABB"];

function solution(keymap, targets) {
  var answer = [];

  for (let i = 0; i < targets.length; i++) {
    let count = 0;
    let splitTargets = targets[i].split(""); // ["A", "B", "C", "D"];

    for (let j = 0; j < splitTargets.length; j++) {
      let minInputNum = 0;
      for (let k = 0; k < keymap.length; k++) {
        let keypadNum = keymap[k].indexOf(splitTargets[j]); // 0

        if (keypadNum === -1) {
          continue;
        } else if (minInputNum >= keypadNum) {
          minInputNum = keypadNum;
        }
      }
      count += minInputNum + 1;
    }
    answer.push(count);
  }

  return answer;
}

console.log(solution(keymap, targets));
