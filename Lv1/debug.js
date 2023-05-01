const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

function solution(n, arr1, arr2) {
  // arr1 배열 만들어주기
  let arr1Arr = arr1.map((str) => str.toString(2));
  let arr2Arr = arr2.map((str) => str.toString(2));
  let answerArr = [];

  let sumArr = arr1Arr
    .map((num, index) => Number(num) + Number(arr2Arr[index]))
    .map((num) => {
      if (num.length !== n) {
        return String(num).padStart(n, "0");
      } else {
        return String(num);
      }
    });

  for (let i = 0; i < sumArr.length; i++) {
    let answer = "";

    let splitSumArr = sumArr[i].split("");

    for (let j = 0; j < splitSumArr.length; j++) {
      if (splitSumArr[j] === "1" || splitSumArr[j] === "2") {
        answer += "#";
      } else {
        answer += " ";
      }
    }
    answerArr.push(answer);
  }

  return answerArr;
}

console.log(solution(n, arr1, arr2));
