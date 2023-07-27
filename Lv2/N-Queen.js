const n = 4;

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    // 인덱스가 0일때를 비워둬야하니 n+1로 만들어주기
    const board = new Array(n + 1).fill(0);

    // 체스판의 첫번째 세로라인 중 i칸에 퀸을 배치
    // 첫번째 열에 i번째 행에 퀸이 있다는 뜻이다.
    board[1] = i;

    // 배치가 완료된 체스판과 현재 세로라인인 1을 dfs함수에 전달
    dfs(board, 1);
  }

  // row는 현재 화인하고 있는 열
  function dfs(board, row) {
    if (n === row) {
      answer++;
    } else {
      for (let i = 1; i <= n; i++) {
        if (isValid(board, row + 1)) {
          dfs(board, row + 1);
        }
      }
    }
  }

  function isValid(board, row) {
    // 지금까지 놓인 퀸들과 충돌하는지 안하는지 판단하기 위해서 반복문
    for (let i = 1; i < row; i++) {
      // 같은 라인에 있는 경우에는 false
      if (board[i] === board[row]) {
        return false;
      }
      //대각선 검사
      if (Math.abs(board[i] - board[row]) === Math.abs(i - row)) {
        return false;
      }
    }

    return true;
  }

  return answer;
}

console.log(solution(n));
