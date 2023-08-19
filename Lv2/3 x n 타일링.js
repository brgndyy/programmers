// n이 1일때 0
// n이 2일때 3
// n이 3일때 0
// n이 4일때 11 (3 x 3 + 2)
// n이 6일때 41 ( 11 x 3  + 3 x 2  + 2)

const n = 6;

function solution(n) {
  // 3 x 0  , 3 x 2 , 3 x 4 로 채울수 있는 갯수
  const dp = [0, 3, 11];
  const idx = Math.floor(n / 2);
  const MOD = 1000000007;

  if (n % 2 !== 0) {
    return 0;
  }
  if (idx < 3) {
    return dp[idx];
  }

  for (let i = 3; i <= idx; i++) {
    dp[i] = dp[i - 1] * 3 + 2;

    for (let j = 1; j < i - 1; j++) {
      dp[i] += dp[j] * 2;
    }

    dp[i] %= MOD;
  }

  return dp[idx];
}

console.log(solution(n));
