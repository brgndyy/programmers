const numer1 = 1;
const denom1 = 2;
const numer2 = 3;
const denom2 = 4;

function solution(numer1, denom1, numer2, denom2) {
  var answer = [];

  if (denom2 % denom1 === 0) {
    let 곱몫 = denom2 / denom1;
    numer1 = numer1 * 곱몫;
    answer.push(numer1 + numer2, denom2);
  } else if (denom1 % denom2 === 0) {
    let 곱몫 = denom1 / denom2;
    numer2 = numer2 * 곱몫;

    answer.push(numer1 + numer2, denom1);
  } else {
    let denom = denom1 * denom2;

    let denom1분모 = numer1 * (denom / denom1);
    let denom2분모 = numer2 * (denom / denom2);

    answer.push(denom1분모 + denom2분모, denom);
  }

  return answer;
}

console.log(solution(numer1, denom1, numer2, denom2));
