const answers = [1, 3, 2, 4, 2, 1, 3, 2, 4, 2];

function solution(answers) {
  let oneGiveUp = [];
  let oneGiveUpRule = [1, 2, 3, 4, 5];
  let secGiveUp = [];
  let secGiveUpRule = [2, 1, 2, 3, 2, 4, 2, 5];
  let thrGiveUp = [];
  let thrGiveUpRule = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  function pushArr(giveupArr, giveupRule) {
    for (let i = 0; i < answers.length; i++) {
      giveupArr.push(giveupRule[i]);

      if (i > giveupRule.length - 1) {
        giveupArr.push(giveupArr[i - giveupRule.length]);
      }
    }
  }

  pushArr(secGiveUp, secGiveUpRule);

  return secGiveUp;

  // 각각 수포자 담아줄 배열
}

console.log(solution(answers));

// 1번 규칙  1 2 3 4 5
// 2번 규칙  2 1 2 3 2 4 2 5
// 3번 규칙  3 3 1 1 2 2 4 4 5 5
