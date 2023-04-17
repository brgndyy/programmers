const n = 6;
const arr1 = [46, 33, 33, 22, 31, 50];
const arr2 = [27, 56, 19, 14, 14, 10];

function solution(n, arr1, arr2) {
  let answer = [];
  let arr1Two = arr1.map((num) => num.toString(2)); // ['1001', '10100', '11100', '10010', '1011']

  let arr2Two = arr2.map((num) => num.toString(2)); // ['11110', '1', '10101', '10001', '11100']

  // arr1Two 배열 길이 다 맞춰주기

  for (let i = 0; i < arr1Two.length; i++) {
    if (arr1Two[i].length !== 5) {
      let cutWord = arr1Two.slice(i, i + 1); // ['1001'];
      let splitWord;

      while (cutWord[0].length !== n) {
        splitWord = cutWord[0].split("");
        splitWord.unshift("0");

        if (splitWord.length === n) {
          break;
        }
      }

      arr1Two.splice(i, 1, splitWord.join(""));
    }
  }

  // arr2Two 배열 길이 다 맞춰주기

  for (let i = 0; i < arr2Two.length; i++) {
    if (arr2Two[i].length !== 5) {
      let cutWord = arr2Two.slice(i, i + 1); // ['1001'];

      while (cutWord.length !== n) {
        cutWord.unshift("0");

        if (cutWord.length === n) {
          break;
        }
      }

      arr2Two.splice(i, 1, cutWord.join(""));
    }
  }

  let sumArr = arr1Two.map(
    (num, index) => Number(num) + Number(arr2Two[index])
  );

  for (let i = 0; i < sumArr.length; i++) {
    let str = "";
    let splitWord = sumArr[i].toString().split("");

    for (let j = 0; j < splitWord.length; j++) {
      if (splitWord[j] === "1" || splitWord[j] === "2") {
        str += "#";
      } else {
        str += " ";
      }
    }

    answer.push(str);
  }

  return answer;
}

console.log(solution(n, arr1, arr2));
