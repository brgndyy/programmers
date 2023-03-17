const id_pw = ["meosseugi", "1234"];
const db = [
  ["rardss", "123"],
  ["yyoom", "1234"],
  ["meosseugi", "1234"],
];

function solution(id_pw, db) {
  let answer = "";
  const [id, pw] = id_pw;
  const idArr = [];
  const pwArr = [];

  for (let i = 0; i < db.length; i++) {
    idArr.push(db[i][0]);
    pwArr.push(db[i][1]);
  }

  if (
    idArr.includes(id) &&
    pwArr.includes(pw) &&
    idArr.indexOf(id) === pwArr.indexOf(pw)
  ) {
    return "login";
  } else if (
    idArr.includes(id) &&
    pwArr.includes(pw) &&
    idArr.indexOf(id) !== pwArr.indexOf(pw)
  ) {
    return "wrong pw";
  } else {
    return "fail";
  }
}

console.log(solution(id_pw, db));
