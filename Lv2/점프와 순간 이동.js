function solution(n) {
  let answer = 0;

  // n이 0보다 클때까지 반복문을 돌린다.
  while (n > 0) {
    // 만약 n이 짝수라면
    if (n % 2 === 0) {
      // n은 반을 나눠주고
      n /= 2;
    } else {
      n--;
      answer++;
    }
  }

  return answer;
}
