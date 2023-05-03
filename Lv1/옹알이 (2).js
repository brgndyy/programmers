const babbling = ["ayayewoomaaya", "uuu", "yeye", "yemawooaya", "ayaayaaya"];

function solution(babbling) {
  let canProArr = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    let splitBablling = babbling[i];
    for (let j = 0; j < canProArr.length; j++) {
      splitBablling = splitBablling.split(canProArr[i]);

      for (let k = 0; k < splitBablling.length; k++) {
        if (splitBablling[k] === splitBablling[k + 1]) {
          break;
        }
      }
    }
  }
}

console.log(solution(babbling));
