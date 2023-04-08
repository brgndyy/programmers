const numbers = "onetwothreefourfivesixseveneightnine";

function solution(numbers) {
  var answer = 0;
  const oneToTen = [
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

  for (let i = 0; i <= oneToTen.length; i++) {
    numbers = numbers.split(oneToTen[i]).join(i);
  }

  return Number(numbers);
}

console.log(solution(numbers));
