const keymap = ["ABACD", "BCEFD"];
const targets = ["ZACD", "AABB"];

function solution(keymap, targets) {
  let answer = [];

  for (let i = 0; i < targets.length; i++) {
    let splitTarget = targets[i].split("");
    let count = 0;
    let minKeyNum = [];

    for (let j = 0; j < splitTarget.length; j++) {
      for (let k = 0; k < keymap.length; k++) {
        minKeyNum.push(keymap[k].indexOf(splitTarget[j]));
      }
      let filterMinKeyNum = minKeyNum.filter((num) => num > -1);

      if (filterMinKeyNum.length === 0) {
        count += -1;
      } else {
        c;
      }
    }
  }
}

console.log(solution(keymap, targets));
