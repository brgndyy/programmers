const numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
const hand = "left";

function solution1(numbers, hand) {
  let answer = "";
  let curLeftPos = [3, 0];
  let curRightPos = [3, 2];

  for (let i = 0; i < numbers.length; i++) {
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

      if (leftMinus < rightMinus) {
        answer += "L";
        curLeftPos = [0, 1];
      } else if (leftMinus > rightMinus) {
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

      if (leftMinus < rightMinus) {
        answer += "L";
        curLeftPos = [1, 1];
      } else if (leftMinus > rightMinus) {
        answer += "R";
        curRightPos = [1, 1];
      } else if (leftMinus === rightMinus && hand === "right") {
        answer += "R";
        curRightPos = [1, 1];
      } else if (leftMinus === rightMinus && hand === "left") {
        answer += "L";
        curLeftPos = [1, 1];
      }
    } else if (numbers[i] === 6) {
      answer += "R";
      curRightPos = [1, 2];
    } else if (numbers[i] === 7) {
      answer += "L";
      curLeftPos = [2, 0];
    } else if (numbers[i] === 8) {
      let eigthPos = [2, 1];

      let leftMinus =
        Math.abs(curLeftPos[0] - eigthPos[0]) +
        Math.abs(curLeftPos[1] - eigthPos[1]);

      let rightMinus =
        Math.abs(curRightPos[0] - eigthPos[0]) +
        Math.abs(curRightPos[1] - eigthPos[1]);

      if (leftMinus < rightMinus) {
        answer += "L";
        curLeftPos = [2, 1];
      } else if (leftMinus > rightMinus) {
        answer += "R";
        curRightPos = [2, 1];
      } else if (leftMinus === rightMinus && hand === "right") {
        answer += "R";
        curRightPos = [2, 1];
      } else if (leftMinus === rightMinus && hand === "left") {
        answer += "L";
        curLeftPos = [2, 1];
      }
    } else if (numbers[i] === 9) {
      answer += "R";
      curRightPos = [2, 2];
    } else if (numbers[i] === 0) {
      let zeroPos = [3, 1];

      let leftMinus =
        Math.abs(curLeftPos[0] - zeroPos[0]) +
        Math.abs(curLeftPos[1] - zeroPos[1]);

      let rightMinus =
        Math.abs(curRightPos[0] - zeroPos[0]) +
        Math.abs(curRightPos[1] - zeroPos[1]);

      if (leftMinus < rightMinus) {
        answer += "L";
        curLeftPos = [3, 1];
      } else if (leftMinus > rightMinus) {
        answer += "R";
        curRightPos = [3, 1];
      } else if (leftMinus === rightMinus && hand === "right") {
        answer += "R";
        curRightPos = [3, 1];
      } else if (leftMinus === rightMinus && hand === "left") {
        answer += "L";
        curLeftPos = [3, 1];
      }
    }
  }

  return answer;
}

function solution2(numbers, hand) {
  hand = hand[0] === "r" ? "R" : "L";
  let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2];
  let h = { L: [1, 1], R: [1, 1] };
  return numbers
    .map((x) => {
      if (/[147]/.test(x)) {
        h.L = [position[x], 1];
        return "L";
      }
      if (/[369]/.test(x)) {
        h.R = [position[x], 1];
        return "R";
      }
      let distL = Math.abs(position[x] - h.L[0]) + h.L[1];
      let distR = Math.abs(position[x] - h.R[0]) + h.R[1];
      if (distL === distR) {
        h[hand] = [position[x], 0];
        return hand;
      }
      if (distL < distR) {
        h.L = [position[x], 0];
        return "L";
      }
      h.R = [position[x], 0];
      return "R";
    })
    .join("");
}

let startTime1 = performance.now();
let result1 = solution1(numbers, hand);
let endTime1 = performance.now();
let elapsedTime1 = endTime1 - startTime1;
console.log(`solution1 실행 시간: ${elapsedTime1} ms`);

let startTime2 = performance.now();
let result2 = solution2(numbers, hand);
let endTime2 = performance.now();
let elapsedTime2 = endTime2 - startTime2;
console.log(`solution2 실행 시간: ${elapsedTime2} ms`);
