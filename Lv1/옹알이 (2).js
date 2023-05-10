const babbling = ["ayawoomaaya", "uuu", "yeye", "yemawooaya", "ayaayaaya"];

function solution(babbling) {
  let babbles = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < babbles.length; j++) {
      if (babbling[i].includes(babbles[j].repeat(2))) {
        continue;
      }

      babbling[i] = babbling[i].split(babbles[j]).join(" ");
    }

    if (babbling[i].length === 0) {
      count++;
    }
  }

  return count;
}

console.log(solution(babbling));
