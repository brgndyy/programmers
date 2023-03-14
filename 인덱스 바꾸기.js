const my_string = "hello";
const num1 = 1;
const num2 = 2;

function solution(my_string, num1, num2) {
  const splitWord = my_string.split("");
  const num1Word = splitWord[num1];
  const num2Word = splitWord[num2];

  splitWord.splice(num1, 1, num2Word);
  splitWord.splice(num2, 1, num1Word);

  return splitWord.join("");
}
console.log(solution(my_string, num1, num2));

// function solution(my_string, num1, num2) {
//     my_string = my_string.split('');
//     [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
//     return my_string.join('');
// }
