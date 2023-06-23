function solution(dartResult) {
  var answer = 0;
  let scoreArr = [];

  let num = 0;

  let splitResult = dartResult.split("");

  for (let i = 0; i < splitResult.length; i++) {
    // 숫자형으로 바꿨을때 숫자가 아니고 문자열일때

    if (Number.isNaN(Number(splitResult[i]))) {
      if (splitResult[i] === "S") {
        if (splitResult[i + 1] === "*") {
          scoreArr[scoreArr.length - 1] *= 2;
          scoreArr.push(num * 2);
          i++;
        } else if (splitResult[i + 1] === "#") {
          scoreArr.push(num * -1);
          i++;
        } else {
          scoreArr.push(num);
        }
      } else if (splitResult[i] === "D") {
        if (splitResult[i + 1] === "*") {
          scoreArr[scoreArr.length - 1] *= 2;
          num = num * num * 2;
          scoreArr.push(num);
          i++;
        } else if (splitResult[i + 1] === "#") {
          num = num * num * -1;
          scoreArr.push(num);
          i++;
        } else {
          num = num * num;
          scoreArr.push(num);
        }
      } else if (splitResult[i] === "T") {
        if (splitResult[i + 1] === "*") {
          scoreArr[scoreArr.length - 1] *= 2;
          num = num * num * num * 2;
          scoreArr.push(num);
          i++;
        } else if (splitResult[i + 1] === "#") {
          num = num * num * num * -1;
          scoreArr.push(num);
          i++;
        } else {
          num = num * num * num;
          scoreArr.push(num);
        }
      }

      num = 0;
    } else {
      if (splitResult[i] === "1" && splitResult[i + 1] === "0") {
        num += 10;
        i++;
      } else {
        num += Number(splitResult[i]);
      }
    }
  }

  return scoreArr.reduce((a, b) => a + b, 0);
}
