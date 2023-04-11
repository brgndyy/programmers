const num_list = [100, 95, 2, 4, 5, 6, 18, 33, 948];
const n = 3;

function solution(num_list, n) {
  var answer = [];

  while (num_list.length > 0) {
    let spliceArr = num_list.splice(0, n);
    answer.push(spliceArr);
  }

  return answer;
}

console.log(solution(num_list, n));
