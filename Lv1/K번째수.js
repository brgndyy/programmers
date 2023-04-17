const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    let [start, end, n] = commands[i];

    const spliced = array.slice(start - 1, end).sort((a, b) => a - b);

    answer.push(spliced[n - 1]);
  }

  return answer;
}

console.log(solution(array, commands));
