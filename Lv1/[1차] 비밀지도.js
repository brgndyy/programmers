const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

function solution(n, arr1, arr2) {
  let arr1Two = arr1.map((num) => num.toString(2)); // ['1001', '10100', '11100', '10010', '1011']

  let arr2Two = arr2.map((num) => num.toString(2)); // ['11110', '1', '10101', '10001', '11100']

  for (let i = 0; i < arr1Two.length; i++) {
    while (arr1Two[i].length === 5) {
      let splitWord = arr1Two[i].split("");
      splitWord.unshift("0");
    }
  }

  return arr1Two;
}

console.log(solution(n, arr1, arr2));
