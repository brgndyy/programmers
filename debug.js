const input = `CIRCLE YELLOW GRAY
CIRCLE RED BLACK
CIRCLE RED GRAY
CIRCLE YELLOW BLACK
CIRCLE RED WHITE
CIRCLE BLUE BLACK
SQUARE YELLOW GRAY
SQUARE BLUE GRAY
TRIANGLE BLUE WHITE
9
H 1 6 5
H 7 8 9
H 2 3 5
H 1 5 6
H 6 8 9
G
H 2 4 6
H 9 7 2
G`.split("\n");

let shapeArr = [];
for (let i = 0; i < 9; i++) {
  let shape = input.shift().split(" ");
  shapeArr.push(shape);
}

let n = Number(input.shift());
let gameRecord = [];

for (let i = 0; i < n; i++) {
  let record = input.shift().split(" ");

  gameRecord.push(record);
}

function solution(shapeArr, n, gameRecord) {
  let totalScore = 0;
  let HArr = [];

  for (let i = 0; i < gameRecord.length; i++) {
    if (gameRecord[i][0] === "H") {
      let arr = [];
      let shape = new Set();
      let shapeColor = new Set();
      let bgColor = new Set();
      let flag = true;

      for (let j = 1; j < 4; j++) {
        let num = Number(gameRecord[i][j]) - 1;

        arr.push(shapeArr[num]);
      }

      for (let k = 0; k < arr.length; k++) {
        shape.add(arr[k][0]);
        shapeColor.add(arr[k][1]);
        bgColor.add(arr[k][2]);
      }

      if (shape.size === 1 && shapeColor.size === 3 && bgColor.size === 3) {
        let numArr = [
          Number(gameRecord[i][1]),
          Number(gameRecord[i][2]),
          Number(gameRecord[i][3]),
        ].sort((a, b) => a - b);

        let found = HArr.some(
          (arr) =>
            arr.length === numArr.length &&
            arr.every((value, index) => value === numArr[index])
        );

        if (found) {
          totalScore -= 1;
          break;
        } else {
          totalScore += 1;
          HArr.push(numArr);
        }
      } else if (
        shape.size === 1 &&
        shapeColor.size === 1 &&
        bgColor.size === 1
      ) {
        let numArr = [
          Number(gameRecord[i][1]),
          Number(gameRecord[i][2]),
          Number(gameRecord[i][3]),
        ].sort((a, b) => a - b);

        let found = HArr.some(
          (arr) =>
            arr.length === numArr.length &&
            arr.every((value, index) => value === numArr[index])
        );

        if (found) {
          totalScore -= 1;
          break;
        } else {
          totalScore += 1;
          HArr.push(numArr);
        }
      } else if (
        shape.size === 1 &&
        shapeColor.size === 1 &&
        bgColor.size === 3
      ) {
        let numArr = [
          Number(gameRecord[i][1]),
          Number(gameRecord[i][2]),
          Number(gameRecord[i][3]),
        ].sort((a, b) => a - b);

        let found = HArr.some(
          (arr) =>
            arr.length === numArr.length &&
            arr.every((value, index) => value === numArr[index])
        );

        if (found) {
          totalScore -= 1;
          break;
        } else {
          totalScore += 1;
          HArr.push(numArr);
        }
      } else if (
        shape.size === 1 &&
        shapeColor.size === 3 &&
        bgColor.size === 1
      ) {
        let numArr = [
          Number(gameRecord[i][1]),
          Number(gameRecord[i][2]),
          Number(gameRecord[i][3]),
        ].sort((a, b) => a - b);

        let found = HArr.some(
          (arr) =>
            arr.length === numArr.length &&
            arr.every((value, index) => value === numArr[index])
        );

        if (found) {
          totalScore -= 1;
          break;
        } else {
          totalScore += 1;
          HArr.push(numArr);
        }
      } else if (
        shape.size === 3 &&
        shapeColor.size === 3 &&
        bgColor.size === 3
      ) {
        let numArr = [
          Number(gameRecord[i][1]),
          Number(gameRecord[i][2]),
          Number(gameRecord[i][3]),
        ].sort((a, b) => a - b);

        let found = HArr.some(
          (arr) =>
            arr.length === numArr.length &&
            arr.every((value, index) => value === numArr[index])
        );

        if (found) {
          totalScore -= 1;
          break;
        } else {
          totalScore += 1;
          HArr.push(numArr);
        }
      } else if (
        shape.size === 3 &&
        shapeColor.size === 1 &&
        bgColor.size === 1
      ) {
        let numArr = [
          Number(gameRecord[i][1]),
          Number(gameRecord[i][2]),
          Number(gameRecord[i][3]),
        ].sort((a, b) => a - b);

        let found = HArr.some(
          (arr) =>
            arr.length === numArr.length &&
            arr.every((value, index) => value === numArr[index])
        );

        if (found) {
          totalScore -= 1;
          break;
        } else {
          totalScore += 1;
          HArr.push(numArr);
        }
      } else if (
        shape.size === 3 &&
        shapeColor.size === 3 &&
        bgColor.size === 1
      ) {
        let numArr = [
          Number(gameRecord[i][1]),
          Number(gameRecord[i][2]),
          Number(gameRecord[i][3]),
        ].sort((a, b) => a - b);

        let found = HArr.some(
          (arr) =>
            arr.length === numArr.length &&
            arr.every((value, index) => value === numArr[index])
        );

        if (found) {
          totalScore -= 1;
          break;
        } else {
          totalScore += 1;
          HArr.push(numArr);
        }
      } else if (
        shape.size === 3 &&
        shapeColor.size === 1 &&
        bgColor.size === 3
      ) {
        let numArr = [
          Number(gameRecord[i][1]),
          Number(gameRecord[i][2]),
          Number(gameRecord[i][3]),
        ].sort((a, b) => a - b);

        let found = HArr.some(
          (arr) =>
            arr.length === numArr.length &&
            arr.every((value, index) => value === numArr[index])
        );

        if (found) {
          totalScore -= 1;
          break;
        } else {
          totalScore += 1;
          HArr.push(numArr);
        }
      }
    } else if (gameRecord[i][1] === "G") {
      let GScored = false;
      if (HArr.length === 84 && !GScored) {
        totalScore += 3;
        GScored = true;
      } else {
        totalScore -= 1;
      }
    }
  }

  return totalScore;
}

console.log(solution(shapeArr, n, gameRecord));
