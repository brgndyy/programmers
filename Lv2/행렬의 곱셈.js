const arr1 = [
  [1, 4],
  [3, 2],
  [4, 1],
];
const arr2 = [
  [3, 3],
  [3, 3],
];

function solution(arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let numArr = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;

      for (let m = 0; m < arr2.length; m++) {
        sum += arr1[i][m] * arr2[m][j];
      }

      numArr.push(sum);
    }

    answer.push(numArr);
  }

  return answer;
}

console.log(solution(arr1, arr2));
