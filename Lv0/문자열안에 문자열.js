const str1 = "ab6CDE443fgh22iJKlmn1o";
const str2 = "6CD";

function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

console.log(solution(str1, str2));

// function solution(str1, str2) {
//     return str1.split(str2).length > 1 ? 1 : 2
// }
