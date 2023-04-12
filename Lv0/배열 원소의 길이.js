const strlist = ["We", "are", "the", "world!"];

function solution(strlist) {
  var answer = [];
  strlist.forEach((str) => answer.push(str.length));
  return answer;
}

console.log(solution(strlist));
