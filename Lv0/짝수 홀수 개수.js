const num_list = [1, 3, 5, 7];

function solution(num_list) {
  var answer = [];

  let evenNum = 0;
  let oddNum = 0;

  num_list.forEach((num) => (num % 2 === 0 ? evenNum++ : oddNum++));

  answer.push(evenNum, oddNum);

  return answer;
}

console.log(solution(num_list));
