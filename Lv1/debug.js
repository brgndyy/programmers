const answers = [1, 3, 2, 4, 2];

function solution(answers) {
  let hash = new Map();

  //  각각 수포자 담아줄 배열

  let oneGiveUp = [];
  let oneGiveUpRule = [1, 2, 3, 4, 5];
  let secGiveUp = [];
  let secGiveUpRule = [2, 1, 2, 3, 2, 4, 2, 5];
  let thrGiveUp = [];
  let thrGiveUpRule = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // answers 의 길이에 맞춰서 배열 반복해주는 함수

  function pushArr(giveupArr, giveupRule) {
    for (let i = 0; i < answers.length; i++) {
      if (i > giveupRule.length - 1) {
        giveupArr.push(giveupArr[i - giveupRule.length]);
      } else {
        giveupArr.push(giveupRule[i]);
      }
    }
  }

  pushArr(oneGiveUp, oneGiveUpRule);
  pushArr(secGiveUp, secGiveUpRule);
  pushArr(thrGiveUp, thrGiveUpRule);

  let oneAnswerLength = answers.filter(
    (num, index) => num === oneGiveUp[index]
  ).length; // 2

  hash.set(1, oneAnswerLength);

  let secAnswerLength = answers.filter(
    (num, index) => num === secGiveUp[index]
  ).length; // 2
  hash.set(2, secAnswerLength);

  let thrAnswersLength = answers.filter(
    (num, index) => num === thrGiveUp[index]
  ).length; // 2
  hash.set(3, thrAnswersLength);

  // 최대값 구하기

  const maxNum = Math.max(...Array.from(hash.values()));

  // 최대 점수를 얻은 학생들의 번호를 추출하여 반환
  const result = [];
  hash.forEach((value, key) => {
    if (value === maxNum) {
      result.push(key);
    }
  });

  return result;
}

console.log(solution(answers));

// 1번 규칙  1 2 3 4 5
// 2번 규칙  2 1 2 3 2 4 2 5
// 3번 규칙  3 3 1 1 2 2 4 4 5 5
