const n = 16;

function sosu(n) {
  // 0과 1 제외하고 일단 다 true로 만들어줌
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  // i를 2부터 시작해서, i * i , 즉 2의배수를 false, 3의배수...를 false로 만들어준다

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr;
}

console.log(solution(n));

// 2 3 5 7 11 13
