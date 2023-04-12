const my_string = "3 + 4 - 5";

function solution(my_string) {
  let splitWords = my_string.split(" ");
  let arr = [];

  for (let i = 0; i < splitWords.length; i++) {
    if (splitWords[i - 1] === "+") {
      let plusNum = splitWords[i] * 1;
      arr.push(plusNum);
    } else if (splitWords[i - 1] === "-") {
      let minusNum = splitWords[i] * -1;
      arr.push(minusNum);
    } else if (splitWords[i] === "-" || splitWords[i] === "+") {
      continue;
    } else {
      arr.push(Number(splitWords[i]));
    }
  }

  return arr.reduce((a, b) => {
    return a + b;
  }, 0);
}

console.log(solution(my_string));

// function solution(my_string) {
//     const stack = [];

//     let sign = 1;
//     for (const ch of my_string.split(" ")) {
//         if (ch === "+") {
//             sign = 1;
//         } else if (ch === "-") {
//             sign = -1;
//         } else {
//             stack.push(ch * sign);
//         }
//     }

//     return stack.reduce((a,b) => a + b, 0);
// }
