const food = [1, 7, 1, 2];

function solution(food) {
  var oneLine = "";

  const filterFood = food.filter((num) => num >= 2); // [7, 2];

  for (let i = 0; i < filterFood.length; i++) {
    let someFood = Math.floor(filterFood[i] / 2); // 1

    for (let j = 0; j < someFood; j++) {
      oneLine += food.indexOf(filterFood[i]).toString();
    }
  }

  return oneLine + "0" + oneLine.split("").reverse().join("");
}

console.log(solution(food));
