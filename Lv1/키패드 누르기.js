const numbers = [1, 3, 4, 5];
const hand = "right";

function solution(numbers, hand) {
  let answer = "";

  for (let i = 0; i < numbers.length; i++) {
    let curLeftPos = [3, 0];
    let curRightPos = [3, 3];

    if (numbers[i] === 1) {
      answer += "L";
      curLeftPos = [0, 0];
    } else if (numbers[i] === 2) {
      let twoPos = [0, 1];
      let leftMinus =
        Math.abs(curLeftPos[0] - twoPos[0]) +
        Math.abs(curLeftPos[1] - twoPos[1]);

      let rightMinus =
        Math.abs(curRightPos[0] - twoPos[0]) +
        Math.abs(curRightPos[1] - twoPos[1]);

      if (leftMinus > rightMinus) {
        answer += "L";
        curLeftPos = [0, 1];
      } else if (leftMinus < rightMinus) {
        answer += "R";
        curRightPos = [0, 1];
      } else if (leftMinus === rightMinus && hand === "right") {
        answer += "R";
        curRightPos = [0, 1];
      } else if (leftMinus === rightMinus && hand === "left") {
        answer += "L";
        curLeftPos = [0, 1];
      }
    } else if (numbers[i] === 3) {
      answer += "R";
      curRightPos = [0, 2];
    } else if (numbers[i] === 4) {
      answer += "L";
      curLeftPos = [1, 0];
    } else if (numbers[i] === 5) {
      let fivePos = [1, 1];

      let leftMinus =
        Math.abs(curLeftPos[0] - fivePos[0]) +
        Math.abs(curLeftPos[1] - fivePos[1]);

      let rightMinus =
        Math.abs(curRightPos[0] - fivePos[0]) +
        Math.abs(curRightPos[1] - fivePos[1]);

      if (leftMinus > rightMinus) {
        answer += "L";
        curLeftPos = [1, 1];
      } else if (leftMinus < rightMinus) {
        answer += "R";
        curRightPos = [1, 1];
      } else if (leftMinus === rightMinus && hand === "right") {
        answer += "R";
        curRightPos = [1, 1];
      } else if (leftMinus === rightMinus && hand === "left") {
        answer += "L";
        curLeftPos = [1, 1];
      }
    }
  }

  return answer;
}

console.log(solution(numbers, hand));

// 현재 왼손의 index와 현재 오른손 index 위치를 담는 배열을 만들어주어서 서로 그 값을 비교해주어야함.
