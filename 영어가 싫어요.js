const numbers = "onefourzerosixseven";

function solution(numbers) {
  var answer = 0;
  let alphabet = [
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

  for (let i = 0; i < alphabet.length; i++) {
    numbers = numbers.split(alphabet[i]).join(i);
  }

  return parseInt(numbers);
}

console.log(solution(numbers));
