const my_string = "We are the world";

function solution(my_string) {
  let result;
  let str = my_string.split("");
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (!arr.includes(str[i])) {
      arr.push(str[i]);
    }
  }

  return arr.join("");
}

console.log(solution(my_string));

// const my_string = "We are the world";

// function solution(my_string) {
//   return [...new Set(my_string)].join("");
// }
// console.log(solution(my_string));
