const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];

function solution(players, callings) {
  const hash = new Map();

  // Map 객체에 넣어주기
  players.forEach((member, index) => {
    hash.set(member, index);
  });

  callings.forEach((member) => {
    // callings에 있는 현재 선수 인덱스 (3)
    const curIndex = hash.get(member);

    // callings에 있는 선수 앞에 있는 선수
    const prevMember = players[curIndex - 1];

    [players[curIndex], players[curIndex - 1]] = [
      players[curIndex - 1],
      players[curIndex],
    ];

    hash.set(member, hash.get(member) - 1);
    hash.set(prevMember, hash.get(member) + 1);
  });

  return players;
}

console.log(solution(players, callings));
