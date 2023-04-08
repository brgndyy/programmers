const polynomial = "x + 3 + x + 3x";

function solution(polynomial) {
  let includesX = [];
  let plusOrNum = [];
  var answer = "";

  const splitWord = polynomial.split(" ");

  for (let i = 0; i < splitWord.length; i++) {
    // x만 있는게 아니라 3x 처럼 앞에 숫자가 붙어있을때,
    if (splitWord[i].includes("x") && splitWord[i].length > 1) {
      let splitXandNum = splitWord[i].split("");

      let num = Number(splitXandNum[0]);

      includesX.push(num);
      // 오직 x만 있을때
    } else if (splitWord[i].includes("x") && splitWord[i].length === 1) {
      includesX.push(1);
      // 3x나 +같은 기호 말고 오직 숫자일때
    } else if (typeof Number(splitWord[i]) === "number") {
      plusOrNum.push(splitWord[i]);
    }
  }

  // x에 붙은 계수 합
  let totalXnum = includesX.reduce((a, b) => {
    return a + b;
  }, 0);

  // 상수 합

  let onlyNum = plusOrNum
    .filter((a) => a !== "+")
    .reduce((a, b) => {
      return Number(a) + Number(b);
    }, 0);

  // 상수가 없었다면

  if (onlyNum === 0) {
    answer = totalXnum + "x";
  } else {
    answer = totalXnum + "x " + "+ " + onlyNum;
  }

  return answer;
}

console.log(solution(polynomial));
