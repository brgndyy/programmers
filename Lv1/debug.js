const input = `KKHSSSSSSSE`;

let set = [...new Set(input)];
let splitInput = input.split("");
let answer = "";

for (let i = 0; i < set.length; i++) {
  let num = splitInput.filter((str) => str === set[i]).length;

  num === 1 ? (answer += set[i]) : (answer += set[i] + num);
}

console.log(answer);
