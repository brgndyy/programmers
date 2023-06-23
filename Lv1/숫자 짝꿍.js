function solution(X, Y) {
  let splitX = X.split("");
  let splitY = Y.split("");
  let answer = [];

  let xMap = new Map();
  let yMap = new Map();

  for (let i = 0; i < splitX.length; i++) {
    xMap.set(splitX[i], xMap.get(splitX[i]) + 1 || 1);
  }

  for (let i = 0; i < splitY.length; i++) {
    yMap.set(splitY[i], yMap.get(splitY[i]) + 1 || 1);
  }

  xMap.forEach((value, key) => {
    if (value > 0 && yMap.get(key) > 0) {
      while (value !== 0 && yMap.get(key) !== 0) {
        answer.push(key);
        value--;
        yMap.set(key, yMap.get(key) - 1);
      }
    }
  });

  if (answer.length === 0) {
    return "-1";
  } else {
    answer = answer.sort((a, b) => Number(b) - Number(a));
    let filterZeroNum = answer.filter((str) => str === "0").length;
    answer = answer.join("");

    if (answer[0] === "0" && filterZeroNum > 1) {
      return "0";
    } else {
      return answer;
    }
  }
}
