let chicken = 1081;

function solution(chicken) {
  var answer = 0;

  let result = 0;
  let some = 0;

  while (chicken >= 1) {
    some += chicken % 10;
    chicken = Math.floor(chicken / 10); // 1

    result += chicken; // 119

    if (some >= 10) {
      result += Math.floor(some / 10);
    }
  }
  return result;
}

console.log(solution(chicken));
