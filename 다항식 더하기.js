const polynomial = "x";

function solution(polynomial) {
  let answer;
  const splitWord = polynomial.split(" + ");
  let xNums = [];
  let onlyNums = [];

  splitWord.forEach((a) => {
    // a가 x를 포함하면서 계수가 붙어있을때
    if (a.includes("x") && a.length > 1) {
      const splitX = a.split("");

      xNums.push(splitX[0]);
      // x를 포함하지만 계수가 없는 그냥 x일때,
    } else if (a.includes("x") && a.length === 1) {
      xNums.push("1");
    } else if (!a.includes("x")) {
      onlyNums.push(a);
    }
  });

  let xNumsSum = xNums.reduce((a, b) => {
    return Number(a) + Number(b);
  }, 0);
  let onlyNumsSum = onlyNums.reduce((a, b) => {
    return Number(a) + Number(b);
  }, 0);

  // x계수도 존재하고 상수도 존재하지만, x계수가 1이상 일때
  if (xNumsSum > 1 && onlyNumsSum > 0) {
    answer = xNumsSum + "x " + "+ " + onlyNumsSum;
  }
  // x 계수도 존재하고 상수도 존재하지만, x계수가 1일때
  else if (xNumsSum === 1 && onlyNumsSum > 0) {
    answer = "x " + "+ " + onlyNumsSum;
  }
  // x가 없이 오직 상수만 존재할때
  else if (xNumsSum === 0 && onlyNumsSum > 0) {
    answer = onlyNumsSum;
  }
  // 상수 없이 오직 x만 존재하는데, x 계수가 있을때
  else if (xNumsSum > 1 && onlyNumsSum === 0) {
    answer = xNumsSum + "x";
  }
  //오직 x만 존재할때
  else if (xNumsSum === 1 && onlyNumsSum === 0) {
    answer = "x";
  }

  return answer;
}

console.log(solution(polynomial));
