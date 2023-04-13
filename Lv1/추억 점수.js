const name = ["may", "kein", "kain", "radi"];
const yearning = [5, 10, 1, 3];
const photo = [["may"], ["kein", "deny", "may"], ["kon", "coni"]];

function solution(name, yearning, photo) {
  let answer = [];
  let map = new Map();

  for (let i = 0; i < name.length; i++) {
    map.set(name[i], yearning[i]);
  }

  for (let i = 0; i < photo.length; i++) {
    let count = 0;
    for (let j = 0; j < photo[i].length; j++) {
      const score = map.get(photo[i][j]);

      if (!score) {
        continue;
      }
      count += score;
    }
    answer.push(count);
  }

  return answer;
}

console.log(solution(name, yearning, photo));
