const sides = [3, 6];

function solution(sides) {
  let x = 0;
  let arr = [];
  let maxNum = Math.max(...sides);
  let otherNum = Math.min(...sides);

  let case1num = maxNum - otherNum + 1;
  let case2num = maxNum + otherNum - 1;

  for (let i = case1num; i <= maxNum; i++) {
    arr.push(i);
  }

  for (let j = case2num; j > maxNum; j--) {
    arr.push(j);
  }

  return arr.length;
}

console.log(solution(sides));
