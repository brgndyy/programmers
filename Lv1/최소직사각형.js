const sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];

function solution(sizes) {
  let newSizes = sizes.map((arr) => {
    if (arr[0] > arr[1]) {
      return arr;
    } else {
      let shift = arr.shift();
      arr.push(shift);

      return arr;
    }
  });

  let W = [];
  let H = [];

  newSizes.forEach((arr) => {
    W.push(arr[0]);
    H.push(arr[1]);
  });

  return Math.max(...W) * Math.max(...H);
}

console.log(solution(sizes));
