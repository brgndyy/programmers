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

// 다른 사람 풀이

function solution(array) {
  return array.join("").split("7").length - 1;
}
