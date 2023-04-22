const survey = ["AN", "CF", "MJ", "RT", "NA"];
const choices = [5, 3, 2, 7, 5];

function solution(survey, choices) {
  const types = ["RT", "CF", "JM", "AN"];
  const MBTIObj = {};

  // 배열 돌면서 객체에 유형별 점수 담을 타입 넣어주기

  types.forEach((type) =>
    type.split("").forEach((char) => (MBTIObj[char] = 0))
  );

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index]; // 문자열길이에 맞춰서 구조분해 할당을 할수 있다.

    //const survey = ["AN"];

    // const [disagree, agree] = survey[0];

    // console.log(disagree, agree); // A N

    MBTIObj[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  // let obj = {
  //   R: 1,
  // };

  // console.log(obj["R"]); // 1

  return types.map(([a, b]) => (MBTIObj[a] > MBTIObj[b] ? a : b)).join("");
}

console.log(solution(survey, choices));
