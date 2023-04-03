const numbers = "onetwothreefourfivesixseveneightnine";

function solution(numbers) {
  var answer = 0;
  let oneToTen = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < oneToTen.length; i++) {
    numbers = numbers.split(oneToTen[i]).join(i);
  }

  return numbers;
}

console.log(solution(numbers));
