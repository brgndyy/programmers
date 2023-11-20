function solution(brown, yellow) {
  const totalTileLength = brown + yellow;

  let index = [];

  for (let i = 1; i < totalTileLength; i++) {
    if (totalTileLength % i === 0) {
      let leftIndex = i;
      let rightIndex = totalTileLength / i;

      if (leftIndex > rightIndex) {
        index = [i, rightIndex];
      }
    }
  }

  return index;
}

console.log(solution(24, 24));
