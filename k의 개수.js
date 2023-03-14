const i = 1;
const j = 13;
const k = 1;

function solution(i, j, k) {
  let arr = [];
  var answer = 0;

  for (let a = i; a <= j; a++) {
    arr.push(a);
  }

  for (let i = 0; i < arr.length; i++) {
    let iToString = i.toString();
    let arrToString = arr[i].toString();
    if (arrToString.includes(iToString)) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(i, j, k));
