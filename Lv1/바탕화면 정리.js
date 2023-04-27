const wallpaper = [
  ".##...##.",
  "#..#.#..#",
  "#...#...#",
  ".#.....#.",
  "..#...#..",
  "...#.#...",
  "....#....",
];

function solution(wallpaper) {
  let answer = [];
  let wallArr = [];

  [...wallpaper].forEach((wall, index) => {
    let splitWall = wall.split("");

    for (let i = 0; i < splitWall.length; i++) {
      if (splitWall[i] === "#") {
        wallArr.push([index, i]);
      }
    }
  });

  let wallWidhArr = [];
  let wallHeightArr = [];

  wallArr.forEach((arr) => {
    let [a, b] = [arr[0], arr[1]];
    wallWidhArr.push(a);
    wallHeightArr.push(b);
  });

  answer.push(
    Math.min(...wallWidhArr),
    Math.min(...wallHeightArr),
    Math.max(...wallWidhArr) + 1,
    Math.max(...wallHeightArr) + 1
  );

  return answer;
}

console.log(solution(wallpaper));
