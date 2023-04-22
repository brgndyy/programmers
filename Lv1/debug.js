const survey = ["AN", "CF", "MJ", "RT", "NA"];
const choices = [5, 3, 2, 7, 5];

function solution(survey, choices) {
  let answer = "";

  let rtArr = new Map();
  let cfArr = new Map();
  let jmArr = new Map();
  let anArr = new Map();

  rtArr.set("R", 0);
  rtArr.set("T", 0);
  cfArr.set("C", 0);
  cfArr.set("F", 0);
  jmArr.set("J", 0);
  jmArr.set("M", 0);
  anArr.set("A", 0);
  anArr.set("N", 0);

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
    if (surveyAndChoicesArr[j][0] === "R") {
      rtArr.set("R", rtArr.get("R" || 1) + surveyAndChoicesArr[j][1]);
    } else if (surveyAndChoicesArr[j][0] === "T") {
      rtArr.set("T", rtArr.get("T" || 1) + surveyAndChoicesArr[j][1]);
    } else if (surveyAndChoicesArr[j][0] === "C") {
      cfArr.set("C", cfArr.get("C" || 1) + surveyAndChoicesArr[j][1]);
    } else if (surveyAndChoicesArr[j][0] === "F") {
      cfArr.set("F", cfArr.get("F" || 1) + surveyAndChoicesArr[j][1]);
    } else if (surveyAndChoicesArr[j][0] === "J") {
      jmArr.set("J", jmArr.get("J" || 1) + surveyAndChoicesArr[j][1]);
    } else if (surveyAndChoicesArr[j][0] === "M") {
      jmArr.set("M", jmArr.get("M" || 1) + surveyAndChoicesArr[j][1]);
    } else if (surveyAndChoicesArr[j][0] === "A") {
      anArr.set("A", anArr.get("A" || 1) + surveyAndChoicesArr[j][1]);
    } else if (surveyAndChoicesArr[j][0] === "N") {
      anArr.set("N", anArr.get("N" || 1) + surveyAndChoicesArr[j][1]);
    }
  }

  function getKeyWithHighestValue(map) {
    let highestValue = -Infinity;
    let highestKey;

    map.forEach((value, key) => {
      if (
        value > highestValue ||
        (value === highestValue && key < highestKey)
      ) {
        highestValue = value;
        highestKey = key;
      }
    });

    return highestKey;
  }

  answer += getKeyWithHighestValue(rtArr);
  answer += getKeyWithHighestValue(cfArr);
  answer += getKeyWithHighestValue(jmArr);
  answer += getKeyWithHighestValue(anArr);

  return answer;
}

console.log(solution(survey, choices));
