const today = "2022.05.19";
const terms = ["A 6", "B 12", "C 3"];
const privacies = [
  "2021.05.02 A",
  "2021.07.01 B",
  "2022.02.19 C",
  "2022.02.20 C",
];

function solution(today, terms, privacies) {
  var answer = [];

  // ['A', '6']
  // ['B', '12']
  // ['C', '3']
  let splitTerms = terms.map((term) => term.split(" "));

  [...privacies].forEach((privacy, index) => {
    let term = privacy.split(" ")[1]; // A

    let filteredTerm = splitTerms.filter((splitTerm) => splitTerm[0] === term);

    answer.push(filteredTerm);
  });

  return answer;
}

console.log(solution(today, terms, privacies));
