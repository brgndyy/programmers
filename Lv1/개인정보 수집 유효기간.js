const today = "2022.05.19";
const terms = ["A 6", "B 12", "C 3"];
const privacies = [
  "2021.07.01 A",
  "2021.07.01 B",
  "2022.02.19 C",
  "2022.02.20 C",
];

function solution(today, terms, privacies) {
  let todayDate = new Date(today);
  let answer = [];

  let newTerms = terms.map((arr) => {
    let type = arr.split(" ")[0];
    let num = Number(arr.split(" ")[1]);

    return [type, num];
  });

  privacies.forEach((str, index) => {
    let date = str.split(" ")[0];
    let privacyDate = new Date(date);
    let type = str.split(" ")[1];

    let termPeroid = newTerms.filter((arr) => arr[0] === type)[1]; //6

    privacyDate.setMonth(privacyDate.getMonth() + termPeroid);

    if (privacyDate <= todayDate) {
      answer.push(index + 1);
    }
  });

  return answer;
}

console.log(solution(today, terms, privacies));
