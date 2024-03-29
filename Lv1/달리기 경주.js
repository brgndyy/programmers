const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];

function solution(players, callings) {
  for (let i = 0; i < callings.length; i++) {
    let index = players.indexOf(callings[i]); // 3
    let player = players.splice(index, 1); // 'kai'

    let slicePlayers = player.slice(index - 1); // 'poe', 'mine'

    players.splice(index - 1); // 현재 players ['mumu', 'soe']

    players.concat(player).concat(slicePlayers);
  }

  return players;
}

console.log(solution(players, callings));

// 1. 인덱스를 먼저 찾는다
// 2. 그 인덱스를 요소를 잘라서 앞에 넣어준다 (?)
