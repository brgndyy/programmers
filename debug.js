const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];

function solution(players, callings) {
  for (let i = 0; i < callings.length; i++) {
    let index = players.indexOf(callings[i]); // 3
    let player = players.splice(index, 1); // 'kai'

    let slicePlayers = players.slice(index - 1); // 'poe', 'mine'

    let sumArr = [...player, ...slicePlayers];

    players.splice(index - 1); // 현재 players ['mumu', 'soe']

    players.push(...sumArr);
  }

  return players;
}

console.log(solution(players, callings));
