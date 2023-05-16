let arr = [2, 6, 8, 14];

function solution(arr) {
  let maxNum = Math.max(...arr);
  var answer = Math.max(...arr);
  let flag = true;

  while (flag) {
    let count = arr.length;
    for (let i = 0; i < arr.length; i++) {
      if (answer % arr[i] === 0) {
        count--;
      }
    }

    if (count === 0) {
      flag = false;
      break;
    } else {
      answer += maxNum;
    }
  }

  return answer;
}

console.log(solution(arr));
