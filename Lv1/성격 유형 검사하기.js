const survey = ["TR", "RT", "TR"];
const choices = [7, 1, 3];

function solution(survey, choices) {
  let rtArr = new Map();
  let cfArr = [];
  let jmArr = [];
  let anArr = [];

  rtArr.set("R", 0);
  rtArr.set("T", 0);

  let hash = new Map();

  for (let i = 0; i < survey.length; i++) {
    let splitSurvey = survey[i].split("");

    if (choices[i] === 1) {
      hash.set(splitSurvey[0], (hash.get(splitSurvey[0]) || 0) + 3);
    } else if (choices[i] === 2) {
      hash.set(splitSurvey[0], (hash.get(splitSurvey[0]) || 0) + 2);
    } else if (choices[i] === 3) {
      hash.set(splitSurvey[0], (hash.get(splitSurvey[0]) || 0) + 1);
    } else if (choices[i] === 4) {
      continue;
    } else if (choices[i] === 5) {
      hash.set(splitSurvey[1], (hash.get(splitSurvey[1]) || 0) + 1);
    } else if (choices[i] === 6) {
      hash.set(splitSurvey[1], (hash.get(splitSurvey[1]) || 0) + 2);
    } else if (choices[i] === 7) {
      hash.set(splitSurvey[1], (hash.get(splitSurvey[1]) || 0) + 3);
    }
  }

  // 객체 배열화
  let surveyAndChoicesArr = [...hash];

  // 객체를 배열화 한것을 반복문을 돌며 같은 카테고리끼리 묶어줌;

  for (let j = 0; j < surveyAndChoicesArr.length; j++) {
    if (surveyAndChoicesArr[i][0] === "R") {
      rtArr.set("R", rtArr.get("R" || 0) + 1);
    } else if (surveyAndChoicesArr[i][0] === "T") {
      rtArr.set("T", rtArr.get("T" || 0) + 1);
    }
  }

  return surveyAndChoicesArr[0][0];
}

console.log(solution(survey, choices));

//앞에 있는 문자가 1, 2, 3  일때 각각 3, 2, 1의 점수를 얻음
//뒤에 있는 문자가 5, 6, 7  일때 각각 1, 2, 3의 점수를 얻음
// choices[i]가 4일때, 0임
