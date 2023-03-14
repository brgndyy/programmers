const sides = [1, 2, 3];

function solution(sides) {
  var answer = 0;
  let sortNums = sides
    .sort((a, b) => {
      return b - a;
    }, 0)
    .splice(0, 1);

  let maxNum = sortNums[0];
  let sumNum = sides.reduce((a, b) => {
    return a + b;
  }, 0);

  maxNum < sumNum ? (answer = 1) : (answer = 2);

  return answer;
}

console.log(solution(sides));

// function solution(sides) {
//     sides = sides.sort((a,b) => a-b)
//     return sides[0]+sides[1] > sides[2] ? 1 : 2;
// }
