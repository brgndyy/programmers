const board = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 4, 4, 0],
  [1, 2, 2, 1],
];

// [4, 3, 1, 1, 3, 2, 3, 4]

const moves = [2, 3, 1, 4, 2, 3];

function solution(board, moves) {
  let cart = [];
  let answer = [];

  for (let i = 0; i < moves.length; i++) {
    let line = moves[i]; // 3

    for (let j = 0; j < board.length; j++) {
      if (board[j][line - 1] !== 0) {
        cart.push(board[j][line - 1]);
        board[j][line - 1] = 0;
        break;
      }
    }
  }

  // [4, 3, 1, 1, 3, 2, 4]

  for (let k = 0; k < cart.length; k++) {
    if (cart[k] === cart[k + 1]) {
      answer.push(cart[k], cart[k]);

      cart.splice(k, 2);

      k = 0;
    }
  }

  return answer.length;
}

console.log(solution(board, moves));

// 반복문을 돌면서 만약에 1이라면 ?
