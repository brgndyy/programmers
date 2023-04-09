const keyinput = ["down", "down", "down", "down", "down"];
const board = [7, 9];

function solution(keyinput, board) {
  var answer = [];
  let center = [0, 0];

  let widthPostion = Math.floor(board[0] / 2); // 가로의 중앙 포지션
  let heightPosition = Math.floor(board[0] / 2); // 세로의 중앙 포지션 //4

  for (let i = 0; i < keyinput.length; i++) {
    if (keyinput[i] === "down") {
      center[1]--;
      if (center[1] < -heightPosition) {
        center[1] = -heightPosition;
      }
    } else if (keyinput[i] === "up") {
      center[1]++;
      if (center[1] > heightPosition) {
        center[1] = heightPosition;
      }
    } else if (keyinput[i] === "left") {
      center[0]--;
      if (center[0] < -widthPostion) {
        center[0] = -widthPostion;
      }
    } else if (keyinput[i] === "right") {
      center[0]++;
      if (center[0] > widthPostion) {
        center[0] = widthPostion;
      }
    }
  }

  return center;
}

console.log(solution(keyinput, board));

// 주어진 board의 중앙점을 구해서 이것을 [0,0]이라고 가정하자.
