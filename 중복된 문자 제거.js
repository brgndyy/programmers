const my_string = "a A a b B b";

function solution(my_string) {
  let answer = "";

  let newWord = new Set([...my_string]);

  for (let x of newWord) {
    answer += x;
  }

  return answer;
}

console.log(solution(my_string));
