const price = 580000;

function solution(price) {
  if (price >= 100000) {
    return price * 0.95;
  } else if (price >= 300000) {
    return price * 0.9;
  } else if (price >= 500000) {
    return price * 0.8;
  } else {
    return price;
  }
}

console.log(solution(price));
