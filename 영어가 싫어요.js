const numbers = "onetwothreefourfivesixseveneightnine";

function solution(numbers) {
  var answer = 0;
  const oneToTen = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];

  for (let i = 0; i < oneToTen.length; i++) {
    if (numbers.includes(oneToTen[i])) {
      numbers.split(oneToTen[i]);
    }
  }
  return answer;
}

console.log(solution(numbers));
