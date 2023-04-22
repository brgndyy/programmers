const babbling = ["ayayewoomaaya", "uuu", "yeye", "yemawooaya", "ayaayaaya"];

function solution(babbling) {
  var answer = 0;

  let prons = ["aya", "ye", "woo", "ma"];

  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < prons.length; j++) {
      if (babbling[i].includes(prons[j])) {
        babbling[i].splice(babbling[i].indexOf(prons[j]), 1);
      }
    }
  }

  return answer;
}

console.log(solution(babbling));
