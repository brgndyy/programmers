const A = "hello";
const B = "lohel";

function solution(A, B) {
  let count = 0;

  let splitA = A.split("");
  let splitB = B.split("");

  if (A === B) {
    return 0;
  }

  for (let i = 0; i < splitA.length; i++) {
    const splitWord = splitA.pop(); // p
    const newWord = splitA.unshift(splitWord);

    return newWord;
  }
}

console.log(solution(A, B));
