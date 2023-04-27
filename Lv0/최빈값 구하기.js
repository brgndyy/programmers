const array = [1, 2, 3, 3, 3, 4];

function solution(array) {
  let hash = new Map();
  let maxArr = [];
  let max = 0;

  [...array].forEach((num) => {
    hash.set(num, (hash.get(num) || 0) + 1);
  });

  hash.forEach((item) => {
    max = item;
    if (item > max) {
      maxArr.push(item);
    }
  });

  return maxArr;
}

console.log(solution(array));

// 나와야하는 결과값
