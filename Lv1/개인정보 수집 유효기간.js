const today = "2022.05.19";
const terms = ["A 6", "B 12", "C 3"];
const privacies = [
  "2021.07.01 A",
  "2021.07.01 B",
  "2022.02.19 C",
  "2022.02.20 C",
];

function solution(today, terms, privacies) {
  var answer = [];

  let termsMap = new Map();
  let todayDate = today.split(".").map((str) => Number(str));

  let [todayYear, todayMonth, todayDay] = [
    todayDate[0],
    todayDate[1],
    todayDate[2],
  ];

  // 약관 기간 설정해주기
  terms.map((terms) => {
    let [termSplit, peroid] = [
      terms.split(" ")[0],
      Number(terms.split(" ")[1]),
    ];

    termsMap.set(termSplit, peroid);
  });

  for (let i = 0; i < privacies.length; i++) {
    let date = privacies[i].split(" ")[0].split(".");
    let termType = privacies[i].split(" ")[1];
  }

  return todayMonth;
}

console.log(solution(today, terms, privacies));
