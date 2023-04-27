const array = [1, 1, 2, 2];

function solution(array) {
  let hash = new Map();
  let newArr = [...new Set([...array])];
  let max = 0;
  let maxArr = [];

  [...array].forEach((num) => {
    hash.set(num, (hash.get(num) || 0) + 1);
  });

  for (let i = 0; i < newArr.length; i++) {
    let max = hash.get(newArr[i]);
    if (hash.get(newArr[i]) >= max) {
      max = hash.get(newArr[i]);
    }
  }

  return newArr;
}

console.log(solution(array));
