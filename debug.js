const babblling = ["yayae"];

function solution(babbling) {
  let pros = ["aya", "ye", "woo", "ma"];

  let answer = 0;

  for (let i = 0; i < babbling.length; i++) {
    let str = babbling[i];

    for (let j = 0; j < pros.length; j++) {
      if (str.includes(pros[j].repeat(2))) {
        continue;
      } else {
        str = str.split(pros[j]).join(" ");
      }
    }

    if (str.split(" ").join("") === "") {
      answer++;
    }
  }

  return answer;
}

console.log(solution(babblling));
