const s = "-1 -2 -3 Z";

function solution(s) {
  var answer = 0;
  let splitZ = s.split(" ");

  if (!splitZ.includes("Z")) {
    answer = splitZ.reduce((a, b) => {
      return Number(a) + Number(b);
    }, 0);
  } else {
    for (let i = 0; i < splitZ.length; i++) {
      if (splitZ[i + 1] === "Z") {
        splitZ.splice(i, 2);
        i--;
      } else {
        answer += Number(splitZ[i]);
      }
    }
  }

  return answer;
}

console.log(solution(s));
