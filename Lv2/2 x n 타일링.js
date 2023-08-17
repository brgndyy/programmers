function solution(n, memo = []) {
  if (n < 2) {
    return 1;
  }

  if (memo[n] !== undefined) {
    return memo[n];
  }

  let res = solution(n - 1, memo) + solution(n - 2, memo);

  memo[n] = res;

  return res % 1000000007;
}
