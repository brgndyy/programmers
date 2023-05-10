const sizes = [
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
];

function solution(sizes) {
  let newSizes = sizes.map((arr) =>
    arr[0] < arr[1] ? [arr[1], arr[0]] : [arr[0], arr[1]]
  );

  let wArr = [];
  let hArr = [];

  newSizes.forEach((arr) => {
    wArr.push(arr[0]);
    hArr.push(arr[1]);
  });

  return Math.max(...wArr) * Math.max(...hArr);
}

console.log(solution(sizes));
