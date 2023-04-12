const num = 4;
const total = 14;

function solution(num, total) {
  var answer = [];

  const middleNum = total / num;
  let firstNum = Math.round(middleNum - num / 2);

  for (let i = 0; i < num; i++) {
    answer.push(firstNum);
    firstNum++;
  }

  return answer;
}

console.log(solution(num, total));

//[1,2,3,4,5,6,7,8];

// 중간값(4.5) - num/2 한 후 올려주면 초깃값 ?
