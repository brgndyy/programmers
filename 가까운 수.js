const array = [3, 10, 28];
const n = 20;

function solution(array, n) {
  let minusArr = [];

  array.forEach((num) => minusArr.push(n - num));

  let minNumArr = minusArr.filter((num) => num >= 0);
  let minNum = Math.min(...minNumArr);
  let position = minusArr.indexOf(minNum);

  return minusArr;
}

console.log(solution(array, n));
