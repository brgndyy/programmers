const babbling = [
  "ayaayaaya",
  "ayayewoomaaya",
  "uuu",
  "yeye",
  "yemawooaya",
  "ayaayaaya",
];

function solution(babbling) {
  let canProArr = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    let babble = babbling[i];

    for (let j = 0; j < canProArr.length; j++) {
      if (babble.includes(canProArr[j].repeat(2))) {
        break;
      }

      babble = babble.split(canProArr[j]).join(" ");
    }

    if (babble.split(" ").join("").length === 0) {
      count += 1;
    }
  }

  return count;
}

console.log(solution(babbling));
