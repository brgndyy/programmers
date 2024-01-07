const n = 4;

const k = 9;

function solution(n, k) {
  // n = 4 k = 8

  function factorial(number) {
    let totalNumber = 1;
    while (number > 0) {
      totalNumber *= number;
      number--;
    }
    return totalNumber;
  }

  const numArr = Array.from({ length: n }, (_, index) => index + 1);

  // 1 3 4

  let answer = [];

  while (numArr.length) {
    let 앞자리바뀌는주기 = factorial(n - 1); //

    let k가속한그룹맨앞자리 = Math.ceil(k / 앞자리바뀌는주기); //

    // let 그앞의숫자들갯수 = Math.floor(k / 앞자리바뀌는주기) * 앞자리바뀌는주기;

    let foundNumber = numArr[k가속한그룹맨앞자리 - 1];

    const numForPush = numArr.splice(foundNumber - 1, 1)[0];

    answer.push(numForPush);

    n--;

    // k -= 그앞의숫자들갯수;
  }

  return answer;
}

console.log(solution(n, k));
