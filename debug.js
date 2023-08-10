const begin = 3;
const end = 10;

function solution(begin, end) {
  let arr = Array.from({ length: end - begin + 1 }, (_, index) => 0);

  for (let i = begin; i <= end; i++) {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        arr[i - begin] = i / j;
        break;
      }
    }

    if (arr[i - begin] === 0) {
      arr[i - begin] = 1;
    }
  }

  return arr;
}

console.log(solution(begin, end));
