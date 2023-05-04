const s = "abracadabra";

function solution(s) {
  let splitS = s.split("");

  let stack = [];
  let count = 0;

  for (let i = 0; i < splitS.length; i++) {
    stack.push(splitS[i]);

    let sameWord = stack.filter((str) => str === stack[0]);
    let differWord = stack.filter((str) => str !== stack[0]);

    if (sameWord.length === differWord.length) {
      count++;
      stack = [];
    }
  }

  if (stack.length !== 0) {
    count++;
  }

  return count;
}

console.log(solution(s));
