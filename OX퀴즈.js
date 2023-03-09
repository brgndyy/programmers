const quiz = ["19 + -6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"];

function solution(quiz) {
  var answer = [];

  for (let i = 0; i < quiz.length; i++) {
    let sic = quiz[i].split(" ");

    let num1 = parseInt(sic[0]);
    let num2 = parseInt(sic[2]);
    let num3 = parseInt(sic[sic.length - 1]);

    if (sic[1] === "-" && num2 < 0) {
      num2 = Math.abs(num2);
    } else if (sic[1] === "+" && num2 < 0) {
      num2 = parseInt(num2);
    } else {
      num2 = parseInt(sic[1] + sic[2]);
    }

    num1 + num2 === num3 ? answer.push("O") : answer.push("X");
  }

  return answer;
}

console.log(solution(quiz));
