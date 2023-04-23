const food = [1, 7, 2, 2];

function solution(food) {
  var oneLine = "";
  let hash = new Map();

  food.forEach((num, index) => hash.set(num, index + 1));

  return hash;
}

console.log(solution(food));
