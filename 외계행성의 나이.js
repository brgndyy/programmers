let age = 100;

function solution(age) {
  var answer = "";

  let splitAge = age.toString().split("");

  const alphabet = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 97)
  );

  splitAge.forEach((word) => (answer += alphabet[Number(word)]));

  return answer;
}

console.log(solution(age));
