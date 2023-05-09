let n = 2;

function solution(n) {
  function fib(n, memo = []) {
    if (memo[n] !== undefined) {
      return memo[n];
    }

    if (n < 2) {
      return BigInt(1);
    }

    let res = fib(n - 1, memo) + fib(n - 2, memo);

    memo[n] = res;

    return res;
  }

  return Number(fib(n) % BigInt(1234567));
}

console.log(solution(n));
