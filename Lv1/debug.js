const today = "2020.01.01";
const terms = ["Z 3", "D 5"];
const privacies = [
  "2019.01.01 D",
  "2019.11.15 Z",
  "2019.08.02 D",
  "2019.07.01 D",
  "2018.12.28 Z",
];

function solution(today, terms, privacies) {
  let nowTodayYear = Number(today.split(".")[0]);
  let nowTodayMonth = Number(today.split(".")[1]);
  let nowTodayDay = Number(today.split(".")[2]);

  var answer = [];

  // ['A', '6']
  // ['B', '12']
  // ['C', '3']
  let splitTerms = terms.map((term, index) => term.split(" "));

  [...privacies].forEach((privacy, index) => {
    let term = privacy.split(" ")[1]; // C
    let termTime = privacy.split(" ")[0]; // 2022.02.19

    let termYear = Number(termTime.split(".")[0]); // 2022
    let termMonth = Number(termTime.split(".")[1]); // 2
    let termDay = Number(termTime.split(".")[2]); // 19

    // [ 'C', '3' ]
    let filteredTerm = splitTerms.filter((splitTerm) => splitTerm[0] === term);

    let filteredTermMonthNum = Number(filteredTerm[0][1]); // 3

    let sumMonth = termMonth + filteredTermMonthNum; // 5
    let sumDay = termDay - 1; // 18

    if (sumMonth > 12) {
      termYear += 1; // 2020
      sumMonth -= 12; // 2
    }

    if (sumDay <= 0) {
      sumDay = 28; // 1
      sumMonth -= 1; // 1
    }

    if (termYear < nowTodayYear) {
      answer.push(index + 1);
    } else if (termYear === nowTodayYear && sumMonth < nowTodayMonth) {
      answer.push(index + 1);
    } else if (
      termYear === nowTodayYear &&
      sumMonth === nowTodayMonth &&
      sumDay < termDay
    ) {
      answer.push(index + 1);
    }
  });

  return answer;
}

console.log(solution(today, terms, privacies));
