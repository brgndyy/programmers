const array = [7, 77, 17];

function solution(array) {
  var answer = 0;

  const newWord = array.join("").split("");

  for (let i = 0; i < newWord.length; i++) {
    if (newWord[i] === "7") {
      answer++;
    }
  }

  return answer;
}

console.log(solution(array));
