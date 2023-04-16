const arr1 = [
  [1, 2],
  [2, 3],
];
const arr2 = [
  [3, 4],
  [5, 6],
];

function solution(arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let sumArr = [];
    for (let j = 0; j < arr1[i].length; j++) {
      sumArr.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(sumArr);
  }

  return answer;
}

console.log(solution(arr1, arr2));
