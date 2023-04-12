const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];

function solution(players, callings) {
  callings.forEach((name) => {
    let index = players.indexOf(name);

    let cutWord = players.splice(index, 1);

    let word = cutWord[0];

    players.splice(index - 1, 0, word);
  });

  return players;
}

console.log(solution(players, callings));
