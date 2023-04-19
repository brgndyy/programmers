const sizes = [
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
];

const sizes2 = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];

function solution(sizes) {
  var answer = 0;

  let wArr = [];
  let hArr = [];

  sizes.forEach((arr) => {
    wArr.push(arr[0]);
    hArr.push(arr[1]);
  });

  let maxW = Math.max(...wArr); // 14
  let maxH = Math.max(...hArr); // 15

  wArr.indexOf(maxW); // 3
  hArr.indexOf(maxH); // 1

  return;
}

console.log(solution(sizes));
