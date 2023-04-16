const n = 16;

function solution(n) {
  let arr = Array.from({ length: n - 2 }, (_, index) => index + 3).filter(
    (num) => num % 2 !== 0
  );

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) continue;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] % arr[i] === 0) {
        arr[j] = 0; // 소수가 아닌 숫자는 0으로 설정
      }
    }
  }

  // 배열에서 0을 제거하고 결과를 반환
  return arr.filter((num) => num !== 0).length + 1;
}

console.log(solution(n));
