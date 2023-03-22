const id_pw = ["programmer01", "15789"];
const db = [
  ["programmer02", "111111"],
  ["programmer00", "134"],
  ["programmer01", "1145"],
];

function solution(id_pw, db) {
  var answer = "";

  for (let i = 0; i < db.length; i++) {
    if (id_pw[0] === db[i][0] && id_pw[1] === db[i][1]) {
      return "login";
    } else if (id_pw[0] === db[i][0] && id_pw[1] !== db[i][1]) {
      answer = "wrong pw";
    } else {
      answer = "fail";
    }
  }

  return answer;
}

console.log(solution(id_pw, db));


function solution(id_pw, db) {
//     db = db.filter(v=>v[0]===id_pw[0]);

//     if (!db.length) return 'fail';

//     for (let d of db) if (d[1] === id_pw[1]) return 'login';

//     return 'wrong pw';
// }