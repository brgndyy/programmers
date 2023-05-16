let arr = [2, 6, 8, 14];

function solution(arr) {
  var answer = Math.max(...arr);
  let flag = true;
  let count = arr.length;

  while (flag) {
    for (let i = 0; i < arr.length; i++) {
      if (answer % arr[i] !== 0) {
        answer++;
        break;
      } else {
        count--;
      }
    }

    if (count === 0) {
      flag = false;
    }
  }

  return answer;
}

console.log(solution(arr));
