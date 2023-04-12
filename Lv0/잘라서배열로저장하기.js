const my_str = "abcdef123";
const n = 3;

function solution(my_str, n) {
  // 나누어야할 횟수
  let dividedNum = Math.ceil(my_str.length / n);
  var answer = [];
  const splitWord = my_str.split("");

  while (true) {
    const oneWord = splitWord.splice(0, n).join("");

    answer.push(oneWord);
    dividedNum--;
    if (dividedNum === 0) {
      break;
    }
  }

  return answer;
}

console.log(solution(my_str, n));
