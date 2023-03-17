const id_pw = ["meosseugi", "1234"];
const db = [
  ["rardss", "123"],
  ["yyoom", "1234"],
  ["meosseugi", "1234"],
];

function solution(id_pw, db) {
  const [id, pw] = id_pw;

  for (let i = 0; i < db.length; i++) {
    if (id === db[i][0] && pw === db[i][1]) {
      return "login";
    } else if (id === db[i][0] && pw !== db[i][1]) {
      return "wrong pw";
    } else {
      return "fail";
    }
  }
}

console.log(solution(id_pw, db));
