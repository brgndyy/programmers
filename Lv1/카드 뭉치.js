const cards1 = ["i", "water", "drink"];
const cards2 = ["want", "to"];
const goal = ["i", "want", "to", "drink", "water"];

function solution(cards1, cards2, goal) {
  var answer = "";
  const card1Arr = goal.filter((str) => cards1.includes(str));
  const card2Arr = goal.filter((str) => cards2.includes(str));

  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < card1Arr.length; i++) {
    if (card1Arr[i] === cards1[i]) {
      arr1.push(card1Arr[i]);
    }
  }

  for (let j = 0; j < card2Arr.length; j++) {
    if (card2Arr[i] === cards2[i]) {
      arr2.push(card2Arr[i]);
    }
  }

  return card2Arr;
}

console.log(solution(cards1, cards2, goal));
