const number = 10;
const limit = 3;
const power = 2;

function solution(number, limit, power) {
  let measureArr = Array.from({length ; number}, (_, index) => index+1).forEach((num, index) => {
    
  });


  for (let k = 0; k < measureArr.length; k++) {
    if (measureArr[k] > limit) {
      measureArr[k] = power;
    }
  }

  return measureArr.reduce((a, b) => a + b, 0);
}

console.log(solution(number, limit, power));
