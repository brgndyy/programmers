const n = 78;

function solution(n) {
  let num = n + 1;

  let toTwo = n
    .toString(2)
    .split("")
    .filter((str) => str === "1").length;

  while (true) {
    let stringNum = num
      .toString(2)
      .split("")
      .filter((str) => str === "1").length;

    if (stringNum === toTwo) {
      break;
    } else {
      num++;
    }
  }

  return num;
}

console.log(solution(n));
