const begin = 1;
const end = 10;

function solution(begin, end) {
  const totalArr = Array.from({ length: end - begin + 2 }, (_, index) => 0);

  let beginIndex = begin;
  const endIndex = end;

  while (beginIndex < endIndex) {
    for (let i = beginIndex * 2; i <= endIndex; i += beginIndex) {
      totalArr[i] = beginIndex;
    }

    beginIndex++;
  }

  totalArr.shift();

  return totalArr;
}

console.log(solution(begin, end));
