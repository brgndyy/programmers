const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];

function solution(players, callings) {
  callings.forEach((name) => {
    let index = players.indexOf(name);

    let cutWord = players.splice(index, 1);

    players.splice(index - 1, 0, name);
  });

  return players;
}

console.time("test");

solution(players, callings);

console.timeEnd("test");

// 1. 인덱스를 먼저 찾는다
// 2. 그 인덱스를 요소를 잘라서 앞에 넣어준다 (?)
