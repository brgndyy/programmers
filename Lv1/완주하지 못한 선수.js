const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion = ["josipa", "filipa", "marina", "nikola"];

function solution(participant, completion) {
  const sortPart = participant.sort(); // ['ana', 'mislav', 'mislav', 'stanko']
  const sortCom = completion.sort(); //     ['ana', 'mislav', 'stanko']

  let answer;

  for (let i = 0; i < sortPart.length; i++) {
    if (sortPart[i] !== sortCom[i]) {
      answer = sortPart[i];
      break;
    }
  }

  return answer;
}

console.log(solution(participant, completion));
