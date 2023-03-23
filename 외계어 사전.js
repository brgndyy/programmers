const spell = ["z", "d", "x"];
const dic = ["def", "dww", "dzx", "loveaw"];

function solution(spell, dic) {
  let answer;

  for (let i = 0; i < dic.length; i++) {

    let deleteDuplicationSize = new Set(dic[i]).size;

    if (spell.length > deleteDuplicationSize || spell.length > dic[i].length) {
      continue;
    }

    for(let j = 0; j < dic[i].length)
  }

  return answer ? 1 : 2;
}

console.log(solution(spell, dic));
