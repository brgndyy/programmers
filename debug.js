const keymap = ["ABACD", "BCEFD"];
const targets = ["ABCD", "AABB"];

function solution(keymap, targets) {
  let answer = [];

  for (let i = 0; i < targets.length; i++) {
    let splitTarget = targets[i].split("");
    let sum = 0;

    for (let j = 0; j < splitTarget.length; j++) {
      let minIndex = Number.MAX_SAFE_INTEGER;

      for (let k = 0; k < keymap.length; k++) {
        let index = keymap[k].indexOf(splitTarget[j]) + 1;

        if (index === 0) {
          continue;
        } else if (minIndex > index) {
          minIndex = index;
        }
      }

      if (minIndex === Number.MAX_SAFE_INTEGER) {
        sum = -1;
      } else {
        sum += minIndex;
      }
    }

    answer.push(sum);
  }

  return answer;
}

console.log(solution(keymap, targets));
