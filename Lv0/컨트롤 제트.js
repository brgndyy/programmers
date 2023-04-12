const s = "-1 -2 -3 Z";

function solution(s) {
  var answer = 0;
  let splitZ = s.split(" ");

  // 배열이 Z를 포함하고 있지 않다면
  if (!splitZ.includes("Z")) {
    answer = splitZ.reduce((a, b) => {
      return Number(a) + Number(b);
    }, 0);
  }

  for (let i = 0; i < splitZ.length; i++) {
    if (splitZ[i + 1] === "Z") {
      answer -= Number(splitZ[i]);
    } else {
      answer += Number(splitZ[i]);
    }
  }

  return answer;
}

console.log(solution(s));
